function bomDia() {
    console.log('Bom dia');
}

const boaTarde = function () {
    console.log('Boa tarde');
}

function comparar(valor){
    if(typeof valor === 'number') {
        console.log(valor === valor.toString());
    } 
}

// Passar uma função como parametro para outra função.
function executarQualquerCoisa(fn) {
    if(typeof fn === 'function') {
        fn();
    } else {
        comparar(fn)
    }
}

executarQualquerCoisa(3);
executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaTarde);

// Retornar uma function apartir de uma outra function.
function potencia(base) {
    return function(expoente) {
        return Math.pow(base, expoente);
    }
}

// const bits8 = potencia(2, 8);
const potenciaDe2 = potencia(2);
console.log(potenciaDe2(8));
console.log(potencia(3)(4));