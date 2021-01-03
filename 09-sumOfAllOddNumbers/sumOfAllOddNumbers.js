function sumOfAllOddNumbers(nums) {
  let count = 0;  // count of all odd numbers in given array

  for(let i = 0; i < nums.length; i++){ //iterate through given array 
    if (nums[i] % 2 == 1){  // if, when divided by 2, remainder = 1, (if number is odd)
      count++;              // add 1 to count
    }
  }

  return count; // return count of odd numbers in given array
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;