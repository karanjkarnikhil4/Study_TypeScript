"use strict";
//modules are more declarative and they specify the dependencies clearly and also dont pollute the global scope
//importing modules
// as native javascript does not support modules, we need to have a module loader to load it
// there are different types of module loaders like commonjs, amd etc. which is specified in tsconfig.json
// build using tsc in this folder and check the results // will not work in browser as it will contain require statements
// build using tsc Main.ts --outfile Main.js // will not compile
// build using tsc --outfile Main.js // will not compile
// Need to module loader
// Use system js module loader
// run ==> npm install Systemjs --save  // need to save this for the deployment as well not only for dev dependencies like the lite server
//-------------------------------------------------------------------------------------------------------------------------------------
/*
import {CalculateCircumference,PI} from './CircleModule'  //this is the import syntax used for importing modules the functions or variables inside {curly braces} are imported. Here dont specify the .ts extension
import {CalculateRectangleArea} from './RectangleModule'


console.log(CalculateCircumference(20))
console.log(CalculateRectangleArea(20, 40))
*/
//-------------------------------------------------------------------------------------------------------------------------------------
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importing using * and default importing
var Circle = __importStar(require("./CircleModule")); // here we are importing everything from Circle module and using the alias Circle
var RectangleModule_1 = __importDefault(require("./RectangleModule")); // here we can specify any name like Rectangle as the default one will be exported here
console.log(Circle.CalculateCircumference(20));
console.log(RectangleModule_1.default(20, 40)); // here we use the alias directly to call the function as the default one will be exported here
console.log(Circle.PI);
// Also look at NameSpaces_VS_Modules.PNG in this folder for all the differences between Modules and Namespaces
