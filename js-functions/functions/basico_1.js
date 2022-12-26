let a = 4;
console.log(a);

//Function declaration
function bomDia() {
    console.log('Bom dia !!!');
}

bomDia();

// Function expression
const boaTarde = function () {
    console.log('Boa tarde !!!');
}

boaTarde();
let x = boaTarde(); // undefined
console.log(x);

function sum(a, b=2) {
    return a + b;
}

let result = sum(1,2);
console.log(result);

result = sum(1, 2, 3, 4);
console.log(result);

result = sum(1);
console.log(result);


result = sum(1);
console.log(result);