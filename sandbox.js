function kali5(number) {
  return number * 5;
}

function map(numbers, fn) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    const number = fn(numbers[i]);
    result.push(number);
  }

  return result;
}

const result = map([1, 2, 3, 4], (x) => x * 10);

console.log(result);
