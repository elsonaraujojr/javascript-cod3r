// somar(3)(4)(5);
function soma(a){
    return function(b) {
        return function (c) {
            return a + b + c;
        }
    }
}

console.log(soma(3)(4)(5));

// fn -> 3 * 7
// fn -> 3 + 7
// fn -> 3 - 7
// calcular(3)(7)(fn)

function calcular(x){
    return function (y) {
        return function (fn) {
            return fn(x,y)
        }
    } 
}

function subtrair(a,b) {
    return a - b;
}

function multiplicar(a,b) {
    return a * b;
}

function somar(a,b) {
    return a + b;
}

const r1subtrair =  calcular(10)(5)(subtrair);
const r1multiplicar =  calcular(10)(5)(multiplicar);
const r1somar =  calcular(10)(5)(somar);
console.log(r1subtrair)
console.log(r1multiplicar);
console.log(r1somar);