// Higher-order function takes functions as arguments/returns function
// Callback function is a function passed as an argument

function callAndAdd(n, callbackFunction) {
    return n + callbackFunction;
}
function returnThree() {
    return 3;
}
callAndAdd(2, returnThree) // 5

// Callback functions are used in array methods

// forEach() takes in callback function and invokes the function for each element in array
// This is similar to for loop, looping through array
[1, 5, 2, 4, 6, 3].forEach(function logIfOdd(n) {
    if (n % 2 !== 0) {
      console.log(n);
    }
});

