;(function(window, document, Vue){
	var app = new Vue({
		el : "#app",
		data : {
			newTodo : "",
			todos : [
				{
					text  : "test todo text"
				}
			],
		},
		methods : {
			addNewTodo : function (){
				if (this.newTodo){
					this.todos.push({
						text : this.newTodo
					});
				}
			},
			removeTodo : function (index){
				this.todos.splice(index, 1);
			}
		}
	});
})(window, document, Vue);