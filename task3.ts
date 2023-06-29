// Function to print the first ten prime numbers
const printPrimes = (): void => {
    const primes: number[] = []; // Array to store prime numbers
    // Loop until the array has 10 prime numbers
    for (let num = 2; primes.length < 10; num++) {
      if (isPrimeFun(num)) {
        primes.push(num); // Add the prime number to the array
      }
    }
    // Iterate through the array of prime numbers and print each number
    primes.forEach((prime) => {
      console.log(prime);
    });
  };
  
  // Function to check if a number is prime
  const isPrimeFun = (num: number): boolean => {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      // Check if the number is divisible by any number from 2 to its square root
      if (num % i === 0) {
        return false; // If divisible, it is not a prime number
      }
    }
    return num > 1; // Return true if the number is greater than 1 (prime), otherwise false
  };
  
  // Call the function
  printPrimes()