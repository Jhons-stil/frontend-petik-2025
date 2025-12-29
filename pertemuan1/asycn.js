/**
 * Promise teradapat 3 status :
 * 1. pending (tertunda)
 * 2. resolve (diterima)
 * 3. Reject (ditolak)
 *  
 */
// const rebusAir = (callback) => {
//     setTimeout(() => {
//         console.log("Rebus air");
//         callback()
//     }, 3000);
// };

// const masakMie = (callback) => {
//     setTimeout(() => {
//         console.log("Masak mie");
//         callback()
//     }, 2000);
// }

// const makanMie = () => {
//     setTimeout(() => {
//         console.log("Makan mie");
//     }, 4000);
// };

// rebusAir(() => {
//     masakMie(() => {
//         makanMie(() => {
//             console.log("Selesai");
            
//         })
//     })
// });
const rebusAir = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve("Rebus Air") 
        }, 3000);
    })
};

const masakMie = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve("Masak Mie")
        }, 2000);
    })
};

const makanMie = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Makan Mie");
        }, 4000);
    })
};

// rebusAir()
// .then((outRebus) => {
//     console.log(outRebus);
//     return masakMie();
// }).then((outMasak) => {
//     console.log(outMasak);
//     return makanMie();
// }).then((outMakan) => {
//     console.log(outMakan);
// }).catch((err) => {
//     console.log(`Gagal ${err}`);
// })

async function buatMie() {
    try {
        const outRebus = await rebusAir();
        console.log(outRebus);

        const outMasak = await masakMie()
        console.log(outMasak);

        const outMakan = await makanMie()
        console.log(outMakan);
    } catch (error) {
        console.log(`Gagal ${error}`);
    }
};
buatMie();