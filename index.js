/* Problem 1: 1.	Create a n array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
*  a. Programmatically subtract the value of the first element in the array from the value in the last element of 
*     the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] 
*     is not allowed). Print the result to the console.
*/

var arr1 = [3,9,23,64,2,8,28,93];

console.log(arr1[arr1.length-1] - arr1[0]);

/**
 * b.	Add a new age to your array and repeat the step above to ensure it is dynamic 
 * (works for arrays of different lengths).
 */

arr1.push(23);
console.log(arr1[arr1.length-1] - arr1[0]);

/**
 * c.	Use a loop to iterate through the array and calculate the average age. 
 * Print the result to the console.
 */
let sum = 0;
for (var i = 0; i < arr1.length; i++){
    sum += arr1[i];
}




console.log(`The average of the array is: ${sum/arr1.length}.`)

/**
 * Problem 2. 2. Create an array called names that contains the following values: 
 * ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
 */

/**
 * a.	Use a loop to iterate through the array and calculate the average 
 * number of letters per name. Print the result to the console.
 */
names = ['Sam', 'Tommy', "Tim", "Sally", "Buck", "Bob"];
name_length_sum = 0;
for (var i=0; i<names.length; i++){
    name_length_sum += names[i].length;
}

console.log(`The average number of letters per name is ${name_length_sum/names.length}`);

/**
 * b.	Use a loop to iterate through the array again and concatenate all the names together, 
 * separated by spaces, and print the result to the console.
 */
long_name = '';
for (var i = 0; i<names.length; i++){
    long_name += names[i]+" ";
}

console.log(long_name);

/**
 * Problem 3. How do you access the last element of any array?
 */

/**
 * Answer: the array length property to find the last element of the array;
 * For example: for the above array names, the last element is: names[names.length-1];
 */

/**
 * Problem 4.	How do you access the first element of any array?
 * Answer: Just use index zero. For example the first element of array names is: names[0];
 */

/**
 * 5.	Create a new array called nameLengths. Write a loop to iterate over the previously 
 * created names array and add the length of each name to the nameLengths array. For example:
 *   namesArray = ["Kelly", "Sam", "Kate"] //given this array
 *   nameLengths = [5, 3, 4] //create this new array
 */

 namesArray = ["Kelly", "Sam", "Kate"];
 nameLengths = [];

 for(var i=0; i<namesArray.length; i++){
     nameLengths.push(namesArray[i].length);
 }


/**
  * Problem 6.	Write a loop to iterate over the nameLengths array and calculate the sum of 
  * all the elements in the array. Print the result to the console.
  */
sum_name_lengths = 0;
for(var i = 0; i<nameLengths.length; i++){
    sum_name_lengths += nameLengths[i];
}

console.log(sum_name_lengths);

/**
 * Problem 7.	Write a function that takes two parameters, word and n, as arguments and 
 * returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3,
 * I would expect the function to return ‘HelloHelloHello’).
 */
function wordN_times(word, n){
    words = [];
    for (let i = 0; i< n; i++){
        words += word;
    }
    return words;
}

console.log(wordN_times("Hello", 3));

/**
 * 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name 
 *      (the full name should be the first and the last name separated by a space).
 */

function fullName(firstName, lastName){
    return firstName + " " + lastName;
}

console.log(fullName('Xue', "Yu"));

/**
 * 9.	Write a function that takes an array of numbers and returns true 
 *      if the sum of all the numbers in the array is greater than 100.
 */
function arrayCheck(arr){
    let sum = 0;
    for(let i=0;i < arr.length; i++){
        sum += arr[i];
    }
    
    if (sum>100){
        return true;
    }
    
}

console.log(arrayCheck([12,34,12,11,10,60]));

/**
 * 10.	Write a function that takes an array of 
 *      numbers and returns the average of all the elements in the array.
 */
function aveArray(arr){
    let sum = 0;
    for(let i=0;i < arr.length; i++){
        sum += arr[i];
    }

    return sum/arr.length;

}

console.log(aveArray([12,34,12,11,10,60]));

/**
 * 11.	Write a function that takes two arrays of numbers and returns true if the average 
 *      of the elements in the first array is greater than the average of the elements 
 *      in the second array.
 */

function arrayCompare(arr1, arr2){
    function aveArray(arr){
        let sum = 0;
        for(let i=0;i < arr.length; i++){
            sum += arr[i];
        }
        return sum/arr.length;
    }

    if(aveArray(arr1) > aveArray(arr2)){
        return true;
    }
}

console.log(arrayCompare([12,34,12,11,10,60],[12,32]));

/**
 * 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, 
 *      and a number moneyInPocket, and returns true if it is hot outside and 
 *      if moneyInPocket is greater than 10.50.
 */

function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside === true && moneyInPocket >= 10.50){
        return true;
    }
}

console.log(willBuyDrink(true, 12));

/**
 * 13.	Create a function of your own that solves a problem. In comments, 
 *      write what the function does and why you created it.
 */

// A function 'describe' find the basic statistics of an array including N (number of samples), mean, median, 
//  standard deviation, mininum, and maximum values.
// Finding the basic descriptive statistics of a list of data or array has many applications in real life.
function describe(arr){
    // find the sum of the array
    let sum = 0;
        for(let i=0;i < arr.length; i++){
            sum += arr[i];
        }

    
    // find the length or number of samples in the array
    let N = arr.length;

    // find the mean of the array
    let mean = sum/arr.length;

    // find the median value of the array
    let median = 0;
    if(N%2 === 0){
        median += (arr[arr.length/2] + arr[arr.length/2-1])/2;
    } else{
        median += arr[(arr.length-1)/2];
    }

    // find the standard deviation of the array
    let deviation = 0;
    for (let i = 0; i< arr.length; i++){
         deviation += (arr[i]-mean)**2;
    }

    let std = (deviation/N)**0.5;

    // find the minimum value in the array;
    let min = Math.min.apply(Math, arr1);

    // find the maximum value in the array;
    let max = Math.max.apply(Math, arr1);

    // create an object to store the basic descriptive statistic results.
    const descriptive_stat = {
        N: N,
        mean: mean,
        median: median,
        std: std,
        min: min,
        max: max
    };

    return descriptive_stat;
}

console.log(describe([12,34,12,11,10,60]));