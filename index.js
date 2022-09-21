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
}
let isMyName = isThisMyName('Adam');
console.log(isMyName);
isMyName = isThisMyName('Marcin');
console.log(isMyName);



// 3. Implement the isThisBoolean function that returns true if provided with a boolean.

function isThisBoolean(isTrue){
    if (isTrue === true) {
        return true;
    } else if (isTrue === false) {
        return true;
    } else {
        return false;
    }
}
const boolean1 = isThisBoolean(true); // true
console.log(boolean1);
const boolean2 = isThisBoolean(false); // true
console.log(boolean2);
const boolean3 =isThisBoolean('true'); // false
console.log(boolean3);

// 5. Implement the getCircleArea function
function getCircleArea(radius) {
    return Math.PI * radius ** 2;
}
const circleArea = getCircleArea(5);
console.log(circleArea); // 78.53981633974483

// 3. Implement the getCirclesAreaSum function that calls the getCircleArea function
function getCirclesAreaSum() {
    function getCirclesArea(radiusFirst, radiusSecond) {
    return Math.PI * radiusFirst ** 2 + Math.PI * radiusSecond ** 2;
        }
        return getCirclesArea;
    }
const getCirclesArea = getCirclesAreaSum();
console.log(getCirclesArea(5, 10)); // 392.69908169872417

// 5. Write a rockPaperScissors function that returns 1 if the first player won and 2 if the second player
// won. In case of a draw, return 0.
function rockPaperScissors(firstPlayer, secondPlayer) {
      if (firstPlayer === 'rock' && secondPlayer === 'scissors' ) {
        return 1;
    } else if (firstPlayer === 'scissors' && secondPlayer === 'paper') {
        return 1;
    } else if (firstPlayer === 'paper' && secondPlayer === 'rock') {
        return 1;
    } else if (firstPlayer === 'rock' && secondPlayer === 'paper') {
        return 2;
    } else if (firstPlayer === 'paper' && secondPlayer === 'scissors') {
        return 2;
    } else if (firstPlayer === 'scissors' && secondPlayer === 'rock') {
        return 2;
    } else {
        return 0;
    }
}
const win1 = rockPaperScissors('rock', 'scissors'); // 1
console.log(win1);
const win2 = rockPaperScissors('rock', 'paper'); // 2
console.log(win2);
const draw = rockPaperScissors('paper','paper'); // 0
console.log(draw);

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.


        function quarterOf(month) {
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
const quarter = quarterOf(12);
console.log(quarter);

// Mathematical approach.
    function quarterOf(month) {
    return Math.ceil(month/3);
}
const quarterOfYear = quarterOf(9)
console.log(quarterOfYear);

// Additional exercises

// Create two variables called width and height . Then, create a new variable that holds the area.
//     Print it to the console.

const width = 7;
const height = 8;
const area = width * height;
console.log(area);

// Create two variables called firstNumber and secondNumber . Assign each of them with a
// different number. Write a program that swaps both values.

let firstNumber = 4;
let secondNumber = 9;
const second = firstNumber;
firstNumber = secondNumber;
secondNumber = firstNumber;

console.log(firstNumber);
console.log(second);

// Create variables that hold grades from three different classes:•
// Physics•
// Math•
// English•
// Calculate the average of the grades. If the average equals 4 out of 5 or higher, print "Good job!".
//     Otherwise, print "Try harder!".

const physicsGrade = 4;
const mathGrade = 5;
const englishGrade = 2;
const averageGrade = (physicsGrade + mathGrade + englishGrade)/3

if (averageGrade >= 4) {
    console.log('Good job');
} else {
    console.log('Try harder')
}

// Write the convertMinutesToHours function.

function convertMinutesToHours(minutes) {
    return minutes / 60;
}

const hours = convertMinutesToHours(75);
const fiveHours = convertMinutesToHours(300);
