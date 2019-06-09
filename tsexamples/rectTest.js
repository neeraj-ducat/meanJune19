"use strict";
exports.__esModule = true;
// importing Rectangle class.
var rectangle_1 = require("./rectangle");
console.log('Creating some Rectangle objects...');
var r1 = new rectangle_1.Rectangle(5, 6);
var r2 = new rectangle_1.Rectangle(7, 8);
console.log(rectangle_1.Rectangle.counter + ' rectangles are created');
console.log("Dimension of r1:");
r1.display();
console.log("Dimension of r2:");
r2.display();
var a = r1.area();
console.log('Area of r1: ' + a);
console.log('Area of r2: ' + r2.area());
console.log('Perimeter of r1: ' + r1.perimeter());
console.log('Perimeter of r2: ' + r2.perimeter());
