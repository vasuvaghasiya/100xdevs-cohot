/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
module.exports = isPalindrome;


function isPalindrome(str) {
  const lowerCase = str.toLowerCase();
  const cleanStr = lowerCase.replace(/[^a-z]/g,'');
  const rev = lowerCase.split('').reverse().join('');
  return cleanStr===rev;
}


const result = isPalindrome("'Able, was I ere I saw Elba!'");
console.log(result);
