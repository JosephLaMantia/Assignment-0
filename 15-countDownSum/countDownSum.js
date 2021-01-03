class MySolution {
  countDownSum(num) { //recursive function that finds the sum of all numbers between a given num and 1, including both. The function repeats until the num reaches 1.
    if (num == 1) {   //the last num it could possibly be is 1, and if so, we just add that number.
      return 1;
    }
    if (num !== 0){                             // if anything but 1 and 0,
      return (num + this.countDownSum(num-1));  // we add the num to what we get when we run the fuction again, decrementing the num, and return it.
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;