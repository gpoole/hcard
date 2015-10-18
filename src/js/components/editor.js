import { TextField } from './text-field';
import React from 'react';

export class Editor extends React.Component {

	handleChanged(field, name, value) {
		if(typeof this.props.onChanged == "function") {
			this.props.onChanged(name, value);
		}
	}

	render() {
		return (
			<form>
				<h2>hCard Builder</h2>
				<fieldset>
					<legend>Personal details</legend>
					<div className="input-set">
						<TextField name="givenName" onChanged={this.handleChanged.bind(this)} placeholder="First" label="Given name" className="short-input" />
						<TextField name="surname" onChanged={this.handleChanged.bind(this)} placeholder="Last" label="Surname" className="short-input" />
						<TextField name="email" onChanged={this.handleChanged.bind(this)} placeholder="email@domain.com" label="Email" pattern={/^[^@]+@[^\.]+\./} className="short-input" />
						<TextField name="phone" onChanged={this.handleChanged.bind(this)} placeholder="00 0000 0000" label="Phone" className="short-input" />
					</div>
				</fieldset>
				<fieldset>
					<legend>Address</legend>
					<div className="input-set">
						<TextField name="house" onChanged={this.handleChanged.bind(this)} placeholder="#" label="House name or #" className="short-input" />
						<TextField name="street" onChanged={this.handleChanged.bind(this)} placeholder="Street name" label="Street" className="short-input" />
						<TextField name="suburb" onChanged={this.handleChanged.bind(this)} placeholder="Suburb" label="Suburb" className="short-input" />
						<TextField name="state" onChanged={this.handleChanged.bind(this)} placeholder="State" label="State" className="short-input" />
						<TextField name="postcode" onChanged={this.handleChanged.bind(this)} placeholder="0000" label="Postcode" className="short-input" />
						<TextField name="country" onChanged={this.handleChanged.bind(this)} placeholder="Country" label="Country" className="short-input" />
					</div>
				</fieldset>
				<button className="btn btn-default">Upload avatar</button>
				<button className="btn btn-primary">Create hCard</button>
			</form>
		);
	}
}