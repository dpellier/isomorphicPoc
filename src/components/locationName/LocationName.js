import React from "react";
import InlineCss from "react-inline-css";
const stylesheet = require("!raw!sass!./LocationName.scss");

class LocationName extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		return (
			<InlineCss componentName="LocationName" stylesheet={stylesheet}>
				<div className="components-outlet-item-name-basic">
					<h1 className="components-outlet-item-name-basic__title h1">
						<span className="components-outlet-item-name-basic__title__span">
							{this.props.name}
						</span>
					</h1>
				</div>
			</InlineCss>
		);
	}
}


LocationName.propTypes = {
	name: React.PropTypes.string.isRequired
};

export default LocationName;
