// Sum of n natural numbers (Loop)

function sumOfNatural(num) {
  if (!Number.isInteger(num) || num < 0) {
    console.log('Invalid input!');
    return;
  }
  // Use formula for sum of first n natural numbers: n * (n + 1) / 2
  return (num * (num + 1)) / 2;
}
console.log(sumOfNatural(500));
