//We need a function that can transform a number into a string. 
//Examples:
//123 --> "123"
//999 --> "999"

//shawns notes: The way I would achieve this is by converting the integer into a string using the .toString() method

function numberToString(num) {
    numToString = num.toString()//create a variable to hold the definition of the integer and convert it to a string.
    return numToString + ''//returns the number placed inside of the quotation
  }