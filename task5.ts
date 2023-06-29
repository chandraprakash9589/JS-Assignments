// Function to check if the sum of two numbers is less than 100
const numberLess100 = (num1: number, num2: number): boolean => {
    const sum: number = num1 + num2; // Calculate the sum of the two numbers
    return sum < 100; // Return true if the sum is less than 100, otherwise false
  };
  
  // Example 1:
  const result: boolean = numberLess100(40, 32);
  console.log(result);
  // Output: true
  
  // Example 2:
  const res2: boolean = numberLess100(40, 100);
  console.log(res2);
  // Output: false
  