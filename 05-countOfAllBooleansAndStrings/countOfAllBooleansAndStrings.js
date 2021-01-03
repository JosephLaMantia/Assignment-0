function countOfAllBooleansAndStrings(arr) {
  let count = 0;  // counter for number of booleans or strings

  for(let i = 0; i < arr.length; i++){  //iterates through each element of given array
    if (typeof arr[i] === "boolean" || typeof arr[i] === "string") {  // checks if the type of the array element is a boolean or string
      count++;                          // if so, adds 1 to count
    }
  }

  return count; //return number of booleans and strings in given array
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;