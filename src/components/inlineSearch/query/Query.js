import React from 'react';
import InlineCss from "react-inline-css";
const stylesheet = require("!raw!sass!./Query.scss");

class Query extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<InlineCss componentName="Query" stylesheet={stylesheet}>
				<div className="components-form-search-query-basic typeahead-container">
					<span className="components-form-search-query-basic__typeahead typeahead-query">
						<label for="query" className="sr-only">
							Rechercher
						</label>

						<input type="text"
							   id="query"
							   name="query"
							   className="components-form-search-query-basic__typeahead__input form-control"
							   placeholder="Ville, Code postal, ..."
							   value=""
							   autocomplete="off"
							   data-placement="top"
							   data-content="<small>Veuillez choisir un pays et saisir des mots-clés dans le champ de recherche.</small>"
							   data-lf-form-search-query />
					</span>
				</div>
			</InlineCss>
		);
	}
}

export default Query
