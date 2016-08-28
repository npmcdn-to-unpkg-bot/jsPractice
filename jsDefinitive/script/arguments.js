// 'use strict';

var test = function (x){
	console.log(x);
	arguments[0] = "first argument";
	console.log(x);
}

test("test");

// 非严格模式下arguments[0]和x对应的是同一个引用，修改会对两者都生效，
// strict模式下不存在上述问题，不允许对arguments赋值