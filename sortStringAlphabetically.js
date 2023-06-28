const sortStringAlphabetically = (str) => {
    var charArray = str.split('');

    var sortedArray = charArray.sort();

    var sortedString = sortedArray.join('');

    return sortedString;
}
var inputString = "leena";

console.log(sortStringAlphabetically(inputString));

var inputString2 = "dcba";
console.log(sortStringAlphabetically(inputString2));