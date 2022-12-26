function exec(fn, a ,b) {
    return fn(a, b)
}

const somarNoTerminal = (x,y) => console.log(x + y);
const subtrairNoTerminal = (x,y) => console.log(x - y);


exec(somarNoTerminal, 56, 38);
exec(subtrairNoTerminal, 182, 27);
