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