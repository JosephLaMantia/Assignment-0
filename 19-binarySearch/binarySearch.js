const sumOfMinimumAndMaximum = require("../11-sumOfMinimumAndMaximum/sumOfMinimumAndMaximum");

class MySolution {
  constructor() {
   this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    let low = nums[0];
    let high = nums[nums.length-1];
    let mid = Math.floor(low+high/2);

    if (nums[mid] == target){
      return true;
    }
    
    if (nums[mid] > target){
      let arr = [];
      for(let i = 0; i < mid; i++){
        arr.push(nums[i]);
      }
      return this.binarySearch(arr, target);
    }
    else{
      let arr = [];
      for (let i = mid; i < nums.length-1; i++){
        arr.push(nums[i]);
      }
      return this.binarySearch(arr, target);
    }

  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;