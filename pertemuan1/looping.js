/**
 * Looping for :
 * -nilai awal
 * -nilai akhir/kondisi akhir
 * /increment/decrement
 */

for(let i = 0; i < 10; i++) {
    console.log(`Looping ke-${i}`);
}
for(let i = 10; i > 0; i--) {
    console.log(`Looping ke-${i}`);
}

/**
 * Looping while :
 * menjalankan kode selama kondisi terpenuhi
 * dicek dulu baru di jalankan
 */

let nilai = 0 ;
while (nilai < 5) {
    console.log(nilai);
    nilai++;
}

/**
 * Looping do while
 * menjalankan kode selama kondisi terpenuhi
 * dijalankan dulu baru di cek
 */
let password = "admin123"
let input = prompt("Masukan password");
do {
    input
} while (input)