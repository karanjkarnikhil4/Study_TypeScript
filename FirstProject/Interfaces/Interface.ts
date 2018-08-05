
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
    name:string
    age:number
}

function greetPerson (person:NamedPerson)
{
    console.log(`hello ${person.name}`);  //here it will not throw complile error even if the person does'nt have a name associated with it. but use inteface as it can be implemented i.e derived by other classes or interfaces
}

function ChangeName(person:NamedPerson) //type checking like this can be used but then we have
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
