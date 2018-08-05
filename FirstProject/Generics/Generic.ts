/*
function echo(data:any)
{
    return data;
}

console.log(echo("Nikhil").length); // here the ide does not suggest the length as it doesnt know the return type.
console.log(echo(27).length); // here the ide does not throw compile error , when executed in browser it is undefined
console.log(echo({name:"Nikhil",age:27}).length); // here the ide does not throw compile error , when executed in browser it is undefined

//would'nt it be nice if we get compile time errors for this, this can be achieved using generics

*/
//-------------------------------------------------------------------------------------------------------------------------------------
//Better way of writing above method using Generics
/*
function echo<T>(data:T)
{
    return data;
}

console.log(echo("Nikhil").length); // here the ide does  suggest the length as it  knows the return type.
console.log(echo(27).length); // here the ide throw compile error as it know which type to expect
console.log(echo({name:"Nikhil",age:27}).length); // here the ide throw compile error as it know which type to expect

///in the above code it it inferring the type from the passed argument but we can also state that explicitly as shown below

console.log(echo<string>("Nikhil").length); // here the ide does  suggest the length as it  knows the return type.
console.log(echo<string>(27)); // here the ide throw compile error as it is expecting the string paramter instead of number as we have explicitly defined the type here
type complex ={name:string,age:number};

console.log(echo<complex>({name:"Nikhil",age:27}));

console.log(echo<complex>({name:"Nikhil"})); // this will not work as it is not of type complex
*/
//-------------------------------------------------------------------------------------------------------------------------------------
//Built in Generic Types Arrays
/*
//var numberArray:Array<number> =[10,20,30,40,"Hi"] this will not work as the type here has been defined as number
var array = [10,20, 40,"Hi" ]; // this is possible as the array. now this array can hold string as well as integers type

var myArray:Array<number> =[10,20,30,40];
myArray.push(70);
//array.push("30"); not possible as the array type is number.
console.log(myArray);
*/

//-------------------------------------------------------------------------------------------------------------------------------------
//Generic Types and Arrays Example
/*
function PrintAll<T>(args:T[])
{
    args.forEach(function(element,index,array)
    {
        console.log(element);
    })
}

PrintAll<string>(['Apple','Bananana','Chickoo']);
*/
//-------------------------------------------------------------------------------------------------------------------------------------
//Generic Type
/*
function Echo <T>(value:T)
{
    return value;
}

function numberEcho (value:number)
{
    return value;
}


//const echo:<T>(data:T)=>T=numberEcho; // this is not possible as numberEcho is not of generic type
const echo:<T>(data:T)=>T=Echo; // this is possible as Echo is of generic type
*/
//-------------------------------------------------------------------------------------------------------------------------------------
//Generic Class
// the below is the simple generic class
/*
class SimpleGenericClass
{
    firstNumber;
    secondNumber;

    Calculate()
    {
        return this.firstNumber*this.secondNumber;
    }
}

let myclass=new SimpleGenericClass();
myclass.firstNumber=10;
myclass.secondNumber=20;

console.log(myclass.Calculate());
*/
//-------------------------------------------------------------------------------------------------------------------------------------
//Now lets add generic types to the class

class SimpleGenericClass<T>
{
    firstNumber:T;
    secondNumber:T;

    Calculate()
    {
       // return this.firstNumber*this.secondNumber; this gives complile error saying  The left-hand side of an arithmetic operation must be of type 'any', 'number' or an enum type.
        return +this.firstNumber * +this.secondNumber; //we had to use + sign in front of the variable to remove the above error // Now it works
    }
}
let myclass1=new SimpleGenericClass<number>();
myclass1.firstNumber=10;
//myclass1.secondNumber="30"; // this is not  possible as the type is specifed

let myclass2=new SimpleGenericClass();
myclass2.firstNumber=10;
//myclass2.secondNumber="30";
myclass2.secondNumber=true; // this is  possible , let us look how we can solve this problem using contraints


console.log(myclass2.Calculate())

//-------------------------------------------------------------------------------------------------------------------------------------
//Using Constraints
/*
class GenericClass<T extends number|string> // here we are specifying that the type can be either number or string
{
    number1:T
    number2:T
    Calculate()
    {
        return +this.number1 * +this.number2;
    }
}

let genericClass=new GenericClass()
genericClass.number1=10;
genericClass.number1="30";
//genericClass.number2=true; this is not possible as the type should be either string or number as specified above

console.log(genericClass.Calculate());
*/