var Ref = React.createClass({
	handleClick : function (){
		this.refs.hello.innerHTML = "fuck the world";
	},
	render : function (){
		return (
			<div>
				<p ref = "hello">hello,world</p>
				<button onClick = {this.handleClick}>button</button>
			</div>
		)
	}
});

ReactDOM.render(
	<Ref></Ref>,
	document.getElementById("content")
);

