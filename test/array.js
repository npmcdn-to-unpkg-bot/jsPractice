'use strict';
var flatten = function (array){
	var newArray = [];
	var flattenArray = function (arr){
		arr.forEach( function(element, index) {
			if (Array.isArray(element) === false){
				newArray.push(element);
			}
			else {
				flattenArray(element);
			}
		});
	}
	flattenArray(array);
	return newArray;
}

var test = [
	1,2,3,
	[4,5,6,7,[8,6,9]],
	8,9
];
console.log(flatten(test));
