/**
 * jika nilai > 90 = A
 * jika nilai > 70 = B
 * jika nilai > 60 = C
 * jika nilai < 60 = D
 * 
 */

const nilai = 80;
let grade;
if (nilai > 90 && nilai <= 100) {
    grade = "A";
    console.log("A");
} else if (nilai > 70 && nilai <= 90) {
    grade = "B"
    console.log("B");
} else if (nilai >= 60 && nilai <= 70) {
    grade = "C"
    console.log("C");
} else if (nilai < 60 && nilai >= 0) {
    grade = "D"
    console.log("D");
} else { 
    console.log("Nilai Tidak Valid");
};

switch (grade) {
    case "A":
        console.log("Sangat Baik");
        break;
    case "B":
        console.log("Baik");
        break;
    case "C":
        console.log("Cukup");
        break;
    case "D":
        console.log("Kurang Baik");
        break;
    default:
        "Grade tidak valid"
        break;
};

// operator ternery
const age = 22;
const status = age > 21 ? "Dewasa" : "Belum Dewasa";
console.log(status);
