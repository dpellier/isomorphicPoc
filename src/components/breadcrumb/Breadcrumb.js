import React from "react";
import InlineCss from "react-inline-css";
const stylesheet = require("!raw!sass!./Breadcrumb.scss");

class Breadcrumb extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		return (
			<InlineCss componentName="Breadcrumb" stylesheet={stylesheet}>
				<ol className="components-navigation-breadcrumb-basic hidden-print">
					{this.props.items.map((item, idx) => {
						if (idx === 0) {
							return (
									<li className="components-navigation-breadcrumb-basic__item">
										<a className="components-navigation-breadcrumb-basic__item__link"
										   href="www.optical-center.fr">
											<em className="components-navigation-breadcrumb-basic__item__link__title bridge-icon-home"></em>
										</a>
									</li>
							);
						} else if (idx === this.props.items.length - 1) {
							return (
								<li className="active components-navigation-breadcrumb-basic__item components-navigation-breadcrumb-basic__item--active">
									<a className="components-navigation-breadcrumb-basic__item__link"
									   href="/">
										<span className="components-navigation-breadcrumb-basic__item__link__title">
											{item.text}
										</span>
									</a>
								</li>
							);
						} else {
							return (
								<li className="components-navigation-breadcrumb-basic__item">
									<a className="components-navigation-breadcrumb-basic__item__link"
									   href="/">
										{item.text}
									</a>
								</li>
							);
						}
					})}
				</ol>
			</InlineCss>
		);
	}
}

Breadcrumb.propTypes = {
	items: React.PropTypes.array.isRequired
};

export default Breadcrumb;
