// Function to reverse a string
function reverseStr(str: string): string {
    // Initialize an empty string to store the reversed string
    let newStr:string = "";
    // Iterate through each character of the input string in reverse order
    for (let i = str.length - 1; i >= 0; i--) {
        // Concatenate each character to the newStr variable
        newStr += str[i];
    }
    // Return the reversed string
    return newStr;
}

// Call the function 
console.log(reverseStr('chandraprakash'));
// Output: 'olleh'
