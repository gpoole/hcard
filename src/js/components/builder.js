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
		return <div className="row">
				<div className="col-md-6 app-editor">
					<Editor onChange={this.handleChanged.bind(this)} {...this.state} />
				</div>
				<div className="col-md-6 app-preview">
					<h2 className="card-preview-title">hCard Preview</h2>
					<Card {...this.state} />
				</div>
			</div>;
	}

}