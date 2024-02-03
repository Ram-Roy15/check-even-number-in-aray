const numbers = [
  17, 15, 14, 13, 11, 10, 43, 33, 223, 64, 34, 22, 23, 32, 54, 45, 34, 43, 98,
  234,
];

function evenNumbers(numbers) {
  evenNum = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      evenNum.push(number);
    }
  }
  let sum = 0;
  for (const num of evenNum) {
    sum = sum + num;
  }
  const count = evenNum.length;
  const avg = sum / count;
  return avg;
}

const even = evenNumbers(numbers);
console.log(even);
