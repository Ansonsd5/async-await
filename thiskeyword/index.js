//this key word differ its behavior for differnt run  environments
//eg:
//this in browser reffernce to window object i.e this === window
// module.exports in Node.js and window in a browser environment both serve as the global scope objects, but they are specific to their respective environments and have different functionalities and purposes.
"use strict";

console.log(this); //window

function x() {
  console.log(this);
}

//The value of this key words inside function depends on the strict or non strict mode

//if we are in strict mode this inside function will be undefined

//If we nit using strict mode then the value of this which is null or undefined then this substitution will happen and this will substitute to window obj

//how we call also depends
x(); //undefined

window.x(); //window

let student = {
  firstName: "Anson",
  lastName: "Dsouza",
  printFullName: function () {
    console.log(`My name is ${this.firstName} last name is ${this.lastName}`);
  },
};

let student2 = {
  firstName: "Robert",
  lastName: "Silva",
  x: function () {
    console.log(this);
  },
};

student.printFullName();

student2.x();

student.printFullName.call(student2); // use of call

//This will behave diffenetly in normal function and the arrow functions

const obj = {
  num1: 6,
  num2: 8,
  add: function () {
    console.log(this.num1);
    console.log(this) 
 
  },
};

obj.add();

const obj2 = {
  num1: 4,
  num2: 10,
  x: function () {
    const add = () => {
        // value of the enclosing lexical context here its obj2
      let sum = this.num1 + this.num2;
      console.log(sum);
    };
    add();
  },
};

obj2.x();


let arrowObj ={
    arrow : () =>{
        console.log(this);
    }
}
arrowObj.arrow()

// using this key word on dom will give use the refernce of html element