function countOfAllBooleans(arr) {
  let count = 0;  // counter for number of booleans

  for(let i = 0; i < arr.length; i++){  //iterates through each element of given array
    if (typeof arr[i] === "boolean") {  // checks if the type of the array element is a boolean
      count++;                          // if so, adds 1 to count
    }
  }

  return count; //return number of booleans in given array
}

// Do not edit this line;
module.exports = countOfAllBooleans;