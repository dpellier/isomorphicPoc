import React from 'React';
import InlineCss from "react-inline-css";
const stylesheet = require("!raw!sass!./Country.scss");

class Country extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		return (
			<InlineCss componentName="Country" stylesheet={stylesheet}>
				<div className="components-form-search-country-selector form-group form-group-lg">
					<label for="country" className="sr-only">
						Sélectionner un pays...
					</label>

					<select id="country"
							name="country"
							className="form-control components-form-search-country-selector__select"
							title="Sélectionner un pays..."
							data-lf-country-selector
							data-lf-selectpicker>
						<option value="">
							Sélectionner un pays...
						</option>

						{this.props.countries.map((country) =>
							<option value={country.code}>{country.name}</option>
						)}
					</select>
				</div>
			</InlineCss>
		);
	}
}

Country.propTypes = {
	countries: React.PropTypes.array.isRequired
};

export default Country;
