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
Object.defineProperty(exports, "__esModule", { value: true });
var CircleModule_1 = require("./CircleModule"); //this is the import syntax used for importing modules the functions or variables inside {curly braces} are imported. Here dont specify the .ts extension
var RectangleModule_1 = require("./RectangleModule");
console.log(CircleModule_1.CalculateCircumference(20));
console.log(RectangleModule_1.CalculateRectangleArea(20, 40));
