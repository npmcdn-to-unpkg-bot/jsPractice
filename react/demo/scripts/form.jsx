var MyForm = React.createClass({
	handleClick : function (str, event){
		// pass event object and other parameter 
		// if need to use event must pass it as a argument
		let msgElement = this.refs.msg;
		if ( !msgElement.value || !msgElement.value.length){
			msgElement.value = event.target.innerHTML.toUpperCase();
			return;
		}
		msgElement.value = msgElement.value.toUpperCase();
	},
	render : function (){
		return (
			<div>
			
				<input type="text" ref = "msg"/>
				<br/>
				<button onClick = { this.handleClick.bind(this, "fuck") }>to caps</button>
				
			</div>
		);
	}
});
ReactDOM.render(
	<MyForm></MyForm>,
	document.getElementById("content")
)