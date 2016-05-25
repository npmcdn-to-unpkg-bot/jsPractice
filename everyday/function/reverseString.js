// Write a JavaScript function that reverse a number or a string
'use strict';
String.prototype.reverse = function (){
	return this.split("").reverse().join("");
}
Number.prototype.reverse = function (){
	return this.toString().reverse();
}

console.log("hello,world".reverse());
console.log(21584.25.reverse());