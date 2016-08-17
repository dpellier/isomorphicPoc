import React from "react";
import InlineCss from "react-inline-css";
const stylesheet = require("!raw!sass!./MajorLocations.scss");

import Location from './location/Location';

class MajorLocations extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		return (
			<InlineCss componentName="MajorLocations" stylesheet={stylesheet}>
				<div className="components-major-location-list-basic hidden-print">
					<h2 className="components-major-location-list-basic__title h2">
						<span className="components-major-location-list-basic__title__span">
							Retrouvez tous nos magasins à proximité de ces grandes villes
						</span>
					</h2>

					<div className="row">
						{this.props.locations.map((location) =>
							<div className="components-major-location-list-basic__column col-xs-6 col-sm-6 col-md-4 col-lg-3">
								<Location location={location}></Location>
							</div>
						)}
					</div>
				</div>
			</InlineCss>
		);
	}
}

MajorLocations.propTypes = {
	locations: React.PropTypes.array.isRequired
};

export default MajorLocations;
