// console.log("1. Marcel ke resto");
// console.log("2. Marcel pesan makanan banyak");
// console.log("3. Nando ke resto");
// console.log("4. Nando ke pesan manakan dikit");

// setTimeout(() => {
//   console.log("5. Pesanan marcel siap");
// }, 2000);

// console.log("6. Pesanan nando siap");

const fs = require("fs"); // commonjs

// const villages = fs.readFileSync("./data/villages.json", "utf-8");
// const cities = fs.readFileSync("./data/cities.json", "utf-8");
// console.log(cities, villages);

// fs.readFile("./data/villages.json", "utf-8", (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("Baca data villages selesai");
//     fs.readFile("./data/cities.json", "utf-8", (err, data) => {
//       if (err) {
//         console.error(err);
//       } else {
//         console.log("Baca data cities selesai");
//       }
//     });
//   }
// });

// fs.promises
//   .readFile("./data/villages.json", "utf-8")
//   .then((data) => {
//     console.log("Baca data villages selesai");
//     return fs.promises.readFile("./data/cities.json", "utf-8");
//   })
//   .then((data) => {
//     console.log("Baca data cities selesai");
//   })
//   .catch((err) => {
//     console.log(err.message);
//   })
//   .finally(() => {
//     console.log("Selesai");
//   });

// async function fetchData() {
//   const villages = await fs.promises.readFile("./data/villages.json", "utf-8");
//   console.log("Baca data villages selesai");
//   const cities = await fs.promises.readFile("./data/cities.json", "utf-8");
//   console.log("Baca data cities selesai");
// }

// fetchData();

// function add(a, b, cb) {
//   setTimeout(() => {
//     const result = a + b;
//     cb(result);
//   }, 1000);
// }

function add(a, b) {
  return new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b)) {
      reject(new Error("Input harus number"));
    }

    setTimeout(() => {
      const result = a + b;
      resolve(result);
    }, 1000);
  });
}

add(1, "a")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err.message);
  });
