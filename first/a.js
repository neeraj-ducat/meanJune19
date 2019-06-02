function hello(name) {
    console.log('Hello, '+name);
}
console.log('hello function is defined.');
var helloInterval = setInterval(()=>{
    hello('Amit');
},2000);
console.log('hello is registered with setInterval()');
setTimeout(()=>{
    clearInterval(helloInterval);
    console.log('Interval is cleared');
},10000);