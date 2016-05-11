var Person = function ( name, age, sex ){
	this.name = name;
	this.age = age;
	this.sex = sex;
}
Person.prototype.introduce = function (){
	 console.log( this.name, this.age, this.sex );
};
var julien = new Person( "julien", 20, "male");
julien.introduce();