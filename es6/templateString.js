"use strict"
let test = function (){
	return "test function";
}

let template = `
		es2015 template string call function ${ test() }
		`;

console.log(template);