function productOfAnyAmountOfNumbers(...args) {
  let arr = args; //copies args into array
  let product = arr[0]; //sets product to the first entry

  for(let i = 1; i < arr.length; i++){  //iterates through the array from the second entry
    product = product * arr[i];         //and multiplies the product by the next entry until fully iterated
  }

  return product; //return final product
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;