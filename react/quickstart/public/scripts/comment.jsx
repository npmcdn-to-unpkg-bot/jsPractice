var CommentBox = React.createClass({
	render : function (){
		return (
			<div className="CommentBox">
				This is a comment box.
			</div>
		);
	}
});

ReactDOM.render(
	<CommentBox />,
	document.getElementById("content")
);