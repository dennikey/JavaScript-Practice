// Adding methods
// Methods are properties pointing to functions
const developer = {
    name: 'Andrew'
};
developer.sayHello = function () {
    console.log('Hi there!');
};

// Calling methods
// Dot notation and bracket notation can be used
developer.sayHello();
// 'Hi there!'
developer['sayHello']();
// 'Hi there!'

// Passing arguments into methods
const developer = {
    name: 'Andrew',
    sayHello: function () {
      console.log('Hi there!');
    },
    favoriteLanguage: function (language) {
      console.log(`My favorite programming language is ${language}`);
    }
};

// "this" refers to "this object" or "object at hand", which gives access to object's properties
const triangle = {
    type: 'scalene',
    identify: function () {
      console.log(`This is a ${this.type} triangle.`);
    }
};
triangle.identify(); // scalene triangle

