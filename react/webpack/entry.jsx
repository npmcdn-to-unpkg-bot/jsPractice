import React , { Component } from "react";
import { render as Render, findDOMNode as Find } from "react-dom";

class LikeButton extends Component {
	constructor (props){
		super (props);
		
		this.state = {
			liked : false
		};
	}
	static get defaultProps (){
		return {
			title : "video",
			person : "julien"
		};
	}
	handleClick (event){
		this.setState({
			liked : !this.state.liked
		});
	}

	render (){
		let text = this.state.liked ? "like" : "don't like";
		return (
			<div>
				<p> { this.props.person + " " + text } the { this.props.title }</p>
				<br/>
				{
					// React components using ES6 classes no longer autobind this to non React methods.	
					// use bind to bind contenxt
				}
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