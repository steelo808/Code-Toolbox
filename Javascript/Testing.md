# Testing our functions using assertion functions 

### Sucess case using AssertEqual

```js
//Using assertEqual function
function multiplyTwo(n){
    return n * 2;
}

var output = multiplyByTwo(2);

//applying assertEqual function
assertEqual(output, 4, 'it doubles to 4');

//console output
//passed

```

### `assertEqual` function contains 3 parameters (actual, expected, testname)

