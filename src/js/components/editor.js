import { TextField } from './text-field';
import React from 'react';

export class Editor extends React.Component {
	render() {
		return (
			<form>
				<h2>hCard Builder</h2>
				<fieldset>
					<legend>Personal details</legend>
					<div className="input-set">
						<TextField name="givenName" placeholder="First" label="Given name" className="short-input" />
						<TextField name="surname" placeholder="Last" label="Surname" className="short-input" />
						<TextField name="email" placeholder="email@domain.com" label="Email" pattern={/^[^@]+@[^\.]+\./} className="short-input" />
						<TextField  name="phone" placeholder="00 0000 0000" label="Phone" className="short-input" />
					</div>
				</fieldset>
				<fieldset>
					<legend>Address</legend>
					<div className="input-set">
						<TextField name="house" placeholder="#" label="House name or #" className="short-input" />
						<TextField name="street" placeholder="Street name" label="Street" className="short-input" />
						<TextField name="suburb" placeholder="Suburb" label="Suburb" className="short-input" />
						<TextField name="state" placeholder="State" label="State" className="short-input" />
						<TextField name="postcode" placeholder="0000" label="Postcode" className="short-input" />
						<TextField name="country" placeholder="Country" label="Country" className="short-input" />
					</div>
				</fieldset>
				<button className="btn btn-default">Upload avatar</button>
				<button className="btn btn-primary">Create hCard</button>
			</form>
		);
	}
}