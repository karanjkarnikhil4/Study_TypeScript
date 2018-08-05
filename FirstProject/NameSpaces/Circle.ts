//namespace can exist in more than one file for eg here same namespace that is Math is in Circle.ts and Rectangle.ts
// we need to export the functions or variables to use them outside the namespace. else they cannot be used outside the scope
// suppose we want to use PI variable originally present in Circle.ts in another file that is Rectangle.ts . although they are in same namespace still it is not possible without exporting them.

namespace  MyMath {

   export namespace MyCircle  // this is nested namespace // this should also be ezported to make it available outside the MyMath namespace
    {
        export const PI = 3.14;

        export function CalculateCircumference(diameter: number): number {
            return PI * diameter;
        }
    }
}