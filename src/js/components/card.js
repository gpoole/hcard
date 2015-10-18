import React from "react";

export class Card extends React.Component {

	render() {
		return <div className="vcard">
			<span className="fn">{this.props.givenName} {this.props.surname}</span>
		</div>;
	}

}