class Person {
	
	constructor( public name: string) {
		// code...
	}

	greet (){
		return "hello,my name is " + this.name;
	}
}

let julien = new Person("Julien");
console.log(julien.greet());