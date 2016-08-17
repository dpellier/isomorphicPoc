import React from "react";
import InlineCss from "react-inline-css";
const stylesheet = require("!raw!sass!./Copyright.scss");

class Copyright extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<InlineCss componentName="Copyright" stylesheet={stylesheet}>
				<div className="components-copyright-basic pull-right">
					<a href="http://www.leadformance.com"
					   className="components-copyright-basic__link"
					   title="Store Locator par BRIDGE"
					   rel="nofollow"
					   data-lf-tracking='{"bind":"click","category":"Bridge Copyright"}'>
						Store Locator par
						<strong>
							BRIDGE<em className="components-copyright-basic__icon bridge-icon-bridge"></em>
						</strong>
					</a>
				</div>
			</InlineCss>
		);
	}
}

export default Copyright;
