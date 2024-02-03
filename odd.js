function oddNumbers(numbers) {
  const oddNum = [];
  for (const num of numbers) {
    if (num % 2 === 1) {
      //   console.log(num);
      oddNum.push(num);
    }
  }

  let sum = 0;
  for (const number of oddNum) {
    sum = sum + number;
  }
  //   console.log(sum);
  const count = oddNum.length;
  const avg = sum / count;
  const result = avg.toFixed(2);
  const finallResult = parseFloat(result);
  //   console.log(typeof finallResultesult);
  return finallResult;
}

const numbers = [
  112, 34, 64, 7, 4, 64, 234, 24, 646, 6, 36, 34, 63, 7, 43, 65, 767, 23, 3445,
  34, 52, 7, 7, 3, 5, 2362, 5, 7, 3, 25, 62, 3, 7,
];
const chechNumbers = oddNumbers(numbers);
console.log(chechNumbers);
