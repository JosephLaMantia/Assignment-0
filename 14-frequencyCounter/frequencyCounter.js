function frequencyCounter(word) {

  // had trouble with this.


  let freq = {

  }



  let arr = [];
  for(let i = 0; i < word.length; i++){
    let count = 0;
    for(let j = 0; j < word.length; j++){
      if(word[j] == word[i]){
        count++;
      }
      let str = "\"" + word[i] + "\": " + count;
      arr.push(str);
    }
  }
  return arr;
}

// Do not edit this line;
module.exports = frequencyCounter;