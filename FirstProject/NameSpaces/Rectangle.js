"use strict";
var MyMath;
(function (MyMath) {
    function CalculateRectangleArea(width, height) {
        return width * height;
    }
    MyMath.CalculateRectangleArea = CalculateRectangleArea;
})(MyMath || (MyMath = {}));
