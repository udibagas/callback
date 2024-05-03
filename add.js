function add(a, b, cb) {
  let result;

  setTimeout(() => {
    result = a + b;
    cb(result);
  }, 500);
}

function multiply(a, b, cb) {
  let result;

  setTimeout(() => {
    result = a * b;
    cb(result);
  }, 500);
}

const [a, b] = process.argv.slice(2);
// nested callback
//! callback hell
add(+a, +b, (result) => {
  console.log(`Hasil penjumlahan = ${result}`);
  multiply(result, 5, (result) => {
    console.log(`Hasil perkalian = ${result}`);
    multiply(result, 5, (result) => {
      console.log(`Hasil perkalian = ${result}`);
      add(+a, +b, (result) => {
        console.log(`Hasil penjumlahan = ${result}`);
        multiply(result, 5, (result) => {
          console.log(`Hasil perkalian = ${result}`);
          multiply(result, 5, (result) => {
            console.log(`Hasil perkalian = ${result}`);
          });
        });
      });
    });
  });
});
