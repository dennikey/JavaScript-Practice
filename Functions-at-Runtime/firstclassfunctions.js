// Functions are first-class, which means you can do with a function just about anything you can do with strings, objects, etc
// Functons can be stored in variables, returned from function, and passed as arguments to other functions
// Function == object except function can be called with () and objects cannot
// Functions have .name and .length like objects

// Higher order functions are functions that return another function
function alertThenReturn() {
    alert('Message 1!');
  
    return function () {
      alert('Message 2!');
    };
}
const innerFunction = alertThenReturn();
innerFunction(); // alerts 'Message 2!'
alertThenReturn()(); // alerts 'Message 1!' then alerts 'Message 2!'
