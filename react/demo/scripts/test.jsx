var NodeLists = React.createClass({
	render : function (){
		var children = this.props.children;
		return (
			<ol>
				{
					React.Children.map(children, function (v){
						return <li>{v}</li>
					})												
				}
			</ol>
		)
	}
});

ReactDOM.render(
	<NodeLists>
		<span>child 1</span>
		<span>child 2</span>
	</NodeLists>,
	document.getElementById("content")
);