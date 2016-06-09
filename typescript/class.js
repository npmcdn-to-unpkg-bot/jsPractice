var Person = (function () {
    function Person(name) {
        this.name = name;
        // code...
    }
    Person.prototype.greet = function () {
        return "hello,my name is " + this.name;
    };
    return Person;
}());
var julien = new Person("Julien");
console.log(julien.greet());
