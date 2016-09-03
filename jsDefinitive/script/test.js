'use strict';
var array = new Array(3);
array.forEach( function(element, index) {
	// 没有执行
	element = new Array(3);
	console.log(index);
});