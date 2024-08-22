const fs = require("fs");

// const data = fs.readFileSync("./data/cities.json");
// console.log(data);

// nested callback
// callback hell
fs.readFile("./data/cities.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    data = JSON.parse(data);
    console.log(`1. Selesai baca data cities ${data.length}`);
    fs.readFile("./data/provinces.json", "utf-8", (err, data) => {
      if (err) {
        console.log(err.message);
      } else {
        data = JSON.parse(data);
        console.log(`2. Selesai baca data provinces ${data.length}`);
        fs.readFile("./data/villages.json", "utf-8", (err, data) => {
          if (err) {
            console.log(err.message);
          } else {
            data = JSON.parse(data);
            console.log(`3. Selesai baca data villages ${data.length}`);
          }
        });
      }
    });
  }
});

function readFile(path, encoding, cb) {
  // baca data....
  cb(err, data);
}
