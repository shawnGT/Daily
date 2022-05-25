//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//shawns notes: to complete this challenge we will need to locate the first and last characters pf a string. This will be achieved by using str.slice(). In order to skip strings with less than two characters we will use an if/else and str.length to count the length of the string and determine if it needs to be skipped or not.

function removeChar(str){
    if(str.length >= 2){   //tests to see if the string length is over 2
        return str.slice(1,-1); //subtracts the fist and last characters from the string and returns the modified string
    }
   };
   
   
   