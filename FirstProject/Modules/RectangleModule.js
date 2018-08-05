"use strict";
// here we need to export the function and we dont specify the namespaces
// modules and namespaces are completely different
/*
     export  function CalculateRectangleArea(width: number, height: number): number {
        return width * height;
    }
*/
Object.defineProperty(exports, "__esModule", { value: true });
function CalculateRectangleArea(width, height) {
    return width * height;
}
exports.default = CalculateRectangleArea;
