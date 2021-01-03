function sumOfMinimumAndMaximum(nums) {

  let min = nums[0];  //keep track of min
  let max = nums[0];  //keep track of max
  for(let i = 0; i < nums.length; i++){ //iterate through given array
    if (nums[i] < min){ //if element is less than min, replace it
      min = nums[i];
    }
    if (nums[i] > max){ //if element is greater than max, replace it
      max = nums[i];
    } 
  }
  return min + max; //return smallest element + largest element
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;