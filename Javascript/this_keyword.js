const person = {
    firstName: "Sterling",
    lastName: "Newsom",
    fullName: function(){
        return this.firstName + " " + this.lastName
    }
};
console.log(person.fullName());
//the this this refers to the person object


//using this alone is refering the global object
let x = this;
console.log(x);


const test = {
    person: "Sterling Newsom",
    age:24,
    number:"12345678",
    call: function(){
        return this;
    }
}
console.log(test.call());
//the this keyword refers to the object