// Sum of all the digits in the given number value using while loop
// for ex. n = 1234 the ans ==  1 + 2+ 3+ 4 = 10

function getSum(n) {
  if (isNaN(n)) {
    console.log('Invalid Input!!');
  } else {
    let ans = 0;
    while (n > 0) {
      let tmp = 0;
      tmp = +Math.floor(n % 10);
      ans = ans + tmp;
      n = Math.floor(n / 10);
    }
    console.log(ans);
  }
}

getSum(1234); // Pass a valid number as an argument
