import { Editor } from "./editor";
import { Card } from "./card";
import React from "react";

export class Builder extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	handleChanged(field, value) {
		this.setState({ [ field ]: value });
	}

	render() {
		return <div>
				<Editor onChanged={this.handleChanged.bind(this)} />
				<Card givenName={this.state.givenName} surname={this.state.surname} />
			</div>;
	}

}