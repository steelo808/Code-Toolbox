# Objects 
  
- An object is a collection of properties.
- A property  consist of a key and a value.


```js
//object with boolean values
var booleanObj ={
    isObject:true;
    isString:false;
};

//object with number values
var numbersObj{
    count:4;
    remaining:7;
};

//object with string values
var stringObj{
    name:'Sterling';
    currentTitle:'Human';
    futurePosition:'Software Developer'; 
};
```

###Accessing the value of a property

- We need to know the name of the object.
- Can use "dot notation".
- Can use "bracket notation".

```js
var stringObj{
    name:'Sterling';
    currentTitle:'Human'
    futurePosition:'Software Developer'
};

//acsessing a value within a object
var valueOfName = stringObj.name;
console.log('acssessed value: ' valueOfName);

//Should print Sterling to the console

```

###Using Bracket notation

```js
var stringObj ={
    name:'Sterling';
    currentTitle:'Human';
    futurePosition:'Software Developer';
};

var valueOfName = stringObj['name'];
console.log('Accessed value: ' valueOfName);

//Still prints the same thing as the bracket notation
```


###Returning Values for functions

```js
//Declaring a function that takes a parameter and returns it
function returnObj(object) {
    return object;
}

var user = {
    id:4;
    name:'Sterling Newsom';
    occupation:'Software Developer';
};

var resultObj = returnObj(user);
console.log('returned Object: ' resultObj);
```