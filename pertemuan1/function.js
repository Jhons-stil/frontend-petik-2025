/**
 * function adalah blok kode yang dapat digunakan kembali
 * untuk melakukan tugas tertentu.
 * Macam-macam function :
 * 1. Function declaration
 * 2. Function expression
 * 3. Arrow function
 */

// 1. Function declaration

function sapa(nama) {
    console.log(`Halo ${nama}`);
}
sapa("Haikal");

// 2. Function expression
const salam = function(nama) {
    console.log(`Assalamualaikum ${nama}`);
}
salam("Gogon");

// 3. Arrow function
const ucap = (nama) => {
    console.log(`Selamat datang, ${nama}`);
};

ucap("Ucup");