// Function declaration

function sayHello() {
    console.log('Hello!!')
    return 'Return'
}

let x = sayHello();
console.log(x);


function sayHelloTo(name) {
    console.log(`Hello ${name}`)
    return 'Return'
}

let y = sayHelloTo('Elson');
console.log(y);

function returnHi() {
    return 'Hi!!!';
}
let greeting = returnHi();
console.log(greeting);
console.log(returnHi());

function returnHoTo(name) {
    return `Hi ${name}`;
}

console.log(returnHoTo('Elson to!!!'));