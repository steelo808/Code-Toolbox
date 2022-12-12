# Advanced 1


## countWords

- Write a function called "countWords".
Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in the given string.

#### Notes:

- If given an empty string, it should return an empty object.

```js
var output = countWords('ask a bunch get a bunch');
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}
```

```js
function countWords(str){
    if (str === ''){
        return {};
    }


    let count = {};
    let words = str.split('');


    for(let i = 0; i < words.length; i++){
        let currentWord = words[i];
        if(count[currentWord] === undefined){
            count[currentWord] = 1;
        }else{
            count[currentWord]++;
        }
    }
    return count;
}
```

# Advanced 2
## Extend

- Write a function called "extend".
Given two objects, "extend" adds properties from the 2nd object to the 1st object.

####Notes:

- Add any keys that are not in the 1st object.
If the 1st object already has a given key, ignore it (do not overwrite the property value).
Do not modify the 2nd object at all.

```js
var obj1 = {
  a: 1,
  b: 2
};
var obj2 = {
  b: 4,
  c: 3
};

extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}
```



# higher order functions


```js
//example 

const addTwo = num =>{
    return num + 2;
}

const checkConsistentOutput = (func, val) =>{
    let checkA = val + 2;
    let checkB = func(val);

    if(checkA === checkB){
        return checkB;
    }else{
        return 'inconsistent Results';
    }
}

console.log(checkConsistentOutput(addTwo, 5));

```


# iterators


### Using the `.forEach()` method

```js
const groceries = ['brown sugar', 'salt', 'cranberries', 'walnuts'];

groceries.foreach(function(groceryItem){
console.log(' - ' + groceryItem);
});
```