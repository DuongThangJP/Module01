// let arr = prompt('Nhập vào chuỗi số: ').split('');
// let max = Number(arr[0]);
// for (let i = 1; i < arr.length; i++) {
//   if (max < Number(arr[i])) {
//     max = Number(arr[i]);
//   }
// }
// console.log(`Giá trị lớn nhất = ${max}`);

let arr = prompt("Nhập dãy số:").split(",").map(Number);
let max = arr[0];

for (let n of arr) {
  if (n > max) max = n;
}

alert(max);