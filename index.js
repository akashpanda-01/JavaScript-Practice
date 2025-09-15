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
  // console.log("Positive");
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
  // console.log("Greater.");
} else {
  // console.log("Not Greater");
}

// Ask A user For there exam mars And print "pass" if marks greater than 40 otherwise "Fail"
let userMark = 41;
if (userMark >= 40) {
  // console.log("Pass");
} else {
  // console.log("Fail") ;
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
let resultt;
if (largNumber[0] > largNumber[1]) {
  if (largNumber[0] > largNumber[2]) {
    if (largNumber[0] > largNumber[3]) {
      resultt = largNumber[0];
    } else {
      resultt = largNumber[3];
    }
  } else {
    if (largNumber[2] > largNumber[3]) {
      resultt = largNumber[2];
    } else {
      resultt = largNumber[3];
    }
  }
}

let resultNum;
if (largNumber[0] > largNumber[1]) {
  if (largNumber[0] > largNumber[2]) {
    if (largNumber[0] > largNumber[3]) {
      resultNum = largNumber[0];
    } else {
      resultNum = largNumber[3];
    }
  } else {
    if (largNumber[2] > largNumber[3]) {
      resultNum = largNumber[2];
    } else {
      resultNum = largNumber[3];
    }
  }
} else {
  if (largNumber[1] > largNumber[2]) {
    if (largNumber[1] > largNumber[3]) {
      resultt = largNumber[1];
    } else {
      resultt = largNumber[3];
    }
  } else {
    if (largNumber[2] > largNumber[3]) {
      resultt = largNumber[2];

      resultNum = largNumber[1];
    } else {
      resultNum = largNumber[3];
    }
    // } else {
    //   if (largNumber[2] > largNumber[3]) {
    //     resultNum = largNumber[2];
    //   } else {
    //     resultNum = largNumber[3];
    //   }
  }
}
// console.log(resultt);

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
  // console.log(temp >= 30 ? "Hot" : temp <= 10 ? "Cold" : "Normal");
}

// Write a Praogram t chakeck if given number is upparCase, lowescase, or not a letter
let character = "A";
if (character === character.toUpperCase()) {
  // console.log("Character Is Uppercase");
} else if (character === character.toLowerCase()) {
  console.log("Character is Lowercase");
} else {
  console.log("Enter Valid Character");
}

let char1 = "X";
if (/[A-Z]/.test(char1)) {
  // console.log("UpperCase");
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
  // console.log(numberDigit, "Three Digit");
}

// Write a program ti Check if today is weekend or weekday(using Date object)
let date = new Date("2025-09-07");
// console.log(date);
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
      // console.log("Supper Divisible");
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
if (
  divisibleNumber % 2 === 0 &&
  divisibleNumber % 3 === 0 &&
  divisibleNumber % 5 === 0
) {
  // console.log("Supper Divisible");
} else if (
  (divisibleNumber % 2 === 0 && divisibleNumber % 3 === 0) ||
  (divisibleNumber % 2 === 0 && divisibleNumber % 5 === 0) ||
  (divisibleNumber % 3 === 0 && divisibleNumber % 5 === 0)
) {
  console.log("Partial Divisible");
} else if (divisibleNumber % 2 === 0) {
  console.log("Only 2 Divisible");
} else if (divisibleNumber % 3 === 0) {
  console.log("Only 3 Divisible");
} else if (divisibleNumber % 5 === 0) {
  console.log("Only 5 Divisible");
} else {
  console.log("Not Divisible With Anyone");
}

// Given a Student's marks in 3 subject
let sub1 = 45;
let sub2 = 44;
let sub3 = 40;
if (sub1 < 35 || sub1 < 35 || sub3 < 35) {
  console.log("Fail");
} else {
  if (sub1 >= 90 || sub2 >= 90 || sub3 >= 90) {
    console.log("A+");
  } else if (
    sub2 >= 75 &&
    sub2 <= 89 &&
    sub1 >= 75 &&
    sub1 <= 89 &&
    sub3 >= 75 &&
    sub3 <= 89
  ) {
    console.log("A");
  } else if (
    sub1 >= 60 &&
    sub1 <= 74 &&
    sub2 >= 60 &&
    sub2 <= 74 &&
    sub3 >= 60 &&
    sub3 <= 74
  ) {
    console.log("B");
  } else if (
    sub2 >= 40 &&
    sub2 <= 59 &&
    sub1 >= 40 &&
    sub1 <= 59 &&
    sub3 >= 40 &&
    sub3 <= 59
  ) {
    // console.log("C");
  } else {
    console.log("Pass");
  }
}
//Check a Number is Between 10 and 50?

let number1 = 100;
if (number1 >= 10 && number1 <= 100) {
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

let divisibleNum1 = 23;
if (divisibleNum1 % 3 === 0 && divisibleNum1 % 7 === 0) {
  console.log("Special Number");
} else {
  // console.log("Not Divisible");
}

let divisibleNumm = 3;
switch (true) {
  case divisibleNumm % 3 === 0 && divisibleNumm % 7 === 0:
    console.log("Special Number");
    break;
  default:
  // console.log("Not Divisible by 3 and 7");
}

// Check if a username and password are correct (use two variables)
let username = "Akash";
let userpwd = 1234;
if (username === "Akash" && userpwd === 1234) {
  // console.log("Verified");
} else {
  console.log("Not Verified");
}

switch (true) {
  case username === "Akash" && userpwd === 1234:
    // console.log("Verified");
    break;
  default:
    console.log("Not Verified");
}

//if it's raining print "You can go outside" otherwise "Stay in Home" ?
let weather = "sun";
if (weather === "raining") {
  console.log("Stay in Home");
} else {
  // console.log("You can Go Outside");
}

let raining = true;
switch (!raining) {
  case true:
    console.log("You can go outside");
    break;
  case false:
  // console.log("Stay in Home");
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
    // console.log("Not Leap Year");
  }
}

// if a person' age > 18 then check if they also have a driving license "Can Drive" or "Can not Drive"
let personsAge = 34;
let personDrivingLicense = true;
if (personsAge >= 18) {
  if (personDrivingLicense === true) {
    // console.log("Can Drive");
  } else {
    console.log("Cann't Drive");
  }
} else {
  console.log("Age Not Valid");
}

// Write a program to check if a number is: divisible by 2 or 3 -> "divisible by both"
// only by 2 -> "divisible by 2", only by 3 -> "divisible by 3", else "not divisible"
let checkNumm = 20;
if (checkNumm % 2 === 0 && checkNumm % 3 === 0) {
  // console.log("Both Divisible");
} else {
  if (checkNumm % 2 === 0) {
    // console.log("Divisible By Only 2");
  } else {
    if (checkNumm % 3 === 0) {
      let checkNumb = 20;
      if (checkNumb % 2 === 0 && checkNumb % 3 === 0) {
        console.log("Both Divisible");
      } else {
        if (checkNumb % 2 === 0) {
          // console.log("Divisible By Only 2");
        } else {
          if (checkNumb % 3 === 0) {
            console.log("Divisible by 3");
          } else {
            console.log("Not Divisble by Anyone");
          }
        }
      }
    }
  }
}

let checkNum1 = 6;
if (checkNum1 % 2 === 0 || checkNum1 % 3 === 0) {
  if (checkNum1 % 2 === 0) {
    if (checkNum1 % 3 === 0) {
      // console.log("Both Divisible");
      // console.log("Divisible By 2");
    } else {
      console.log("not Divisiible by 3");
    }
  } else {
    console.log("Divisible By 2");
  }
} else {
  console.log("Not Divisible");
}

// if sum of any two < third => "Not a Triangle" else check all sides equal => "Equilatereal", Two Sides Equal => "Ososceles"
// All different => "Scalene" also check if Pythagoras theorom holds => "Right-Angled Triangle".a
let triangle1 = 12;
let triangle2 = 12;
let triangle3 = 12;
if (
  triangle1 + triangle2 <= triangle3 ||
  triangle2 + triangle3 <= triangle1 ||
  triangle3 + triangle1 <= triangle2
) {
  console.log("Not a Triangle");
} else if (
  triangle1 === triangle2 &&
  triangle1 === triangle3 &&
  triangle2 === triangle3
) {
  // console.log("Equilateral");
} else if (
  triangle1 === triangle2 ||
  triangle1 === triangle3 ||
  triangle2 === triangle3
) {
  console.log("Isosceles");
} else if (
  triangle1 !== triangle2 &&
  triangle1 !== triangle3 &&
  triangle2 !== triangle3
) {
  console.log("Scalene");
}

// Electricity Bill Calculator
// Units Consumed -> Apply Rates => 0-100 =>1.5/units , 101-300-> 2.5/units, 301-500->4/units
// Above 500 => 6/units
// Also Add 10% surcharg if bill > 2000.
let unit = 90;
let bills;
if (unit > 0 && unit <= 100) {
  bills = unit * 1.5;
} else if (unit >= 101 && unit <= 300) {
  bills = 100 * 1.5 + (unit - 100) * 2.5;
} else if (unit >= 301 && unit <= 500) {
  bills = 100 * 1.5 + 200 * 2.5 + (unit - 200) * 4;
} else {
  if (units >= 500) {
    bills = 100 * 1.5 + 200 * 2.5 + 300 * 4 * 6;
  }
}
if (bills > 2000) {
  bills = bills * 1.1;
}
// console.log("₹",bills);

// Numer Range Check
// Take Two Numbe "min" and "max"
// Check iF A USER GIVEN NUMBER IS INSDE THE RANGE , EXACTLY AT THE BAOUNDARY, OR OUTSIDE;
let userGivenNum = 10;
let min = 10;
let max = 100;
if (userGivenNum >= min && userGivenNum <= max) {
  if (userGivenNum === min) {
    // console.log("lower Boundary");
  } else if (userGivenNum === max) {
    console.log("Upper Boundary");
  } else {
    console.log("Inside The Range");
  }
} else {
  console.log("Out Side the Range");
}
// Find a Program To find the largest of 4 numbers using nested condition
let largestNumbers = [12, 45, 34, 32];

if (largestNumbers[0] > largestNumbers[1]) {
  if (largestNumbers[0] > largestNumbers[2]) {
    if (largestNumbers[0] > largestNumbers[3]) {
      console.log(largestNumbers[0], "Largest Number");
    } else {
      console.log(largestNumbers[3], "Largest Number");
    }
  } else {
    if (largestNumbers[2] > largestNumbers[3]) {
      console.log(largestNumbers[2], "Largest Number");
    } else {
      console.log(largestNumbers[3], "Largset Numbr");
    }
  }
} else {
  if (largestNumbers[1] > largestNumbers[2]) {
    if (largestNumbers[1] > largestNumbers[3]) {
      // console.log(largestNumbers[1], "largset Number");
    } else {
      console.log(largestNumbers[3], "Largset Number");
    }
  } else {
    if (largestNumbers[2] > largestNumbers[3]) {
      console.log(largestNumbers[2], "Largest Number");
    } else {
      console.log(largestNumbers[3], "Largest Number");
    }
  }
}

// wirte a program that checks if a number is divisible by 2, 3 , or 5 is "supper devisible"
// divisible by two of them the "partially Divisible", otherwise ("not divisible");
let numberCheck = 6;
if (numberCheck % 2 === 0 && numberCheck % 3 === 0 && numberCheck % 5 === 0) {
  // console.log("Supper Diviisible");
} else if (
  (numberCheck % 2 === 0 && numberCheck % 3 === 0) ||
  (numberCheck % 2 === 0 && numberCheck % 5 === 0) ||
  (numberCheck % 3 === 0 && numberCheck % 5 === 0)
) {
  // console.log("Partially Divisible");
} else if (numberCheck % 2 === 0) {
  console.log("Divisible By 2");
} else if (numberCheck % 3 === 0) {
  console.log("Diivisible By 3 ");
} else if (numberCheck % 5 === 0) {
  console.log("Divisible by 5");
} else {
  console.log("Not Divisible By anyone");
}

// check withdrawal amount is a multiple of 100, check if withdral amount < daily limit (25,000)
// check if witdral amount < account balance , if all true -> "Transaction SuccessFull" else show the exact reason
let withdrawalAmount1 = 30000;
let accountBalance = 15000;
let dailyLimit1 = 20000;

if (
  withdrawalAmount1 % 100 === 0 &&
  withdrawalAmount1 < dailyLimit1 &&
  withdrawalAmount1 < accountBalance
) {
  console.log("Transaction SuccessFul");
} else if (withdrawalAmount1 % 100 !== 0) {
  console.log("Withdrawal Amount Not Multiple by 100");
} else if (withdrawalAmount1 >= dailyLimit1) {
  // console.log("DailyLimit Was Crossed");
} else if (withdrawalAmount1 >= accountBalance) {
  console.log("Account Balance Insuficient");
} else {
  console.log("Enter Valid Number");
}

// if sum of any two < third -> "Not a Tringle"
// else check all side equal = "EquiLateral", Two sides Equal => "Isoseles";
// ALL Diifferentn => "Scalene"
// Also Check If Pythogoras Theorom holds => "Right-angle triangle";
let triangleSide1 = 3;
let triangleSide2 = 3;
let triangleSide3 = 6;
if (
  triangleSide1 + triangleSide2 <= triangleSide3 &&
  triangleSide1 + triangleSide3 <= triangleSide2 &&
  triangleSide2 + triangleSide3 <= triangleSide1
) {
  console.log("Not a Triangle");
} else if (
  triangleSide1 === triangleSide2 &&
  triangleSide1 === triangleSide3 &&
  triangleSide2 === triangleSide3
) {
  console.log("Equilateral");
} else if (
  triangleSide1 === triangleSide2 ||
  triangleSide1 === triangleSide3 ||
  triangleSide2 === triangleSide3
) {
  // console.log("isoscales");
} else if (
  triangleSide1 !== triangleSide2 &&
  triangleSide1 !== triangleSide3 &&
  triangleSide2 !== triangleSide3
) {
  console.log("Scalene");
}
let aa = 6;
let bb = 8;
let cc;
if (aa * aa + bb * bb === cc * cc) {
  console.log("Write Angled Triangle");
} else {
  // console.log("Not Right Angled Triangled");
}

// check login wit two variables
// username ="Admin" and password= "1234" => "Welcome Admin"
// username = "User" and Passwoord = "abcd" => "Welcome User"
// if usernaame correct or Password Incorrect => "Incorrect Password"
// else => "Invalid Credentials";
let username1 = "Admn";
let password1 = "acbc";
if (username1 === "Admin" && password1 === "1234") {
  console.log("Welcome Admin");
} else if (username1 === "User" && password1 === "abcd") {
  console.log("Welcome User");
} else if (
  (username1 === "Admin" && password1 !== "1234") ||
  (username1 === "User" && password1 === "abcd")
) {
  console.log("Invalid password");
} else {
  // console.log("Invalid Credentials");
}

// unit consumed  => Apply rate;
//0-100 => 1.5/unit, 101-300 => 2.5/uniit, 301-500 => 4/unit,
//above 500 => 6/Unit Also add 10% sucharge if bill > 2000.
let units = 2100;
let bill;
if (units >= 0 && units <= 100) {
  bill = 100 * 1.5;
} else if (units >= 101 && units <= 300) {
  bill = 100 * 1.5 + (units - 100) * 2.5;
} else if (units >= 301 && units <= 500) {
  bill = 100 * 1.5 + 200 * 2.5 + (units - 200) * 4;
} else if (units >= 501) {
  bill = 100 * 1.5 + 200 * 2.5 + 300 * 4 + (units - 500) * 6;
} else if (bill >= 2000) {
  // bill = bill *= 1.10; // this is the shortcut of this down method
  bill = bill + bill * 0.1;
}
// console.log(bill);

//  Check if year is leap year using exact rule : if divisible by 4 => possible leap year
// if divisible by 100 => must also be divisible by 400 , else not a leap year
let findLeapYear = 2025;
if (findLeapYear % 400 === 0) {
  console.log("Leap Year");
} else if (findLeapYear % 100 === 0) {
  console.log("Not a leap Year");
} else if (findLeapYear % 4 === 0) {
  console.log("Leap Year");
} else {
  // console.log("Not a leap year");
}

// E-commerce Discount Logic, If total Price > 5000 => 20% Discount
//  Else If Total Price > 2000 => 10% Discount
// Else if user is a Prime number  -> 5% Discount
// Else no Discount (Also Show Final Payable amount).
let priceNum = 23;
let totalAmount;
let isPrime = true;
if (priceNum > 1) {
  for (let i = 2; i <= Math.sqrt(priceNum); i++) {
    if (priceNum % i === 0) {
      isPrime = false;
      break;
    }
  }
} else {
  isPrime = false;
}
if (priceNum >= 5000) {
  totalAmount = priceNum - priceNum * 0.2;
  console.log("20% Discount");
} else if (priceNum >= 2000) {
  totalAmount = priceNum - priceNum * 0.1;
  console.log("10% Discount");
} else if (isPrime) {
  totalAmount = priceNum - priceNum * 0.05;
  // console.log("5% Discount");
} else {
  totalAmount = priceNum;
  console.log("No Discount");
}

// Nested Date Check
// if it's Weekend (saturday / sunday) => "Holiday";
// Else IF it's first day of the month => "Salary Day";
// Else => "Normal Woring Day";
let newDate = new Date();
let day = newDate.getDay();
let dateNum = newDate.getDate();
if (day === 0 || day === 6) {
  // console.log("Holiday -", newDate.toLocaleDateString());
} else if (dateNum === 1) {
  console.log("Salary Day -", newDate.toLocaleDateString());
} else {
  // console.log("Normal Working Day -", newDate.toLocaleDateString());
}

// =============================== LOOPS ================================
for (let i = 1; i <= 10; i++) {
  let value = i * 5;
  // console.log("5", i, value);
}

for (let i = 1; i <= 50; i = i + 5) {
  // console.log(i);
}

// let n = prompt("Enter Number..") // the number was string we have to convert it to intiger(number)
// n = parseInt(n);
// for(let i = n; i <= n * 10; i = i + 5){
//   console.log(i);
// };

// Nested Loop
for (let i = 1; i <= 3; i++) {
  // console.log("Outer Loop", i);
  for (let j = 1; j <= 3; j++) {
    // console.log(j);
  }
}

// While Loop
{
  let i = 1;
  while (i <= 5) {
    // console.log(i);
    i++;
  }
}

{
  let i = 5;
  while (i >= 1) {
    // console.log(i);
    i--;
  }
}

//  Even
{
  let i = 1;
  while (i <= 20) {
    let val = i * 2;
    // console.log(val);
    i++;
  }
}

// odd
{
  let i = 1;
  while (i <= 20) {
    let val = i * 2;
    // console.log(val);
    i++;
  }
}

// Favorite Movie
// let favMovie = "Avatar";
// let guess = prompt("Guess The Movie..");
// while (guess != favMovie) {
// if(guess != "quit"){
//     alert("You Quit...!");
//     break;
//   }
//   guess = prompt("Wrong Guess, Try Again");
// }
// if (guess === favMovie) {
//   alert("Congrats..!");
// }

// LOOPS WITH ARRAYS
let fruits = ["mango", "appel", "banana", "litchi", "orange"];
for (let i = 0; i < fruits.length; i++) {
  // console.log(i, fruits[i]);
}

// Backward
for (let i = fruits.length - 1; i >= 0; i--) {
  // console.log(i, fruits[i]);
}

// Find the sum of even numbers from 1 to 50?
{
  let sum = 0;
  for(let i = 0; i<=50; i = i + 2){
    // console.log(i);
    sum += i;
  }
}
// =========================LOOPS WITH ARRAY =======================
let heroes = [
  ["ironman", "spiderman", "thor"],
  ["superman", "wonder woman", "flash"],
];
for (let i = 0; i < heroes.length; i++) {
  // console.log(heroes[i]);
  for (let j = 0; j < heroes[i].length; j++) {
    // console.log(heroes[i][j]);
  }
}

let student = [
  ["aman", 95],
  ["akash", 98],
  ["shradha", 89],
];
for (let i = 0; i < student.length; i++) {
  // console.log(student[i]);
  for (let j = 0; j < student[i].length; j++) {
    // console.log(student[i][j]);
  }
}

// for of Loop
let namesOfFruits = ["mango", "banana", "appel"];
for (fruit of namesOfFruits) {
  // console.log(fruit);
}

let arrNames = [
  ["a", "b", "c"],
  ["A", "B", "C"],
];
for (nme of arrNames) {
  // console.log(nme);
  for (nm of nme) {
    // console.log(nm);
  }
}

// ===================== LOOP QUESTION ANSWER =============================
// Print Number From 1 to 10 using a loop;
for (let i = 0; i <= 10; i++) {
  // console.log(i);
}

//  Print Even Numbers Between 1 to 20 ?
for (let i = 0; i <= 10; i++) {
  let val = i * 2;
  // console.log(val);
}

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    // console.log(i);
  }
}

for (let i = 0; i <= 20; i = i + 2) {
  // console.log(i);
}

// print odd numbers between 1 to 15
for (let i = 1; i <= 15; i = i + 2) {
  // console.log(i);
}

for (let i = 0; i <= 15; i++) {
  if (i % 2 != 0) {
    // console.log(i);
  }
}

for (let i = 0; i <= 15; i++) {
  let val = i * 2 + 1;
  // console.log(val);
}

// Print Multiplication Table Of 5
for (let i = 1; i <= 10; i++) {
  let val = i * 5;
  // console.log("5", i, val);
}
for (let i = 1; i <= 10; i++) {
  let val = i % 5 === 0; // it wil give us true or false
  // console.log("5", i, val);
}

for (let i = 0; i <= 50; i = i + 5) {
  // console.log(i);
}

// Print Number 10 to 1 reverse order
for (let i = 10; i >= 1; i--) {
  // console.log(i);
}

// LEVEL 2
// Find Sum of numbers between 1 to 100
let numSum = 0;
for (let i = 1; i <= 100; i++) {
  numSum += i;
}
// console.log("Sum is =",numSum);

let n = 100;
let sum1 = (n * (n + 1)) / 2;
// console.log(sum1);

{
  let number = Array.from({ length: 100 }, (_, i) => i + 1);
  // console.log(number);
  let sum = number.reduce((acc, crr) => acc + crr, 0);
  // console.log(sum);
}

{
  let i = 1;
  let sum = 0;
  while (i <= 100) {
    sum = sum + i;
    i++;
    // console.log(sum);

  };
  // console.log(sum);
}

{
  let sum = 0;
  let i = 0;
  while(i<=50){
    sum += i;
    i+= 2
  };
  // console.log(sum);
}

// Print The Squares of Number 1 to 10.
for(let i = 1; i <= 10; i++){
  let square = i * i;
  // console.log(square);
};

{
  let num = 1;
  while(num <= 10){
    let sqr = num * num;
    // console.log(sqr);
    num++
  };
};

// Count How Many numbers Between 1-50 are divisible by 3.
{
  let count = 0;
  for(let i = 1; i<=50; i++){
    if(i % 3 === 0){
      // console.log(i);
      count++
    };
  };
  // console.log(count);
}

{
  let countNum = 0;
  let i = 1;
  while(i<=50){
    if(i % 3 === 0){
      countNum = countNum + 1;
    };
    i++
  };
  // console.log(countNum);
  
}

{
  //Print only numbers between 1-30 that are divisible by both 2 and 5.
  for(let i = 1; i<=30; i++){
    if(i % 2 === 0 &&  i % 5 === 0){
      let printNum = i;
      // console.log(printNum);
    };
  };
};

{
  let i = 1;
  while(i<=30){
    if(i % 2 === 0){
      if(i % 5 === 0){
        let printNum = i;
        // console.log(printNum);
      };
    };
    i++;
  };
}
// Recursive Function
{
  function summ(n) {
    if (n === 1) return 1;
    return n + summ(n - 1);
  }
}
// console.log(summ(100));

// Find The sum of even numbers from 1 to 50;
{
  let sum = 0;
  let i = 1;
  while (i <= 50) {
    if (i % 2 === 0) {
      sum = sum + i;
      // console.log("Adding", i, "Current sum", sum);
    }
    i++;
  }
  // console.log(sum);
}

{
  let sum = 0;
  for (let i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
      sum = sum + i;
      // console.log(sum);
    }
  }
}
{
  let sum = 0;
  for (let i = 0; i <= 50; i = i + 2) {
    sum = sum + i;
    // console.log(sum);
  }
}

// Print Squares of numbers
{
  let num = 1;
  while (num <= 10) {
    let sqr = num * num;
    // console.log(sqr);
    num++;
  }
}
{
  let sqr;
  for (let i = 1; i <= 10; i++) {
    if (true) {
      sqr = i * i;
      // console.log(sqr);
    }
  }
}

// Count only numbers between 1-50 that are divisible by 3
{
  let count = 0;
  for (let i = 0; i <= 50; i++) {
    if (i % 3 === 0) {
      // console.log(i);
      count = count + 1;
    }
  }
  // console.log(count);
}

{
  let count = 0;
  let i = 1;
  while (i <= 50) {
    if (i % 3 === 0) {
      // console.log(i);
      count++;
    }
    i++;
  }
  // console.log(count);
}

// Print Numbers Between 1-30 that are divisible by both 2 and 5.
{
  let countNum;
  for (let i = 1; i <= 30; i++) {
    if (i % 2 === 0 && i % 5 === 0) {
      // console.log(i);
      countNum = i;
    }
    // console.log(countNum);
  }
}
{
  let i = 1;
  let count = 0;
  while (i <= 30) {
    if (i % 2 === 0 && i % 5 === 0) {
      count = i;
      // console.log(count);
    }
    i++;
  }
}

// print star triangle
{
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let row = ""
    for (let j = 1; j <= i; j++) {
      row += j;
      row += "* ";
    };
    // console.log(row);
  };
}

{
  let n = 1
  for(let i = 5; i>=n; i--){
    let row = "";
    for(let j = 1; j<=i; j++){
      row += "* ";
    };
    // console.log(row);
  };
}

{
  let n = 5;
  let i = n;
  while(i >= 1){
    let row = "";
    let j = 1
    
    while(j <= i){
      row += "* ";
      j++;
    };
    // console.log(row);
    i--;
  }
}
{
  let n = 5;
  let i = 1;
  while(i <= n){
    let row = "";
    let j = 1;
    while(j <= i){
      row += "* ";
      j++;
    };
    // console.log(row);
    i++;
  }
}

{
  // print Number In triangle.
  let n = 5;
  for(let i = 1; i <= n; i++){
    let row = "";
    for(let j = 1; j <= i; j++){
      row += j;
    };
    // console.log(row);
  };
}

{
  let n = 5;
  let i = 1;
  while(i <= n){
    let row = "";
    for(let j = 1; j <= i; j++){
      row += j;
    };
    // console.log(row);
    i++;
  };
}

{
  let n = 5;
  for(let i = 1; i<=n; i++){
    let row = "";
    for(let j = 1; j<=i; j++){
      row += "* ";
    };
    // console.log(row);
  };
}

{
  // Find Factorial of a Given Numer 5.
  let n = 1;
  for(let i = 1; i<=5; i++){
    n = n * i;
    // console.log("n *",i ,"->", n);
  };
}

{
  let n = 1;
  let i = 1;
  while(i <= 5){
    n *= i;
    // console.log(n);
    i++;
  };
}

{
  let n = 123;
  let reverse = 0;
  let temp = n;
  for( let i = 1; temp > 0; i++){
    reverse = reverse * 10 + (temp % 10);
    temp = (temp - (temp % 10)) / 10;
  };
  // console.log(reverse);
};

{
  let n = 542;
  let temp = n;
  let reverseVal = 0;
  while(temp > 0){
    reverseVal = reverseVal * 10 + (temp % 10);
    temp = (temp - (temp % 10)) / 10;
    // temp++;
  };
  // console.log(reverseVal);
};

{
  // Count How Many digits are in a given number.
  let num = 234;
  let temp = num.toString().length;
  let count = 0;
  for(let i = 1; i <= temp; i++){
    count++;
  }
  // console.log(count);
}
{
  let num = 234;
  let temp = num.toString().length;
  let count = 0;
  let i = 0;
  while (i < temp){
      count++;
      i++
    };
    // console.log(count);
}
{
  let num = 234;
  let count = 0;
  while(num > 0){
    count = count + 1;
    num = Math.floor(num / 10);
  }
  // console.log(count);
}

{
  // Find Largest Digit In a given Number 7593;
  // Using For Loop
  // STIRNG CONVERSION
  let n = 7593;
  let largest = 0;
  let numStr = Math.abs(n).toString();
  for(let i = 0; i < numStr.length; i++){
    let digit = parseInt(numStr[i]);
    if(digit > largest){
      largest = digit;
    };
  };
  // console.log(largest);
}
{
  let n = 12398546;
  let largest = 0;
  let toStr = n.toString();
  for(let i = 0; i<toStr.length; i++){
    let digit = parseInt(toStr[i]);
    if(digit > largest){
      largest = digit;
    };
  };
  // console.log(largest);
}

// Using While Loop And Using Break
{
  let num = 9874;
  if( num < 0){
    num = -num;
  };
  let findLargest = 0;
  let temp = num;
  while(temp > 0){
    let digit = temp % 10;
    if(digit > findLargest){
      findLargest = digit;
    };
    temp = Math.floor(temp / 10);
  };
  // console.log(findLargest);
}
{
  let num = 59804;
  let largest = 0;
  let temp = num;
  if(num === 0){
    largest = 0;
  } else {
    while(true){
      let digit = temp % 10;
      if(digit > largest){
        largest = digit;
      };
      temp = Math.floor(temp / 10);
      if(temp === 0){
        break;
      };
    };
    // console.log(largest);
  };
}
{
  // Using For Of Loop
  let num = 981264;
  let largest  = 0;
  let toStr = num.toString();
  for(let char of toStr){
    let digit = parseInt(char);
    if(digit > largest){
      largest = digit;
    };

  };
  // console.log(largest);
}
{
  // Using While With Break;
  let num = 98723;
  let largest = 0;
  let temp = num;
  while(temp > 0){
    let digit = temp % 10;
    if(digit > largest){
      largest = digit ;
    };
    temp = Math.floor(temp / 10);
    if(temp === 0){break;};
  };
  // console.log(largest);
  
}
{
  // Using DO While
  let num = 95234;
  let largest = 0;
  let temp = num;
  if(num === 0 ){
    largest = 0;
  } else {
    do{
      let digit = temp % 10;
      if(digit > largest){
        largest = digit;
      };
      temp = Math.floor(temp / 10);
    } while(temp > 0);
  }
  // console.log(largest);
}
{
  // Find Sum OF Digits Of a Given Number
  let num = 987;
  let sum = 0;
  let temp = num.toString();
  for(let i = 0; i < temp.length; i++){
    let digit = parseInt(temp[i]);
    sum += digit;
    // temp = Math.floor(temp / 10);
  };
  // console.log(sum);
}
{
  // Using While Loop;
  let num = 9876;
  let sum = 0;
  let temp = num;
  while(temp > 0){
    sum += temp % 10;
    temp = Math.floor(temp / 10);
  };
  // console.log(sum);
}
{
  let num = 222;
  let reverse = "";
  let temp = num.toString().split("")
  for(let i = temp.length-1; i >= 0 ; i--){
    reverse = reverse + temp[i];
  };
  reverse = Number(reverse);
  if(reverse === num){
    // console.log("Palindrome");
  } else {
    console.log("Not Palindrome");
  };
}
{
  let num = 232;
  let original = num;
  let revs = 0;
  while(original > 0){
    let digit = original % 10;
    revs = revs * 10 + digit 
    original = Math.floor(original / 10);
  };
  // console.log(revs)
  if(revs === num){
    // console.log("Palindrom");
  } else {
    console.log("Not palindrom");
  };
}
{
  let word = "madam";
  let reverse = "";
  for(let i = word.length -1; i>=0; i--){
    reverse += word[i];
  };
  if(reverse === word){
    // console.log("Palindrome");
  } else {
    console.log("Not a Palindrome");
  };
}
{
  let num = 333;
  let temp = num.toString();
  let reverse = 0;
  for(let i = temp.length -1; i >= 0; i--){
    let digit = Number(temp % 10);
    reverse = reverse * 10 + digit;
    temp = Math.floor(temp / 10);
  };
  // console.log(reverse);
}
{
  let num = 333;
  let reverse = 0;
  let temp = num;
  while(temp > 0){
    let digit = temp % 10;
    reverse = reverse * 10 + digit;
    temp = Math.floor(temp / 10);
  };
  // console.log(reverse);
  
}
{
  let word = "level";
  let isPalindrome = true;
  for(let i = 0; i <= word.length/2; i++){
    if(word[i] !== word[word.length-1-i]){
      isPalindrome = false;
      break;
    };
  };
  if(isPalindrome){
    // console.log(word, "IS Palindrome");
  } else {
    console.log(word, "Not a Palindrome");
  };
}
{
  // Print Fibonacci Seriwa first 10 numbers in fibonacci series
  let num = 10;
  let a = 0, b = 1;
  // console.log(a, b);
  
  for(let i = 2; i <= num; i++){
    let next = a + b;
    // console.log(next);
    a = b;
    b = next;
    // console.log(b);
  };
}
{
  let a = 0, b = 1;
  let num = 10;
  let i = 0;
  while(i <= num){
    let next = a + b;
    a = b;
    b = next;
    i++;
    // console.log(b);
  };
}
{
  let num = 10;
  for(let i = 0; i<num; i++){
    if(i === 0){
      // console.log(0);
    } else if(i === 1){
      // console.log(1);
    } else {
      let a = 0, b = 1, next;
      for(let j = 2; j <=i; j++){
        next = a + b;
        a = b;
        b = next;
      };
      // console.log(b);
    };
  };
}
{
  // Check Prime Number 
  let num = 20;
  let isPrime;
  for(let i = 2; i<=Math.sqrt(num); i++){
    if(num % i === 0){
      isPrime = false;
    } else {
      isPrime = true;
      // console.log(i);
    }
    // console.log(isPrime);
  }
}
{
  let n = 5;
  for(let i = 1; i<=n; i++){
    let row = "";
    for(let j = 1; j <= i; j++){
      row += " *";
    };
    // console.log(row);
  };
}
{
  let n = 5;
  for(let i = 1; i <= n; i++){
    let row = " ";
    for(let j = 1; j<=i; j++){
      row += "";
    };
    for(let k = 1; k <=n; k++){
      row += " * "
    };
    // console.log(row);
  };
}
{
  let row = "";
  let n = 5;
  for(let i = 1; i<=n; i++){
    row = "".repeat(n - 1);
    for(let space = 1; space <= n - i; space++){
      row += " ";
    };
    for(let j = 1; j <= i; j++){
      row += j
    }
    for(let j = i - 1; j >= 1; j--){
      row += j;
    };
    // console.log(row);
  };
}
{
  let n = 5;
  let row = "";
  for(let i = 1; i<=n; i++){
    let space = " ".repeat(n - i);
    // console.log(row);
    let left = "";
    for(let j = 1; j<=i; j++){
      left += j;
    };
    let right = "";
    for(let j = i - 1; j >= 1; j--){
      right += j;
    };
    row += space + left + right + '\n'
  };
  // console.log(row);
  
}
{
  let n = 5;
  for(let i = 1; i<=n; i++){
    let row = "";
    for(let space = 1; space <= n-i; space++){
      row += " ";
    };
    for(let j = 1; j <= i; j++){
      row += j;
    };
    for(let j = i-1; j >= 1; j--){
      row += j;
    };
    // console.log(row);
  }
}
{
  let n = 5;
  for(let i = 1; i <= n; i++){
    let row = "";
    for(let space = 1; space<=n-i; space++){
      row += " ";
    };
    for(let j = 1; j<=i; j++){
      row += j;
    };
    for(let j = i-1; j>=1; j--){
      row += j;
    }
    // console.log(row);
  }
}
{
  let n = 5;
  let output = "";
  for(let i = 1; i<=n; i++){
    
    let space = " ".repeat(n - i);
    let left = "";
    for(let j = 1; j<=i; j++){
      left += j;
    };
    let right = "";
    for(let j = i - 1; j>=1; j--){
      right += j;
    };
    output += space+ left + right + "\n";
  };
  // console.log(output);
}
{
  let n = 5;
  for(let i = 1; i<=n; i++){
    let row = "";
    for(let j = 1; j <= i; j++){
      if((i + j) % 2 === 0){
        row += "1";
      } else {
        row += "0";
      };
    };
    // console.logclear
    // (row);
  }
}
{
  let n = 5;
  for(let i = 1; i<=n; i++){
    let row  = "";
    for(let j = 1; j<=i; j++){
      if((j + i) % 2 === 0){
        row += "1";
      } else {
        row += "0";
      };
    };
    // console.log(row);
  };
}
{
  // Print Right Angle Triangle
  let n = 5;
  for(let i = 1; i<=n; i++){
    let row = "";
    for(let j = 1; j<=n-i; j++){
      row += " ";
    };
    for(let k = 1; k<=i; k++){
      row += "*";
    };
    // console.log(row);
  }
}
{
  let n = 5;
  for(let i = 1; i <= n; i++){
    let row = "";
    for(let j = 1; j <= n-i; j++){
      row += " ";
    };
    for(let k = 1; k<=i; k++){
      row += "*";
    };
    // console.log(row);
  };
}
{
  // Hollow star Square.
  let n = 5;
  for(let i = 1; i<=n; i++){
    let pattern = "";
    for(let j = 1; j <= n; j++){
      if(i === 1 || i === n ){
        pattern += "*";
        // console.log(pattern);
      }else {
        pattern += " ";
      }
    };
    // console.log(pattern);
  }
}
{
  let n = 5;
  let i = 1;
  while(i <= n){
    let pattern = "";
    for(let j = 1; j <= n; j++){
      if(i === 1 || i === n || j === 1 || j === n){
        pattern += "*";
      } else {
        pattern += " ";
      };
    };
    // console.log(pattern);
    i++
  };
};
{
  // find the sum of number from 1 to 100;
  let num = 100;
  let sum  = 0;
  for(let i = 1; i<=num ; i++){
    sum += i;
  };
  // console.log(sum);
}
{
  // find the sum of even numbers from 0 to 50;
  let num = 50;
  let sum = 0;
  for(let i = 0; i<=num; i += 2){
    sum += i;
  };
  // console.log(sum);
}
{
  // // find the sum of even numbers from 1 to 50;
  let num = 50;
  let sum = 0;
  for(let i = 1; i<=num; i++){
    if(i % 2 === 0){
      sum += i;
    };
  };
  // console.log(sum);
}
{
  // print the square of numbers from 1 to 10;
  let num = 10;
  let square = 0;
  for(let i = 1; i<=num; i++){
    square = i * i;
    // console.log(square);
  };
}
{
  // count how many numbers between 1 to 50 are divisible by 3
  let num = 50;
  let count = 0;
  for(let i = 1; i<=num; i++){
    if(i % 3 === 0){
      count++
    };
  };
  // console.log(count);
}
{
  // Print Numbers Between 1 to 30 that are divisible by both 2 and 5.
  let num = 30;
  for(let i = 1; i<=num ; i++){
    if(i % 2 === 0 && i % 5 === 0){
      // console.log(i);
    };
  };
}
{
  // print left angle triangle ;
  let num = 5;
  for(let i = 1; i<=num; i++){
    let row = "";
    for(let j = 1; j<=i; j++){
      row += " *"
    };
    // console.log(row);
  };
}
{
  // print reverse stars
  let num = 5;
  for(let i = 1; i<= num; i++){
    let row = "";
    for(let j = num; j>=i; j--){
      row += " *";
    };
    // console.log(row);
  };
}
{
  let num = 5;
  for(let i = 1; i<=num; i++){
    let row = "";
    for(let j = 1; j<=i; j++){
      row += j;
    };
    // console.log(row);
  };
}
{
  // find the factorial of a given number(5)
  let num = 5;
  let factorial = 1;
  for(let i = 1; i<=num; i++){
    factorial *= i;
    // console.log(factorial);
  };
}
{
  // Reverse a given number 123;
  let num = 123;
  let temp = num.toString();
  // console.log(temp);
  
  let reverse = "";
  for(let i = temp.length-1; i>=0; i--){
    reverse += temp[i];
  };
  // console.log(reverse);
}
{
  let digit = 123;
  let temp = digit.toString();
  let count = 0;
  for(let i = 0; i<=temp.length - 1; i++){
    count++;
    // console.log(count);
  };
}
{
  // Find Largest Number Of a Given Number.
  let num = 1945;
  let greatest = 0;
  let temp = num.toString();
  let digit = "";
  for(let i = 0; i<=temp; i++){
    digit = Number(temp[i])
    if(digit > greatest){
      greatest = digit;
    };
  };
  console.log(greatest);
}