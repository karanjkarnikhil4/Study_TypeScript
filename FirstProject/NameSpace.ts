// simple namespace example.
//


namespace MineMath {

    export const PI = 3.14;

    export function CalculateCircumference(diameter: number): number {  //remember we need to export the function or variables to use them outside the name space.
        return PI * diameter;
    }


    export function CalculateRectangleArea(width: number, height: number): number {
        return width * height;
    }
}


console.log(MineMath.CalculateCircumference(20))               // Here we are  using the function from the MineMath namespace
console.log(MineMath.CalculateRectangleArea(20, 40))

