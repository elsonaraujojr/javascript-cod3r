// Anonymous function
// IIFE - Immediately Invoked Function Expression
(function (a,b,c) {
    let x = 3;
    console.log(`Result: ${a + b + c}`);
    console.log(x);
})(1,2,3);

((a,b,c) => {
    let x = 4;
    console.log(`Result: ${a + b + c}`);
    console.log(x);
})(1,2,3);