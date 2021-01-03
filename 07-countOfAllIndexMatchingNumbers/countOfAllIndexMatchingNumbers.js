function countOfAllIndexMatchingNumbers(nums) {
  let count = 0; // count of all index matching numbers
  for (let i = 0; i < nums.length; i++){  //iterate through nums array
    if (nums[i] == i) { // if the element matches the index,
      count++;          // add 1 to count
    }
  }
  return count; // return count of index matching numbers in nums
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;