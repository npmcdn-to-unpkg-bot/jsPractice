"use stricr";
var Person = function (name){
	this.name = name;
}

Person.prototype.sayHello = function(){
	console.log("hello,my name is " + this.name);
};

var julien = new Person("julien");
julien.sayHello();

var Student = function (name, grade){
	Person.call(this, name);
	this.grade = grade;
}
Student.prototype = Object.create(Person.prototype);
var jk= new Student("highSchoolGirl", 10);
jk.sayHello();