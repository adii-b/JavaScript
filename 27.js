let prime = [];

for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j <= i / 2; j++) {
    if (i % j == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    prime.push(i);
  }
}

console.log(prime);
