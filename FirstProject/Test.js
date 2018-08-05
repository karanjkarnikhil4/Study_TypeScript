"use strict";
{
    var letTest_1 = "Nikhil";
}
//const birthYear; this cannot be done as const always have to initialized.
var birthYear = 1989;
{
    var address = "Pune";
}
console.log("Outside");
//   console.log(letTest); this is not possible as the letTest is in different block;
console.log(birthYear);
console.log(address); // even though address is defined inside the block it is accessible here
var letTest = "Nikhil";
//birthYear =1990 this cannnot be done as const have to assigned only once
{
    console.log("Inside Block");
    console.log(letTest); // here all the variables are accessible even though they are defined outside block as they have been declared outside block
    console.log(birthYear);
    console.log(address); // blocks does not make any difference to address
    {
        console.log("Inside nested block");
        var letTest_2 = "Kanji";
        console.log(letTest_2);
        console.log(address);
        var address = "Ontario"; // this can also be address="Ontario"; //remember in javascript the same variable can be declared multiple times even in the same block
    }
}
console.log("Outside block");
console.log(letTest); // the value of letTest is again Nikhil as letTest has block scope
console.log(address);
SimpleFunction();
function SimpleFunction() {
    console.log("inside function");
    //    console.log(letTest);  Cannot be done as letTest is block scoped not accessible here. Here a new letTest needs to be declared (not hoisted) hence cannot be used before declaration
    console.log(address); // hosted as it is a var.
    //      console.log(birthYear); Cannot be done as letTest is block scoped not accessible here. Here a new letTest needs to be declared (not hoisted) hence cannot be used before declaration
    // let letTest ="Karanjkar";
    //  const  birthYear =1990;
    //  var address= "Ontario";
    console.log(letTest);
    console.log(birthYear);
    console.log(address);
    function NestedFunction() {
        console.log("Inside nested Simple function");
        console.log(address);
        console.log(letTest);
        console.log(birthYear);
    }
    NestedFunction();
}
console.log("Outside");
console.log(letTest);
console.log(birthYear);
console.log(address);
