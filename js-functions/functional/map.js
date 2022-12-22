const numbers = [1,2,3,4,5,6];

const resultNumber = numbers.map((item) => {
    return item * 2;
})

console.log(numbers ,resultNumber);

const students = [
    {name: 'Jake', score: 6.4 },
    {name: 'Susan', score: 8.6 },
    {name: 'Emma', score: 9.4 },
    {name: 'Peter', score: 9.1 },
];

const getScore = item => item.score;
const resultStudents =  students.map(getScore).map(Math.ceil)

console.log(resultStudents);
