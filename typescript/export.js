"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        // code...
    }
    Person.prototype.introduce = function () {
        return "my name is " + this.name + ", I am " + this.age + " years old";
    };
    return Person;
}());
exports.Person = Person;
var Programmer = (function (_super) {
    __extends(Programmer, _super);
    function Programmer(name, age, language) {
        _super.call(this, name, age);
        this.language = language;
    }
    return Programmer;
}(Person));
exports.Programmer = Programmer;
