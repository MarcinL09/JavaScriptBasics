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
const booleanOne = isThisBoolean(true); // true
console.log(booleanOne);
const booleanTwo = isThisBoolean(false); // true
console.log(booleanTwo);
const booleanThree =isThisBoolean('true'); // false
console.log(booleanThree);

// 5. Implement the getCircleArea function
function getCircleArea(radius) {
    return Math.PI * radius ** 2;
}
const circleArea = getCircleArea(5);
console.log(circleArea); // 78.53981633974483

// 3. Implement the getCirclesAreaSum function that calls the getCircleArea function
function getCirclesArea(radius) {
    return Math.PI * radius ** 2;
}
const circleAreaOne = getCirclesArea(5);
const circleAreaTwo = getCirclesArea(10);


function getCirclesAreaSum(circleArea, circleAreaTwo) {
    return circleArea + circleAreaTwo;
    }
const CirclesArea = getCirclesAreaSum(circleAreaOne,circleAreaTwo);
console.log(CirclesArea) // 392.69908169872417

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
const winOne = rockPaperScissors('rock', 'scissors'); // 1
console.log(winOne);
const winTwo = rockPaperScissors('rock', 'paper'); // 2
console.log(winTwo);
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
function whichQuarterOfTheYear(month) {
    return Math.ceil(month/3);
}
const quarterOfTheYear = whichQuarterOfTheYear(9)
console.log(quarterOfTheYear);

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
const temporary = firstNumber;
firstNumber = secondNumber;
secondNumber = temporary;

console.log(firstNumber);
console.log(secondNumber);

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
const tenHours = convertMinutesToHours(600);
console.log(hours);
console.log(fiveHours);
console.log(tenHours);

// Write the isTextUppercase function.

function isTextUppercase(text) {
  if (text.toUpperCase() === text) {
      return true;
  } else {
      return false;
  }
}

const lowerCase = isTextUppercase('Hello'); // false
const upperCase = isTextUppercase('HELLO'); // true

console.log(lowerCase);
console.log(upperCase);

//Codewars - Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.
function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0) {
        return true;
    } else {
        return false;
    }
}
const divisibleExampleOne = isDivisible(3,1,3);
console.log(divisibleExampleOne);
const divisibleExampleTwo = isDivisible(12,2,6);
console.log(divisibleExampleTwo);
const divisibleExampleThree = isDivisible(100,5,3);
console.log(divisibleExampleThree);
const divisibleExampleFour = isDivisible(12,7,5);
console.log(divisibleExampleFour);


// Write the getBillboardPrice function that accepts two arguments:•
// the text intended to use on the billboard•
// the cost of a single character
function getBillboardPrice(text, cost) {
    return text.length * cost;
}

const billboard = getBillboardPrice('Hello world!', 10); // 120
const billboardTwo = getBillboardPrice('Hello world!', 15); // 180
const billboardThree = getBillboardPrice('To be, or not to be', 20); // 380
console.log(billboard);
console.log(billboardTwo);
console.log(billboardThree);

// given an integer or a floating-point number, find its opposite.

function oppositeInteger(number) {
    return number * -1;
}
const numberOne = oppositeInteger(1);
console.log(numberOne);
const numberTwo = oppositeInteger(14);
console.log(numberTwo);
const numberThree = oppositeInteger(8);
console.log(numberThree);

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
function negativeInteger(randomNumber) {
    if (randomNumber > 0) {
        return randomNumber * -1;
    }
    return randomNumber;
}

const numOne = negativeInteger(1);
console.log(numOne);
const numTwo = negativeInteger(-5);
console.log(numTwo);
const numThree = negativeInteger(0);
console.log(numThree);
const numFour = negativeInteger(0.12);
console.log(numFour);

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter,
// the original string. You don't have to worry with strings with less than two characters.

function removeFirstAndLastChar(stringToBeTrimmed){
    return stringToBeTrimmed.slice(1,-1);
};

const removeString = removeFirstAndLastChar('Hello world')
console.log(removeString);

// Your task is to create a function that does four basic mathematical operations.
//The function should take three arguments - operation(string/char), value1(number), value2(number).
//     The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output

function basicCalculation(operation, value1, value2) {
    if (operation === '+') {
    return value1 + value2;
    } else if (operation === '-') {
        return value1 - value2;
    } else if (operation === '*') {
        return value1 * value2;
    } else if (operation === '/') {
        return value1 / value2;
    }
}

const result = basicCalculation('+',4,7);
console.log(result);
const resultTwo = basicCalculation( '-',15,18);
console.log(resultTwo);
const resultThree = basicCalculation( '*',5,5);
console.log(resultThree);
const resultFour = basicCalculation( '/',49,7);
console.log(resultFour);

// Given a year, return the century it is in.

function century(year) {
    return Math.ceil(year / 100);
}

const whichCentury = century(1300)
console.log(whichCentury);

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
    if (number % 2 === 0) {
        return 'Even';
    }
    return 'Odd';
}

const checkEvenOdd = even_or_odd(6);
console.log(checkEvenOdd);

// Create a function which answers the question "Are you playing banjo?".
//     If your name starts with the letter "R" or lower case "r", you are playing banjo!

function areYouPlayingBanjo(name) {
    if (name.toLowerCase().startsWith('r') || name.toUpperCase().startsWith('r')) {
        return name + " plays banjo";
    }
    return name + " does not play banjo";
}

const banjo = areYouPlayingBanjo('robert');
console.log(banjo);

// Calculate BMI
function bodyMassIndexCalculation(weight, height) {
    let bmiResult = weight / height ** 2;
    if (bmiResult <= 18.5) {
        return "Underweight"
    } else if (bmiResult <= 25.0) {
        return "Normal"
    } else if (bmiResult <= 30.0) {
        return "Overweight"
    }
        return "Obese"
}

const bodyMassIndex = bodyMassIndexCalculation(60, 1.85);
console.log(bodyMassIndex);

