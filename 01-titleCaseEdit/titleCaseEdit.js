function titleCaseEdit(title) {
  
  let words = title.split(" "); // Splits the title into seperate strings.

  for(let i = 0; i < words.length; i++) { //capitalizes the first letter of each string, ONLY, then adds the rest of the word back onto the string.
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  title = words.join(" "); //combines all the strings in "words", seperating them with a space.

  return title; //returns the original string as a title
}

// Do not edit this line;
module.exports = titleCaseEdit;