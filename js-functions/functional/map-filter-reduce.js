const students = [
    {name: 'Jake', score: 6.4 },
    {name: 'Susan', score: 8.6 },
    {name: 'Emma', score: 9.4 },
    {name: 'Peter', score: 9.1 },
];

const greatStudent = item => item.score >= 9;
const getScore = item => item.score;
const avg = (accumulator, element, index, array) => {
    if(index == array.length -1 ) {
        return (accumulator + element) / array.length;
    } else {
        return accumulator + element;
    }
}

console.log(
    students
        .filter(greatStudent)
        .map(getScore)
        .reduce(avg)
);  