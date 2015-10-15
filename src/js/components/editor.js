import { TextField } from './text-field';
import React from 'react';

export class Editor extends React.Component {
	render() {
		return (
			<form>
				<h2>hCard Builder</h2>
				<fieldset>
					<legend>Personal details</legend>
					<TextField name="givenName" placeholder="Sam" label="Given name" />
					<TextField name="surname" placeholder="Fairfax" label="Surname" />
					<TextField name="email" placeholder="sam.fairfax@fairfaxmedia.com.au" label="Email" pattern={/^[^@]+@[^\.]+\./} />
					<TextField  name="phone" placeholder="00 0000 0000" label="Phone" />
				</fieldset>
				<fieldset>
					<legend>Address</legend>
					<TextField name="house" placeholder="Sam" label="House name or #" />
					<TextField name="street" placeholder="Sam" label="Street" />
					<TextField name="suburb" placeholder="Sam" label="Suburb" />
					<TextField name="state" placeholder="Sam" label="State" />
					<TextField name="postcode" placeholder="Sam" label="Postcode" />
					<TextField name="country" placeholder="Sam" label="Country" />
				</fieldset>
				<button className="btn btn-default">Upload avatar</button>
				<button className="btn btn-primary">Create hCard</button>
			</form>
		);
	}
}