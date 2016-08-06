var LikeButton = React.createClass({
	getInitialState : function (){
		return {
			liked : false,
		};
	},
	like : function (){
		// won't render the view again
		// this.liked = false;
		// change to the following one
		this.setState({
			liked : true
		});
	},
	render : function (){
		let text = this.state.liked ? "like" : "don't like";
		return (
			<div>
				<img src="/img" alt="image fails to load" title="假装有图片"/>
				<p>You { text } the picture</p>
				<button onClick = {this.like}>like this video</button>
			</div>
		);
	}
});
ReactDOM.render(
	<LikeButton></LikeButton>,
	document.getElementById("content")
)