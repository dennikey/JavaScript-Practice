// Higher-order function takes functions as arguments/returns function
// Callback function is a function passed as an argument

function callAndAdd(n, callbackFunction) {
    return n + callbackFunction;
}
function returnThree() {
    return 3;
}
callAndAdd(2, returnThree) // 5


