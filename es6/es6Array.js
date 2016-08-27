"use strict";

// Array.from
let ArrayLike = {
	0 : "A",
	1 : "B",
	2 : "C",
	length : 4
};

let array = Array.from(ArrayLike);
console.log(array, Array.isArray(array));