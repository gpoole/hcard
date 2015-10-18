import React from "react";
import ReactDOM from "react-dom";

/**
 * Provides a button which the user can click to select a single image file. When a valid file is selected,
 * the component will call onImageChange prop and provide a valid URL for the image.
 */
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
		// We're faking out having a button do this by triggering a virtual click on a hidden file input, which will
		// do the actual work for this component.
		event.preventDefault();
		let input = ReactDOM.findDOMNode(this).querySelector("input[type=file]");
		input.click();
	}

	render() {
		return <span>
			<input type="file" onChange={this.fileChanged.bind(this)} style={{display: "none"}} accept="image/*"/>
			<button onClick={this.selectFile.bind(this)} className={this.props.className}>{this.props.children}</button>
		</span>;
	}

}