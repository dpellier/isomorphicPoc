import React from 'React';
import InlineCss from "react-inline-css";
const stylesheet = require("!raw!sass!./Geolocation.scss");

class Geolocation extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<InlineCss componentName="Geolocation" stylesheet={stylesheet}>
				<button type="button"
						className="btn btn-primary components-form-search-geolocation-basic"
						data-lf-search-geolocation
						data-lf-tracking='{"bind":"click","category":"Geolocation"}'>
					<em className="components-form-search-geolocation-basic__icon bridge-icon-target"
						aria-label="Se géolocaliser"
						title="Se géolocaliser">
					</em>

					<span className="components-form-search-geolocation-basic__label visible-xs-inline">
						Se géolocaliser
					</span>
				</button>
			</InlineCss>
		);
	}
}

export default Geolocation
