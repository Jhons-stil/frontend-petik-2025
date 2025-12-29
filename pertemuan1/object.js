/**
 * Membuat object bisa dengan :
 * 1. {} 
 * 2. new object ()
 */

const user1 = {
    nama: "Ucup",
    age: 18,
    address: "Depok",
};

const user2 = new Object();
user2.nama = "Udin";
user2.age = 17;
user2.address = "Bogor";


for (const key in user1) {
    console.log(user1[key]);
    
}

console.log(user2.nama);


