"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//class with public, private and protected properties
//constructor without any access modifier
//constructor can also have public, private and protected parameters then it is not required to declare and assign the parameters to the properties. By default they are declared and assigned
// by default everything is public (property and function)
//when inside the object you have to use this keyword to access the functions or properties of an object
console.log("CLASSES");
var Person // access modifier cannot be applied on a class
 = /** @class */ (function () {
    function Person(name, gender) {
        this.gender = gender;
        this.age = 100; // properties can also be assigned here
        this.name = name; // always use this keyword to access properties and objects inside the object.
        this.lastName = "Karanjkar";
    }
    Person.prototype.setAge = function (age) {
        this.age = age;
        this.ShowGender();
    };
    Person.prototype.ShowGender = function () {
        console.log(this.age);
        console.log(this.gender);
    };
    return Person;
}());
var person = new Person("Nikhil", "Male");
person.address = "Pune";
console.log(person.name, person.address);
person.setAge(28);
console.log(person);
//-------------------------------------------------------------------------------------------------------------------------
//Inheritance example
/*console.log("INHERITANCE")

class Nikhil extends Person
{
    name = "Nikhil"; // this will override the Max passed in the below line
}
let nikhil=new Nikhil("Max","Male");
console.log(nikhil.name);
*/
//-------------------------------------------------------------------------------------------------------------------------
//Inheritance via constructor example
console.log("INHERITANCE CONSTRUCTOR");
var Nikhil = /** @class */ (function (_super) {
    __extends(Nikhil, _super);
    function Nikhil(gender) {
        var _this = _super.call(this, "Nikhil", gender) || this;
        _this.job = "software engineer"; //adding extra fields here
        _this.lastName = "Karanji";
        return _this;
    }
    Nikhil.prototype.GetLastName = function () {
        return this.lastName;
    };
    Nikhil.prototype.setAge = function (age) {
        _super.prototype.setAge.call(this, age + 1);
    };
    return Nikhil;
}(Person));
var nikhil = new Nikhil("Male");
console.log(nikhil.name);
console.log(nikhil.address);
console.log(nikhil.GetLastName());
nikhil.setAge(29);
console.log(nikhil.job);
//-------------------------------------------------------------------------------------------------------------------------
//Using Getters and Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "DEFAULT";
    }
    Object.defineProperty(Plant.prototype, "Myspecies", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "DEFAULT";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var myplant = new Plant();
myplant.Myspecies = "ABCD";
console.log(myplant.Myspecies);
//-------------------------------------------------------------------------------------------------------------------------
