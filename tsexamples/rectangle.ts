export class Rectangle {
 // object's state
 length: number;
 breadth: number;
 // class state
 static counter: number = 0;

 // object initializer
 constructor(l: number, b: number) {
     this.length = l;
     this.breadth = b;
     Rectangle.counter++;
 }
 // object behaviour
 display() {
     console.log('Length: '+this.length);
     console.log('Breadth: '+this.breadth);
 }
 area(): number {
   return this.length * this.breadth;
 }
 perimeter(): number {
     return 2 * ( this.breadth + this.length);
 }
}