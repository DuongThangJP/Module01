// BÀI 1: Đảo ngược mảng ký tự

let arr1 = ['c', 's', 'c', '2', '6', '1'];
let reversed = arr1.reverse().join("");
console.log("Bài 1:", reversed); // 261csc



// BÀI 2: Đếm ký tự số trong mảng

let arr2 = ['a', '1', 'b', '5', 'c', '9'];
let countDigit = 0;

for (let ch of arr2) {
    if (!isNaN(ch)) countDigit++;
}

console.log("Bài 2:", countDigit); // 3



// BÀI 3: Đếm số ký tự trong chuỗi

let str = "Hello World";
console.log("Bài 3:", str.length); // 11



// BÀI 4: Kiểm tra hai chuỗi giống nhau

let s1 = "Hello";
let s2 = "hello";

if (s1.toLowerCase() === s2.toLowerCase()) {
    console.log("Bài 4: Hai chuỗi giống nhau");
} else {
    console.log("Bài 4: Hai chuỗi không giống nhau");
}



// BÀI 5: Thay '-' bằng '_' trong mảng

let arr3 = ['a', '-', 'b', '-', 'c'];

for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] === '-') arr3[i] = '_';
}

console.log("arr3:", arr3); 