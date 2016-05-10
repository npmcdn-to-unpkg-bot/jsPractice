'use strict';
function f(){
	console.log("I am outside");
}
(function(){
	if(false){
		function f(){
			console.log("I am inside");
		}
	}	
	f();
}());
//es6中函数具有块级作用域，打印出“I am outside”