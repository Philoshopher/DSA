// Check if the given number is strong number or not. (Using while loop)
// A number is strong if sum of the factorial of all the digits is iqual to the original number.
// Ex. 145 is strong is !1 + !4 + !5 = 145

function isStrong(num) {
  if (isNaN(num)) {
    console.log('invalid input!');
  } else {
    while (num > 0) {
      let n = 0;
      let fact = 1;
      n = Math.floor(num % 10);
      for (let i = 1; i == n; i++) {
        fact = fact * i;
      }
      let sum = sum + fact;
    }
  }
}
