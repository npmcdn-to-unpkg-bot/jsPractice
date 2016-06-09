class Person {
	
	constructor( public name: string = "nameless") {
	}

	greet (){
		return "hello,my name is " + this.name;
	}
}

class Student extends Person {
	classNumber: number;
	constructor(name: string ,  classNumber: number = 9) {
		super(name);
		this.classNumber = classNumber; 
	}
	greet (){
		return super.greet() + " and I am from class " + this.classNumber; 
	}
}

let julien = new Person("Julien");
console.log(julien.greet());
let jack = new Student("jack", 12);
console.log(jack.greet());