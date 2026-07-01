// Bài 1: In dãy Fibonacci
function fibonacci(n) {
    let a = 0, b = 1;
    let result = [];

    for (let i = 0; i < n; i++) {
        result.push(a);
        let next = a + b;
        a = b;
        b = next;
    }

    return result;
}

console.log("Bài 1 - Fibonacci:", fibonacci(10).join(" "));


// Bài 2: Tính giai thừa
function giaiThua(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log("Bài 2 - Giai thừa:", giaiThua(5));


// Bài 3: In tam giác vuông (4 hướng)

// Góc vuông dưới-trái
function tamGiacDuoiTrai(n) {
    let s = "";
    for (let i = 1; i <= n; i++) {
        s += "*".repeat(i) + "\n";
    }
    return s;
}

console.log("Bài 3 - Tam giác dưới-trái:\n" + tamGiacDuoiTrai(4));


// Góc vuông trên-trái
function tamGiacTrenTrai(n) {
    let s = "";
    for (let i = n; i >= 1; i--) {
        s += "*".repeat(i) + "\n";
    }
    return s;
}

console.log("Bài 3 - Tam giác trên-trái:\n" + tamGiacTrenTrai(4));


// Góc vuông dưới-phải
function tamGiacDuoiPhai(n) {
    let s = "";
    for (let i = 1; i <= n; i++) {
        s += " ".repeat(n - i) + "*".repeat(i) + "\n";
    }
    return s;
}

console.log("Bài 3 - Tam giác dưới-phải:\n" + tamGiacDuoiPhai(4));


// Góc vuông trên-phải
function tamGiacTrenPhai(n) {
    let s = "";
    for (let i = n; i >= 1; i--) {
        s += " ".repeat(n - i) + "*".repeat(i) + "\n";
    }
    return s;
}

console.log("Bài 3 - Tam giác trên-phải:\n" + tamGiacTrenPhai(4));
