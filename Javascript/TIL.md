# Map 
---
- The map object holds key value pairs 

## example of using map

```js
const firstNames = [sterling, sterling, sterling];
const lastName = "Newsom";

const firstAndLast = firstNames.map(firstName => firstName + LastName);

console.log(firstAndLast);

//=> output [sterlingNewsom, sterlingNewsom, sterlingNewsom]
```

## converting for loop into map example

```js
//original function using for loop
function shout(array) {
  const result = []
  for (var i = 0; i < array.length; i++) {
    result.push(array[i].toUpperCase())
  }
  return result
}

  //Refactor with map

  function shout(array){
     array = array.map(currentElm =>{
        currentElm.toUpperCase;
    });
  }
```

## Recursive functions 




## Promises / Async Await