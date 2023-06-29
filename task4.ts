// Function to sort a string alphabetically
const sortStringAlphabateOrder = (str: string): string => {
    // Split the string into an array of characters
    const charArray = str.split('');
  
    // Sort the array of characters in alphabetical order
    const sortedArray = charArray.sort();
  
    // Join the sorted array of characters back into a string
    const sortedString = sortedArray.join('');
  
    // Return the sorted string
    return sortedString;
  };
  
  // Example 1:
  const inputStr: string = "leena";
  console.log( sortStringAlphabateOrder(inputStr));
  // Output: "aeeln"
  
  // Example 2:
  const inputStr2: string = "dcba";
  console.log( sortStringAlphabateOrder(inputStr2));
  // Output: "abcd"
  