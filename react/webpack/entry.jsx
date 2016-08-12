import React, { Component } from "react";
import { render as Render } from "react-dom";

class HelloMessage extends Component {
	render (){
		return (
			<div>
				<p>hello,{ this.props.name }</p>
			</div>
		);
	}
}

Render(
	<HelloMessage name = {"Julien"}></HelloMessage>,
	document.getElementById("content")
);