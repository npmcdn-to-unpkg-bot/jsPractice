class Person {
	
	constructor( public name: string, public age: number) {
		// code...
	}

	introduce (){
		return "my name is " + this.name + ", I am " + this.age + " years old";
	}
}

class Programmer extends Person {
	language: string[];
	constructor( name: string, age: number, language: string[]){
		super(name, age);
		this.language = language;
	}
}

export {
	Person,
	Programmer
}
