import React, { Component } from "react";
import { render as Render } from "react-dom";

class HelloMessage extends Component {
	render (){
		return (
			<div>
				<p>hello,{ this.props.name }</p>
				<p>{ this.props.gender }</p>
			</div>
		);
	}
}

let julien = {
	name : "julien",
	gender : "male",
	age : 20
}

Render(
	<HelloMessage  { ...julien }></HelloMessage>,
	document.getElementById("content")
);