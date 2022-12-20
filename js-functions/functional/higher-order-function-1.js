/*
* Function that operate on other function
* either by taking them as arguments or by
* retuning them, are called higher-order functions.
*/

function run(fn) {
  return `Result: ${fn()}`
}

function sayHello() {
  console.log('Hello!!!');
}

run(sayHello);

run(function () {
  console.log('Hi!!!');
})

const result = run(Math.random);
console.log(result);