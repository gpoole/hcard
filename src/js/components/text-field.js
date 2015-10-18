import React from 'react';

export class TextField extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
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
		this.setState({
			changed: true
		});
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