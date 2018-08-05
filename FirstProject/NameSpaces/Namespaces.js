//namespace can exist in more than one file for eg here same namespace that is Math is in Circle.ts and Rectangle.ts
// we need to export the functions or variables to use them outside the namespace. else they cannot be used outside the scope
// suppose we want to use PI variable originally present in Circle.ts in another file that is Rectangle.ts . although they are in same namespace still it is not possible without exporting them.
var MyMath;
(function (MyMath) {
    var MyCircle;
    (function (MyCircle) {
        MyCircle.PI = 3.14;
        function CalculateCircumference(diameter) {
            return MyCircle.PI * diameter;
        }
        MyCircle.CalculateCircumference = CalculateCircumference;
    })(MyCircle = MyMath.MyCircle || (MyMath.MyCircle = {}));
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function CalculateRectangleArea(width, height) {
        return width * height;
    }
    MyMath.CalculateRectangleArea = CalculateRectangleArea;
})(MyMath || (MyMath = {}));
//-------------------------------------------------------------------------------------------------------------------------------------
//javascript uses module loaders to modularize the js files
///NameSpaces and Modules in typescript
// MyMath is the namespace
// MyMath is in Circle.ts and Rectangle.ts
// if we specify Namespace.js in index.html as a script file. It does not work because Circle.js and Rectangle.js are not loaded by default in browser
// so solve the above problem we can load all the files in the correct order in the index.html. so we need to have 3 script elements which is cumbersome if the project gets large
// another way is to bundle all the files in one file.
// typescript Command to bundle all the files is as below
// tsc outfile NameSpaces.js Circle.ts Rectangle.ts NameSpaces.ts
// Here above the files are bundled according to the order specified.
// but it is hard to remember the order once the project becomes very complex with lot of files and functions. Hence every time
/*
console.log(MyMath.CalculateCircumference(20))
console.log(MyMath.CalculateRectangleArea(20, 40))
*/
//-------------------------------------------------------------------------------------------------------------------------------------
// we can also import the namesaces in this file using reference tags to resolve the dependencies as shown below
// we also need to use the command ==> tsc NameSpaces.ts --outfile NameSpaces.js
/*
///<reference path="Circle.ts"/>  //here we need to put the 3 slashes before reference
///<reference path="Rectangle.ts"/>
*/
/*
console.log(MyMath.CalculateCircumference(20))
console.log(MyMath.CalculateRectangleArea(20, 40))
*/
//-------------------------------------------------------------------------------------------------------------------------------------
// nested namespaces example
// we also need to use the command ==> tsc NameSpaces.ts --outfile NameSpaces.js here as well
///<reference path="Circle.ts"/>  //here we need to put the 3 slashes before reference
///<reference path="Rectangle.ts"/>
console.log(MyMath.MyCircle.CalculateCircumference(20)); //note that here we have used the MyCircle namespace to get to the CalculateCircumference method
console.log(MyMath.CalculateRectangleArea(20, 40));
//-------------------------------------------------------------------------------------------------------------------------------------
// nested namespaces alias using import example
// we also need to use the command ==> tsc NameSpaces.ts --outfile NameSpaces.js here as well
/*

///<reference path="Circle.ts"/>  //here we need to put the 3 slashes before reference
///<reference path="Rectangle.ts"/>

import Circle = MyMath.MyCircle;  //this import is different than module import

console.log(Circle.CalculateCircumference(20)) //here we have used import alias that is  Circle alias
console.log(MyMath.CalculateRectangleArea(20, 40))
*/
//-------------------------------------------------------------------------------------------------------------------------------------
//namespaces is for smaller applications as we have to remember all the references
//suppose if circle.ts needs another namespace to run then either circle.ts needs to reference it or it can also be referenced in NameSpaces.ts, Hence we need to findout all the references that are needed to run
// namespaces is not strictly declarative while modules are declarative
