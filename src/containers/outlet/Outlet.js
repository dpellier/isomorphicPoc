import React from 'react';
import InlineCss from "react-inline-css";
import Transmit from "react-transmit";
const stylesheet = require("!raw!sass!./Outlet.scss");

import githubApi from "../../apis/github";
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Header from '../../components/header/Header';
import LocationAddress from '../../components/locationAddress/LocationAddress';
import LocationName from '../../components/locationName/LocationName';

class Outlet extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;

		this.breadcrumb = [
			{text: 'home'},
			{text: 'Localiser un magasin'},
			{text: 'Lëtzebuerg'},
			{text: 'Optical Center ESCH SUR ALZETTE'}
		];

		this.name = 'Optical Center ESCH SUR ALZETTE';
		this.address = {
			address1: '5, rue de Portland',
			address2: 'Parc résidentiel « Nei Esch »',
			city: 'ESCH SUR ALZETTE',
			zipCode: 'L-4281'
		}
	}

	render() {
		let {stargazers, additionalStargazers} = this.props;

		if (additionalStargazers) {
			stargazers = stargazers.concat(additionalStargazers);
		}

		const avatarUrl = (id = 0, avatarSize = 32) => `https://avatars.githubusercontent.com/u/${id}?v=3&s=${avatarSize}`;

		return (
			<InlineCss componentName="Outlet" stylesheet={stylesheet}>
				<Header></Header>

				<div className="outlet">
					<div className="hidden-print outlet__nav">
						<div className="container">
							<div className="row">
								<div className="col-sm-12 hidden-xs">
									<div className="outlet__nav__breadcrumb">
										<Breadcrumb items={this.breadcrumb}></Breadcrumb>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="container">
						<div className="row">
							<div className="col-xs-12">
								<div className="outlet__container">
									<div id="tabs-trigger-fixed-start"></div>

									<div className="outlet__container__leftbar" data-lf-tabs>
										<div className="outlet__container__leftbar__title">
											<LocationName name={this.name}></LocationName>
										</div>

										<div className="clear"></div>

										<div className="outlet__container__leftbar__menu">

											<div className="outlet__container__leftbar__menu__item">

												<LocationAddress address={this.address}></LocationAddress>

												<button className="hidden-print outlet__container__leftbar__menu__item__action btn btn-default">
													Contactez-nous
												</button>

												<button className="hidden-print outlet__container__leftbar__menu__item__action btn btn-default">
													Newsletter
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="row" style={{marginTop: '80px', marginLeft: '300px'}}>
							<div className="col-xs-12">
								{stargazers && stargazers.map(user =>
									<img src={avatarUrl(user.id)} height="32" width="32" />
								)}
							</div>
						</div>
					</div>
				</div>
			</InlineCss>
		);
	}

	componentDidUpdate (prevProps, prevState) {
		if (!this.props.additionalStargazers) {
			return;
		}

		this.loadMoreStargazersOnClient();
	}

	/**
	 * Load more stargazers.
	 */
	loadMoreStargazersOnClient () {
		const {additionalStargazers = [], transmit} = this.props;
		let {nextPage, pagesToFetch} = transmit.variables;

		if (--pagesToFetch <= 0) {
			return;
		}

		++nextPage;

		transmit.forceFetch({
			nextPage,
			pagesToFetch,
			additionalStargazers
		}, "additionalStargazers");
	}
}

const fetchStargazers  = (page, per_page = 100) => {
	return githubApi.browse(
		["repos", "RickWong/react-isomorphic-starterkit", "stargazers"],
		{ query: { page, per_page } }
	).then(json => {
		return (json || []).map(({id, login}) => ({id, login}));
	}).catch(error => {
		throw error;
	});
};

//export default Outlet;
export default Transmit.createContainer(Outlet, {
	initialVariables: {
		nextPage:       2,
		pagesToFetch:   15,
		additionalStargazers: []
	},
	fragments: {
		/**
		 * Load first stargazers.
		 */
		stargazers: () => fetchStargazers(1),
		/**
		 * Load more stargazers deferred.
		 */
		additionalStargazers: ({nextPage, additionalStargazers}) => {
			return () => fetchStargazers(nextPage).then(newStargazers => {
				newStargazers = newStargazers.map(({id, login}) => {
					return { id, login };
				});

				return additionalStargazers.concat(newStargazers);
			});
		}
	}
});
