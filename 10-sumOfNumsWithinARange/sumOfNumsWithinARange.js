function sumOfNumsWithinARange(nums, start, end) {
  let count = 0;  //counter for numbers within the range
  for(let i = 0; i < nums.length; i++){ //iterator for given array
    if(nums[i] >= start && nums[i] <= end){  //if the entry is between start and end,
      count++;                               //add 1 to count
    }
  }
  return count; //return count of numbers
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;