// 1. Implement the getGreeting function.
function getGreeting (firstName, Surname) {
    return 'Hi, ' + '"' + firstName + ' ' + Surname + '".' + " What's up?";
}
const greeting = getGreeting('John', 'Smith');
console.log(greeting); // Hi, “John Smith”. What's up?

// Implement the isThisMyName function that returns true if provided with your name. Otherwise,
// return false.
function isThisMyName(name) {
    return name === 'Marcin';
    // if (name === 'Marcin') {
    //     return true;
    // } else {
    //     return false;
    // }
}
isThisMyName('Adam');

// 3. Implement the isThisBoolean function that returns true if provided with a boolean.

function isThisBoolean(){

}
isThisBoolean(true); //true
isThisBoolean(false); // true
isThisBoolean('true'); // false

// 5. Implement the getCircleArea function
function getCircleArea(radius) {
    return Math.PI * radius ** 2;
}
const radius = 5;
const area = getCircleArea(radius);
console.log(Math.PI)
console.log(area); // 78.53981633974483