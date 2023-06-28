const printFirstTenPrimes = () => {
    const primes = [];
  
    for (let num = 2; primes.length < 10; num++) {
      if (isPrime(num)) {
        primes.push(num);
      }
    }
  
    primes.forEach((prime) => {
      console.log(prime);
    });
  };
  
  const isPrime = (num) => {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    
    return num > 1;
  };
  
  printFirstTenPrimes();
  