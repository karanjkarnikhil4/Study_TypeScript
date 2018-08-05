"use strict";
function greetPerson(person) {
    console.log("hello " + person.name); //here it will not throw complile error even if the person does'nt have a name associated with it
}
var Person_1 = {
    firstname: 'Nikhil'
};
greetPerson(Person_1);
greetPerson({ firstname: 'Nikhil', age: 28 });
//-------------------------------------------------------------------------------------------------------------------------------------
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
    console.log(`hello ${person.name}`);  //here it will not throw complile error even if the person does'nt have a name associated with it. but use inteface as it can be implemented i.e derived by other classes or interfaces
}

function ChangeName(person:Personi) //type checking like this can be used but then we have
{
    person.name = 'Apurva';
}

const Person_1=
    {
        firstname: 'Nikhil'
    }


greetPerson(Person_1);// this will not work as the expected type should contain the name property. will throw compile time error
ChangeName(Person_1);// this will not work as the expected type should contain the name property. will throw compile time error

*/
//-------------------------------------------------------------------------------------------------------------------------------------
/*
Interface NamedPerson
{
    name:string
}

function greetPerson (person:Personi)
{
    console.log(`hello ${person.name}`);  //here it will not throw complile error even if the person does'nt have a name associated with it. but use inteface as it can be implemented i.e derived by other classes or interfaces
}

function ChangeName(person:Personi) //type checking like this can be used but then we have
{
    person.name = 'Apurva';
}

const Person_1=
    {
        firstname: 'Nikhil'
    }


greetPerson(Person_1);// this will not work as the expected type should contain the name property. will throw compile time error
ChangeName(Person_1);// this will not work as the expected type should contain the name property. will throw compile time error
*/ 
