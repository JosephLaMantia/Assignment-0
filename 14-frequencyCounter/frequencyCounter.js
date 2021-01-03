function frequencyCounter(word) {

  let arr = {}; //create object

  for (let i = 0; i < word.length; i++) { //iterates through key,
    let key = word.charAt(i);             //so that we can check each value.

    if (arr[key]) {   //check if current key already exists. If so, add 1.
      arr[key]++;
    }
    else {            //if not, set it to 1.
      arr[key] = 1;
    }

  }
  return arr; //return object
}

// Do not edit this line;
module.exports = frequencyCounter;