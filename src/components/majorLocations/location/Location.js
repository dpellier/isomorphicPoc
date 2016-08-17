import React from "react";
import InlineCss from "react-inline-css";
const stylesheet = require("!raw!sass!./Location.scss");

class Location extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		return (
			<InlineCss componentName="Location" stylesheet={stylesheet}>
				<div className="components-major-location-item-basic">
					<h2 className="components-major-location-item-basic__name h4">
						<a href={this.props.location.url}
						   className="components-major-location-item-basic__name__link">
							{this.props.location.label}
						</a>
					</h2>

					<ul className="components-major-location-item-basic__cities">
						{this.props.location.cities.map((city) =>
							<li className="components-major-location-item-basic__cities__city">
								<a href={city.url}
								   className="components-major-location-item-basic__cities__city__link">
									{city.label}
								</a>
							</li>
						)}
					</ul>
				</div>
			</InlineCss>
		);
	}
}

Location.propTypes = {
	location: React.PropTypes.object.isRequired
};

export default Location;
