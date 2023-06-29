const vowelCount = (str: string): number => {
    // Define a string of vowels
    const vowelList: string = "aeiouAEIO";
    // Initialize a count variable to store the vowel count
    let count: number = 0;
    // Iterate through each character of the input string
    for (let i = 0; i < str.length; i++) {
      // Check if the current character is a vowel by checking its index in the vowelList
      if (vowelList.indexOf(str[i]) !== -1) {
        // If the character is found in the vowelList, increment the count by 1
        count += 1;
      }
    }
    // Return the final count of vowels
    return count;
  };
  
  // Call the function
  console.log(vowelCount("chandrapakash"));
  // Output: 4
  