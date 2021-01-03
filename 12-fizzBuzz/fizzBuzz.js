function fizzBuzz(start, end) {
  let arr = []; // create array to store values
  for(let i = start; i <= end; i++){  //iterate from start to end
     if (i % 15 == 0){      //if divisible by 3 & 5 (15), "FizzBuzz"
      arr.push("FizzBuzz");
    }
    else if (i % 3 == 0){   //if divisible by 3, "Fizz"
      arr.push("Fizz");
    }
    else if (i % 5 == 0){   //if divisible by 5, "Buzz"
      arr.push("Buzz");
    }
    else arr.push(i);       //if none of the above, push the value
  } 
  return arr; //return arr of values
}

// Do not edit this line;
module.exports = fizzBuzz;