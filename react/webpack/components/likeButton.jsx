import React, { Component } from 'react';

class LikeButton extends Component {
	constructor(props) {
		super(props);
		this.state = { liked: false };
	 }

	 handleClick(e) {
		this.setState({ liked: !this.state.liked });
	 }

	 render() {
		const text = this.state.liked ? 'like' : 'haven\'t liked';
		return (
			<div>
				<p>
					You {text} this. Click to toggle.
				</p>
				<button onClick={this.handleClick.bind(this)}>toggleLike</button>
				
			</div>
		);
	}
}

export default LikeButton;