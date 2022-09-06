#Arrays

- Used to store an ordered list of multiple values in a single variable

###Creating an array

```js
var fruits  = ['Oranges', 'bananas', 'apples'];
var scores = [98, 85, 91, 78, 82];
var empty [];
```

###Accessing an Array element
 ```js
 var array = [1,2,3,4];
 var index = array[1];
 //if logged to the console should return 2 since arrays are 0 indexed
 ```


###Getting the last element of an array

```js
var array = [1,2,3,4,5];
var lastElement = array.length - 1;
//Variable lastElement should equal 5 
```

###Adding elements to the back of an array

- we can do this using the `.push()` method

```js
var array = [1,2,3,4,5];
array.push(6);
// if console logged will return an array 1-6;
```

###Removing an element from the back of an array

- We can do this using the .pop() method

```js
var array = [1,2,3,4];
array.pop()
//Doing this will remove the last element of the array
```


###Adding Element to front of array 

- we can do this using the `.unshift()` method

```js
var array = [2,3,4];
array.unshift(1);
// This will add 1 to the front of the array
```

###Removing an element from the front of an array

- We can do this by using the `.shift()` method 

```js
var array = [1,2,3,4];
array.shift();
//This will remove the first element of the array
```

###Adding an element in general

- lets consider the case of wanting to add an element , without reaplacing anything, to an existing element.

- we can do this by using the ` .spice()` method.


```js
var array = [1,2,4];
array.splice(2,0,3);
//This will add the elements  3 to the new array element
//The first element is the index where you want the new element to be placed
//The second element is how many elements you want to delete
//The third element is the actual element you want placed in the element
```


