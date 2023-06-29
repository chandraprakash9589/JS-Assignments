// Function to capitalize the first letter of each word in a string
const capitalizeFirstLetter = (str: string): string => {
    // Convert the string into an array of words
    let words: string[] = str.split(" ");
  
    // Iterate through each word in the array
    for (let i = 0; i < words.length; i++) {
      // Capitalize the first letter of the word and combine it with the rest of the word
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
  
    // Join the words back into a string with spaces in between
    return words.join(" ");
  }
  
  // Call the function with the input string "today is a great day!"
  console.log(capitalizeFirstLetter("today is a great day!"));
  // Output: "Today Is A Great Day!"
  