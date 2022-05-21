//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//shawns notes: In order to complete this we need to take a boolean(true/false) value return a string equaling "Yes" for a true value and "No" for a false value. The challenge describes completing a method but as this is JS a function will be needed instead.

//There are a few ways to achieve this. My first though is using an if/else statement. because if the boolean were to equal true than it would return "Yes" and if the boolean were to equal false then it would return "No"

var bool = "t" //create the variable to test true or false
function isBoolTrueOrFalse( bool){ //create the function
    if ( bool = "t" ){ //create the if/else conditional
        return "Yes"; //return "Yes" if true
    }else{ //bool doesnt equal anything besides t so if it was tested it would return false for any other definition
        return "No"; //return "No" if false
    }
}