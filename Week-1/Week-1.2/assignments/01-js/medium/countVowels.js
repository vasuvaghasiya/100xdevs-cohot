/*
  Implement a function `countVowels` that takes  a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

module.exports = countVowels;

function countVowels(str) {
  // let count = 0;
  // for(let s of str){
  //   if( s=='a' || s=='e'|| s=='i' || s=='o' || s=='u'|| s=='A' || s=='E' || s=='I'|| s=='O' ||  s=='U'){
  //     count++;
  //   }
  // } 

  
  // The g flag stands for global, which means it will find all matches rather than stopping after the first one. 
  const lowerCaseStr = str.toLowerCase();
  /*
  || []: The || (logical OR) operator is used here to handle cases where there are no matches. If there are no 
  matches (the result is null), it will be replaced with an empty array [].
  */

  const countVowel = (lowerCaseStr.match(/[aeiou]/g) || []).length;
  return countVowel;
}

const result = countVowels("AieoU");
console.log(`Number of vowels ${result}`);
