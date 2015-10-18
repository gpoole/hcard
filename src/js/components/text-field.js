import React from 'react';

/**
 * Provides a text input field, including a label, placeholder text, validation and change handling.
 */
export class TextField extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			// We track the value of changed for validation; if the user hasn't changed the field
			// it's not strictly invalid until they either touch the field or try to submit the form.
			changed: !!props.value
		};
	}

	isValid() {
		if(!this.props.value) {
			return false;
		}

		if(this.props.pattern) {
			return this.props.value.match(this.props.pattern);
		}

		return true;
	}

	handleChange(event) {
		// The user's touched the component, so record we record that so we know validation should be applied
		this.setState({
			changed: true
		});

		// Pass the change on to the parent to handle, as we don't record the value internally.
		if(typeof this.props.onChanged == "function") {
			this.props.onChanged(this, this.props.name, event.target.value);
		}
	}

	render() {
		let className = [ "form-group" ];
		if(!this.isValid() && this.state.changed) {
			className.push("has-error");
		}
		className.push(this.props.className);
		className = className.join(" ");

		return (
			<div className={className}>
				<label className="control-label" htmlFor={this.props.name}>{this.props.label}</label>
				<input className="form-control" type="text" value={this.props.value} name={this.props.name} placeholder={this.props.placeholder} onChange={this.handleChange.bind(this)} />
			</div>
		);
	}
}