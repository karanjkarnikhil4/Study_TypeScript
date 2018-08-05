//class with public, private and protected properties
//constructor without any access modifier
//constructor can also have public, private and protected parameters then it is not required to declare and assign the parameters to the properties. By default they are declared and assigned
// by default everything is public (property and function)
//when inside the object you have to use this keyword to access the functions or properties of an object
console.log("CLASSES")
 class Person  // access modifier cannot be applied on a class
{
    name:string; //by default everything is public so there name is public , we can also explicitly define it.
    private age:number =100; // properties can also be assigned here
    protected lastName: string;
    public address: string

    constructor(name:string,public gender:string) // gender is defined like this then there is no need to create a variable for gender and assign it , it is automatically declared an assigned and made public.
    {
        this.name=name; // always use this keyword to access properties and objects inside the object.
        this.lastName="Karanjkar";
    }

    setAge(age:number):void //functions can be defined without using the function keyword // by default functions are also public
    {
        this.age=age;
        this.ShowGender();
    }

    private ShowGender():void
    {
        console.log(this.age);
        console.log(this.gender);
    }

}

let person=new Person("Nikhil","Male");
person.address="Pune";

console.log(person.name,person.address);
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
console.log("INHERITANCE CONSTRUCTOR")

class Nikhil extends Person
{
    public job:string = "software engineer"; //adding extra fields here

    constructor(gender:string)
   {
       super("Nikhil",gender);
       this.lastName="Karanji";
   }

   public GetLastName():string
   {
       return this.lastName;
   }

   setAge(age:number) //overriding the method in the base class
   {
       super.setAge(age+1);
   }
}

let nikhil=new Nikhil("Male");

console.log(nikhil.name);
console.log(nikhil.address);
console.log(nikhil.GetLastName());
nikhil.setAge(29);
console.log(nikhil.job);

//-------------------------------------------------------------------------------------------------------------------------

//Using Getters and Setters

class Plant
{
    private _species:string = "DEFAULT";

    get Myspecies()  //the names of the getters and setters can be same or different // Even if they are same they dont throw erros
    {
        return this._species;
    }


   set Myspecies(value:string)
   {
       if(value.length>3)
       {
           this._species = value;
       }
       else{
           this._species="DEFAULT";
       }
   }


}

let myplant=new Plant()

myplant.Myspecies= "ABCD";

console.log(myplant.Myspecies)

//-------------------------------------------------------------------------------------------------------------------------







