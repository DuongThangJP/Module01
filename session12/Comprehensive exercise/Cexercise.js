const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let userName = "";
let userAge = 0;

function showMenu() {
    console.log("\n===== MENU =====");
    console.log("1. Nhập tên người dùng");
    console.log("2. Nhập tuổi người dùng");
    console.log("3. In tên và tuổi");
    console.log("4. In bảng cửu chương");
    console.log("5. Kiểm tra số chẵn hay lẻ");
    console.log("6. Tính tổng từ 1 đến N");
    console.log("7. In các số trong một dãy");
    console.log("8. Kiểm tra số nguyên tố");
    console.log("9. Đảo ngược chuỗi");
    console.log("10. Thoát");
    console.log("================\n");
}

function ask(question) {
    return new Promise(resolve => rl.question(question, answer => resolve(answer)));
}

async function main() {
    while (true) {
        showMenu();
        let choice = await ask("Nhập lựa chọn: ");

        switch (choice) {

            case "1":
                userName = await ask("Nhập tên: ");
                console.log("Đã lưu tên:", userName);
                break;

            case "2":
                userAge = parseInt(await ask("Nhập tuổi: "));
                console.log("Đã lưu tuổi:", userAge);
                break;

            case "3":
                console.log(`Tên: ${userName || "(chưa nhập)"} - Tuổi: ${userAge || "(chưa nhập)"}`);
                break;

            case "4":
                let num = parseInt(await ask("Nhập số để in bảng cửu chương: "));
                for (let i = 1; i <= 9; i++) {
                    console.log(`${num} x ${i} = ${num * i}`);
                }
                break;

            case "5":
                let soChanLe = parseInt(await ask("Nhập số cần kiểm tra: "));
                console.log(soChanLe % 2 === 0 ? "Số chẵn" : "Số lẻ");
                break;

            case "6":
                let N = parseInt(await ask("Nhập N: "));
                let sum = (N * (N + 1)) / 2;
                console.log("Tổng từ 1 đến", N, "=", sum);
                break;

            case "7":
                let daySo = await ask("Nhập dãy số (cách nhau bởi dấu cách): ");
                let arr = daySo.split(" ").map(Number);
                console.log("Dãy số đã nhập:", arr.join(", "));
                break;

            case "8":
                let soNguyenTo = parseInt(await ask("Nhập số cần kiểm tra: "));
                let isPrime = true;

                if (soNguyenTo < 2) isPrime = false;
                else {
                    for (let i = 2; i <= Math.sqrt(soNguyenTo); i++) {
                        if (soNguyenTo % i === 0) {
                            isPrime = false;
                            break;
                        }
                    }
                }

                console.log(isPrime ? "Là số nguyên tố" : "Không phải số nguyên tố");
                break;

            case "9":
                let str = await ask("Nhập chuỗi: ");
                let reversed = str.split("").reverse().join("");
                console.log("Chuỗi đảo ngược:", reversed);
                break;

            case "10":
                console.log("Thoát chương trình...");
                rl.close();
                return;

            default:
                console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
        }
    }
}

main();
