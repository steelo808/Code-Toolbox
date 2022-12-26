# REACT
---

## How does react work?
- React creates a VIRTUAL DOM in memory


## setting up react enviorment

```node
npx create-react-app my-react-app
//this will set everything you need up to run an application
```

```node
cd my-react-app
//cd into your react directory
```

```node
npm start
//this will open up a new browser window
```


## React ES6 classes
- A class is a type of function, but instead of using the word `function` to initiate it we use the word `class`
-The properties are assigned inside a `constructor()` method.
- classes begin with a uppercase letter which is standard naming convention for classes

## examples

```js
class Car {
    constructor(name){
        this.brand = name;
    }
}

const mycar = new Car("ford");
```

### Method in classes

```js 
class Car {
    constructor(name){
        this.brand = name;
    }

    present(){
        return 'I have a ' + this.brand
    }
}

const mycar = new Car("ford");
mycar.present();
```

### class inheritance 

```js
class Car {
    constructor(name){
        this.brand = name;
    }

    present(){
        return ' I have a ' + this.brand;
    }
}

class Model extends Car{
    constructor(name,mod){
        super(name);
        this.model = mod;
    }
    show(){
        return this.present() + ', it is a ' + this.model
    }
}

const mycar = new Model("ford", "mustand");
mycar.show();
```

### Arrow functions 

```js
//before 
hello = function(){
    return "hello world";
}

//after
hello = () =>{
    return "Hello World";
}

//if function only has one statement
// you can omit the brackets and the return keyword 
hello = () => "Hello world";

//arrow function with parameters

hello = (val) => "Hello " + val;

//if arrow function only has one parameter you can omit the parenthesis

hello = val => "Hello " + val'
```

### React ES6 Array Methods
-  The most useful Array method in react is the `.map()` array mehtod 
- The `.map()` mehtod allows tyou to calla function on each array element 
```js
//example
const myArray = ['apple','bannana','orange'];
const myList = myArray.map((item) => <p>{item}</p>)
```

### REACT ES6 Destructuring 

- Destructuring is like making a sandwich when you go into your refrigerator you only get the stuff you need destructuring is the same concept

- destructuring makes it easy to extract only what needed

```js
// old way of destrucuring arrays
const vehicles = ['mustang', 'f-150', 'expidition'];

const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];


//with destructuring
const vehicles = ['mustang', 'f-150', 'expidition'];
const [car, truck, suv] = vehicles;
```

- Destructurign comes in handy when a function returns an array