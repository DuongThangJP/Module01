
// BÀI 1: Kiểm tra a có chia hết cho b

let a = Number(prompt("Bài 1 - Nhập số a:"));
let b = Number(prompt("Bài 1 - Nhập số b:"));

if (b === 0) {
    alert("Bài 1: Không thể chia cho 0!");
} else if (a % b === 0) {
    alert("Bài 1: a chia hết cho b");
} else {
    alert("Bài 1: a không chia hết cho b");
}



// BÀI 2: Kiểm tra tuổi vào lớp 10

let age = Number(prompt("Bài 2 - Nhập tuổi học sinh:"));

if (age >= 15) {
    alert("Bài 2: Đủ điều kiện vào lớp 10");
} else {
    alert("Bài 2: Không đủ điều kiện vào lớp 10");
}



// BÀI 3: Kiểm tra số lớn hơn hay nhỏ hơn 0

let n = Number(prompt("Bài 3 - Nhập một số nguyên bất kỳ:"));

if (n > 0) {
    alert("Bài 3: Số lớn hơn 0");
} else if (n < 0) {
    alert("Bài 3: Số nhỏ hơn 0");
} else {
    alert("Bài 3: Số bằng 0");
}



// BÀI 4: Tìm số lớn nhất trong 3 số

let x = Number(prompt("Bài 4 - Nhập số thứ nhất:"));
let y = Number(prompt("Bài 4 - Nhập số thứ hai:"));
let z = Number(prompt("Bài 4 - Nhập số thứ ba:"));

let max = x;

if (y > max) max = y;
if (z > max) max = z;

alert("Bài 4: Số lớn nhất là " + max);



// BÀI 5: Xếp loại học lực

let test = Number(prompt("Bài 5 - Nhập điểm bài kiểm tra:"));
let mid = Number(prompt("Bài 5 - Nhập điểm thi giữa kỳ:"));
let final = Number(prompt("Bài 5 - Nhập điểm thi cuối kỳ:"));

let average = test * 0.2 + mid * 0.3 + final * 0.5;
let rank = "";

if (average >= 9) {
    rank = "Xuất Sắc";
} else if (average >= 8) {
    rank = "Giỏi";
} else if (average >= 6.5) {
    rank = "Khá";
} else if (average >= 5) {
    rank = "Trung Bình";
} else {
    rank = "Yếu";
}

alert(`Bài 5: Điểm trung bình: ${average.toFixed(2)} - Xếp loại: ${rank}`);
