// JavaScript Progra To Print "Hello World" ?
// console.log("Hello World");
// document.write("Hello World");
// alert("Hello World");

// Add Two Numbers
// Way-1
// console.log(2 + 2);

// Way-2
// let num1 = 50;
// let num2 = 50;
// let AddNum = num1 + num2 ;
// console.log(AddNum);

// Find Square Root
// function square(num) {
//     let sqr = Math.sqrt(num);
//     // console.log(sqr);
//     return sqr;
// }
// console.log(square(50));

// Function Concatenate Two Strings
function concatenateStrings(str1, str2) {
  // let expOutput = "";
  if (str1 === "Hello" && str2 === "World") {
    // console.log(str1 + " ", str2);
    return;
  }
  // console.log(expOutput);
}
concatenateStrings("Hello", "World");

// Write a function to calculate the area of a triangle ?
function calculateTriangleArea(base, height) {
  let knownArea = 0.5;
  // area = knownArea * base * height;
  // return area;
  return (area = (base * height) / 2);
}
calculateTriangleArea(15, 4);

function findArea(base, height) {
  let halfOfRectangleArea = 2;
  let area = (base * height) / halfOfRectangleArea;
  return area;
}
// console.log(findArea(4, 6)); hii

// ANOTHER WAY
// const side1 = parseInt(prompt("Enter Side1 Value"));
// const side2 = parseInt(prompt("Enter Side2 Value"));
// const side3 = parseInt(prompt("Enter Side3 Value"));
// let semiParameter = (side1 + side2 + side3) / 2;
// areaValue = Math.sqrt(
//   semiParameter(s) *
//     (semiParameter(s) - side1) *
//     (semiParameter(s) - side2) *
//     (semiParameter(s) - side3)
// );
// console.log(areaValue);

// function calculateTriangleArea(side1, side2, side3) {
//     let s = (side1 + side2 + side3) / 2;
//   areaVal = s * (s - side1) * (s - side2) * (s - side3);
//   return console.log(areaVal);
// }
// calculateTriangleArea(10, 5, 5);

//  Write a function to find the nth fibonacci Number ?
function fibonacci(n) {
  let a = 0;
  let b = 1;
  if (n < 2) {
    return n;
  }
  for (let i = 2; i <= n; i++) {
    let next = a + b;
    a = b;
    b = next;
  }
  // return console.log(b);
}
fibonacci(7);

// Fahrenheit To Celsius
function getCelsius() {
  let bodyTemp = 101.3;
  let constantOffset = 32;
  let sizeOfUnit = 1.8;
  let inCelsius = (bodyTemp - constantOffset) / sizeOfUnit;

  // return console.log(inCelsius);  // sometimes reutrn undefind, while returning the value with console logging;
}
getCelsius();

// Celsius to Fahrenheit
function getFahrenheite(celsiusVal) {
  let constantOffset = 32;
  let sizeOfUnit = 1.8;
  let fahrenheit = celsiusVal * sizeOfUnit + constantOffset;

  return fahrenheit;
}
// console.log(getFahrenheite(101.3));

// JavaScript Program to Solve Quadratic Equation
function quadraticEquation(a, b, c) {
  let discriminant = b * b - 4 * a * c;

  // discriminant > 0 formula b(square)−4ac
  if (discriminant > 0) {
    root1 = ((-b + Math.sqrt(discriminant)) / 2) * a;
    root2 = ((-b - Math.sqrt(discriminant)) / 2) * a;
    console.log(`The Root Of quadratic Equation are ${root1}, and ${root2}`);

    // Condition For Real Equal Roots
    // discriminant = 0 formula
  } else if (discriminant === 0) {
    root1 = root2 = -b / (2 * a);
    console.log(`The Root Of quadratic Equation are ${root1}, and ${root2}`);

    // if Roots Are Not Real
    // discriminant > 0 formula
  } else {
    realroot = -b / (2 * a).toFixed(2);
    imaginRoot = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
    console.log(
      `Roots are complex: ${realroot} + ${imaginRoot}i , ${realroot} - ${imaginRoot}i`
    );
  }
}
// quadraticEquation(1, -3, 2);

// Killometers to Milles
function getMiles(Killometer) {
  let factor = 0.621371;
  let findMiles = Killometer * factor;
  return findMiles;
}
// console.log(getMiles(5));

// Javascript Program to Generate a Random Number
function getRandomNum() {
  let min = 10;
  let max = 20;
  let ranomNum = Math.floor(Math.random() * (max - min) + min);
  console.log(ranomNum);
}
// getRandomNum();

// Quadeatic Operation
function getQuadratic(a, b, c) {
  let discriminant = b * b - 4 * a * c;
  if (discriminant > 0) {
    let root1 = ((-b + Math.sqrt(discriminant)) / 2) * a;
    let root2 = ((-b - Math.sqrt(discriminant)) / 2) * a;
    console.log(`print ${root1} and ${root2}`);
  } else if (discriminant === 0) {
    root1 = root2 = -b / (2 * a);
    console.log(`The Root Of quadratic Equation are ${root1}, and ${root2}`);
  } else {
    realRoot = -b / (2 * a);
    imaginRoot = Math.sqrt(-discriminant) / (2 * a).toFixed(2);
    console.log(
      `Roots are complex: ${realRoot} + ${imaginRoot}i , ${realroot} - ${imaginRoot}i`
    );
  }
}
// getQuadratic(1, 6, 5);

// Javascript Program to Check if a number is Positive, Negative, or Zero
function findState(num) {
  let numValue = num;
  if (numValue > 0) {
    console.log(numValue, "Value Positive");
  } else if (numValue === 0) {
    console.log(numValue, "Value was Zero");
  } else {
    console.log(numValue, "Negative Value");
  }
}
// findState(-2);

// Write a function to check if a number is negative.
function checkNegative(num) {
  if (num < 0) {
    console.log(num, "Negative");
  } else if (num === 0) {
    console.log(num, "Not Negative");
  } else {
    console.log(num, "Not Negative");
  }
}
// checkNegative(4);

// Javascript Program to Check if a Number is Odd or Even
function findOddEven(num) {
  if (num % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
// findOddEven(10);

function ternaryOddEven(num) {
  console.log(num % 2 === 0 ? "Even" : "Odd");
}
// ternaryOddEven(7);

// JavaScript Program to Find the Largest Among Three Numbers
function checkLargest(num1, num2) {
  if (num1 > num2) {
  } else {
    console.log("Smaller");
  }
}
// checkLargest(10, 20);

function findLargest(num1, num2) {
  if (num1 > num2 || num2 > num1) {
    if (num1 > num2) {
      console.log(num1);
    } else {
      console.log(num2);
    }
  }
  if (num1 === num2) {
    return num1, num2;
  }
}
// findLargest(1, 8);

// JavaScript Program to Check Prime Number
function checkPrime(num) {
  if (num < 2) {
    return "Not Prime";
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % 2 === 0) {
      return "Not Prime";
    }
  }
  return `${num} is a prime number`;
}
// console.log(checkPrime(7));

function primeRange(start, end) {
  let result = [];
  for (let i = start; i < end; i++) {
    if (i < 2) {
      continue;
    }
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(start); j++) {
      if (j % 2 === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      result.push(i);
    }
  }
  return result;
}
// console.log(primeRange(1, 10));

// Write a function to calculate the factorial of a number.
function factorialNum(num) {
  let initialNum = 1;
  if (num < 0) {
    return "Enter Valid Number";
  }
  if (num === 0) {
    return 1;
  }
  for (let i = 1; i <= num; i++) {
    initialNum = i * initialNum;
  }
  return initialNum;
}
// console.log(factorialNum(6));

function calculateFactorial(num) {
  if (num === 0) {
    return 1;
  }
  // Recursive case: multiply num by the factorial of (num - 1)
  return num * calculateFactorial(num - 1);
}
// console.log(calculateFactorial(5));

// JavaScript Program To Display Multiplication Table(Table Form)
function multiplicationTable(num) {
  let result = [];
  for (let i = 1; i <= 10; i++) {
    // let value = num * i;
    result.push([num, i, num * i]);
  }
  return result;
}
// console.table(multiplicationTable(7));

// JavaScript Program To Display Multiplication Table(signs)
function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    let value = num * i;
    // console.log(num, "x", i, "=", value);
  }
}
multiplicationTable(4567);

// JavaScript Program to Check Armstrong Number
function checkArmstrongNum(num) {
  let digits = num.toString().split("").map(Number);
  let power = digits.length;
  let sum = digits.reduce((acc, crr) => acc + Math.pow(crr, power), 0);
  if (sum === num) {
    console.log("Armstrong");
  } else {
    console.log("Not a Armstrong");
  }
}
// checkArmstrongNum(153);

function checkArmstrongNumber(num) {
  // let sum = 0;
  let digits = num.toString().split("").map(Number);
  let pow = digits.length;
  return digits.reduce((acc, crr) => acc + Math.pow(crr, pow), 0)
    ? "Armstrong"
    : "Not Armstrong";
}
// console.log(checkArmstrongNumber(123));/

function checkArmStrong(num) {
  return num ===
    num
      .toString()
      .split("")
      .reduce((acc, crr) => acc + Math.pow(+crr, 3), 0)
    ? "ArmStrong"
    : "Not A ArmStrong";
}
// console.log(checkArmStrong(124));

function armstrong(num) {
  let input = num.toString();
  let output = 0;

  for (let i = 0; i < input.length; i++) {
    let a = input.charAt(i);
    output += Math.pow(parseInt(a), 3);
  }
  if (num === output) {
    return "Armstrong";
  } else {
    return "Not Armstrong";
  }
}
// console.log(armstrong(124));

function checkArmStrongValue(num) {
  let originalVal = num; //For Comapre in the End
  let sum = 0; // store the sum values of Number
  let digits = 0; // we update while looping

  let n = num; //this will be modify
  while (n > 0) {
    n = Math.floor(n / 10);
    digits++;
  }
  // console.log(n);

  n = num;
  while (n > 0) {
    let digit = n % 10;
    sum += Math.pow(digit, digits);
    n = Math.floor(n / 10);
  }
  // console.log(n);

  if (originalVal === sum) {
    console.log("Armstrong");
  } else {
    console.log("Not Armstrong");
  }
}
// checkArmStrongValue(13);

let score = 60;
if (score >= 80 && score <= 100) {
  // console.log("Gread-A");
} else if (score >= 70 && score <= 79) {
  // console.log("Grade- B");
} else if (score >= 60 && score <= 69) {
  // console.log("Grade- C");
} else if (score >= 50 && score <= 59) {
  // console.log("Grade- D");
} else {
  // console.log("F");
}

function checkPositive(num) {
  if (num >= 0) {
    return `${num}, Positive`;
  } else {
    return num, "Negative";
  }
}
// console.log(checkPositive(42));

function eligibleCheck(age) {
  if (age > 18) {
    console.log("Eligible");
  } else {
    console.log("Not Eligible");
  }
}
// eligibleCheck(3);

function checkEven(num) {
  if (num % 2 === 0) {
    console.log("Divisible");
  } else {
    console.log("Not Devisible");
  }
}
// checkEven(3);

function checkArmstorageNumb(num) {
  return num ===
    num
      .toString()
      .split("")
      .reduce((acc, crr) => acc + Math.pow(crr, 3), 0)
    ? "Armstrong"
    : "Not Armstrong";
}
// console.log(checkArmstorageNumb(153));

function armCheck(num) {
  let nums = num.toString().split("").map(Number);
  let temp = [];
  let output = "Not a Armstrong";

  for (let i = 0; i < nums.length; i++) {
    temp.push(Math.pow(nums[i], 3));
  }

  let sum = temp.reduce((acc, crr) => acc + crr, 0);

  if (sum === num) {
    output = "Armstrong";
  }
  return output;
}
// console.log(armCheck(123));

function isArmstrong(num) {
  let digit = toString().split("");
  let power = digit.length;
  let sum = digit.reduce((acc, crr) => acc + Math.pow(crr, power), 0);
  return sum === num;
}
function checkArmstrongInterval(start, end) {
  let result = [];
  for (let i = start; i <= end; i++) {
    if (isArmstrong(i)) {
      result.push(i);
    }
  }
  return result;
}
// console.log(checkArmstrongInterval(1, 999));

// ==================== CONDITIONAL STATEMENTS ==================
// Write a Program To Check If a Number Is Positive Or Negative;
let num = 15;
if (num % 2 === 0) {
  P;
  console.log("Positive");
}
if (num % 2 !== 0) {
  // console.log("Negative");
}

// Check if Persion Is  eligible to vote .
let personAge = 18;
if (personAge >= 18) {
  // console.log("Eligible");
}
if (personAge < 18) {
  console.log("Not Eligible");
}

// Check Number Is Even Or Not
let num1 = 21;
if (num1 % 2 === 0) {
  console.log("Even");
}
if (num1 % 2 !== 0) {
  // console.log("Odd");
}

// Write a Program To check If a Number is Greater than 100.
let num2 = 99;
if (num2 >= 100) {
  console.log("Greater..");
}
if (!(num2 >= 100)) {
  // console.log("Not Greater...");
}

// Check If a String is Empty or Not ?
let str = 1;
if (str === "") {
  console.log("Empty");
}
if (str !== "") {
  // console.log("Not Empty");
}

// Take a Number and Print Whether it is greater or smaller than 50
let num3 = 49;
if (num3 >= 50) {
  console.log("Greater");
} else {
  // console.log("Not Greater");
}

// Ask A user For there exam mars And print "pass" if marks greater than 40 otherwise "Fail"
let userMark = 41;
if (userMark >= 40) {
  // console.log("Pass");
} else {
  console.log("Fail");
}

// Write a Program to check whether a person is a child (age < 13) or not ?
let person1 = 13;
if (person1 < 13) {
  console.log("Child");
} else {
  // console.log("Not Child");
}

// If a Number is Devisible by 5, print "Fizz", Oherwise print the Number ?
let num4 = 12;
if (num4 % 5 === 0) {
  console.log("Fizz");
} else {
  // console.log(num4);
}

// Check If a Given Year is A leap Year Or Not;
let year = 2021;
if (year % 4 === 0 && year % 400 === 0 && year % 100 !== 0) {
  console.log(year, "Leap Year");
} else {
  // console.log(year, "Not a Leap Year");
}

// Check If a Number is Positive, Negative or Zero ?
let num5 = 0;
if (num5 === 0) {
  // console.log("Zero");
} else if (num5 % 2 === 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}

// Write a Program That assig a grade based on Mark ?
let grade = 80;
if (grade >= 90) {
  console.log("Grade: A");
} else if (grade >= 75) {
  // console.log("Grade: B");
} else if (grade >= 50) {
  console.log("Grade: C");
} else {
  console.log("Fail");
}

// Write a Program to Find The Largest Of Three Numbers
let a = 13;
let b = 15;
let c = 12;
if (a >= b && a >= c) {
  console.log("A isd greatter");
} else if (b >= a && b >= c) {
  // console.log("B is Greater");
} else {
  console.log("C is Greater");
}

// Check If a Character is a Vowel Or Consonant .
let char = "a";
if (char === "a") {
  // console.log("Vowel");
} else if (char === "e") {
  console.log("Vowel");
} else if (char === "i") {
  console.log("Vowel");
} else if (char === "o") {
  console.log("Vowel");
} else if (char === "u") {
  console.log("Vowel");
} else {
  console.log("Not Vowel");
}

// Check the Time of Day Based On Hour(0-23)
let time = 18;
if (time >= 0 && time < 11) {
  console.log("Good Morning");
} else if (time >= 11 && time < 17) {
  console.log("Good Afternoon");
} else {
  // console.log("Good Evening");
}

// Switch Case Statement
let studenGrade = "B";
switch (studenGrade) {
  case "A":
    console.log("85-100");
    break;
  case "B":
    // console.log("65-85");
    break;
  case "C":
    console.log("40-65");
    break;
  default:
    console.log("Fail");
}

let number = 2;
switch (number) {
  case 1:
    console.log("Today Is Monday");
    break;
  case 2:
    // console.log("Today Is Tuesday");
    break;
  case 3:
    console.log("Today Is Wednesday");
    break;
  case 4:
    console.log("Today Is Thusday");
    break;
  case 5:
    console.log("Today Is Friday");
    break;
  case 6:
    console.log("Today Is Saturday");
    break;
  case 7:
    console.log("Today Is Sunday");
    break;
  default:
    console.log("Enter a Valid Day Number");
}

// Write a program To find the Largest OF Four Numbers using Nested condition
let largNumber = [64, 100, 34, 45];
let result;
if (largNumber[0] > largNumber[1]) {
  if (largNumber[0] > largNumber[2]) {
    if (largNumber[0] > largNumber[3]) {
      result = largNumber[0];
    } else {
      result = largNumber[3];
    }
  } else {
    if (largNumber[2] > largNumber[3]) {
      result = largNumber[2];
    } else {
      result = largNumber[3];
    }
  }
} else {
  if (largNumber[1] > largNumber[2]) {
    if (largNumber[1] > largNumber[3]) {
      result = largNumber[1];
    } else {
      result = largNumber[3];
    }
  } else {
    if (largNumber[2] > largNumber[3]) {
      result = largNumber[2];
    } else {
      result = largNumber[3];
    }
  }
}
// console.log(result);

// Check if triangle id equilateral, isoscale, scalen using its side;
let side1 = 6;
let side2 = 6;
let side3 = 6;
if (side1 === side2 || side2 === side3) {
  if (side1 === side2 && side1 === side3 && side2 === side3) {
    // console.log("isosceles");
  } else {
    console.log("Equilateral");
  }
} else {
  if (side1 !== side2 || side2 !== side3 || side3 !== side1) {
    console.log("scalene");
  } else {
    console.log("Not valid Triangle");
  }
}

let side11 = 23;
let side22 = 23;
let side33 = 34;
let triangleCount;
if (side11 == side22 && side22 == side33) {
  if (side11 == side22 && side11 == side33 && side22 == side33) {
    triangleCount = "isoscale";
  } else {
    triangleCount = "equilateral";
  }
} else {
  if (side11 !== side22 && side11 !== side33 && side22 !== side33) {
    triangleCount = "Scalen";
  } else {
    triangleCount = "Not a Valid Traingle";
  }
}
// console.log(triangleCount);

// Check a Number is Even or Odd using Ternary Operator;
let checkNum = 23;
let checkNumEvenOrOdd = checkNum % 2 === 0 ? "Even" : "Odd";
// console.log(checkNumEvenOrOdd);

//Print "Adult" if age > 18 else "Minor" using ternary;
let age = 2;
if (age >= 18 ? true : false) {
  console.log("Adult");
} else {
  // console.log("Minor");
}

let age1 = 2;
if (true) {
  if (age1 >= 18 ? true : false) {
    console.log("Adult");
  } else {
    // console.log("Minor");
  }
}

//  Using Ternery print "Eligible" if ( marks > 40 else "Not Eligible")
let chkMark = 24;
if (true) {
  // console.log(chkMark > 40 ? "Eligible" : "Not Eligible");
}

// Write a Program That return "Hot" id temp > 30, "cold" if temp < 10, otherwise "Normal"
let temp = 2;
if (true) {
  console.log(temp >= 30 ? "Hot" : temp <= 10 ? "Cold" : "Normal");
}

// Write a Praogram t chakeck if given number is upparCase, lowescase, or not a letter
let character = "A";
if (character === character.toUpperCase()) {
  console.log("Character Is Uppercase");
} else if (character === character.toLowerCase()) {
  console.log("Character is Lowercase");
} else {
  console.log("Enter Valid Character");
}

let char1 = "X";
if (/[A-Z]/.test(char1)) {
  console.log("UpperCase");
} else if (/[a-z]/.test(char1)) {
  console.log("Lowercase");
} else {
  console.log("Not a letter");
}

// Check id a number is 3diigt number .
let numberDigit = 123;
if (numberDigit >= 1 && numberDigit <= 9) {
  console.log(numberDigit, "One Digit");
} else if (numberDigit >= 10 && numberDigit <= 99) {
  console.log(numberDigit, "Two Digit");
} else {
  console.log(numberDigit, "Three Digit");
}

// Write a program ti Check if today is weekend or weekday(using Date object)
let date = new Date("2025-09-07");
console.log(date);
let resultDate = date.getDay();
if (resultDate == 0 || resultDate == 6) {
  // console.log("Weekend");
} else {
  console.log("WeekDay");
}

// ATM program if balance > withdrawal amount and withdrawal is < daily limit allow withdrawal
let balance = 20;
let withdrawalAmount = 10;
let withdrawalNum = 5;
let dailyLimit = 5;
if (balance >= withdrawalAmount) {
  if (withdrawalNum <= dailyLimit) {
    // console.log("Allow Withdrawal");
  } else {
    console.log("Limit Cross");
  }
} else {
  console.log("Not Allow");
}

// wirte a program to classify a students grade;
let studentGrade = 90;
if (studentGrade >= 90) {
  // console.log("Excilent");
} else {
  if (studentGrade >= 70 && studentGrade <= 89) {
    console.log("Good");
  } else {
    if (studentGrade >= 40 && studentGrade <= 69) {
      console.log("Average");
    } else {
      console.log("Fail");
    }
  }
}

// Write a program that check if a number is  divisicle by 2 , 3, 5 -> "Supper Divisible"
// divisible b only two of them => Partially Divisible, therwised "Not Divisible";
let divisibleNum = 30;
if (divisibleNum % 2 === 0) {
  if (divisibleNum % 3 === 0) {
    if (divisibleNum % 5 === 0) {
      console.log("Supper Divisible");
    } else {
      console.log("Partial Divisible");
    }
  } else if (divisibleNum % 2 === 0) {
    if (divisibleNum % 5 === 0) {
      console.log("Partial Divisible");
    } else {
      console.log("Only Two Divisible");
    }
  }
} else if (divisibleNum % 3 === 0) {
  if (divisibleNum % 5 === 0) {
    console.log("Partial Divisible");
  } else {
    if (divisibleNum % 5 === 0) {
      if (divisibleNum % 2 === 0) {
        console.log("Partial Divisible");
      } else {
        console.log("Not Divisible with 2");
      }
    } else {
      console.log("Not Divisible With 5");
    }
  }
} else {
  console.log("Not Divisible With Any One");
}

// Another Way
let divisibleNumber = 30;
if(divisibleNumber % 2 === 0 && divisibleNumber % 3 === 0 && divisibleNumber % 5 === 0){
  console.log("Supper Divisible");
} else if(
  divisibleNumber % 2 === 0 && divisibleNumber % 3 === 0 ||
  divisibleNumber % 2 === 0 && divisibleNumber % 5 === 0 ||
  divisibleNumber % 3 === 0 && divisibleNumber % 5 === 0
){
  console.log("Partial Divisible");
} else if(divisibleNumber % 2 === 0){
  console.log("Only 2 Divisible");
} else if(divisibleNumber % 3 === 0){
  console.log("Only 3 Divisible");
} else if(divisibleNumber % 5 === 0){
  console.log("Only 5 Divisible");
} else {
  console.log("Not Divisible With Anyone");
};

// Given a Student's marks in 3 subject
let sub1 = 45;
let sub2 = 44;
let sub3 = 40;
if (sub1 < 35 || sub1 < 35 || sub3 < 35) {
  console.log("Fail");
} else {
  if (sub1 >= 90 || sub2 >= 90 || sub3 >= 90){
    console.log("A+");
  } else if((sub2 >= 75 && sub2 <= 89) && (sub1 >= 75 && sub1 <= 89) && (sub3 >= 75 && sub3 <= 89)){
    console.log("A");
  } else if((sub1 >= 60 && sub1 <= 74) && (sub2 >= 60 && sub2 <= 74) && (sub3 >= 60 && sub3 <= 74)){
    console.log("B");
  } else if((sub2 >= 40 && sub2 <= 59) && (sub1 >= 40 && sub1 <= 59) && (sub3 >= 40 && sub3 <= 59)){
    console.log("C");
  } else {
    console.log("Pass");
  };
};
