var Ref = React.createClass({
	handleClick : function (name){
		this.refs.hello.innerHTML = name + " said : " + "fuck the world";
	},
	render : function (){
		return (
			<div>
				<p ref = "hello">hello,world</p>
				{/* es6 */}
				<button onClick = {() => this.handleClick("julien")}>button</button>
				{
					// es5
					// <button onClick = {this.handleClick.bind(this,"julien")}>button</button>
				}
			</div>
		)
	}
});

ReactDOM.render(
	<Ref></Ref>,
	document.getElementById("content")
);

