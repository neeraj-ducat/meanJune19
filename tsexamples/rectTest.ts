// importing Rectangle class.
import { Rectangle } from './rectangle';

console.log('Creating some Rectangle objects...');
let r1 = new Rectangle(5, 6);
let r2 = new Rectangle(7, 8);
console.log(Rectangle.counter+' rectangles are created');
console.log("Dimension of r1:");
r1.display();
console.log("Dimension of r2:");
r2.display();
let a = r1.area();
console.log('Area of r1: '+a);
console.log('Area of r2: '+r2.area());
console.log('Perimeter of r1: '+r1.perimeter());
console.log('Perimeter of r2: '+r2.perimeter());