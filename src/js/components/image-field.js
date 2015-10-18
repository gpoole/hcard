import React from "react";
import ReactDOM from "react-dom";

export class ImageField extends React.Component {

	fileChanged(event) {
		if(typeof this.props.onImageChange != "function") {
			return;
		}

		let input = event.target;
		if(input.files.length == 0) {
			return;
		}

		let file = input.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			this.props.onImageChange(this, reader.result);
		};
	}

	selectFile(event) {
		event.preventDefault();
		let input = ReactDOM.findDOMNode(this).querySelector("input[type=file]");
		input.click();
	}

	render() {
		return <span>
			<input type="file" onChange={this.fileChanged.bind(this)} style={{display: "none"}}/>
			<button onClick={this.selectFile.bind(this)} className={this.props.className}>{this.props.children}</button>
		</span>;
	}

}