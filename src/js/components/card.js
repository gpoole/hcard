import React from "react";

export class Card extends React.Component {

	render() {
		return <div className="vcard card">
			<div className="card-headline">
				<span className="fn card-title">{this.props.givenName} {this.props.surname}</span>
				<img src={this.props.image} className="photo card-photo" />
			</div>
			<div className="card-body">
				<span className="card-line">
					<span className="card-label">Email</span>
					<span className="card-field email">{this.props.email}</span>
				</span>
				<span className="card-line">
					<span className="card-label">Phone</span>
					<span className="card-field tel">{this.props.phone}</span>
				</span>
				<span class="adr">
					<span className="card-line">
						<span className="card-label">Address</span>
						<span className="card-field street-address">{this.props.house} {this.props.street}</span>
					</span>
					<span className="card-line no-label">
						<span className="card-field">
							<span className="locality">{this.props.suburb}</span>{this.props.suburb && this.props.state ? ', ' : ''}
							<span className="region">{this.props.state}</span>
						</span>
					</span>
					<span className="card-line short-field">
						<span className="card-label">Postcode</span>
						<span className="card-field postal-code">{this.props.postcode}</span>
					</span>
					<span className="card-line short-field">
						<span className="card-label">Country</span>
						<span className="card-field country-name">{this.props.country}</span>
					</span>
				</span>
			</div>
		</div>;
	}

}