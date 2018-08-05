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
function greetPerson(person) {
    console.log("hello " + person.name);
}
var Person_1 = {
    name: 'Nikhil',
    age: 28,
};
var Person_2 = {
    name: 'Nikhil',
    age: 28,
    greet: function (lastname) {
        console.log('Hello' + lastname);
    },
    address: "Pune",
};
//   greetPerson(Person_1) ; // this will not work as the Person_1 does not contain the greet method
greetPerson(Person_2); // this will  work as the Person_2  contains the greet method
Person_2.greet('Anything');
