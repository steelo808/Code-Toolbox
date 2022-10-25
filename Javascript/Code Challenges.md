```js
function getFullName(firstName, lastName){
    return firstName + ' ' + LastName;
}
```

### Average 

- Write a funciton called "average"
- Given two numbers, "average" returns their average

```js 
var output = average(4,6);
console.log(output); //--> 5
```

#### Solution:
```js 
function average(num1, num2) {
  // your code here
  /* START SOLUTION */
  
d
  /* END SOLUTION */
}
```

# Accumulator Pattern

```js
function filterEvenNumbers(numbers){
    if(numbers === 0){
        return []; //=> edge case
    }

let evenNumbers = [];

for(let i = 0; i < numbers.length; i++){
    if (number[i] % 2 === 0){
        evenNumbers.push(numbers[i])
    }
}





return evenNumbers;
}
```


# Filter Odd Numbers


```js
//identify inputs and write a function that describes those inputs
//how many are there
//what are their types

function filterOddElements(numbers){
    let oddNumbers = [];
//identify the output
//what will the function return if output is normal
//what is the function is empty
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 1){
        oddNumbers.push(numbers[i]);
    }
}

    return oddNumbers;
}
```


# Compute sum of all numbers

```js
function computeSumOfAllElements(numbers){
//initialzing the sum variable
let sum = 0;

//itterating over array elements
for (let i = 0; i < numbers.length; i++){
sum += numbers[i];
}

    return sum;
}
var result1 = computeSumOfAllElements([1, 2, 3]);
console.log('should log 6:', result1);

var result2 = computeSumOfAllElements([]);
console.log('should log 0:', result2);
```



# Get average of elements
 ``` js 

 // average is the sum divided by number of elements
 // two things we need to find sum and number of 
 
 function computeAverageOfNumbers(numbers){
    let sum = 0;
    let average = undefined;

    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
        average = sum / numbers.length;
    }


//itterate over array elements

    return average;
 }
 var input1 = [1,2,3,4,5];
var result1 = computeAverageOfNumbers(input1);
console.log('should log 3:', result1);

var input2 = [];
var result2 = computeAverageOfNumbers(input2);
console.log('should log 0:', result2);
 ``` 


 ### Using object to count words in a sentence

```js
 function countWords(stringOfWords) {
  // your code here
// return empty object
  if(stringOfWords === ''){
    return {};
  }
//create a result object 
var counts = {};
//split the input string into an array of words
var words = stringOfWords.split(' ');
//itterate over array of words
for(let i = 0; i < words.length; i++){
    let currentWord = words[i];

    if(counts[currentWord] === undefined){
    counts[currentWord] = 1;
    }else{
        counts[currentWord]++;
    }

}
return counts;
}

var result1 = countWords('ask a bunch get a bunch');
console.log('should log "{ask: 1, a: 2, bunch: 2, get: 1}":', result1);

var result2 = countWords('');
console.log('should log "{}":', result2);

```js



### Count letters in a word

```js
function countAllCharacters(string){
//edge case
if(string === ''){
    return {};
}

let letters = {};

//itteration over string
 for(let i = 0; i < string.length; i++){
    let currentLetter = string[i];
    if(letters[currentLetter] === undefined){
        letters[currentletter] = 1;
    }else{
        letters[currentLetter]++;
    }
 }






    return letters;
}

var result1 = countAllCharacters('banana');
console.log('should log "{b: 1, a: 3, n: 2}":', result1);

var result2 = countAllCharacters('');
console.log('should log "{}":', result2);
```





# Advanced 1 Count Words
- Write a function called "countWords".

- Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in the given string.

- Notes:

- If given an empty string, it should return an empty object.
```js
function countWords(str){


    //edge case

    if (str === ''){
        return {};
    }
    //
    let words = str.split(' ');
    let count = {};
    
    for(let i === 0; i < words.length; i++){
        let currentWord = words[i];
        if (count[currentWord] === undefined){
            count[currentWord] = 1;
        }else{
            count[currentWord]++;
        }
    }

}


```

### Extend challenge

```js 

```



### Remove numbers larger than 

```js
for( let key in obj){
let currentValue = obj[key];
if(currentValue > num){
    delete currentValue;
}
}
```




#


```js
creating an array

let arr = [1,3,4,3];
```