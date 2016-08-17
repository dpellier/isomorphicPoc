import React from 'React';
import InlineCss from "react-inline-css";
const stylesheet = require("!raw!sass!./Submit.scss");

class Submit extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<InlineCss componentName="Submit" stylesheet={stylesheet}>
				<button type="submit"
						className="btn btn-primary components-form-search-submit-basic"
						title="Envoyer">
					<em className="components-form-search-submit-basic__icon bridge-icon-search"
						aria-label="Envoyer"
						title="Envoyer">
					</em>

					<span className="components-form-search-submit-basic__label visible-xs-inline">
						Envoyer
					</span>
				</button>
			</InlineCss>
		);
	}
}

export default Submit;
