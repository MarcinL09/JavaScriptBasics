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
let isMyName = isThisMyName('Adam');
console.log(isMyName);
isMyName = isThisMyName('Marcin');
console.log(isMyName);



// 3. Implement the isThisBoolean function that returns true if provided with a boolean.

function isThisBoolean(boolean){
    if (boolean === true) {
        return true;
    } else if (boolean === false) {
        return true;
    } else {
        return false;
    }
}
const boolean1 = isThisBoolean(true); //true
console.log(boolean1);
const boolean2 = isThisBoolean(false); // true
console.log(boolean2);
const boolean3 =isThisBoolean('true'); // false
console.log(boolean3)

// 5. Implement the getCircleArea function
function getCircleArea(radius) {
    return Math.PI * radius ** 2;
}
const radius = 5;
const area = getCircleArea(radius);
console.log(area); // 78.53981633974483

// 3. Implement the getCirclesAreaSum function that calls the getCircleArea function
function getCirclesAreaSum(radiusFirst, radiusSecond) {
    return Math.PI * radiusFirst ** 2 + Math.PI * radiusSecond ** 2;
}
const circlesAreaSum = getCirclesAreaSum(5, 10);
console.log(circlesAreaSum); // 392.69908169872417

// 5. Write a rockPaperScissors function that returns 1 if the first player won and 2 if the second player
// won. In case of a draw, return 0.
function rockPaperScissors(firstPlayer, SecondPlayer) {

}
rockPaperScissors('rock', 'scissors'); // 1
rockPaperScissors('rock', 'paper'); // 2
rockPaperScissors('paper','paper'); // 0

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

const month = 2;
const quarterOf = (month) => {
    if (month <= 3) {
        return 1;
    } else if (month <= 6) {
        return 2;
    } else if (month <= 9) {
        return 3;
    } else if (month <= 12) {
        return 4;
    }

}
console.log(quarterOf(month));