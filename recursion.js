/** product: calculate the product of an array of numbers. */
//product([2, 3, 4])  > 24

//base case
//normal case

function product(nums) {
if(nums.length === 0) return 1;   //NEEDED TO USE 1...FOR 0 IT WILL ALWAYS BE 0, DUMBKOPF
return nums[0] * product(nums.slice(1));
}



/** longest: return the length of the longest word in an array of words. */
//base case
//normal case
//["hello", "hi", "hola"]  >  5
function longest(words) {
  if(words.length === 0) return 0;
  const firstWordLength = words[0].length;
  const longestRest = longest(words.slice(1));
  if(firstWordLength > longestRest) {
    return firstWordLength;
  } else {
    return longestRest;
  }
 }


/** everyOther: return a string with every other letter. */
//base case
//normal case
//everyOther("hello")  // "hlo"
function everyOther(str) {
  if(str.length === 0) return '';
  let firstLetter = str[0]
  let nextLetter = everyOther(str.slice(1), index + 1)
  if(index %2 === 0) {
    return firstLetter + nextLetter;
  } else {
    return next;
  }
  }


/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

  if (str.length <= 1) {
      return true;
  }


  if (str.charAt(0) === str.charAt(str.length - 1)) {
     
      return isPalindrome(str.substring(1, str.length - 1));
  }

  return false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, currentIndex = 0) {

  if (currentIndex >= arr.length) {
      return -1;
  }


  if (arr[currentIndex] === val) {
      return currentIndex;
  }

  
  return findIndex(arr, val, currentIndex + 1);
}
/** revString: return a copy of a string, but in reverse. */

function revString(str) {

  if (str === "") {
      return "";
  }

  return str.charAt(str.length - 1) + revString(str.substring(0, str.length - 1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringsArray = [];

  for (let key in obj) {
      if (typeof obj[key] === 'string') {
   
          stringsArray.push(obj[key]);
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {

          stringsArray = stringsArray.concat(gatherStrings(obj[key]));
      }
  }
return stringsArray;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

//barely got these last few...this one didn't make the cut....
function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
