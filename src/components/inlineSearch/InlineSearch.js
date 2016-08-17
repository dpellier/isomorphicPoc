import React from 'react';
import InlineCss from "react-inline-css";
const stylesheet = require("!raw!sass!./InlineSearch.scss");

import Country from './country/Country';
import Geolocation from './geolocation/Geolocation';
import Query from './query/Query';
import SelectPicker from './selectPicker/SelectPicker';
import Submit from './submit/Submit';

class InlineSearch extends React.Component {
	constructor(props) {
		super(props);

		this.countries = [
			{code: 'be', name: 'Belgique'},
			{code: 'es', name: 'Espagne'},
			{code: 'fr', name: 'France', selected: true},
			{code: 'gp', name: 'Guadeloupe'},
			{code: 're', name: 'La Réunion'},
			{code: 'lu', name: 'Luxembourg'},
			{code: 'mq', name: 'Martinique'},
			{code: 'ch', name: 'Suisse'}
		];

		this.filters = [];
	}

	render() {
		return (
			<InlineCss componentName="InlineSearch" stylesheet={stylesheet}>
				<div className="hidden-print components-form-search-inline components-form-search-inline--3">
					<form action="/search"
						  method="GET"
						  data-disable="false"
						  autocomplete="off"
						  data-lf-form-search
						  data-lf-tracking='{"bind":"submit","category":"Search"}'>
						<div className="input-group components-form-search-inline__input-group input-group-lg components-form-search-inline__input-group--lg">
							<div className="input-group-btn components-form-search-inline__input-group__geolocation">
								<Geolocation></Geolocation>
							</div>

							<div className="components-form-search-inline__input-group__query form-group form-group-lg">
								<div className="components-form-search-inline__input-group__query__input">
									<Query></Query>
								</div>

								<div className="components-form-search-inline__input-group__query__country">
									<Country countries={this.countries}></Country>
								</div>

								<div className="components-form-search-inline__input-group__query__filter">
									<SelectPicker filters={this.filters}></SelectPicker>
								</div>
							</div>

							<div className="input-group-btn components-form-search-inline__input-group__submit">
								<Submit></Submit>
							</div>
						</div>
					</form>
				</div>
			</InlineCss>
		);
	}
}

export default InlineSearch
