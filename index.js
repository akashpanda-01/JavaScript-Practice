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

// find Armstrong Number
function isArmstrongNumber(num) {
  let n = num;
  let digit = num.toString().split("");
  console.log(digit);

  let power = digit.length;
  console.log(power);

  let sum = 0;
  while (n > 0) {
    sum += Math.pow(digit, power);
    n = parseInt(n / 10);
  }
  if (sum === num) {
    console.log("ArmStrong");
  } else {
    console.log("Not ArmStrong Number");
  }
}
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
// isArmstrongNumber(153);

// =====================================================================================
// Loops
function loopArmStrong(num) {
  let digit = num.toString().split("");
  let power = digit.length;
  let sum = 0;

  for (let digits of digit) {
    sum += Math.pow(Number(digits), power);
  }

  return sum === num;
}
// console.log(loopArmStrong(15));

//Mathematical Way
function mathmaticalArmstorage(num) {
  let sum = 0;
  let digit = num.toString().split("");
  let power = digit.length;

  let temp = num;
  for (let i = 0; i < num; i++) {
    sum += Math.pow(Number(digit), power);
  }
  return sum === num;
  console.log(sum);
}
console.log(mathmaticalArmstorage(153));

function isArmstrong(num) {
  let digit = num.toString().split("");
  let power = digit.length;
  let sum = digit.reduce((acc, crr) => acc + Math.pow(Number(crr), power), 0);
  return sum === num;
}
function loopToChecck(start, end) {
  let output = [];
  for (let i = start; i <= end; i++) {
    if (isArmstrong(i)) {
      output.push(`${i} Armstrong`);
    } else {
      output.push(`${i} Not Armstrong`);
    }
  }
  return output;
}
loopToChecck(100, 999);
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
  // console.log("Positive");
}
if (num % 2 !== 0) {
  // console.log("Negative");
}

// Check if Persion Is  eligible to vote .
let personAge = 18;
if (personAge >= 18) {
  //console.log("Eligible");
}
if (personAge < 18) {
  console.log("Not Eligible");
}

// Check Number Is Even Or Not
let num1 = 21;
if (num1 % 2 === 0) {
  // console.log("Even");
}
if (num1 % 2 !== 0) {
  // console.log("Odd");
}

// Write a Program To check If a Number is Greater than 100.
let num2 = 99;
if (num2 >= 100) {
  // console.log("Greater..");
}
if (!(num2 >= 100)) {
  // console.log("Not Greater...");
}

// Check If a String is Empty or Not ?
let str = 1;
if (str === "") {
  // console.log("Empty");
}
if (str !== "") {
  // console.log("Not Empty");
}

// Take a Number and Print Whether it is greater or smaller than 50
let num3 = 49;
if (num3 >= 50) {
  // console.log("Greater");
} else {
  // console.log("Not Greater");
}

// Ask A user For there exam mars And print "pass" if marks greater than 40 otherwise "Fail"
let userMark = 41;
if (userMark >= 40) {
  // console.log("Pass");
} else {
  // console.log("Fail");
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

// Write a Program that prints the name of the month for numbers (1-12)?
let findMonthWithNum = 1;
switch (findMonthWithNum) {
  case 1:
    // console.log("January");
    break;
  case 2:
    console.log("Fabruary");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("Septmber");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("Enter a Valid Month Number 1 to 12");
}

// A Calculator Program Using Switch : user Enter Two Number an operator(+, -, /, *)?
let userNum1 = 5;
let userNum2 = 28;
let sum = "-";
let result;
switch (sum) {
  case "+":
    console.log((result = userNum1 + userNum2));
    break;
  case "-":
    // console.log(result = userNum1 - userNum2);
    break;
  case "/":
    console.log((result = userNum1 / userNum2));
    break;
  case "*":
    console.log((result = userNum1 * userNum2));
    break;
  default:
    console.log("Select a Valid Operator");
}

// Checck Trafic Light Color
let traficColor = ["red", "green", "yellow"];
let index = 1;
let color = traficColor[index];
switch (color) {
  case "red":
    console.log("Stop");
    break;
  case "green":
    // console.log("Go");
    break;
  case "yellow":
    console.log("Ready To Go");
    break;
  default:
    console.log("Please Enter a Valid Index Number Between 0 to 2");
}

// Write a Program To Check Grade Letters (A, B, C, D)
let gradeNum = 89;
switch (true) {
  case gradeNum > 85:
    // console.log("Grade-A");
    break;
  case gradeNum >= 65 && gradeNum < 85:
    console.log("Gread-B");
    break;
  case gradeNum >= 50 && gradeNum < 65:
    console.log("Grade-C");
    break;
  case gradeNum >= 40 && gradeNum < 50:
    console.log("Grade-D");
    break;
  default:
    console.log("Fail");
}

//Check a Number is Between 10 and 50?
let number = 100;
if (number >= 10 && number <= 100) {
  // console.log("Number is Between 10 and 50");
} else {
  console.log("Not Between 10 and 50");
}

let betwNum = 15;
switch (true) {
  case betwNum >= 15 && betwNum <= 100:
    // console.log("Number Is Between 1 and 10");
    break;
  default:
    console.log("Number is Not betweeen 1 to 10");
}

// Check If a Person can apply for driving License (age > 18 and has ID proof)
let userAge = 18;
let userId = true;
if (userAge >= 18 && userId === true) {
  // console.log("Vilid");
} else {
  console.log("Not Valid");
}

switch (true) {
  case userAge >= 18 && userId === true:
    // console.log("Valid or Can Apply");
    break;
  default:
    console.log("Not Valid / cann't Apply ");
    break;
}

//Check If a Number is Divisible by 3 or 7 Print "Speciial Number" ?
let divisibleNum = 23;
if (divisibleNum % 3 === 0 && divisibleNum % 7 === 0) {
  console.log("Special Number");
} else {
  // console.log("Not Divisible");
}

switch (true) {
  case divisibleNum % 3 === 0 && divisibleNum % 7 === 0:
    console.log("Special Number");
    break;
  default:
  // console.log("Not Divisible by 3 and 7");
}

// Check if a username and password are correct (use two variables)
let username = "Akash";
let userpwd = 1234;
if (username === "Akash" && userpwd === 1234) {
  console.log("Verified");
} else {
  console.log("Not Verified");
}

switch (true) {
  case username === "Akash" && userpwd === 1234:
    console.log("Verified");
    break;
  default:
    console.log("Not Verified");
}

//if it's raining print "You can go outside" otherwise "Stay in Home" ?
let weather = "sun";
if (weather === "raining") {
  console.log("Stay in Home");
} else {
  console.log("You can Go Outside");
}

let raining = true;
switch (!raining) {
  case true:
    console.log("You can go outside");
    break;
  case false:
    console.log("Stay in Home");
}

// Nested If Condition
// write a program to check if a year is a century leap year (divisible by 400)
let isLeapYear = 2023;
if (isLeapYear % 100 === 0) {
  if (isLeapYear % 400 === 0) {
    console.log("Century leap Year");
  } else {
    console.log("centry year but Not a Century Leap Year");
  }
} else {
  if (isLeapYear % 4 === 0) {
    console.log("Leap Year");
  } else {
    console.log("Not Leap Year");
  }
}

// if a person' age > 18 then check if they also have a driving license "Can Drive" or "Can not Drive"
let personsAge = 34;
let personDrivingLicense = true;
if (personsAge >= 18) {
  if (personDrivingLicense === true) {
    console.log("Can Drive");
  } else {
    console.log("Cann't Drive");
  }
} else {
  console.log("Age Not Valid");
}

// Write a program to check if a number is: divisible by 2 or 3 -> "divisible by both"
// only by 2 -> "divisible by 2", only by 3 -> "divisible by 3", else "not divisible"
let checkNum = 20;
if (checkNum % 2 === 0 && checkNum % 3 === 0) {
  console.log("Both Divisible");
} else {
  if (checkNum % 2 === 0) {
    console.log("Divisible By Only 2");
  } else {
    if(checkNum % 3 === 0){
      console.log("Divisible by 3");
    } else {
      console.log("Not Divisble by Anyone");
    };
  };
};

let checkNum1 = 6;
if (checkNum1 % 2 === 0 || checkNum1 % 3 === 0) {
  if (checkNum1 % 2 === 0) {
    if (checkNum1 % 3 === 0) {
      console.log("Both Divisible");
      console.log("Divisible By 2");
    } else {
      console.log("not Divisiible by 3");
    }
  } else {
    console.log("Divisible By 2");
  }
} else {
  console.log("Not Divisible");
};

// Find a Program To find the largest of 4 numbersusing nested condition
let largestNumbers = [12, 45, 34, 732];
let getThroughIndex;

if(largestNumbers[getThroughIndex]){
  console.log();
  
}