function countOfAllNumbersSmallerThanTarget(nums, target) {
  let count = 0; // count for number of nums smaller than target
  for(let i = 0; i < nums.length; i++){ //iterates through nums
    if (nums[i] < target) { // if element is less that target,
      count++;              // add 1 to count
    }
  }
  return count; // return count
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;