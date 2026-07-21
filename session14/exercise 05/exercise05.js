let students = [];

function addStudent(name, age, id) {
    const student = {
        name: name,
        age: age,
        id: id
    };
    students.push(student);
    console.log("Đã thêm sinh viên!");
}

function showStudents() {
    console.log("=== Danh sách sinh viên ===");
    for (let i = 0; i < students.length; i++) {
        console.log(
            "ID:", students[i].id,
            "- Tên:", students[i].name,
            "- Tuổi:", students[i].age
        );
    }
}

function deleteStudent(id) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            students.splice(i, 1);
            console.log("Đã xóa sinh viên!");
            return;
        }
    }
    console.log("Không tìm thấy ID!");
}

addStudent("Thang", 20, "SV001");
addStudent("Lan", 21, "SV002");

showStudents();

deleteStudent("SV001");

showStudents();