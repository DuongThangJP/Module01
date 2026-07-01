// HIỂN THỊ 20 SỐ NGUYÊN TỐ ĐẦU TIÊN

// Hàm kiểm tra số nguyên tố
function isPrime(n) {
    if (n < 2) return false; 

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false; 
    }
    return true;
}


let count = 0;  
let number = 2;  

while (count < 20) {
    if (isPrime(number)) {
        console.log(number);
        count++;            
    }
    number++; 
}
