function sumOfAllEvenNumbers(nums) {
  let count = 0;  // count of all even numbers in given array

  for(let i = 0; i < nums.length; i++){ //iterate through given array 
    if (nums[i] % 2 == 0){  // if, when divided by 2, remainder = 0, (if number is even)
      count++;              // add 1 to count
    }
  }

  return count; // return count of even numbers in given array
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;