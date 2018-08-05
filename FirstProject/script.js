"use strict";
// install node.js from the official node.js website. Install the latest version
// add ;C:\Program Files\nodejs\ in you Environment path variable so that node command is accessible
// open webstorm, go to your project folder. open terminal, make sure that the termical is pointing to your project folder then run ====> npm init
// then if required add the git url
// then just press enter enter and new package.json file will be created for you.
// then you need to install webserver for running the typescript. run command ==> npm install lite-server --save-dev             (dont use -g because you dont want to install this globally ,--save-dev
// --save-dev adds it as a development only dependency
// also add ===> "start": "lite-server" in scripts object in package.json
// to start the server run the command ==> npm start
// the above command will start the lite server
// now to run the command tsc without having to specify the file everytime run command ==> tsc --init which will add tsconfig.json file. now you can compile all the files just by running ==> tsc
//
var _a;
//--------------------------------------------------------
// The below is an example from playground
/*
function Greeter(greeting) {
    this.greeting = greeting;
}

Greeter.prototype.greet = function() {
    return "Hello, " + this.greeting;
}

// Oops, we're passing an object when we want a string. This will print
// "Hello, [object Object]" instead of "Hello, world" without error.
let greeter = new Greeter({message: "world"});

let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function() {
    alert(greeter.greet());
};

document.body.appendChild(button);

console.log("it works");
//------------------------------------------------------------------

/*
//--implicit types
//String
let myname ="Nikhil Karanjkar"; // here type of name is implicitly string as we are assigning string value to it.
//myname=100; // this does'nt work as the type of myname is string here, so you cannot assign a number to it.

//Number (Numbers can be both integer and float , typscript does not differentiate it
let number = 176.46;
//i="nikhil"; // this will not work.

//Boolean
let has_car = true;
//has_car = 7865;   this will not work


//----------------------------------------------------------------------

//Explicit types
let myvariable ;  // here any type is assigned to it, so we can assign any type to myvariable  (Here we are back into the old javascript dynamic type
 myvariable =45;
 myvariable = "NIkhil Karanjkar"


let mysecondvariable : any; // this is same as the above example.
 mysecondvariable =789;
 mysecondvariable ="Nikhil"

//Defining the type explicitly
let mythirdvariable: Number;
 mythirdvariable=897;
 //mythirdvariable ="nikhil" // this will not work as the type has been defined ezplicitly


//array
let hobbies = ["swimming","dancing"];
//hobbies =[18978,76]; // this will not work as it is array of type string and not number.

let myhobbies :any[] = ["swimming","dancing"];
myhobbies =[167,456];//  this will work as we have defined the type as any array type.
//myhobbies =786;// this will not work as only array type can be assigned to it. this will work if we declare myhobbies as  let myhobbies :any
myhobbies = [156,"nikhil"]; // this will work as the type is any[]


//tuples
let myaddress = ["Pune",99];
myaddress =[99,101];// this will work because , this is considered as the any[]

let myaddress1:[string, number] =["nikhil",77];
 //myaddress1 =[77,"nikhil"]; // this will not work as the sequence is important as we have specifed the type above and ony 2 elements can se assigned there
//myaddress1=["nikhil",77,"nikhil2"]; // this wiil also not work


//Enum
enum Color{
    Blue,
    Gray,
    Green
}
let myColor: Color =Color.Blue;

console.log(myColor); // here it prints 1 to the console as Gray is assigned value 1

enum Cars {
    Audi,
    BMW=100,
    Jaguar
}

let myCar:Cars=Cars.Jaguar;
console.log(myCar); // here the value of Jaguar will be 101 as BMW is 100 , so it is iincremented. if you want to assign specific value to Jaguar go ahead and assign it in the enum like Jaguar =2


//any
let car:any = "BMW"; // Avoid using any because you will loose strict type checking then
car ={firstName:"nikhil", age:28}; // this will work as type is any
console.log(car);
car =1678
console.log(car);

//---------------------------------------------------------------------------------------------

//Functions with return types

//Javascript function returning string
function returnMyName()
{
    return "Nikhil"; // i can also return a number from this function
}
console.log(returnMyName());

//Javascript function returning void
function sayHello()
{
    console.log("hello")
}
sayHello();

//We can specify the return type as void in typescript
function sayHellos():void
{
    console.log("hello with void");
}

//We can explicitly define a return type here in typescript
function returnMyAge() : number
    {
      return 29;   ///it will throw an error if we try to return any other type other than string
    }


//functions without the parameter types
function MultiplyNumbers(numbera, numberb) {

    return numbera * numberb;
}
console.log(MultiplyNumbers(20,"Max"));// this does not throw error instead it return NAN in the console  , Hence to avoid these kind of errors at the runtime we should specify the type


//functions with specified parameter Type
function MultiplyTwoNumbers(numbera:number,numberb:number):number
{
    return numbera * numberb;
}
//MultiplyTwoNumbers(20,"Max");  this cannot be done as the parameter type is specified
console.log(MultiplyTwoNumbers(20,30));

//----------------------------------------------------------------------------------------------------------

//Function as types  (Delegates)

function GreetingsJavascript()
{
    console.log("ia am fuction 1");
}

function GreetingsTypeScript():void
{
    console.log("ia am fuction 1");
}

function WishesJavascript(firstName, lastName)
{
    return firstName +" " +lastName;
}

function WishesTypescript(firstName:string, lastName:string):string
{
    return firstName +" " +lastName;
}


let functionionPointer;
functionionPointer= GreetingsJavascript;//with javascript
functionionPointer();

functionionPointer=GreetingsTypeScript; // with typescript
functionionPointer();

functionionPointer=WishesJavascript;// the same variable can be used to point to a different type of function which accepts and returns the value
console.log(functionionPointer("nikhil","karanjkar"));

functionionPointer= WishesTypescript;
console.log(functionionPointer("nikhil","karanjkar"));

//
let myfunctionPointer:(value1:string, value2:string)=> string; // this variable will only point to functions which will accept two numbers and return a number, this can also be achieved just by writing  let myfunctionPointer = WishesJavaScript;
//myfunctionPointer = GreetingsTypeScript; this cannot be done

myfunctionPointer=WishesTypescript;
myfunctionPointer("nikhil","karanjkar");

myfunctionPointer=WishesTypescript;
myfunctionPointer("nikhil","Karanjkar");

//myfunctionPointer =100 this cannot be done as it will only point to a function.
//-------------------------------------------------------------------------------------------------------------------------------------

//Object Types

// when we assign an object to a variable that variable can only hold objects which has the same properties (names should match)
let myObject ={
    name:"Nikhil",
    age: 28
}

//myObject= {address:"Pune",Pincode:415005} this cannot be done
myObject={
    name:"Apoorva",
    age: 29,
   // address:"Pune" this is also not possible as the number of properties should also be same.
}

//Explicitly defining a type
//this is how the object type is explicitly defined using curly braces then the exact name of the properties and the their types, the declaration and the assignment can be done on separate lines
let myObject2:{name:string,age:number}={
    name:"Nikhil",
    age: 29,
}
//-------------------------------------------------------------------------------------------------------------------------------------

//Complex Object Types
//example of complex object
let myComplexObject:{data:number[],myfunction:(all:boolean)=>number[]}=
    {
        data:[10,20,30,40],
        myfunction:function (all:boolean) {
            return this.data;
        }
    }

//myComplexObject = {}; //this cannot be done as the type is fixed

//-------------------------------------------------------------------------------------------------------------------------------------

//Type aliases

let myComplexObject1:{data:number[],myfunction:(all:boolean)=>number[]}=
    {
        data:[10,20,30,40],
        myfunction:function (all:boolean) {
            return this.data;
        }
    }
    //Now suppose we want to create another object my complexObject2 with the same type / then we have to repeat the object type again as shown below

let myComplexObject2:{data:number[],myfunction:(all:boolean)=>number[]}=
    {
        data:[10,20,30,40],
        myfunction:function (all:boolean) {
            return this.data;
        }
    }
    // here we are repeating everything, this can be avoided using the type alias as shown below , we will be creating complexObject3 using the type alias

type complex = {data:number[],myfunction:(all:boolean)=>number[]};  //although it is a type, instead of using : colon we are using = equal to assign the type, now we can create object 3 using this type alias

let myComplexObject3:{data:number[],myfunction:(all:boolean)=>number[]}=
    {
        data:[10,20,30,40],
        myfunction:function (all:boolean) {
            return this.data;
        }
    }

//-------------------------------------------------------------------------------------------------------------------------------------
//Allowing multiple types using the union type (it means the type of variable can either be like string or integer or boolean, it can be one of these, we can define these kind of variables as shown below

let myRealRealAge:string|number|boolean;

myRealRealAge ="28";
myRealRealAge = 28;
myRealRealAge =true;

// all the 3 types are assignable here. this can be helpful when we know in advance that the output will be one of the 3 types.

//-------------------------------------------------------------------------------------------------------------------------------------

//Checking types of a variable


//let finalValue = "test string";  if finalValue is of type string it will not print the finalValue to the console
let finalValue = 40;

if(typeof(finalValue) =="number")  // typeof final value   and typeof(finalValue) are same, we can either use the round brackets or we can avoid them
{
    console.log(finalValue);
}

//-------------------------------------------------------------------------------------------------------------------------------------

//Never Type
// if you know that a function never returns anything , dont mistake void functions with never. a never function is a like a place in program which when reached will never come out of it, or you know it will throw an error. Look at the below example

/*function myNeverFun():never
{
  throw new Error("this point in the program should be be reached");
}

myNeverFun(); */
//-------------------------------------------------------------------------------------------------------------------------------------
//Nullable types
//in type script we can set null to all the types unless the strict or strictNullcheck compilerOptions in tsconfig.json is not set to true
// for example
var mySecretNumber = 12;
//mySecretNumber=null; // this is possible if the complier options are set to false; as null cannot be assigned to a number type
// the vice versa is also true that a number cannot be assigned to a null type , look at the below example.
var mySecret = null;
//mySecret = 12;// this is not possible if the strict null type compiler option is set to true else it can be done
var mytest;
mytest = null;
mytest = 56; // here it is possible to assign null as well as number to my test because its type is any.
//We can set null to a number type even if the compiler option is having strictNullcheck set to true using the Union. Look at the example below
var mineSecretNumber;
mineSecretNumber = 12;
mineSecretNumber = null;
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
//-------------------------------------------------------------------------------------------------------------------------------------
//Function statement inside the object can be defined, but has to be defined without the function keyword
var yeahObject = {
    name: "nikhil",
    lastName: "Karanjkar",
    WholeName: function () {
        return this.name + ' ' + this.lastName;
    }
};
console.log(yeahObject.WholeName()); // this is how you call it.
//-------------------------------------------------------------------------------------------------------------------------------------
//TypeScript compiler
//even if you the type errors in type script but still the code is converted to javascript by default.
// because typescript thinks that it  does'nt know the whole stuff as there may be another file referenced in the script tag in html which might have that object
// you can change this behaviour by changing the compiler option noEmitOnError to true  in tsconfig.json, then it will not create the file if there are typescript erros
//Source Map
//if you want to debug the typescript in the browser then you have to set the SourceMap to true in the compiler options in tsconfig.js file.
// Setting this to true will create another file under script.ts called as script.js.map which will also be loaded into the browser which can be used to debug tht typescript in browser directly.
//Implicit Any  (although this is not behaving as it should a question to ask)
var anything;
anything = 12;
anything = "nikhil"; // we can assign anything to variable because its type is any. we haven't  stated its type to be any explicitly, it is implicit.
//we can change this default behaviour by changing the compiler option noimplicitAny to true which will then give an error if we dont specify the type any explicitly,
// there may be requirement that we dont want the type to get set implicitly , may be we forgot to the set the type there, so its just a check. which is very handy
//To understand all the configurations in the tsconfig.json file you need to refer the official typescript website and then look for the Project configuration page.
//-------------------------------------------------------------------------------------------------------------------------------------
//Compiler options (how typescript compiler got smarter in 2.0 version)
// Look at the below example
// It is compile successfully even though there is problem with the function. result can be null if number is equal to zero.
// to check this error set the Compiler option strictNullChecks to true in tsconfig.json, then it will throw an error
//Also the variable successful is not used, still it compliles successfully. If you wish to throw error for this, then set the noUnusedParameters to true in tsconfig.json file
function MyTestFunction(numbera, successful) {
    var result;
    if (numbera > 0) {
        result = 12;
    }
    return result;
}
console.log(MyTestFunction(0, true));
//-------------------------------------------------------------------------------------------------------------------------------------
/*
// Let and Const
// let and const are ES6 features of javascript let and const are block scoped while var is a function scoped.
// if you define variables using let they can changed later.
// the const variables have to assigned while declaring them , you can set them only once , error is thrown is you try to assign it more than once.
//  let, and const are accessible inside nested blocks, which can also be functions or if statement or switch or just a section with curly braces
// var is accessible inside nested functions and other types of blocks like if statement, switch or just a block with curly braces does not make any difference to var.

{
    let letTest = "Nikhil";

}
    //const birthYear; this cannot be done as const always have to initialized.
    const birthYear = 1989;
{
    var address = "Pune";
}

    console.log("Outside");
 //   console.log(letTest); this is not possible as the letTest is in different block;
    console.log(birthYear);
    console.log(address); // even though address is defined inside the block it is accessible here
    let letTest = "Nikhil";

//birthYear =1990 this cannnot be done as const have to assigned only once
{
    console.log("Inside Block")
    console.log(letTest); // here all the variables are accessible even though they are defined outside block as they have been declared outside block
    console.log(birthYear);
    console.log(address);// blocks does not make any difference to address

    {
        console.log("Inside nested block");
        let letTest = "Kanji";
        console.log(letTest);
        console.log(address);
        var address ="Ontario"; // this can also be address="Ontario"; //remember in javascript the same variable can be declared multiple times even in the same block
    }

}
console.log("Outside block");
console.log(letTest); // the value of letTest is again Nikhil as letTest has block scope
console.log(address);

SimpleFunction();

function SimpleFunction()
{
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

    function NestedFunction()
    {
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

//-------------------------------------------------------------------------------------------------------------------------------------

//Arrow functions (Similar to anonymous function and Lambda in c#)
// arrow function if there is no parameter

//below is a simple function but it can also be declared as arrow function
let functionPointer =function (firstName:string,lastName:string):string
{
   return firstName +' '+lastName;
}

// below is an arrow function.
let arrowfunctionPointer = (firstName:string, lastName:string):string =>  firstName +' '+lastName;  //using arrow function instead of normal function // remember you cannot use return if there is only  1 line after the arrow
let newarrowfunctionPointer = (firstName:string, lastName:string):string => { return firstName +' '+lastName}; // use return keyword if you use curly braces after the arrow.

let noparameterfunction = ():void=> console.log("noparameterArrowfunction"); // use empty rouund brackets () if there is no parameter

let singleparameterfunction = (x:number):void=> console.log(x); // use empty rouund brackets () if there is no parameter the dont use round brackets

//---------------------------------------------------------------------------------------------------------------------------------------

//Functions and default paramters
//using arrow functions
console.log("Default Parameters");

const arrow=(start:number = 10,end:number=start-5,):void=> { //here default parameter is defined which is similar to c#,
    // apart from it another parameter end is also defaulted but the start variable is used in the default expression// the start paramter cannot be used if the end variable is befire the start variable in the round bracket.
    console.log(start);
    console.log(end);

    while(start>0)
    {
        start--;
    }
    console.log("Done!", start);

}

arrow(); // defaulted values are used.
arrow(20);
arrow(20,30);


//---------------------------------------------------------------------------------------------------------------------------------------
//Rest and spread operator
// Rest and spread operator look same, it is just the context in which they are being used differentiates them.
let array1=[10,20,30,40];
//Now suppose we want to pass this  into Math.Max function which only accept comma separated values which is list of numbers then we can use the spread operator
console.log(Math.max(...array1)); // here spread operator is used to turn array into list.

function MakeArray(...param:number[])  //this is the rest operator as it turns comma separated values into array.  //similar to param in c#
{
 return param;
}
console.log(MakeArray(10,20,30,490));

//MakeArray(10,20,30,"nikhil"); this is not possible as it only accepts numbers

console.log(MakeArray(1,2,3,4,5,6,7,8,9));
//---------------------------------------------------------------------------------------------------------------------------------------

//Destructuring of arrays and objects

//destructuring of arrays
console.log("DESRTUCTURING")
let arraydes = [1,4,5];
let [var1,var2]=arraydes; // this is the syntax for array destructuring.
//let [var1,var2]=[5,6,7,8] // cannot use same names with let
//let [var1:number,var2:number]=arraydes; // this is not possible , it throws an error saying cannot redeclare number
console.log(var1,var2);

let [var3,var4] =[1,2,3]; // we can also destructure directly
console.log(var3,var4);

//destructuring of objects
let {firstName:myname,lastName:mylastName,SayHello:mySayHello} = { //the name should match the name in the object, if  you want to use a different name then use colon :
    //cannot use same names with
    firstName: "Nikhil",
    lastName: "Karanjkar",
    SayHello():string{
       return "hello";
    }
}

// if the underlying object has the same names then use different alias to differentiate them , else it will give the error as the names are same
let {firstName:name2,experience:exp2} = {firstName: "Will", experience: 12};
console.log(name2, exp2);

let {firstName:name4,experience:exp4} = {firstName: "Will1", experience: 124};
console.log(name4, exp4);
console.log(myname,mylastName,mySayHello());

//---------------------------------------------------------------------------------------------------------------------------------------

//Template literals
let myName="Nikhil";
let mystring =`Hello this is ${myName}, I am here to learn typescript`; // this is a template literal and we have used the ${variableName} dollar curly braces to add a variable in a string
console.log(mystring);

//---------------------------------------------------------------------------------------------------------------------------------------
//Symbols, Ierators and Generators should be studied from ES6 tutorial
//---------------------------------------------------------------------------------------------------------------------------------------

//Exercise
*/
//Before
/*// Exercise 1 - Maybe use an Arrow Function?
var double = function(value) {
    return value * 2;
};
console.log(double(10));

// Exercise 2 - If only we could provide some default values...
var greet = function (name) {
    if (name === undefined) { name = "Max"; }
    console.log("Hello, " + name);
};
greet();
greet("Anna");

// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));

// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
Array.prototype.push.apply(newArray, numbers);
console.log(newArray);

// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0];
var result2 = testResults[1];
var result3 = testResults[2];
console.log(result1, result2, result3);

// Exercise 6 - And a well-constructed object!
var scientist = {firstName: "Will", experience: 12};
var firstName = scientist.firstName;
var experience = scientist.experience;
console.log(firstName, experience);*/
//After
// Exercise 1 - Maybe use an Arrow Function?
var double = function (value) { return value * 2; };
console.log(double(10));
// Exercise 2 - If only we could provide some default values...
var greet = function (name) {
    if (name === void 0) { name = "Nikhil"; }
    console.log("Hello, " + name);
};
greet();
greet("Anna");
// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
(_a = Array.prototype).push.apply(_a, newArray);
console.log(newArray);
// Exercise 5 - That's a well-constructed array.
var _b = [3.89, 2.99, 1.38], result1 = _b[0], result2 = _b[1], result3 = _b[2];
console.log(result1, result2, result3);
// Exercise 6 - And a well-constructed object!
var _c = { firstName: "Will", experience: 12 }, firstName = _c.firstName, experience = _c.experience;
//console.log(name2, exp2);
//---------------------------------------------------------------------------------------------------------------------------------------
