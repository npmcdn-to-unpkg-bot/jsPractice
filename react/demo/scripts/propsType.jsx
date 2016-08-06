var MyTitle = React.createClass({
	getDefaultProps : function (){
		return {
			title : "defaulrt title",
		}
	},
	propTypes : {
		title : React.PropTypes.string.isRequired
	},
	render : function (){
		return (
			<div>
				<h1>my title</h1>
				<p>{this.props.title}</p>
			</div>
		);
	}
});

ReactDOM.render(
	<MyTitle></MyTitle>,
	document.getElementById("content")
);