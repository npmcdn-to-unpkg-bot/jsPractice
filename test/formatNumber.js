'use strict';
var format = function (num){
	var array = [],
	str = num.toString();
	while (str.length > 3 ){
		var tem = str.slice(-3);
		array.unshift(tem);
		str = str.slice(0, -3);
	}
	array.unshift(str);
	return array.join(",");
}

var test = 6464164165641;
console.log(format(test));

