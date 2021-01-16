// Creating objects
const myObject = {};
const myObject = new Object();
// Literal notation is faster than object() constructor function
// Literal notation is preferred

// Modifying properties
const cat = {
    age: 2,
    name: 'Bailey',
    meow: function () {
        console.log('Meow!');
    },
    greet: function (name) {
         console.log(`Hello ${name}`);
    }
};
cat.age += 1;
cat.name = 'Bambi';

// Adding properties
const printer = {};
printer.on = true;
printer['remainingsheets'] = 12;
printer.print = function () {
    console.log('printing');
}

// Removing properties
delete printer.on;
// With a few exceptions, objects are mutable, so we can modify, add, and delete
// When deleted, it returns true and will be undefined after

// Passing arguments
// JavaScript primitives such as string and number are immutable
// Any change inside function creates a copy local to function and does not affect outside function
function changeToFive(n) {
    n = 5;
}
let n = 7;
changeToFive(n);
console.log(n); // outputs 7
// Objects are mutable, so functions inside doesn't create a local copy
let originalObject = {
    favoriteColor: 'red'
};
function setToBlue(object) {
    object.favoriteColor = 'blue';
}
setToBlue(originalObject);
originalObject.favoriteColor; // outputs 'blue'
// Objects are passed by reference, so any changes directly modify the original object
const iceCreamOriginal = {
    Richard: 15
};
const iceCreamCopy = iceCreamOriginal;
iceCreamCopy.Richard = 99;
iceCreamCopy.Richard; // outputs 99
iceCreamOriginal.Richard; // outputs 99
// Assigning variables to objects does the same thing

// Comparing objects
const parrot = {
    group: 'bird',
};
const pigeon = {
    group: 'bird',
};
parrot === pigeon; // outputs false
// This will only return true when comparing two references to the same object
const myBird = parrot;
myBird === parrot; // outputs true
myBird === pigeon; // outputs flse

// Objects, arrays, and functions are mutable
