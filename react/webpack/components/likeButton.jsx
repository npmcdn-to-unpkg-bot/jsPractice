import React, { Component } from 'react';

class LikeButton extends Component {
	constructor(props) {
		super(props);
		this.state = { liked: false };
	 }

	 handleClick(event) {
	 	event.stopPropagation();
		this.setState({ liked: !this.state.liked });
	 }

	handleClickOnDiv (e){
		alert("click on the container");
	}

	 render() {
		const text = this.state.liked ? 'like' : 'haven\'t liked';
		return (
			<div onClick = { this.handleClickOnDiv.bind(this) }>
				<p>
					You {text} this. Click to toggle.
				</p>
				<button onClick={this.handleClick.bind(this)}>toggleLike</button>
				
			</div>
		);
	}
}

export default LikeButton;