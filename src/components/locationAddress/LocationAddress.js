import React from "react";
import InlineCss from "react-inline-css";
const stylesheet = require("!raw!sass!./LocationAddress.scss");

class LocationAddress extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		return (
			<InlineCss componentName="LocationAddress" stylesheet={stylesheet}>
				<address class="components-outlet-item-address-basic outlet__container__leftbar__menu__item__address">
					<div class="components-outlet-item-address-basic__line">
						{this.props.address.address1}

						<br />{this.props.address.address2}
					</div>

					<div class="components-outlet-item-address-basic__line">
						<span>
							{this.props.address.zipCode}
						</span>

						<span>
							{this.props.address.city}
						</span>
					</div>
				</address>
			</InlineCss>
		);
	}
}


LocationAddress.propTypes = {
	address: React.PropTypes.object.isRequired
};

export default LocationAddress;
