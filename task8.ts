// Function to get the odd elements from an array
const getOddElement = (arr: number[]): number[] => {
  // filter function checks if the index is divisible by 2 or not, if not, return the element
  return arr.filter((element, index: number) => index % 2 !== 0);
};
// Example:
const arr1: number[] = [3, 6, 1, 66, 45, 22];
console.log(getOddElement(arr1));
// Output: [3, 1, 45]
