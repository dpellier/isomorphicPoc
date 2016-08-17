import React from 'react';
import InlineCss from "react-inline-css";
const stylesheet = require("!raw!sass!./SelectPicker.scss");

class SelectPicker extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		return (
			<InlineCss componentName="SelectPicker" stylesheet={stylesheet}>
				<div className="components-form-search-filter-selectpicker">
					<label for="filter_TYPOLOGIE"
						   className="sr-only components-form-search-filter-selectpicker__label">
						Typologie magasin
					</label>

					<select id="filter_TYPOLOGIE"
							name="st_any[TYPOLOGIE][]"
							className="form-control components-form-search-filter-selectpicker__select"
							data-width="100%"
							data-size="10"
							multiple
							title="Typologie magasin"
							data-lf-selectpicker>

						{this.props.filters.map((filter) =>
							<option className="components-form-search-filter-selectpicker__select__option"
									value={filter.value}>
								{filter.label}
							</option>
						)}
					</select>
				</div>
			</InlineCss>
		);
	}
}

SelectPicker.propTypes = {
	filters: React.PropTypes.array.isRequired
};

export default SelectPicker;
