class Person {
	
	constructor( public name: string = "nameless") {
	}

	greet (){
		return "hello,my name is " + this.name;
	}
}

class Student extends Person {
	classNumber: number;
	private age: number;
	constructor(name: string ,  classNumber: number = 9 ,age: number) {
		super(name);
		this.classNumber = classNumber; 
		this.age = age;
	}
	greet (){
		return super.greet() + " and I am from class " + this.classNumber; 
	}
	getAge (){
		return this.age;
	}
}

let julien = new Person("Julien");
console.log(julien.greet());
let jack = new Student("jack", 12, 20);
console.log(jack.greet());
