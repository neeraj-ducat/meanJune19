"use strict";
exports.__esModule = true;
var Rectangle = /** @class */ (function () {
    // object initializer
    function Rectangle(l, b) {
        this.length = l;
        this.breadth = b;
        Rectangle.counter++;
    }
    // object behaviour
    Rectangle.prototype.display = function () {
        console.log('Length: ' + this.length);
        console.log('Breadth: ' + this.breadth);
    };
    Rectangle.prototype.area = function () {
        return this.length * this.breadth;
    };
    Rectangle.prototype.perimeter = function () {
        return 2 * (this.breadth + this.length);
    };
    // class state
    Rectangle.counter = 0;
    return Rectangle;
}());
exports.Rectangle = Rectangle;
