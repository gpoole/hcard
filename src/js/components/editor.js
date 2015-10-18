import { TextField } from './text-field';
import { ImageField } from './image-field';
import React from 'react';

/**
 * Component to manage the editable fields of the hCard and pass changes to the main Builder component.
 */
export class Editor extends React.Component {

	handleChanged(field, name, value) {
		// We dont' actually do anything when properties change other than pass the change on to the parent.
		// We expect the parent to handle the change however it wants and then tell us to update.
		if(typeof this.props.onChange == "function") {
			this.props.onChange(name, value);
		}
	}

	handleImageSelected(field, url) {
		// As with handleChanged (see above)
		if(typeof this.props.onChange == "function") {
			this.props.onChange("image", url);
		}
	}

	render() {
		return (
			<form>
				<fieldset>
					<legend>Personal details</legend>
					<div className="input-set">
						<TextField name="givenName" value={this.props.givenName} onChanged={this.handleChanged.bind(this)} placeholder="First" label="Given name" className="short-input" />
						<TextField name="surname" value={this.props.surname} onChanged={this.handleChanged.bind(this)} placeholder="Last" label="Surname" className="short-input" />
						<TextField name="email" value={this.props.email} onChanged={this.handleChanged.bind(this)} placeholder="email@domain.com" label="Email" pattern={/^[^@]+@[^\.]+\./} className="short-input" />
						<TextField name="phone" value={this.props.phone} onChanged={this.handleChanged.bind(this)} placeholder="00 0000 0000" label="Phone" className="short-input" />
					</div>
				</fieldset>
				<fieldset>
					<legend>Address</legend>
					<div className="input-set">
						<TextField name="house" value={this.props.house} onChanged={this.handleChanged.bind(this)} placeholder="#" label="House name or #" className="short-input" />
						<TextField name="street" value={this.props.street} onChanged={this.handleChanged.bind(this)} placeholder="Street name" label="Street" className="short-input" />
						<TextField name="suburb" value={this.props.suburb} onChanged={this.handleChanged.bind(this)} placeholder="Suburb" label="Suburb" className="short-input" />
						<TextField name="state" value={this.props.state} onChanged={this.handleChanged.bind(this)} placeholder="State" label="State" className="short-input" />
						<TextField name="postcode" value={this.props.postcode} onChanged={this.handleChanged.bind(this)} placeholder="0000" label="Postcode" className="short-input" />
						<TextField name="country" value={this.props.country} onChanged={this.handleChanged.bind(this)} placeholder="Country" label="Country" className="short-input" />
					</div>
				</fieldset>
				<ImageField className="btn btn-default button-upload-avatar" onImageChange={this.handleImageSelected.bind(this)}>Upload avatar</ImageField>
				<button className="btn btn-primary button-create">Create hCard</button>
			</form>
		);
	}
}