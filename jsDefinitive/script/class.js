"use stricr";
var Person = function (name){
	this.name = name;
}

Person.prototype.sayHello = function(){
	console.log("hello,my name is " + this.name);
};

var julien = new Person("julien");
julien.sayHello();

