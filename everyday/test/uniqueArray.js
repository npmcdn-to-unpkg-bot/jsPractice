// works in es2015
Array.prototype.unique = function (){
	return Array.from(new Set(this));
}

let testArray = [1,2,5,4,2,6,1];

console.log(testArray.unique());