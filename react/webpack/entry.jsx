import React , { Component } from "react";
import { render as Render } from "react-dom";

class LikeButton extends Component {
	constructor (props){
		super (props);
		this.state = {
			liked : false
		};
	}

	handleClick (){
		console.log(this);
		this.setState({
			liked : !this.state.liked
		});
	}

	render (){
		let text = this.state.liked ? "like" : "don't like";
		return (
			<div>
				<p>you { text } the video</p>
				<br/>
				<button onClick = { this.handleClick.bind(this) }>toggleLike</button>
			</div>
		)
	}
}

var Test = React.createClass({
	render : function (){
		return (
			<div>
				<p>for test</p>
			</div>
		);
	},
});

Render(
	<div>
		<LikeButton></LikeButton>
		<Test></Test>
	</div>,
	document.getElementById("content")
);