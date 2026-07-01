// BÀI 1: Chuyển độ C sang độ F

let c = Number(prompt("Bài 1 - Nhập độ C:"));
let f = c * 9/5 + 32;
alert("Bài 1: " + c + "°C = " + f + "°F");



// BÀI 2: Chuyển mét sang feet

let m = Number(prompt("Bài 2 - Nhập số mét:"));
let feet = m * 3.2808;
alert("Bài 2: " + m + " mét = " + feet + " feet");



// BÀI 3: Diện tích hình vuông

let a = Number(prompt("Bài 3 - Nhập cạnh a:"));
let squareArea = a * a;
alert("Bài 3: Diện tích hình vuông = " + squareArea);



// BÀI 4: Diện tích hình chữ nhật

let a4 = Number(prompt("Bài 4 - Nhập cạnh a:"));
let b4 = Number(prompt("Bài 4 - Nhập cạnh b:"));
let rectangleArea = a4 * b4;
alert("Bài 4: Diện tích hình chữ nhật = " + rectangleArea);

// BÀI 5: Diện tích tam giác vuông
let a5 = Number(prompt("Bài 5 - Nhập cạnh kề a:"));
let b5 = Number(prompt("Bài 5 - Nhập cạnh kề b:"));
let triangleArea = (a5 * b5) / 2;
alert("Bài 5: Diện tích tam giác vuông = " + triangleArea);



// BÀI 6: Giải phương trình bậc 1: ax + b = 0

let a6 = Number(prompt("Bài 6 - Nhập a:"));
let b6 = Number(prompt("Bài 6 - Nhập b:"));

if (a6 === 0) {
    if (b6 === 0) {
        alert("Bài 6: Phương trình vô số nghiệm");
    } else {
        alert("Bài 6: Phương trình vô nghiệm");
    }
} else {
    let x = -b6 / a6;
    alert("Bài 6: Nghiệm x = " + x);
}

// BÀI 7: Giải phương trình bậc 2: ax² + bx + c = 0

let a7 = Number(prompt("Bài 7 - Nhập a:"));
let b7 = Number(prompt("Bài 7 - Nhập b:"));
let c7 = Number(prompt("Bài 7 - Nhập c:"));

if (a7 === 0) {
    // chuyển về bậc 1
    if (b7 === 0) {
        alert("Bài 7: Phương trình vô nghiệm");
    } else {
        alert("Bài 7: Nghiệm x = " + (-c7 / b7));
    }
} else {
    let delta = b7*b7 - 4*a7*c7;

    if (delta < 0) {
        alert("Bài 7: Phương trình vô nghiệm");
    } else if (delta === 0) {
        let x = -b7 / (2*a7);
        alert("Bài 7: Phương trình có nghiệm kép x = " + x);
    } else {
        let x1 = (-b7 + Math.sqrt(delta)) / (2*a7);
        let x2 = (-b7 - Math.sqrt(delta)) / (2*a7);
        alert("Bài 7: x1 = " + x1 + ", x2 = " + x2);
    }
}

// BÀI 8: Kiểm tra số nhập vào có phải tuổi người hay không
// =======================
let age = Number(prompt("Bài 8 - Nhập một số nguyên:"));

if (age > 0 && age < 120) {
    alert("Bài 8: Đây là tuổi của một người");
} else {
    alert("Bài 8: Đây KHÔNG phải là tuổi của một người");
}
