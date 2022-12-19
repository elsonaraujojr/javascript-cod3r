function logParams(a,b,c) {
    console.log(a,b,c)
}

logParams(1,2 )
logParams(1,2,3)
logParams(1,2,3,4,5)

function defaultParams(a,b,c=0) {
    console.log(a,b,c)
}

defaultParams(1,2 )
defaultParams(1,2,3)
defaultParams(1,2,3,4,5)

// spread/rest
function logNum(...num) {
    console.log(num);
    console.log('É um array: ', Array.isArray(num));
    for(let n of num) {
        console.log(n);
    }
}

logNum(1,2,3,4,5);

function sumAll(...num) {
    let total = 0;
    for(let n of num) {
        total += n;
    }
    return total;
}

console.log(sumAll(1,2,3));