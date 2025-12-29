
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("fizz");
//     } else if (i % 3 === 0) {
//         console.log("fizz")
//     } else if (i % 5 === 0) {
//         console.log("buzz");
        
//     }else{
//         console.log(i);
        
//     }
// }

for(let i = 1; i < 100; i++){
    let habisDibagi;
    if (i % 3 === 0) habisDibagi = "fizz";
    if (i % 5 === 0) habisDibagi = "Buzz";
    if (i % 3 === 0 && i % 5 === 0) habisDibagi = "fizzbuzz";
     console.log(habisDibagi || i);
     
}