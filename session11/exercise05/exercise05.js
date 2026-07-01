let weight = Number(prompt("Nhập cân nặng (kg):"));
let height = Number(prompt("Nhập chiều cao (m):"));

let bmi = weight / (height * height);

let classification = "";

if (bmi < 18.5) {
    classification = "Cân nặng thấp (gầy)";
} else if (bmi >= 18.5 && bmi <= 24.9) {
    classification = "Bình thường";
} else if (bmi >= 25 && bmi <= 29.9) {
    classification = "Tiền béo phì";
} else if (bmi >= 30 && bmi <= 34.9) {
    classification = "Béo phì độ I";
} else if (bmi >= 35 && bmi <= 39.9) {
    classification = "Béo phì độ II";
} else {
    classification = "Béo phì độ III";
}

alert(`BMI của bạn là: ${bmi.toFixed(2)}\nPhân loại: ${classification}`);
