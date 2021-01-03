function isPalindrome(word) {
  word = word.toLowerCase();  //sets given word to lowercase, to properly check values
  length = word.length;       //length of given word
  for(let i = 0; i < length/2; i++){        //iterates through half of given word,
    if (word[i] !== word[length - 1 - i]){  //checking to see if the entry matches the entry at the other end of the string,
      return false;                         // and if it doesn't, its not a palindrome, returns false.
    }
  }
  return true;  //if it is a palindrome, return true
}

// Do not edit this line;
module.exports = isPalindrome;