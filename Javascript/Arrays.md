# Arrays

- Used to store an ordered list of multiple values in a single variable

### Creating an array

```js
var fruits  = ['Oranges', 'bananas', 'apples'];
var scores = [98, 85, 91, 78, 82];
var empty [];
```

### Accessing an Array element
 ```js
 var array = [1,2,3,4];
 var index = array[1];
 //if logged to the console should return 2 since arrays are 0 indexed
 ```


### Getting the last element of an array

```js
var array = [1,2,3,4,5];
var lastElement = array.length - 1;
//Variable lastElement should equal 5 
```

### Adding elements to the back of an array

- we can do this using the `.push()` method

```js
var array = [1,2,3,4,5];
array.push(6);
// if console logged will return an array 1-6;
```

### Removing an element from the back of an array

- We can do this using the .pop() method

```js
var array = [1,2,3,4];
array.pop()
//Doing this will remove the last element of the array
```


### Adding Element to front of array 

- we can do this using the `.unshift()` method

```js
var array = [2,3,4];
array.unshift(1);
// This will add 1 to the front of the array
```

### Removing an element from the front of an array

- We can do this by using the `.shift()` method 

```js
var array = [1,2,3,4];
array.shift();
//This will remove the first element of the array
```

### Adding an element in general

- lets consider the case of wanting to add an element , without reaplacing anything, to an existing element.

- we can do this by using the ` .spice()` method.


```js
var array = [1,2,4];
array.splice(2,0,3);
//This will add the elements  3 to the new array element
//The first element is the index where you want the new element to be placed
//The second element is how many elements you want to delete
//The third element is the actual element you want placed in the array
```


### Removing items  in general

- We can do this usign the `.splice()` method

```js
var array = [1, 2, 'mistake', 3];
array.splice(2, 1);
//The first element is  the indexx we want to start working at 
//The second element is how many elements we want to be deleted 
//Should output a new array that gets rid of the mistake value
```

### Removing and adding elements in an array
 
 - Still going to be using the `.splice()` method

```js
let array = [1,2,'mistake','mistake',];
array.splice(2,2,3,4);
//This code is saying start at the second index, then the next value is telling the computer to delete2 elements after that index, the following two numbers are what are going to replace those mistake values

// If console logged should output 1 2 3 4
```

### Slicing a portion of an array

- Were going to do this by using the `.slice()` method

```js
let array = [1,2,3,4];
let slicedArray = array.slice(0,2);
//should output [1,2];
```


```js
 if(array.length === 0){
      return undefined;
  }
  
  
  let nthElement;
  
  //itteration over array
  
 for(let i === 0; i < array.length; i++){
     if (array[i] === array[n]){
         nthElement = array[i];
     }
 }
  
  return nthElement;
```


### Adding the contenct of an array to another array


```js
var array1 = [1,2,3];
var array2 = [4,5,6];
var array3 = [7,8,9];
//concatination

let combinedArray = array1.concat(array2)/
//should return 1,2,3,4,5,6
```