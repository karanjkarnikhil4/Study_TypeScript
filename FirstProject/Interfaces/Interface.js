"use strict";
/*

function greetPerson (person)
{
    console.log(`hello ${person.name}`);  //here it will not throw complile error even if the person does'nt have a name associated with it
}

const Person_1=
    {
        firstname: 'Nikhil'
    }


    greetPerson(Person_1);

  */
//-------------------------------------------------------------------------------------------------------------------------------------
/*
type Personi ={name:string};

function greetPerson (person:Personi)
{
    console.log(`hello ${person.name}`);  //here it will throw complile error  if the person does'nt have a name associated with it. but use inteface as it can be implemented i.e derived by other classes or interfaces
}

function ChangeName(person:Personi) //type checking like this can be used but then we have
{
    person.name = 'Apurva';
}

const Person_1=
    {
        firstname: 'Nikhil'
    }

const Person_2=
    {
        name: 'Nikhil'
    }

const Person_3=
    {
        name: 'Nikhil',
        age:28
    }


greetPerson(Person_1);// this will not work as the expected type should contain the name property. will throw compile time error
greetPerson(Person_2);// this will  work as the expected type contains the name property.
ChangeName({name:'nikhil',age:28});// this will not work as the expected type should not contain the age property , it does number of property checks for instantaneous generated objects
ChangeName(Person_3);// this will  work even if the expected type  contains the age property , it does not do number of property checks for defined objects

*/
//-------------------------------------------------------------------------------------------------------------------------------------
/*
interface NamedPerson
{
    name:string;
    age:number;
}

function greetPerson (person:NamedPerson)
{
    console.log(`hello ${person.name}`);  //here it will  throw complile error  if the person does'nt have a name associated with it.
}

function ChangeName(person:NamedPerson)
{
    person.name = 'Apurva';
}

const Person_1=
    {
        firstname: 'Nikhil'
    }

const Person_2=
    {
        name: 'Nikhil',
        age: 28,
        address: "Pune"
    }



greetPerson(Person_1);// this will not work as the expected type should contain the name and age property. will throw compile time error
ChangeName(Person_2);// this will  work as the expected type  contains the name and age property. // also note that it has additional property of address still it works
ChangeName({name:"nikhil",age:28,address:"Pune"});// this will not work as the expected type should not contain the address property , it does number of property checks for instantaneous generated objects

*/
//-------------------------------------------------------------------------------------------------------------------------------------
/*
interface NamedPerson
{
    name:string;
    age?:number;// we have made the age optional here , hence even if the object does not contain age property , still it is ok
    //[propname:string]:any; // commented to show
    [propname:string]:string|number;//if you dont know the name of property beforehand then you can specify like this, here it can also be number or string or object instead of 'any' but it should contain all the return types the interface has if you know the type
    // propname can be anything it is a name // this can accept any number of properties
}

function greetPerson (person:NamedPerson)
{
    console.log(`hello ${person.name}`);
}

function ChangeName(person:NamedPerson)
{
    person.name = 'Apurva';
}


const Person_2=
    {
        name: 'Nikhil',
        age: 28,
        address: "Pune"
    }

ChangeName(Person_2);// this will  work as the expected type  contains the name and age property. // also note that it has additional property of address still it works
ChangeName({name:"nikhil"});// this will  work as age is optional
ChangeName({name:"nikhil",age:28 ,address:"Pune"});// now this will work as the address can be accepted
ChangeName({name:"nikhil",age:28 ,address:"Pune",surname:"Karanjkar",postcode:45});// this will also work as propname can accept multiple properties
//ChangeName({name:"nikhil",age:28 ,address:"Pune",surname:"Karanjkar",postcode:45,myFunci:()=>20});// this will not work as propname cannot accept functions // it will only work if the propname value type is any instead of string|number

*/
//-------------------------------------------------------------------------------------------------------------------------------------
/*
interface NamedPerson
{
    name:string;
    age?:number;
    [propname:string]:any;
    greet(lastName:string):void;
}

function greetPerson (person:NamedPerson)
{
    console.log(`hello ${person.name}`);
}

const Person_1=
    {
        name: 'Nikhil',
        age: 28,

    }

const Person_2=
    {
        name: 'Nikhil',
        age: 28,
        greet(lastname:string)
        {
            console.log('Hello' +lastname);
        },
        address: "Pune",
    }

 //   greetPerson(Person_1) ; // this will not work as the Person_1 does not contain the greet method
    greetPerson(Person_2) ; // this will  work as the Person_2  contains the greet method

Person_2.greet('Anything');
*/
//-------------------------------------------------------------------------------------------------------------------------------------
/*
// Classes implementing interfaces

interface NamedPerson
{
    name:string;
    age?:number;
    [propname:string]:any;
    greet(lastName:string):void;
}

function greetPerson (person:NamedPerson)
{
    console.log(`hello ${person.name}`);
}

class Personi implements NamedPerson {  // class should implement all the mandatory properties from the interface
    name: string;
    lastName:string // the class can have its own properties
    greet(lastName: string): void {
        console.log(`Hello ${lastName}`);
    }

}

const personi_1=new Personi()
personi_1.name="Nikhil";
greetPerson(personi_1);
personi_1.greet("karanjkar");

*/
//-------------------------------------------------------------------------------------------------------------------------------------
//Defining Function Types using Interfaces
/*
interface DoubleValuedFunction
{
    (value1:number,value2:number):number
}

let functionPointer:DoubleValuedFunction;

functionPointer=function(value1,value2)
{
    return value1*value2;
}
*/
//-------------------------------------------------------------------------------------------------------------------------------------
////Interface Inheritance
/*
interface NamedPerson
{
    name:string;
    age?:number; // age is optional
    [propname:string]:any; // this is flexible
    greet(lastName:string):void;
}

interface AgedPerson implements NamedPerson
{
    age:number; // age here is now mandatory
}

let MinePerson:NamedPerson =
    {
        name:"Nikhil",
        age: 28,
        greet(lastName)
        {
            console.log('Hello' +lastName);
        }
    }

    console.log(MinePerson); // Here you can see that MinePerson needs to implement the properties, functions of both the interfaces

*/
//
// //-------------------------------------------------------------------------------------------------------------------------------------
//Interfaces does not compile into javascript, they are left out in the javascript code.
// Interfaces are used in typescript just to check the type compliance and they are ignored later while transpiling into js
