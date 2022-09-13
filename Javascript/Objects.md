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

### Accessing the value of a property

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

### Using Bracket notation

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


### Returning Values for functions

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

### Reassigning a properties value in an object

- Objects like array are mutable which means it's inner content can be changed.

```js
var object = {
    firstMonth:'January',
    secondMonth: 'March',
    thirdMonth:'March'
};

object['secondMonth'] = 'Febuary';
console.log(object);

//Example of March being seleced and changed to febuary 
//To select objects you have to use bracket notation
```

### Nested Objects

```js
var user = {
  "id": 3,
  "name": "Clementine Bauch",
  "username": "Samantha",
  "email": "Nathan@yesenia.net",
  "address": {
    "street": "Douglas Extension",
    "suite": "Suite 847",
    "city": "McKenziehaven",
    "zipcode": "59590-4157",
    "geo": {
      "lat": "-68.6102",
      "lng": "-47.0653"
    }
  },
  "phone": "1-463-555-4447",
  "website": "ramiro.info",
  "company": {
    "name": "Romaguera-Jacobson",
    "catchPhrase": "Face to face bifurcated interface",
    "corporate_tagline": "e-enable strategic applications"
  }
};

console.log(user['id']);
console.log(user['name']);
console.log(user['email']);

let userAddress = user['address'];
console.log(userAddress['street']);
console.log(userAddress['suite']);
console.log(userAddress['city']);
console.log(userAddress['zipcode']);

let geoLoc = userAddress['geo'];
console.log(geoLoc['lat']);
console.log(geoLoc['lng']);

console.log(user['phone']);
console.log(user['website']);

let company = user['company'];
console.log(company['name']);
console.log(company['catchPhrase']);
console.log(company['corporate_tagline']);
```




```js
function selectShirtSize(choice){
   // if shirt is greater than or equal 20 and less than 30
    // return 'You should select a size S'
  // otherwise if shirt is greater than or equal to 30 and less than 40
    // return 'You should select a size M'
  // otherwise if shirt is greater than or equal to 40 and less than 50
    // return 'You should select a size L'
  // otherwise
    // return 'You should select a different shirt'
  if (choice >= && choice < 30){
    return 'You should select a size S';
  }else if (choice >= 30 || choice < 40 ){
    return 'You should select a size M';
  }else if (choice >= 40 && choice < 50 ) {
    return 'You should select a size L';
  } else{
    return 'you should select a different size';
  }
}
```



```js
function verifyStock(recipeMinimums, stockTomatoes, stockOnions) {
  // if stock of tomatoes and stock of onions are both less than minimum

    // return 'We need more tomatoes and more onions.'
  
  // otherwise if stock of tomatoes is less than minimum but stock of onions is sufficient
    // return 'We have enough onions, but need more tomatoes.'
  
  // otherwise if stock of tomatoes is sufficient but stock of onions is less than minimum
   
   // return 'We have enough tomatoes, but need more onions.'
  
  // otherwise
    // return 'We have enough tomatoes and onions. There will be {excessTomatoes} extra tomato, and {excessOnions} extra onion.'

let availTomatoes = recipeMinimums['tomatoes'];
let availOnions = recipeMinimums['onions'];

let totalTomatoes = stockTomatoes - availTomatoes;
let totalOnions = stockOnions - availOnions;

if (stockTomatoes <= availTomatoes && stockOnions <= availOnions){
  return 'We need more tomatoes and more onions.';
}else if(stockTomatoes <= availTomatoes && stockOnions >= availOnions){
  return 'We have enough onions, but need more tomatoes.';
}else if (stockTomatoes >= availTomatoes && stockOnions <= availOnions){
  return 'We have enough tomatoes, but need more onions.';
}else {
  return 'We have enough tomatoes and onions. There will be ' + availTomatoes + ' extra tomato, and ' + availOnions + ' extra onion.'
}
}

```

'We have enough tomatoes and onions. There will be ' + stockTomatoes + ' extra tomato, and ' + stockOnions + ' extra onion.'

(100 - 90) --> 'A'
(89 - 80) --> 'B'
(79 - 70) --> 'C'
(69 - 60) --> 'D'
(59 - 0) --> 'F'
If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.

```js
function convertScoreToGrade(score) {
  // your code here
  if(score >= 90){
    return 'A';
  }else if (score >= 80 && score <= 89){
    return 'B';
  }else if (score >= 70 && score <= 79){
    return 'C';
  }else if (score >= 60 && score <= 69){
    return 'D';
  }else if (score >= 0 && score <= 59){
    return 'F';
  }else{
    return 'INVALID SCORE';
  }
}
```