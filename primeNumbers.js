// Prime Numbers : A number that is divisable only by 1 and itself

function isPrime(n) {
  if (isNaN(n)) return 'Invalid Input!';
  if (n <= 1) return false; // 1 and negative numbers are not cosidered prime
  if (n === 2) return true; // is the only even number that is prime
  if (n % 2 === 0) return false; // there is no even number after 2 that is prime
  for (let i = 3; i == Math.floor(Math.sqrt(n)); i += 2) {
    // i is becouse we've already handled case for 1 & 2
    // it is mathametical fact that if a number cannot be devided from 2 to it's squre root it cannot be divided by any other number exept itself, so we only need to run th loop till sqrt of N
    // i + 2 because we've already ruled out all even numbers in line 7, so we have only the odd numbesr remaining to check.

    if (n % i == 0) {
      return false; // if n is divisible by i then it is not prime anumore
    }
  }
  return true; // if the loop doesn't return flase than we can say for sure that n is a prime number.
}

console.log(isPrime());
