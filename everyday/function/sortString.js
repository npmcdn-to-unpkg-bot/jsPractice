// Write a JavaScript function that returns a passed string with letters in alphabetical order
'use strict';
String.prototype.sort = function (){
	return this.split("").sort().join("");
}
var str = "helloworld";
console.log(str.sort());