// Function to check if a year is a leap year or not
const checkLeapyear = (year: number): void => {
    // Check the conditions for a leap year
    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
        // If the conditions are met, the year is a leap year
        console.log(year + ' is a leap year');
    } else {
        // If the conditions are not met, the year is not a leap year
        console.log(year + ' is not a leap year');
    }
}
// Prompt the user to enter a year
const year1 = prompt('Enter a year:');
// Call the checkLeapYear function with the input year and print the result
checkLeapyear(Number(year1));
