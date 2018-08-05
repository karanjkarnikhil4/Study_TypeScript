"use strict";
// simple namespace example.
//
var MineMath;
(function (MineMath) {
    MineMath.PI = 3.14;
    function CalculateCircumference(diameter) {
        return MineMath.PI * diameter;
    }
    MineMath.CalculateCircumference = CalculateCircumference;
    function CalculateRectangleArea(width, height) {
        return width * height;
    }
    MineMath.CalculateRectangleArea = CalculateRectangleArea;
})(MineMath || (MineMath = {}));
console.log(MineMath.CalculateCircumference(20)); // Here we are  using the function from the MineMath namespace
console.log(MineMath.CalculateRectangleArea(20, 40));
