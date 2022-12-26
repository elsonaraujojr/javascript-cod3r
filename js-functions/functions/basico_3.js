// Arrow function
// () => console.log('Feliz natal!!!'); -> function anonymous
const felizNatal =  () => console.log('Feliz natal!!!');
felizNatal();

const saudacao = name => `Fala ${name}!!!`
console.log(saudacao('Elson'));

const soma = (...numeros) => {
    console.log(Array.isArray(numeros));
    let total = 0;
    for(let start of numeros ) {
        total += start;
    }
    return total;
}

console.log(soma(1,2,3,4,5,6,7,8,9,10));
console.log(soma(1,2,3,4,5));
console.log(soma(6,7,8,9,10));

const portencia = base => exp => Math.pow(base, exp);
console.log(portencia(2)(8));

// this
Array.prototype.log = function() {
    console.log(this);
}
Array.prototype.ultimo = function() {
    console.log(this[this.length -1]);
}
Array.prototype.primeiro = function() {
    console.log(this[0]);
}

const numeros = [-300, 1, 2, 3, 500]
numeros.log();
numeros.ultimo();
numeros.primeiro();

