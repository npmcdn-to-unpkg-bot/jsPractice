var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(name) {
        if (name === void 0) { name = "nameless"; }
        this.name = name;
    }
    Person.prototype.greet = function () {
        return "hello,my name is " + this.name;
    };
    return Person;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(name, classNumber, age) {
        if (classNumber === void 0) { classNumber = 9; }
        _super.call(this, name);
        this.classNumber = classNumber;
        this.age = age;
    }
    Student.prototype.greet = function () {
        return _super.prototype.greet.call(this) + " and I am from class " + this.classNumber;
    };
    Student.prototype.getAge = function () {
        return this.age;
    };
    return Student;
}(Person));
var julien = new Person("Julien");
console.log(julien.greet());
var jack = new Student("jack", 12, 20);
console.log(jack.greet());
console.log(jack.age);
