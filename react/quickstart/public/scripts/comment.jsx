var comments = [
	{
		author : "julien",
		content : "This is a comment from julien"
	},
	{
		author : "jack",
		content : "This is a comment from jack"
	}
]
// comment box
var CommentBox = React.createClass({
	render : function (){
		return (
			<div className="commentBox">
				<h1>comments</h1>
				<CommentList data = {this.props.data}></CommentList>
				<CommentForm></CommentForm>
			</div>
		);
	}
});

// comment list 
var CommentList = React.createClass({
	render : function (){
		var commentNodes = this.props.data.map(function (v, i){
			return (
				<Comment author = {v.author}>
					{ v.content }
				</Comment>
			);
		});
		return (
			<div className="commentList">
				{commentNodes}
			</div>
		);
	}
});

// comment 
var Comment = React.createClass({
	render : function (){
		return (
			<div className="comment">
				<strong className="commentAuthor">
					{this.props.author + ": "}
				</strong>
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
				<h3>
					This is a comment form					
				</h3>
			</div>
		);
	}
});

ReactDOM.render(
	<CommentBox data = {comments}></CommentBox>,
	document.getElementById("content")
);