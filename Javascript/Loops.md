# Loops

### Looping over an array

```js
var numsArray = [1,2,3,4,5];
var index = 0;

while (index < numsArray.length){
    console.log('current index', index);
    console.log('current element', numsArray[index]);
    console,log('==================');// gives context when each itteration of loop ends
    index++;
}
```
### Looping over a string

```js 
var string = 'I am a string';
var index = 0;
while(index < string.length){
    console.log(string[index]);
    index++;
}
```


## For loops 

- Initialization
- Condition
- Final expression

```js
for (/*initialization*/ ; /*condition*/ ; /*final-expression*/ ) {
  /* statement */
}
```

##Loop in reverse order

```js 
var numsArray = [1,2,3,4,5];
for (var i = numsArray.length -1; i > -1; i--){
    console.log(i);//current index
    console.log(numsArray[i]);// current element
}
```

###Using `Continue` 

```js
var numsArray = [1, 2, 3, 4, 5];

// stipulation: do not print out element at index 2
for (var i = 0; i < numsArray.length; i++) {
  if (i === 2) {
    console.log('SKIPPED VALUE AT INDEX 2');
    continue; // this tells the loop to go to the next iteration
  }
  console.log('current index:', i);
  console.log('current element:', numsArray[i]);
  console.log('=============='); //gives context for when each iteration of loop ends
}
```


###Using break

```js
var numsArray = [1, 2, 3, 4, 5];

// stipulation: do not print out elements with index value greater than 2
for (var i = 0; i < numsArray.length; i++) {
  if (i > 2) {
    console.log('FOR LOOP BROKEN');
    break; // this tells the loop to end
  } else {
    console.log('current index:', i);
    console.log('current element:', numsArray[i]);
    console.log('=============='); //gives context for when each iteration of loop ends
  }
}
```

###For-in Loop





# Nested loop

- Let us consider the case of wanting to loop over an array (or more than one), inside of our looping over another array

```js 
var nestedArray = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
];

for (var i = 0; i < nestedArray.length; i++){
    for (var j =0; j < nestedArray[i].length; j++){
      console.log(nestedArray[i][j]);
    }
    console.log('End of inner loop);
}
console.log('End of outter loop);


```