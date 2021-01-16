// this and invocation
// How the function is invoked determines the value of this inside the function

const chameleon = {
    eyes: 2,
    lookAround: function () {
       console.log(`I see you with my ${this.eyes} eyes!`);
    }
};
chameleon.lookAround();

function whoThis () {
    this.trickyish = true
}
whoThis();

// .lookAround() is invoked as a method, so the value of this inside is whatever is left of the dot at invocation
// this will refer to chameleon object
// whoThis() does not have an object left of the dot
// When a regular function is invoked, the value of this is a global window object

// Window object is provided by browser environment and is globally accessible using identifier "window"

const car = {
    numberOfDoors: 4,
    drive: function () {
       console.log(`Get in one of the ${this.numberOfDoors} doors, and let's go!`);
    }
};
const letsRoll = car.drive;
letsRoll();
// letsRoll() is invoked as a regular function, 'this' will refer to window object

// Global variables are properties on window
// Global functions are methods on window
var currentlyEating = 'ice cream';
window.currentlyEating === currentlyEating // true
// let or const won't add to the window object
function learnSomethingNew() {
    window.open('https://www.udacity.com/');
}
window.learnSomethingNew === learnSomethingNew // true

// global variables are not ideal because of tight coupling and name collisions

// Tight coupling is when code is too dependent on one another
var instructor = 'Richard';
function richardSaysHi() {
    console.log(`${instructor} says 'hi!'`);
}

// Name collision is when 2+ functions depend on variable with same name
let counter = 1;
function addDivToHeader () {
  const newDiv = document.createElement('div');
  newDiv.textContent = 'div number ' + counter;

  counter = counter + 1;

  const headerSection = document.querySelector('header');
  headerSection.appendChild(newDiv)
}
function addDivToFooter() {
  const newDiv = document.createElement('div');
  newDiv.textContent = 'div number ' + counter;

  counter = counter + 1;

  const headerSection = document.querySelector('footer');
  headerSection.appendChild(newDiv)
}
