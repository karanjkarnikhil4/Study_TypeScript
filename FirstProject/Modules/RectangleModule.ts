// here we need to export the function and we dont specify the namespaces
// modules and namespaces are completely different
/*
     export  function CalculateRectangleArea(width: number, height: number): number {
        return width * height;
    }
*/

export default function CalculateRectangleArea(width: number, height: number): number { // making this as the default export
    return width * height;
}