const numbers = [1,2,3,4,5,6];

const filterNumbers = numbers.filter(item => item % 2 == 0);
console.log(filterNumbers);

console.log(numbers.filter((item) => {
        return item % 2 == 0;
    })
);

const greaterThanZero = item => item > 0;
const greaterThanTen = item => item > 10;
const even = item => item % 2 === 0;

console.log(numbers.filter(item => item > 0));
console.log(numbers.filter(greaterThanZero));
console.log(numbers.filter(even));

const students = [
    {name: 'Jake', score: 6.4 },
    {name: 'Susan', score: 8.6 },
    {name: 'Emma', score: 9.4 },
    {name: 'Peter', score: 9.1 },
];

const evenScore = item => item.score >= 9;
const onlyScore = item => item.score;
const greaterStudents = students.filter(evenScore);
console.log(greaterStudents.map(onlyScore));
