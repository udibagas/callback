// const genap = numbers.filter((el) => el % 2 == 0);
// console.log(genap);

function filter(numbers, fn) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (fn(numbers[i])) {
      result.push(numbers[i]);
    }
  }

  return result;
}

function map(numbers, callback) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    const el = callback(numbers[i]);
    result.push(el);
  }

  return result;
}

const numbers = [1, 2, 3, 4, 5]; // [10, 20, 30, 40, 50]
const numbers1 = [11, 21, 31, 41, 51];
// console.log(filterEvenNumber(numbers));
// console.log(filterOddNumber(numbers));
const result = filter(numbers, (number) => number % 2 == 0);
console.log(result);

// console.log(numbers.map((el) => el * 10));
// console.log(mapKali5(numbers));
console.log(map(numbers, (number) => number * 2));
