
// BÀI 1: Đếm từ 1 → 100, đến 99 thì báo hoàn thành

for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i === 99) {
        alert("Đã hoàn thành đến 99!");
    }
}



// BÀI 2: Kiểm tra nhiệt độ

let temp = Number(prompt("Nhập nhiệt độ hiện tại:"));

if (temp > 100) {
    alert("Nhiệt độ quá cao, hãy giảm nhiệt độ!");
} else if (temp < 20) {
    alert("Nhiệt độ quá thấp, hãy tăng nhiệt độ!");
} else {
    alert("Nhiệt độ bình thường.");
}


// BÀI 3: Hiển thị 20 số Fibonacci đầu tiên

let f1 = 0, f2 = 1;

console.log(f1);
console.log(f2);

for (let i = 3; i <= 20; i++) {
    let next = f1 + f2;
    console.log(next);
    f1 = f2;
    f2 = next;
}


// BÀI 4: Tìm số đầu tiên trong Fibonacci chia hết cho 5

let a = 0, b = 1;

while (true) {
    let next = a + b;
    if (next % 5 === 0) {
        alert("Số Fibonacci đầu tiên chia hết cho 5 là: " + next);
        break;
    }
    a = b;
    b = next;
}


// BÀI 5: Tổng 20 số Fibonacci đầu tiên

let x = 0, y = 1;
let sum = x + y;

for (let i = 3; i <= 20; i++) {
    let next = x + y;
    sum += next;
    x = y;
    y = next;
}

alert("Tổng 20 số Fibonacci đầu tiên = " + sum);



// BÀI 6: Tổng 30 số chia hết cho 7 đầu tiên

let count = 0;
let total = 0;
let num = 1;

while (count < 30) {
    if (num % 7 === 0) {
        total += num;
        count++;
    }
    num++;
}

alert("Tổng 30 số chia hết cho 7 đầu tiên = " + total);



// BÀI 7: FizzBuzz từ 1 → 100

for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
