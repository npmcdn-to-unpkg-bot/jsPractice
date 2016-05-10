'use strict';
var person={
	name:"Julien",
	age:19,
	sex:"male"
};
var detail={
	wife:null,
	children:null,
	hobby:['basketball','anime','game','woman'],
};
var Julien={};
Object.assign(Julien, person,detail);
console.log(Julien);