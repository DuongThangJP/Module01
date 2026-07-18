// const numbers = [];
// for (let i = 0; i < 10; i++) {
//     numbers.push(Math.floor(Math.random() * 100));
// }
// console.log(numbers);

// const numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
// console.log(numbers);

const numbers = [...Array(10)].map(() => Math.floor(Math.random() * 100));
console.log(numbers);