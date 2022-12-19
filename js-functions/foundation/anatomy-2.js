// Anonymous function
(function (a, b, c) {
    return a + b + c;
})

// Function expression
var x = 1
var sum =  function (a, b) {
    return a + b;
}

console.log(sum(8,8));

const anotherSum = sum
console.log(anotherSum(1,1));