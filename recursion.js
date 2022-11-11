/** product: calculate the product of an array of numbers. */

function product(nums, count=0) {
  // base case
    // if num is 1 it is ignored
    // if num is 0 return 0

    if (count === nums.length) return 1
    return nums[count] * product(nums, count +1)

  if (count == nums.length) {
    console.log(total)
    return total
  } else {
    total = total * nums[count] 
    count++
    product(nums, count)

  }


  // do logic here
  



  // typical case

}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx=0, currentLongest=words[idx]) {
  while (idx < words.length -1) {

    if (words.length === 1) return words[0]
  
    if (idx === words.length -1) return currentLongest.length

    console.log(currentLongest)
    
    currentLongest.length > words[idx+1].length ? currentLongest = currentLongest : currentLongest = words[idx + 1]
    console.log(currentLongest)
    idx++
    longest(words, idx, currentLongest)

  }
  return currentLongest.length

}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx=0, newStr='') {
  if (idx >= str.length) return newStr;
  newstr += str[idx];
  return everyOther(str, idx + 2, newStr)


}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  let left = idx;
  let right = (str.length - 1) - idx;
  if (str[left] !== str[right]) return false;
  if (left >= right) return true;
  idx++
  return isPalindrome(str, idx)




}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
  if (idx === arr.length -1) return -1
  if (arr[idx] === val) return idx;

  // why does idx++ not work here
  // idx++
  
  return findIndex(arr, val, idx +1)


}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx=str.length - 1, newStr='') {

  if (newStr.length === str.length) return newStr
  newStr+=str[idx]


  return revString(str, idx-1, newStr)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  // This is from the solution, didn't quite get this one

  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  // console.log(r)
  
  // if (l > r) return -1;
  // // if (val < arr[l]) return -1;
  // // if (val > arr[r]) return -1;

  // let mid = Math.floor((r + l) / 2);
  // console.log(mid)
  // if (arr[mid] === val) return mid;
  // console.log(arr[mid])
  // if (arr[mid] > val) {
  //   return binarySearch(arr, val, l, mid - 1);
  // }
  // if (arr[mid < val]) {
  //   return binarySearch(arr, val, mid+1, r);
  // }

  // Not Sure Why the above code doesn't work when the logic is the same?

  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);


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
