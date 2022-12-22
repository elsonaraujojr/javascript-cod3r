const numbers = [1, 2, 3, 4, 5, 6];

const initialValue = 1;
const funcSum = (accumulator, currentValue) => accumulator + currentValue;

const total = numbers.reduce(
    funcSum,
    initialValue
);

// console.log(total);

// const formula = (total=0, values) => (total + values) % numbers.length; 
const sum = numbers.reduce(funcSum);
console.log('Media: ', sum / numbers.length);

const avg = (accumulator, element, index, array) => {
    if(index == array.length -1 ) {
        return (accumulator + element) / array.length;
    } else {
        return accumulator + element;
    }
}
const result = numbers.reduce(avg);
console.log('Media: ',result);