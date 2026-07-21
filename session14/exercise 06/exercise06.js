const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let books = [];

function addBook() {
    rl.question("Nhập ID: ", id => {
        rl.question("Nhập tên sách: ", name => {
            rl.question("Nhập tác giả: ", author => {
                rl.question("Nhập năm xuất bản: ", year => {

                    const book = {
                        id: id,
                        name: name,
                        author: author,
                        year: Number(year)
                    };

                    books.push(book);
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
            console.log(`ID: ${b.id}, Tên: ${b.name}, Tác giả: ${b.author}, Năm: ${b.year}`);
        });
        console.log();
    }
    menu();
}

function searchBook() {
    rl.question("Nhập từ khóa tìm kiếm: ", keyword => {
        const key = keyword.toLowerCase();
        const result = books.filter(b => b.name.toLowerCase().includes(key));

        if (result.length === 0) {
            console.log("❌ Không tìm thấy sách nào!\n");
        } else {
            console.log("=== KẾT QUẢ TÌM KIẾM ===");
            result.forEach(b => {
                console.log(`ID: ${b.id}, Tên: ${b.name}, Tác giả: ${b.author}, Năm: ${b.year}`);
            });
            console.log();
        }
        menu();
    });
}

function deleteBook() {
    rl.question("Nhập ID cần xóa: ", id => {
        const index = books.findIndex(b => b.id === id);

        if (index !== -1) {
            books.splice(index, 1);
            console.log("✔ Đã xóa sách!\n");
        } else {
            console.log("❌ Không tìm thấy ID!\n");
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

    rl.question("Nhập lựa chọn của bạn: ", choice => {
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

// // Thêm sách
// function addBook(id, name, author, year) {
//     books.push({ id, name, author, year });
//     console.log("Đã thêm sách!");
// }

// // Hiển thị danh sách
// function showBooks() {
//     if (books.length === 0) return console.log("Danh sách trống!");
//     books.forEach(b => {
//         console.log(`${b.id} - ${b.name} - ${b.author} - ${b.year}`);
//     });
// }

// // Tìm kiếm theo tên
// function searchBook(keyword) {
//     const key = keyword.toLowerCase();
//     const result = books.filter(b => b.name.toLowerCase().includes(key));

//     if (result.length === 0) return console.log("Không tìm thấy sách!");
//     result.forEach(b => console.log(`${b.id} - ${b.name}`));
// }

// // Xóa sách theo ID
// function deleteBook(id) {
//     const index = books.findIndex(b => b.id === id);
//     if (index === -1) return console.log("ID không tồn tại!");
//     books.splice(index, 1);
//     console.log("Đã xóa sách!");
// }

// addBook("B01", "Lập trình JS", "Nguyễn A", 2020);
// addBook("B02", "Học NodeJS", "Trần B", 2021);

// showBooks();

// searchBook("js");

// deleteBook("B01");

// showBooks();