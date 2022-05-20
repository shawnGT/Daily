//You get an array of numbers, return the sum of all of the positives ones.

//Example [1,-4,7,12] => 1 + 7 + 12 = 20

//Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr){
    var total = 0 //create a variable to hold the result of the loop
    for (i = 0; i < arr.length; i++){//create a for loop to run through each int of the array
        if (arr[i]> 0){ //if the array is greater than zero
            total += arr[i];//add the total plus the array sum
        }
    }
    return total; //return the total which is the sum of the array plus zero
}