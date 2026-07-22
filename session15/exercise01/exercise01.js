const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let books = []; 

function addBook() {
    rl.question("ID: ", id => {
        rl.question("Tên sách: ", name => {
            rl.question("Tác giả: ", author => {
                rl.question("Năm xuất bản: ", year => {

                    books.push({ id, name, author, year: Number(year) });
                    console.log("✔ Đã thêm sách!\n");
                    menu();
                });
            });
        });
    });
}

function showBooks() {
    if (books.length === 0) {
        console.log("Danh sách trống!\n");
    } else {
        console.log("=== DANH SÁCH SÁCH ===");
        books.forEach(b => {
            console.log(`${b.id} - ${b.name} - ${b.author} - ${b.year}`);
        });
        console.log();
    }
    menu();
}

function searchBook() {
    rl.question("Nhập từ khóa: ", key => {
        key = key.toLowerCase();
        const result = books.filter(b => b.name.toLowerCase().includes(key));

        if (result.length === 0) {
            console.log("❌ Không tìm thấy sách!\n");
        } else {
            console.log("=== KẾT QUẢ ===");
            result.forEach(b => console.log(`${b.id} - ${b.name}`));
            console.log();
        }
        menu();
    });
}

function deleteBook() {
    rl.question("Nhập ID cần xóa: ", id => {
        const index = books.findIndex(b => b.id === id);

        if (index === -1) {
            console.log("❌ ID không tồn tại!\n");
        } else {
            books.splice(index, 1);
            console.log("✔ Đã xóa sách!\n");
        }
        menu();
    });
}

function menu() {
    console.log("--- QUẢN LÝ SÁCH ---");
    console.log("1. Thêm sách mới");
    console.log("2. Hiển thị danh sách sách");
    console.log("3. Tìm kiếm sách theo tên");
    console.log("4. Xóa sách theo ID");
    console.log("5. Thoát chương trình");

    rl.question("Nhập lựa chọn: ", choice => {
        switch (choice) {
            case "1": addBook(); break;
            case "2": showBooks(); break;
            case "3": searchBook(); break;
            case "4": deleteBook(); break;
            case "5":
                console.log("Đã thoát chương trình.");
                rl.close();
                break;
            default:
                console.log("❌ Lựa chọn không hợp lệ!\n");
                menu();
        }
    });
}

menu();

// let books = [];


// function addBook(id, name, author, year) {
//     books.push({ id, name, author, year });
// }


// function showBooks() {
//     books.forEach(b => console.log(`${b.id} - ${b.name} - ${b.author} - ${b.year}`));
// }


// function searchBook(keyword) {
//     const key = keyword.toLowerCase();
//     const result = books.filter(b => b.name.toLowerCase().includes(key));
//     console.log(result);
// }


// function deleteBook(id) {
//     const index = books.findIndex(b => b.id === id);
//     if (index !== -1) books.splice(index, 1);
// }

// addBook("B01", "Lập trình JS", "Nguyễn A", 2020);
// addBook("B02", "NodeJS cơ bản", "Trần B", 2021);

// showBooks();

// searchBook("js");

// deleteBook("B01");

// showBooks