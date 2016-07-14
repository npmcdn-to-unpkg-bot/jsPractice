'use strict';
let f = function (){
	console.log("i am outsider");
}
;(function(){
	if (false){
		let f = function (){
			console.log("i am insider");
		}
	}
	f();
})();

// 声明提前与块级作用域