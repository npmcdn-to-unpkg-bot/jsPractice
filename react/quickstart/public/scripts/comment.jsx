
// comment box
var CommentBox = React.createClass({
	render : function (){
		return (
			<div className="commentBox">
				<h1>comments</h1>
				<CommentList></CommentList>
				<CommentForm></CommentForm>
			</div>
		);
	}
});

// comment list 
var CommentList = React.createClass({
	render : function (){
		return (
			<div className="commentList">
				This is comment list
			</div>
		);
	}
});

// comment 
var Comment = React.createClass({
	render : function (){
		return (
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
				{this.props.children}
			</div>
		);
	}
})

// commment form
var CommentForm = React.createClass({
	render : function (){
		return (
			<div className="commentForm">
				This is a comment form
			</div>
		);
	}
});

ReactDOM.render(
	<CommentBox></CommentBox>,
	document.getElementById("content")
);