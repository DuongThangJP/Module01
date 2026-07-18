const numbers = [12, 5, 7, 20, 33, 8, 9, 14, 27, 40];

let sumOdd = 0;
let sumEven = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    sumEven += numbers[i];
  } else {
    sumOdd += numbers[i];
  }
}

alert("Tổng các số lẻ: " + sumOdd);
alert("Tổng các số chẵn: " + sumEven);

// const numbers = [12, 5, 7, 20, 33, 8, 9, 14, 27, 40];

// let sumOdd = 0, sumEven = 0;

// for (const n of numbers) {
//   n % 2 === 0 ? sumEven += n : sumOdd += n;
// }

// alert("Tổng lẻ: " + sumOdd);
// alert("Tổng chẵn: " + sumEven);