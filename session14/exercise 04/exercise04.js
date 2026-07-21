const original = {
    name: "Bob",
    age: 30,
};
const copy = { ...original };
copy.name = "Sakura";
console.log("Original:", original);
console.log("Copy:", copy);