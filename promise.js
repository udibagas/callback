function add(a, b, cb) {
  if (typeof a !== "number" || typeof b !== "number") {
    const error = new Error("Input must be numbers");
    return cb(error, null);
  }

  setTimeout(() => {
    const result = a + b;
    cb(null, result);
  }, 1000);
}

function addPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      const error = new Error("Input must be numbers");
      return reject(error);
    }

    setTimeout(() => {
      const result = a + b;
      resolve(result);
    }, 1000);
  });
}

async function addAsync(a, b) {
  return a + b;
}

addAsync(1, 2).then((x) => {
  const y = x * 10;
  console.log(y);
});

// add(1, "2", (error, result) => {
//   if (error) {
//     console.log(error.message);
//   } else {
//     const x = result * result;
//     console.log(x);
//   }
// });

// addPromise(1, 2)
//   .then((result) => {
//     const x = result * result;
//     console.log(x);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
