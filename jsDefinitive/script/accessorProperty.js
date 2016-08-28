'use strict';

var person = {
	name : "julien",
	age : 20,
	get f_age (){
		return this.age;
	},
	set f_age (age){
		this.age = age;
	}
}
// setter这种调用传参方式很奇怪,和数据属性赋值一样
person.f_age = 22;
console.log(person.f_age);

for (var i in person){
	console.log(i, person[i]);
}
// getter和setter也是可以枚举的
// output : 	
// 	name julien
// 	age 22
// 	f_age 22
