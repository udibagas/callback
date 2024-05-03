const fs = require("fs");

// let villages = fs.readFileSync("./data/villages.json", "utf-8");
// villages = JSON.parse(villages);
// console.log(`Selesai membaca data desa = ${villages.length}`);

fs.readFile("./data/villages.json", "utf-8", (err, data) => {
  if (err) {
    return console.log(err.message);
  }

  data = JSON.parse(data);
  console.log(`1. Selesai membaca data desa = ${data.length}`);

  fs.readFile("./data/sub_districts.json", "utf-8", (err, data) => {
    if (err) {
      return console.log(err.message);
    }

    data = JSON.parse(data);
    console.log(`2. Selesai membaca data kecamatan = ${data.length}`);

    fs.readFile("./data/cities.json", "utf-8", (err, data) => {
      if (err) {
        return console.log(err.message);
      }

      data = JSON.parse(data);
      console.log(`3. Selesai membaca data kota = ${data.length}`);

      fs.readFile("./data/provinces.json", "utf-8", (err, data) => {
        if (err) {
          return console.log(err.message);
        }

        data = JSON.parse(data);
        console.log(`4. Selesai membaca data propinsi = ${data.length}`);
      });
    });
  });
});
