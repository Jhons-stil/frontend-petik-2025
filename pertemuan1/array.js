/**
 * Array
 * membuat array bisa dengan : 
 * 1. []
 * 2. array()
 */
const fruits = ["Apel", "Anggur", "Jeruk"];
const animals = Array("Kucing", "Singa", "Elang");
// fruits.push("Mangga"); // nambah ke belakang
// animals.unshift("Kambing"); // nambah dari depan


// fruits.forEach((fruit) => {
//     console.log(fruit);
// });

// animals.forEach(animal => {
//     console.log(animal); 
// });

// fruits.shift(); // menghapus dari depan
// animals.pop(); // menghapus dari belakang

// fruits.forEach(element => {
//     console.log(element);
// });
// animals.forEach(element => {
//     console.log(element);
    
// });

const fruitsUpper = fruits.map(fruit => fruit.toUpperCase());
console.log(fruitsUpper);

const longNameFruits = fruits.filter((fruit) => fruit.length > 5);
console.log(longNameFruits);

const combinasi = [...fruits, ...animals];

const foundItems = combinasi.find((item) => item.toLowerCase() === "apel");
console.log(foundItems);

console.log(combinasi.includes("Singa"));


