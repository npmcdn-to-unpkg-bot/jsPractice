// 声明提前与块级作用域
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
	console.log(f);
})();

// try const
const _static = "static";
// _static = "changed"; 
