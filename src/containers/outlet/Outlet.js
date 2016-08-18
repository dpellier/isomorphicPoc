import React from 'react';
import InlineCss from "react-inline-css";
const stylesheet = require("!raw!sass!./Outlet.scss");

import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Header from '../../components/header/Header';
import LocationAddress from '../../components/locationAddress/LocationAddress';
import LocationName from '../../components/locationName/LocationName';

class Outlet extends React.Component {
	constructor(props) {
		super(props);

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
					</div>
				</div>
			</InlineCss>
		);
	}
}

export default Outlet;
