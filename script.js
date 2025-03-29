let number = +prompt("Enter a Number");
function showPrimes(n) {
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      alert(i); // a prime
    }
  }
}

function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}
showPrimes(number);
