'use strict';
let memorize = function ( f ){
	let cache = {};
	return function (){
		let key = Array.prototype.join.call(arguments, "_");
		if (key in cache){
			return cache[key];
		}
		else {
			return (
				cache[key] = f.apply(this, arguments)
			);
		}
	}
}

let fib = function (n){
	return n<3?1:fib(n-1)+fib(n-2);
}
var memFib = memorize(fib);

console.time("noMem");
fib(40);
fib(40);
console.timeEnd("noMem");

console.time("mem");
memFib(40);
memFib(40);
console.timeEnd("mem");