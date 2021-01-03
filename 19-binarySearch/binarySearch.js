const sumOfMinimumAndMaximum = require("../11-sumOfMinimumAndMaximum/sumOfMinimumAndMaximum");

class MySolution {
  constructor() {
   this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {  // for some reason this doesnt work for all cases
    let low = 0;                         // set low
    let high = nums.length-1;            // and high
    let mid = Math.floor(low+high/2);   //and mid

    if (nums[mid] == target){ // check if mid value = target
      return true;            // if so return true
    }

    if (low == high){         //check if low = high (only 1 number remaining.)
      return false;           //if so false
    }
    
    if (nums[mid] > target){                    //if target is less than mid...
      let arr = [];                             //make new array
      for(let i = 0; i < mid; i++){             
        arr.push(nums[i]);                      //copy entries up until mid into new array
      }
      return this.binarySearch(arr, target);    //recursion
    }
    else{                                         //if target is more than mid...
      let arr = [];                               // create new array
      for (let i = mid; i < nums.length-1; i++){  
        arr.push(nums[i]);                        //copy everything from mid until the end of nums into new array
      }                                   
      return this.binarySearch(arr, target);      //recursion
    }

  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;