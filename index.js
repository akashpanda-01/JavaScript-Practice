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
  // console.log(sum);
}
// console.log(mathmaticalArmstorage(153));

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
  // console.log("Salary Day -", newDate.toLocaleDateString());
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
  for (let i = 0; i <= 50; i = i + 2) {
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
  }
  // console.log(sum);
}

{
  let sum = 0;
  let i = 0;
  while (i <= 50) {
    sum += i;
    i += 2;
  }
  // console.log(sum);
}

// Print The Squares of Number 1 to 10.
for (let i = 1; i <= 10; i++) {
  let square = i * i;
  // console.log(square);
}

{
  let num = 1;
  while (num <= 10) {
    let sqr = num * num;
    // console.log(sqr);
    num++;
  }
}

// Count How Many numbers Between 1-50 are divisible by 3.
{
  let count = 0;
  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
      // console.log(i);
      count++;
    }
  }
  // console.log(count);
}

{
  let countNum = 0;
  let i = 1;
  while (i <= 50) {
    if (i % 3 === 0) {
      countNum = countNum + 1;
    }
    i++;
  }
  // console.log(countNum);
}

{
  //Print only numbers between 1-30 that are divisible by both 2 and 5.
  for (let i = 1; i <= 30; i++) {
    if (i % 2 === 0 && i % 5 === 0) {
      let printNum = i;
      // console.log(printNum);
    }
  }
}

{
  let i = 1;
  while (i <= 30) {
    if (i % 2 === 0) {
      if (i % 5 === 0) {
        let printNum = i;
        // console.log(printNum);
      }
    }
    i++;
  }
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
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j;
      row += "* ";
    }
    // console.log(row);
  }
}

{
  let n = 1;
  for (let i = 5; i >= n; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    // console.log(row);
  }
}

{
  let n = 5;
  let i = n;
  while (i >= 1) {
    let row = "";
    let j = 1;

    while (j <= i) {
      row += "* ";
      j++;
    }
    // console.log(row);
    i--;
  }
}
{
  let n = 5;
  let i = 1;
  while (i <= n) {
    let row = "";
    let j = 1;
    while (j <= i) {
      row += "* ";
      j++;
    }
    // console.log(row);
    i++;
  }
}

{
  // print Number In triangle.
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    // console.log(row);
  }
}

{
  let n = 5;
  let i = 1;
  while (i <= n) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    // console.log(row);
    i++;
  }
}

{
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    // console.log(row);
  }
}

{
  // Find Factorial of a Given Numer 5.
  let n = 1;
  for (let i = 1; i <= 5; i++) {
    n = n * i;
    // console.log("n *",i ,"->", n);
  }
}

{
  let n = 1;
  let i = 1;
  while (i <= 5) {
    n *= i;
    // console.log(n);
    i++;
  }
}

{
  let n = 123;
  let reverse = 0;
  let temp = n;
  for (let i = 1; temp > 0; i++) {
    reverse = reverse * 10 + (temp % 10);
    temp = (temp - (temp % 10)) / 10;
  }
  // console.log(reverse);
}

{
  let n = 542;
  let temp = n;
  let reverseVal = 0;
  while (temp > 0) {
    reverseVal = reverseVal * 10 + (temp % 10);
    temp = (temp - (temp % 10)) / 10;
    // temp++;
  }
  // console.log(reverseVal);
}

{
  // Count How Many digits are in a given number.
  let num = 234;
  let temp = num.toString().length;
  let count = 0;
  for (let i = 1; i <= temp; i++) {
    count++;
  }
  // console.log(count);
}
{
  let num = 234;
  let temp = num.toString().length;
  let count = 0;
  let i = 0;
  while (i < temp) {
    count++;
    i++;
  }
  // console.log(count);
}
{
  let num = 234;
  let count = 0;
  while (num > 0) {
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
  for (let i = 0; i < numStr.length; i++) {
    let digit = parseInt(numStr[i]);
    if (digit > largest) {
      largest = digit;
    }
  }
  // console.log(largest);
}
{
  let n = 12398546;
  let largest = 0;
  let toStr = n.toString();
  for (let i = 0; i < toStr.length; i++) {
    let digit = parseInt(toStr[i]);
    if (digit > largest) {
      largest = digit;
    }
  }
  // console.log(largest);
}

// Using While Loop And Using Break
{
  let num = 9874;
  if (num < 0) {
    num = -num;
  }
  let findLargest = 0;
  let temp = num;
  while (temp > 0) {
    let digit = temp % 10;
    if (digit > findLargest) {
      findLargest = digit;
    }
    temp = Math.floor(temp / 10);
  }
  // console.log(findLargest);
}
{
  let num = 59804;
  let largest = 0;
  let temp = num;
  if (num === 0) {
    largest = 0;
  } else {
    while (true) {
      let digit = temp % 10;
      if (digit > largest) {
        largest = digit;
      }
      temp = Math.floor(temp / 10);
      if (temp === 0) {
        break;
      }
    }
    // console.log(largest);
  }
}
{
  // Using For Of Loop
  let num = 981264;
  let largest = 0;
  let toStr = num.toString();
  for (let char of toStr) {
    let digit = parseInt(char);
    if (digit > largest) {
      largest = digit;
    }
  }
  // console.log(largest);
}
{
  // Using While With Break;
  let num = 98723;
  let largest = 0;
  let temp = num;
  while (temp > 0) {
    let digit = temp % 10;
    if (digit > largest) {
      largest = digit;
    }
    temp = Math.floor(temp / 10);
    if (temp === 0) {
      break;
    }
  }
  // console.log(largest);
}
{
  // Using DO While
  let num = 95234;
  let largest = 0;
  let temp = num;
  if (num === 0) {
    largest = 0;
  } else {
    do {
      let digit = temp % 10;
      if (digit > largest) {
        largest = digit;
      }
      temp = Math.floor(temp / 10);
    } while (temp > 0);
  }
  // console.log(largest);
}
{
  // Find Sum OF Digits Of a Given Number
  let num = 987;
  let sum = 0;
  let temp = num.toString();
  for (let i = 0; i < temp.length; i++) {
    let digit = parseInt(temp[i]);
    sum += digit;
    // temp = Math.floor(temp / 10);
  }
  // console.log(sum);
}
{
  // Using While Loop;
  let num = 9876;
  let sum = 0;
  let temp = num;
  while (temp > 0) {
    sum += temp % 10;
    temp = Math.floor(temp / 10);
  }
  // console.log(sum);
}
{
  let num = 222;
  let reverse = "";
  let temp = num.toString().split("");
  for (let i = temp.length - 1; i >= 0; i--) {
    reverse = reverse + temp[i];
  }
  reverse = Number(reverse);
  if (reverse === num) {
    // console.log("Palindrome");
  } else {
    console.log("Not Palindrome");
  }
}
{
  let num = 232;
  let original = num;
  let revs = 0;
  while (original > 0) {
    let digit = original % 10;
    revs = revs * 10 + digit;
    original = Math.floor(original / 10);
  }
  // console.log(revs)
  if (revs === num) {
    // console.log("Palindrom");
  } else {
    console.log("Not palindrom");
  }
}
{
  let word = "madam";
  let reverse = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
  }
  if (reverse === word) {
    // console.log("Palindrome");
  } else {
    console.log("Not a Palindrome");
  }
}
{
  let num = 333;
  let temp = num.toString();
  let reverse = 0;
  for (let i = temp.length - 1; i >= 0; i--) {
    let digit = Number(temp % 10);
    reverse = reverse * 10 + digit;
    temp = Math.floor(temp / 10);
  }
  // console.log(reverse);
}
{
  let num = 333;
  let reverse = 0;
  let temp = num;
  while (temp > 0) {
    let digit = temp % 10;
    reverse = reverse * 10 + digit;
    temp = Math.floor(temp / 10);
  }
  // console.log(reverse);
}
{
  let word = "level";
  let isPalindrome = true;
  for (let i = 0; i <= word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }
  if (isPalindrome) {
    // console.log(word, "IS Palindrome");
  } else {
    console.log(word, "Not a Palindrome");
  }
}
{
  // Print Fibonacci Seriwa first 10 numbers in fibonacci series
  let num = 10;
  let a = 0,
    b = 1;
  // console.log(a, b);

  for (let i = 2; i <= num; i++) {
    let next = a + b;
    // console.log(next);
    a = b;
    b = next;
    // console.log(b);
  }
}
{
  let a = 0,
    b = 1;
  let num = 10;
  let i = 0;
  while (i <= num) {
    let next = a + b;
    a = b;
    b = next;
    i++;
    // console.log(b);
  }
}
{
  let num = 10;
  for (let i = 0; i < num; i++) {
    if (i === 0) {
      // console.log(0);
    } else if (i === 1) {
      // console.log(1);
    } else {
      let a = 0,
        b = 1,
        next;
      for (let j = 2; j <= i; j++) {
        next = a + b;
        a = b;
        b = next;
      }
      // console.log(b);
    }
  }
}
{
  // Check Prime Number
  let num = 20;
  let isPrime;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
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
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += " *";
    }
    // console.log(row);
  }
}
{
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
      row += "";
    }
    for (let k = 1; k <= n; k++) {
      row += " * ";
    }
    // console.log(row);
  }
}
{
  let row = "";
  let n = 5;
  for (let i = 1; i <= n; i++) {
    row = "".repeat(n - 1);
    for (let space = 1; space <= n - i; space++) {
      row += " ";
    }
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    for (let j = i - 1; j >= 1; j--) {
      row += j;
    }
    // console.log(row);
  }
}
{
  let n = 5;
  let row = "";
  for (let i = 1; i <= n; i++) {
    let space = " ".repeat(n - i);
    // console.log(row);
    let left = "";
    for (let j = 1; j <= i; j++) {
      left += j;
    }
    let right = "";
    for (let j = i - 1; j >= 1; j--) {
      right += j;
    }
    row += space + left + right + "\n";
  }
  // console.log(row);
}
{
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let space = 1; space <= n - i; space++) {
      row += " ";
    }
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    for (let j = i - 1; j >= 1; j--) {
      row += j;
    }
    // console.log(row);
  }
}
{
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let space = 1; space <= n - i; space++) {
      row += " ";
    }
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    for (let j = i - 1; j >= 1; j--) {
      row += j;
    }
    // console.log(row);
  }
}
{
  let n = 5;
  let output = "";
  for (let i = 1; i <= n; i++) {
    let space = " ".repeat(n - i);
    let left = "";
    for (let j = 1; j <= i; j++) {
      left += j;
    }
    let right = "";
    for (let j = i - 1; j >= 1; j--) {
      right += j;
    }
    output += space + left + right + "\n";
  }
  // console.log(output);
}
{
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      if ((i + j) % 2 === 0) {
        row += "1";
      } else {
        row += "0";
      }
    }
    // console.logclear
    // (row);
  }
}
{
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      if ((j + i) % 2 === 0) {
        row += "1";
      } else {
        row += "0";
      }
    }
    // console.log(row);
  }
}
{
  // Print Right Angle Triangle
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= i; k++) {
      row += "*";
    }
    // console.log(row);
  }
}
{
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= i; k++) {
      row += "*";
    }
    // console.log(row);
  }
}
{
  // Hollow star Square.
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (let j = 1; j <= n; j++) {
      if (i === 1 || i === n) {
        pattern += "*";
        // console.log(pattern);
      } else {
        pattern += " ";
      }
    }
    // console.log(pattern);
  }
}
{
  let n = 5;
  let i = 1;
  while (i <= n) {
    let pattern = "";
    for (let j = 1; j <= n; j++) {
      if (i === 1 || i === n || j === 1 || j === n) {
        pattern += "*";
      } else {
        pattern += " ";
      }
    }
    // console.log(pattern);
    i++;
  }
}
{
  // find the sum of number from 1 to 100;
  let num = 100;
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  // console.log(sum);
}
{
  // find the sum of even numbers from 0 to 50;
  let num = 50;
  let sum = 0;
  for (let i = 0; i <= num; i += 2) {
    sum += i;
  }
  // console.log(sum);
}
{
  // // find the sum of even numbers from 1 to 50;
  let num = 50;
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  // console.log(sum);
}
{
  // print the square of numbers from 1 to 10;
  let num = 10;
  let square = 0;
  for (let i = 1; i <= num; i++) {
    square = i * i;
    // console.log(square);
  }
}
{
  // count how many numbers between 1 to 50 are divisible by 3
  let num = 50;
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0) {
      count++;
    }
  }
  // console.log(count);
}
{
  // Print Numbers Between 1 to 30 that are divisible by both 2 and 5.
  let num = 30;
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0 && i % 5 === 0) {
      // console.log(i);
    }
  }
}
{
  // print left angle triangle ;
  let num = 5;
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += " *";
    }
    // console.log(row);
  }
}
{
  // print reverse stars
  let num = 5;
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = num; j >= i; j--) {
      row += " *";
    }
    // console.log(row);
  }
}
{
  let num = 5;
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    // console.log(row);
  }
}
{
  // find the factorial of a given number(5)
  let num = 5;
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
    // console.log(factorial);
  }
}
{
  // Reverse a given number 123;
  let num = 123;
  let temp = num.toString();
  // console.log(temp);

  let reverse = "";
  for (let i = temp.length - 1; i >= 0; i--) {
    reverse += temp[i];
  }
  // console.log(reverse);
}
{
  let digit = 123;
  let temp = digit.toString();
  let count = 0;
  for (let i = 0; i <= temp.length - 1; i++) {
    count++;
    // console.log(count);
  }
}
{
  // Find Largest Number Of a Given Number.
  let num = 1945;
  let greatest = 0;
  let temp = num.toString();
  let digit = "";
  for (let i = 0; i <= temp; i++) {
    digit = Number(temp[i]);
    if (digit > greatest) {
      greatest = digit;
    }
  }
  // console.log(greatest);
}
{
  let n = 435;
  let largest = "";
  let temp = n.toString();
  let digit = "";
  for (let i = 0; i <= temp; i++) {
    digit = Number(temp[i]);
    if (digit >= largest) {
      largest = digit;
    }
  }
  // console.log(largest);
}
{
  // find sum of digits of a given number;
  let n = 123;
  let digit = 0;
  let sum = 0;
  let temp = n.toString();
  for (let i = 0; i < temp.length; i++) {
    digit = Number(temp[i]);
    sum += digit;
  }
  // console.log(sum);
}
{
  // Check Plaindrome Number.
  let num = 121;
  let temp = num;
  let reverse = 0;
  while (temp > 0) {
    let digit = temp % 10;
    reverse = reverse * 10 + digit;
    temp = Math.floor(temp / 10);
  }
  if (num === reverse) {
    // console.log(num, "Is Palindrome");
  } else {
    // console.log(num, "Is Not Palindrome");
  }
}
{
  // Using Sting.
  let num = 121;
  let temp = num.toString();
  let reverse = temp.split("").reverse().join("");
  if (temp === reverse) {
    // console.log("Palindrome");
  } else {
    // console.log("Not Palindrome");
  }
}
{
  // Print Fibonacci Series first 10 numbers  in fibonacci series
  let num = 10;
  let a = 0,
    b = 1;
  // console.log(a);
  // console.log(b);
  for (let i = 2; i <= num; i++) {
    let next = a + b;
    // console.log(next);
    a = b;
    b = next;
    // console.log(b);
  }
}
{
  // check if a given number is prime number .
  let num = 8;
  let isPrime = true;
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
    // console.log(i);
  }
  if (isPrime) {
    console.log(num, "is a Prime Number");
  } else {
    // console.log(num, "not a prime number");
  }
}
{
  // Print all Prime Numbers Between 1 to 50;
  let num = 50;
  for (let i = 1; i <= num; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      // console.log(i);
    }
  }
}
{
  let num = 7;
  let isPrime = true;
  if (num < 2) {
    isPrime = false;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
  }
  if (isPrime) {
    // console.log(num, "Is Prime");
  } else {
    console.log(num, "Not Prime");
  }
}
{
  let num = 7;
  let isPrime = true;
  for (let i = 2; i <= 7; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(num, "Is Prime");
  } else {
    // console.log(num, "Is Prime");
  }
}
{
  // print 1 to 50 prime numbers
  let num = 50;
  for (let i = 2; i <= num; i++) {
    let isPrime = true;
    for (let j = 2; j < Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      // console.log(i, "is Prime Number");
    }
  }
}
{
  let num = 50;
  for (let i = 2; i <= num; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      // console.log(i, "Is Prime");
    }
  }
}
{
  let num = 50;
  for (let i = 2; i <= num; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      // console.log(i);
    }
  }
}
{
  let a = 48;
  let b = 18;
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  // console.log(a);
}
{
  let a = 48;
  let b = 18;
  for (let i = Math.min(a, b); i >= 1; i--) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
      break;
    }
  }
  // console.log(`GCD of ${a} and ${b} is: ${gcd}`);
}
{
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += " *";
    }
    // console.log(row);
  }
}
{
  // Find sum of numbers from 1 to 100;
  let num = 100;
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  // console.log(sum);
}
{
  // find the sum of even numbers 1 to 50.
  let sum = 0;
  let num = 50;
  for (let i = 0; i <= num; i = i + 2) {
    sum += i;
  }
  // console.log(sum);
}
{
  // print square of numbers from 1 to 10
  let num = 10;
  let square = 0;
  for (let i = 1; i <= num; i++) {
    square = i * i;
    // console.log(square);
  }
  // console.log(gcd);
}
{
  let a = 48,
    b = 18;
  while (b !== 0) {
    let temp = b;
    b = a % b;
    // console.log(b);

    a = temp;
  }
}

// =====================FUNCTION====================
// create a function using "function" keyword that takes a string as an argument & return the number of vowels in string
function printVowel(str) {
  let count = 0;
  for (let char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  // console.log(count);
}
printVowel("hello");

{
  // Using Arrow Function performing same task
  let countVowels = (str) => {
    let count = 0;
    for (char of str) {
      if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
      ) {
        count++;
      }
    }
    // console.log(count);
  };
  // countVowels("Hello World")
}
{
  //for a given array of numbers print the square of each value using forEach loop
  let arr = [2, 4, 5, 5];
  arr.forEach((num) => {
    // console.log(num * num);
  });
}
{
  let num = [52, 67, 39];
  let calculateSquare = (val) => {
    // console.log(val * val);
  };
  num.forEach(calculateSquare);
}
// ===============Array==============
{
  let arr = [2, 4, 5, 5];
  let newArr = arr.map((printVal) => {
    return printVal;
  });
  // console.log(newArr);
}
{
  // Print Even Numbers By using Filter Method
  let arr = [1, 2, 3, 4, 5, 6, 7, 9];
  let even = arr.filter((element) => {
    return element % 2 === 0;
  });

  // console.log(even);
  // Odd Values Using filter
  let odd = arr.filter((element) => {
    return element % 2 !== 0;
  });
  // console.log(odd);
  // greater Than 3
  let greatestOf3 = arr.filter((element) => {
    return element > 3;
  });
  // console.log(greatestOf3);
}
{
  // create an array of fruits and print all elements pne by one using loop
  let arr = ["mango", "appel", "banana", "litchi"];
  for (let el of arr) {
    // console.log(el)
  }
}
{
  let arr = ["a", "b", "c", "d"];
  for (let el of arr) {
    // console.log(el);
  }
}
{
  // Create an aary of fruits of numbers and print its length
  let arr = [1, 3, 4, 5, 6, 7];
  // console.log(arr.length);
}
{
  // Create an array of colors and print the first and last color in the array.
  let arr = ["red", "blue", "orange", "black", "white"];
  // console.log(arr[0], arr[4]);
}
{
  // take array of numbers add one number at the end(using pushs).
  let arr = [1, 2, 3, 4, 5, 6, 7];
  arr.push(8);
  // console.log(arr);

  // Remove The Last Number using pop,
  arr.pop(7);
  // console.log(arr);
}
{
  // add a name at the begining using unshift
  let nme = ["a", "b", "c", "d", "e"];
  nme.unshift("ak");
  // console.log(nme);

  // Remove first name using shift
  nme.shift(0);
  // console.log(nme);
}
{
  // Create an array of 5 numbers  and change the value at index 2;
  let arr = [1, 2, 3, 4, 5];
  arr[2] = 100;
  // console.log(arr);
}
{
  // Create if a given numer exists in an array or not using  incluede
  let arr = [1, 3, 4, 5, 6, 70];
  if (arr.includes(4)) {
    // console.log(true);
  } else {
    // console.log(false);
  }
}
{
  // Find The Sum Of All numbers in an array using a for loop.
  let num = [1, 3, 4, 5, 5];
  let sum = 0;
  for (let el of num) {
    sum += el;
  }
  // console.log(sum);
}
{
  //Find Largest Number form an array of number
  let arrNum = [2, 80, 5, 6, 30, 60];
  let largest = 0;
  for (let i = 0; i <= arrNum.length; i++) {
    if (arrNum[i] > largest) {
      largest = arrNum[i];
    }
  }
  // console.log(largest);
}
{
  // Reverse an array and print it , without using reverse() method
  let arr = [1, 3, 4, 5, 6, 7];
  let reverse = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }
  // console.log(reverse);
}
{
  // Remove Duplicate numbers rom a nn array manually
  let arr = [1, 1, 2, 2, 3, 4, 4];
  let clearDuplicate = [];
  for (let i = 0; i <= arr.length; i++) {
    if (!clearDuplicate.includes(arr[i])) {
      clearDuplicate.push(arr[i]);
    }
  }
  // console.log(clearDuplicate);
}
{
  // find missing number in an array.
  let arr = [1, 2, 3, 5, 6];
  let n = 6;
  let total = (n * (n + 1)) / 2;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; ///;
  }
  let num = total - sum;
  // console.log(num);
}
{
  let arr = [1, 2, 3, 4, 5, 6];
  let largest = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }
  // console.log(largest);
}
{
  // again doing reverse
  let arr = ["a", "b", "c", "d"];
  let reverse = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }
  // console.log(reverse);
}
{
  // remove duplicate numbers from an array manually
  let arr = [1, 2, 2, 4, 5, 5];
  let duplicate = [];
  for (let i = 0; i < arr.length; i++) {
    if (!duplicate.includes(arr[i])) {
      duplicate.push(arr[i]);
    }
  }
  // console.log(duplicate);
}
{
  let arr = [10, 20, 30, 40];
  let lar1 = 0;
  let lar2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > lar1) {
      lar2 = lar1;
      lar1 = arr[i];
    }
  }
  // console.log("largset =>", lar1, "SecondLargest =>",  lar2);
}
{
  let arr = [50, 30, 40, 20, 10];
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  // console.log(secondLargest);
}
{
  // Merge Two Arrays without concat method.
  let a = [1, 2, 3];
  let b = [4, 5, 6];
  let merged = [];
  for (let i = 0; i < a.length; i++) {
    merged.push(a[i]);
  }
  for (let i = 0; i < b.length; i++) {
    merged.push(b[i]);
  }
  // console.log(merged);
}
{
  // Count How Many Times each numbers appears in an array
  let nums = [1, 2, 1, 2, 3, 4, 3];
  let count = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (count[num]) {
      count[num]++;
    } else {
      // count[num] = 1;
    }
  }
  // console.log(count);
}
{
  let arr = [1, 2, 4, 1, 3, 4, 2];
  let count = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (count[num]) {
      count[num]++;
      // console.log(count);
    } else {
      count[num] = 1;
    }
  }
  // console.log(count);
}
{
  //Find The missing number in a given array;
  let arr = [1, 2, 3, 5, 6];
  let n = 6;
  let total = (n * (n + 1)) / 2;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  // console.log(total - sum);
}
{
  // sort an array without using sort;
  let arr = [5, 4, 3, 2, 1];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  // console.log(arr);
}
{
  let newArr = [200, 34, 56, 34, 2, 3];
  for (let i = 0; i < newArr.length; i++) {
    for (let j = i + 1; j < newArr.length; j++) {
      // if(arr[i] < arr[i + 1]){
      // let temp =  arr[i];
      // };
    }
  }
}
{
  let arr = [1, 2, 1, 2, 3, 4, 4];
  let count = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  }
  //  console.log(count);
}
{
  let arr = [1, 1, 1, 4, 5, 3, 3, 4, 5, 2, 2];
  let count = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  }
  // console.log(count);
}
{
  let arr = [1, 2, 3, 5, 6, 7];
  let sum = 0;
  let n = 7;
  let total = (n * (n + 1)) / 2;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let num = total - sum;
  arr.splice(3, 0, num);
  // console.log(arr);
}
{
  let arr = [1, 2, 3, 5, 6, 7];
  let n = 7;
  let total = (n * (n + 1)) / 2;
  let sum = 0;
  for (let i = 0; i < arr.length + 1; i++) {
    // "arr.length + 1" will give "NaN"
    sum += arr[i];
  }
  let num = total - sum;
  arr.splice(3, 0, num);
  // console.log(arr);
}
{
  // Sort without using sort() method in an array
  let arr = [5, 4, 3, 2, 1];
  for (let i = 0; i < arr.length; i++) {
    let acending;
    if (arr[i] > acending) {
      acending.unshift(arr[i]);
    }
    arr.shift();
    // console.log(acending);
  }
}
{
  let arr = [5, 4, 3, 2, 1];
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  // console.log(arr);
}
{
  let arr = [5, 4, 3, 2, 1];
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  // console.log(arr);
}
{
  let arr = [5, 4, 3, 2, 1];
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  // console.log(arr);
}
{
  // Reverse Array without creating new array
  let arr = [1, 2, 3, 4, 5, 6];
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  // console.log(arr);
}
{
  // Remove duplicates
  let arr = [1, 1, 2, 3, 4, 4, 3, 2];
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  // console.log(unique);
}
{
  // find Second Largest numberin an array
  let arr = [10, 20, 30, 40];
  let largest = [];
  let secondLargest = [];
  for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
      let temp = arr[i];
      secondLargest = largest;
      largest = temp;
    }
  }
  // console.log(largest, secondLargest);
}
{
  // Merge Two arrays manually without concat;
  let a = [1, 2, 3];
  let b = [4, 5, 6];
  let merge = [];
  for (let i = 0; i < a.length; i++) {
    merge.push(a[i]);
  }
  for (let i = 0; i < b.length; i++) {
    merge.push(b[i]);
  }
  // console.log(merge);
}
{
  // Count how many times each numbers appears in an array
  let arr = [1, 1, 2, 3, 2];
  let count = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  }
  // console.log(count);
}
{
  // In array Find The Missing Number .
  let arr = [1, 2, 3, 5, 6];
  let n = 6;
  let total = (n * (n + 1)) / 2;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  // console.log(total - sum);
}
{
  // Sort Array without using sort() method;
  let arr = [5, 3, 8, 1, 4];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  // console.log(arr);
  // console.log(arr);
}
{
  // Reverse Array without creating new array
  let arr = [1, 2, 3, 4, 5, 6];
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j - 1]) {
        let temp = arr[i];
        arr[i] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
    // console.log(arr);
  }
}
{
  // Reverse Array without creating new array
  let arr = [1, 2, 3, 4, 5, 6];
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  // console.log(arr);
}
{
  // find The Even Numbers , Create a new array that contains only the even numbers
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let evenNums = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNums.push(arr[i]);
    }
  }
  // console.log(evenNums);
}
{
  // Find Maximum and Minimum numbers in an array
  let arr = [10, 2, 23, 12, 111];
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  // console.log(max, min);
}
{
  // Count Even and Odd Numbers  in a given array;
  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let oddCount = 0;
  let evenCount = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      evenCount++;
    }
    if (num[i] % 2 !== 0) {
      oddCount++;
    }
  }
  // console.log("Even Count =>", evenCount, "Odd Count =>", oddCount);
}
{
  // Remove all occurrences of a given nmber from an array without using filter
  let arr = [1, 2, 3, 4, 5];
  arr.splice(2, 1);
  // console.log(arr);
}
{
  // Find the common elements between two arrays and store them in a array;
  let arr1 = [1, 3, 5, 6];
  let arr2 = [1, 2, 3, 5];
  let common = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        common.push(arr1[i]);
      }
    }
  }
  // console.log(common);
}
{
  // find the first duplicate element that appears in an arrray
  let arr = [1, 1, 2, 3, 3, 2];
  let duplicate = [];
  for (let i = 0; i < arr.length; i++) {
    if (!duplicate.includes(arr[i])) {
      duplicate.push(arr[i]);
    }
  }
  // console.log(duplicate);
}
{
  // find the first duplicate element that appears in an arrray
  let arr = [1, 2, 2, 3, 1, 2, 3];
  let seen = [];
  let duplicate = null;
  for (let i = 0; i < arr.length; i++) {
    if (seen.includes(arr[i])) {
      duplicate = arr[i];
      break;
    }
    seen.push(arr[i]);
  }
  // console.log(duplicate);
}
{
  // Rotate an array by k positions to the right .
  // [1, 2, 3, 4, 5] rotated by 2 -> [4, 5, 1, 2, 3]
  let arr = [1, 2, 3, 4, 5];
  let k = 2;
  for (let i = 0; i < k; i++) {
    let last = arr.pop();
    arr.unshift(last);
  }
  // console.log(arr);
}
{
  // Write a program to check wether an array is sorted in asending order or not
  let arr = [1, 3, 2, 5, 4];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      // console.log("arr not sorted");
      // let temp = arr[i];
      // arr[i] = arr[i + 1];
      // arr[i + 1] = temp;
    } else {
      // console.log("arr sorted");
    }
  }
  // console.log(arr);
}
{
  // FIND an array that has duplicate values , find all the unique values
  let arr = [1, 2, 1, 2, 3, 4, 2, 3, 4];
  let num = [];
  let duplicate = [];
  for (let i = 0; i < arr.length; i++) {
    if (!num.includes(arr[i])) {
      num.push(arr[i]);
    } else if (!duplicate.includes(arr[i])) {
      duplicate.push(arr[i]);
    }
  }
  // console.log(duplicate);
}
{
  // Given a nested array like  [1, [2, [3, 4]], 5] flatten it into [1, 2, 3, 4, 5].
  function flattenArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      let element = arr[i];
      if (Array.isArray(element)) {
        result = result.concat(flattenArray(element));
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  }
  // console.log(flattenArray( [1, [2, [3, 4]], 5]));
}

// ========================== FUNCTION ===========================

{
  // Write a function that adds two numbers and return result.
  function add() {
    return 20 + 20;
  }
  let value = add();
  // console.log(value);
}
{
  // Write a function that takes a number and checks if its even or not;
  let num = 10;
  function checkEven() {
    if (num % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  let result = checkEven();
  // console.log(result);
}
{
  // Write a function that takes a name and prints "Hello <name>";
  let nme = "Hello";
  function name() {
    return (nme += " Akash");
  }
  let result = name();
  // console.log(result);
}
{
  function name(nme) {
    return nme;
  }
  let val = name("Hello World");
  // console.log(val);
}
{
  // Write a Function That find Square OF a Number.
  function number(num) {
    // return num * num;
  }
  let val = number(10);
  // console.log(val);
}
{
  // Write a Function That takes an array and return the sum of its elements;
  function arrSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  let result = arrSum([1, 2, 3]);
  // console.log(result);
}
{
  // Write a Function that reverses a string
  function reverse(str) {
    let rev = str.split("").reverse().join();
    // console.log(rev);
  }
  reverse("hello");
}
{
  // With Reduce() Method
  function reverseStr(str) {
    let reverse = str.split("").reduce((acc, crr) => crr + acc, "");
    // console.log(reverse);
  }
  reverseStr("Hello");
}
{
  // With For Loop
  function reverseStr(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reverse += str[i];
    }
    // console.log(reverse);
  }
  reverseStr("Hello");
}
{
  // With Arrsy From
  function reverseStr(str) {
    let reverse = Array.from(str).reverse().join("");
    // console.log(reverse);
  }
  reverseStr("Hello");
}
{
  function reverseStr(str) {
    let reverse = "";
    for (let char of str) {
      reverse = char + reverse;
    }
    // console.log(reverse);
  }
  reverseStr("Hello");
}
{
  // Spred Operator Mehtod;
  function reverseStr(str) {
    let reverse = [...str].reverse().join("");
    // console.log(reverse);
  }
  reverseStr("Hello");
}
{
  // Recursion Method
  function reverseStr(str) {
    if (str === "") return "";
    return reverseStr(str.substr(1)) + str[0];
  }
  // console.log(reverseStr("Hello"));
}
{
  let reverseString = (str) => str.split("").reverse().join("");
  // console.log(reverseString("Hello"));
}
{
  // Write a Function That takes a number and returns its factorial.
  function findFactoral(num) {
    let factorial = 1;
    for (let i = num; i >= 1; i--) {
      factorial *= i;
    }
    // console.log(factorial);
  }
  findFactoral(5);
}
{
  // Write a function that takes two numbes and returns the greater one.
  function findGreater(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }
  let greater = findGreater(2, 3);
  // console.log(greater);
}
{
  // Write a Function that takes a string and retruns how mnay vowels are in it ?
  function checkVowels(string) {
    let vowels = 0;
    for (let str of string.toLowerCase()) {
      if (
        str === "a" ||
        str === "e" ||
        str === "i" ||
        str === "o" ||
        str === "u"
      ) {
        vowels++;
      }
    }
    return vowels;
  }
  let countVowels = checkVowels("seeetring");
  // console.log(countVowels);
}
{
  function countVwl(string) {
    let vowels = 0;
    let vowelsList = "aeiou";
    for (let str of string.toLowerCase()) {
      if (vowelsList.includes(str)) {
        vowels++;
      }
    }
    return vowels;
  }
  let count = countVwl("string");
  // console.log(count);
}
{
  // Write a function that takes an array and return only the even numbers;
  function findEven(array) {
    let returnEven = [];
    for (let value of array) {
      if (value % 2 === 0) {
        returnEven.push(value);
      }
    }
    return returnEven;
  }
  let even = findEven([2, 3, 4, 5]);
  // console.log(even);
}
{
  // Write a function that takes an array and return only the even numbers;
  function findEven(array) {
    let returnEven = "";
    for (let value of array) {
      if (value % 2 === 0) {
        returnEven += value + " ";
      }
    }
    return returnEven;
  }
  let even = findEven([2, 3, 4, 5]);
  // console.log(even);
}
{
  // Write a Function to check if a number or string is a palindrome.
  function isPalindrome(val) {
    let str = val.toString();
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reverse += str[i];
    }
    if (str === reverse) {
      return reverse;
    }
  }
  let check = isPalindrome(121);
  // console.log(check);
}
{
  // FOr given Array of Numbers Print The square of each value using the forEach Loop.
  let arr = [2, 3, 4, 5];
  arr.forEach((val) => {
    // console.log(val ** 2);
    // console.log(val * val);
    // console.log(Math.pow(val, 2));
  });
}
{
  // Find Prime Number In array
  function getPrime(arr) {
    let prime = [];
    for (let num of arr) {
      if (num < 2) continue;
      let isPrime = true;
      for (let i = 0; i < Math.sqrt(num); i++) {
        if (num % 2 === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) prime.push(num);
    }
    return prime;
  }
  // console.log(getPrime([1,2, 3, 4, 5, 6, 7, 8, 9]));
}
{
  // Recursive Factorial
  function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }
  // console.log(factorial(5));
}
{
  function recursionMethod(n) {
    if (n === 0 || n === 1) return 1;
    return n * recursionMethod(n - 1);
  }
  // console.log(recursionMethod(5));
}
{
  // Find Second Largest Number in Array
  function findSecNum(array) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let num of array) {
      if (num > largest) {
        secondLargest = largest;
        largest = num;
      } else if (num > secondLargest && num !== largest) {
        secondLargest = num;
      }
    }
    // console.log(secondLargest);
  }
  findSecNum([1, 2, 3, 5, 4]);
}
{
  // Flatten Nested Array
  function flattenArray(arr) {
    let result = [];
    for (let el of arr) {
      if (Array.isArray(el)) {
        result = result.concat(flattenArray(el));
      } else {
        result.push(el);
      }
    }
    return result;
  }
  let finalRes = flattenArray([1, [2, [3, 4], 5], 6]);
  // console.log(finalRes);
}
{
  // Count Occurrence of Each Element.
  function countOccurrancce(arr) {
    let count = {};
    for (let num of arr) {
      count[num] = (count[num] || 0) + 1;
    }
    return count;
  }
  // console.log(countOccurrancce([1, 2, 2, 3, 1, 4, 1]));
}
{
  // Fibbonacci Series Using Recursion
  function fibbonacci(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;
    return fibbonacci(num - 1) + fibbonacci(num - 2);
  }
  // console.log(fibbonacci(7));
}
{
  // FUNCTION CALL BACK HELL
  // function one(){
  //     return 1;
  //   };
  //   function two(){
  //     return one() + one();
  //   };
  //   function three(){
  //     let ans = two() + one();
  //     console.log(ans);
  //   };
  //   three();
  // h1 = document.querySelector("h1");
  // function changeColor(color, delay, nextChangeColor) {
  //   setTimeout(() => {
  //     h1.style.color = color;
  //     if (nextChangeColor) nextChangeColor();
  //   }, delay);
  // }
  // changeColor("red", 1000, () => {
  //   changeColor("blue", 1000, () => {
  //     changeColor("green", 1000, () => {
  //       changeColor("orange", 1000, () => {
  //         changeColor("red", 1000);
  //       });
  //     });
  //   });
  // });
}
{
  // A CALLBACK FOR PROMISE
  // function saveToDb(data, success, failure) {
  //   let internetSpeed = Math.floor(Math.random() * 10) + 1;
  //   if (internetSpeed > 4) {
  //     success();
  //   } else {
  //     failure();
  //   }
  // }
  //   saveToDb(
  //     "Data1",
  //     () => {
  //       console.log("success : Your data was saved");
  //       saveToDb(
  //         "Data2",
  //         () => {
  //           console.log("Success: Your Data2 Was Saved");
  //           saveToDb(
  //             "Data3",
  //             () => {
  //               console.log("Success: Your Data3 Was Saved");
  //             },
  //             () => {
  //               console.log("Failure: Weak Connection, Data3 Not Saved");
  //             }
  //           );
  //         },
  //         () => {
  //           console.log("failure: Weak Connection, Data2 Not Saved");
  //         }
  //       );
  //     },
  //     () => {
  //       console.log("failure: Weak Connection, Data Not Saved");
  //     }
  //   );
  // }
}
{
  // function saveToDb() {
  //   return new Promise((resolve, reject) => {
  //     let internetSpeed = Math.floor(Math.random() * 10) + 1;
  //     if (internetSpeed > 4) {
  //       resolve("Successs State");
  //     } else {
  //       reject("Reject State");
  //     }
  //   });
  // }
  // let request = saveToDb("Hello World")
  // request
  //   .then(() => {
  //     console.log(request, "Success");
  //   })
  //   .catch(() => {
  //     console.log(request, "reject");
  //   });
  // saveToDb("Hello World")
  //   .then(() => {
  //     console.log("Success");
  //   })
  //   .catch(() => {
  //     console.log("Reject");
  //   });
}

// {
// PROMISE CHANINIG
// function saveToDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("Success State");
//     } else {
//       reject("Reject State");
//     }
//   });
// }
// saveToDb("hello World")
//   .then(() => {
//     console.log("data1 saved");
//     saveToDb("Hello")
//     .then(() => {
//       console.log("data2 saved");
//       saveToDb("Hello World")
//       .then(() => {
//         console.log("data3 saved");
//       });
//     });
//   })
//   .catch(() => {
//     console.log("Promise Was Rejected");
//   });

// saveToDb("Apan College")
// .then((result) => {
//   console.log("Data1 Saved");
//   console.log(result);
//   return saveToDb("Hello World");
// })
// .then((result) => {
//     console.log("Data2 Saved");
//     console.log(result);
//     return saveToDb("Hello Ak");
// })
// .then((result) => {
//   console.log("Data3 Saved");
//   console.log(result);
// })
// .catch((error) => {
//   console.log(error);
//   console.log("Promise Rejected");
// })
// }

{
  // let h1 = document.querySelector("h1");
  // function changeColor(color, delay) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       let random = Math.floor(Math.random() * 10) + 1;
  //       if (random < 3) {
  //         reject("Internet Slow to Change Color");
  //       } else {
  //         h1.style.color = color;
  //         resolve("Color Changed to: " + color);
  //       }
  // if(!color){
  //   rej("No Color Provided");
  // }else {
  //   h1.style.color = color;
  //   rel("Color Changed");
  // }
  //     }, delay);
  //   });
  // }
  // changeColor("red", 1000)
  //   .then((result) => {
  //     console.log(result);
  //     return changeColor("blue", 1000);
  //   })
  //   .then((result) => {
  //     console.log(result);
  //     return changeColor("green", 1000);
  //   })
  //   .then((result) => {
  //     console.log(result);
  //     return changeColor("orange", 1000);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
}

{
  // Find Longest Word In a Sentence
  function longestWord(sentence) {
    let words = sentence.split(" ");
    let longest = "";
    for (let word of words) {
      if (word.length > longest.length) {
        longest = word;
      }
    }
    return longest;
  }
  let result = longestWord("Hii Akash JavaScript");
  // console.log(result);
}
{
  // Remove Duplicates from an Array and return an array without duplicetes
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  // console.log(removeDuplicates([1, 1, 2, 3, 2, 3]));
}
{
  // Find Missing Number In A sequence;
  function missingNumber(arr) {
    let n = 6;
    let expextedSum = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((acc, crr) => acc + crr, 0);
    return expextedSum - actualSum;
  }
  // console.log(missingNumber([1, 2, 4, 5, 6]));
}
{
  // Check the two string are Anagram or not
  function isAnagram(str1, str2) {
    let normalize = (str) => str.toLowerCase().split("").sort().join("");
    return normalize(str1) === normalize(str2);
  }
  // console.log(isAnagram("listen", "silent"));
}
{
  // Rotate Array by k step
  function rotateArray(arr) {
    let k = 2 % arr.length;
    for (let i = 0; i < k; i++) {
      let last = arr.pop();
      arr.unshift(last);
    }
    return arr;
  }
  // console.log(rotateArray([4, 5, 1, 2, 3]));
}
{
  function rotateArr(arr) {
    let r = 2 % arr.length;
    return arr.splice(r).concat(arr.splice(0));
  }
  // console.log(rotateArr([1, 2, 3, 4, 5]));
}
{
  // Find Majority Elements
  function findMejority(arr) {
    let count = {};
    for (let num of arr) {
      count[num] = (count[num] || 0) + 1;
      if (count[num] > arr.length / 2) {
        count[num] = num;
      }
    }
    return count;
  }
  let result = findMejority([1, 1, 2, 2, 3, 3]);
  // console.log(result);
}
{
  // Find First Non-Repeated Character
  function findChar(str) {
    for (let i = 0; i < str.length; i++) {
      if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
        console.log(str[i]);
        return str[i];
      }
    }
    // console.log(str);

    return null;
  }
  // console.log(findChar("swiss"));
}
{
  function nonRepeatedChar(str) {
    let freq = {};
    for (let char of str) {
      freq[char] = (freq[char] || 0) + 1;
    }
    for (let char of str) {
      if (freq[char] === 1) {
        return char;
      }
    }
    return null;
  }
  // console.log(nonRepeatedChar("swiss"));
}
{
  // Find Intersection
  function findIntersection(arr1, arr2) {
    let store = [];
    for (let char1 of arr1) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1.includes(arr2[j])) {
          store = arr2[j];
        }
      }
    }
    return store;
  }
  // console.log(findIntersection([1, 3, 5, 7], [1, 2, 4, 5, 7]));
}
{
  function findIntSec(arr1, arr2) {
    let result = [];
    for (let num of arr1) {
      if (arr2.includes(num)) {
        result.push(num);
      }
    }
    return result;
  }
  // console.log(findIntSec([1, 3, 5], [1, 2, 3]));
}
{
  // Using Filter and Include method
  function findIntSec(arr1, arr2) {
    return arr1.filter((val) => arr2.includes(val));
  }
  // console.log(findIntSec([1, 2, 3], [1, 2, 3]));
}
{
  function groupAnagrams(arr) {
    let group = {};
    for (let word of arr) {
      let sorted = word.split("").sort().join("");
      if (!group[sorted]) {
        group[sorted] = [];
      }
      group[sorted].push(word);
    }
    return group;
  }
  // console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
}
{
  function groupAnagrams(arr) {
    let group = {};
    for (let word of arr) {
      let charKey = word.toLowerCase().split("").sort().join("");
      if (!group[charKey]) {
        group[charKey] = [];
      }
      group[charKey].push(word);
    }
    return group;
  }
  // console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat", "tab"]));
}
{
  // Deep Clone An Object;
  function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  let user = { name: "Akash", Age: "22", Address: { city: "Delhi" } };
  let clone = deepClone(user);
  clone.Address.city = "Mumbai";
  // console.log(user.Address.city);
  // console.log(clone.Address.city);
  // console.log(user);
  // console.log(clone);
}
{
  // Find Element In Sorted Array (Binary Search)
  function binarySearch(arr, target) {
    let right = arr.length - 1;
    let left = 0;
    // console.log(left);

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return -1;
  }
  // console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6));
}
{
  // Check Balanced Parentheses
  function validPraentheses(str) {
    let stack = [];
    let map = { ")": "(", "}": "{", "]": "[" };
    for (let char of str) {
      if (["(", "{", "["].includes(char)) {
        stack.push(char);
      } else if ([")", "}", "]"].includes(char)) {
        if (stack.pop() !== map[char]) return false;
      }
    }
    return stack.length === 0;
  }
  //  console.log(validPraentheses("{[()]}"));
}
{
  function isParenthesesValid(str) {
    let stack = [];
    let map = { "}": "{", ")": "(", "]": "[" };
    for (let char of str) {
      if (["(", "{", "["].includes(char)) {
        stack.push(char);
      } else if ([")", "}", "]"].includes(char)) {
        if (stack.pop() !== map[char]) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }
  // console.log(isParenthesesValid("({[]})"));
  function validPraentheses(str) {
    let stack = [];
    let map = { ")": "(", "}": "{", "]": "[" };
    for (let char of str) {
      if (["(", "{", "["].includes(char)) {
        stack.push(char);
      } else if ([")", "}", "]"].includes(char)) {
        if (stack.pop() !== map[char]) return false;
      }
    }
    return stack.length === 0;
  }
  //  console.log(validPraentheses("{[()]}"));
}
{
  function checkValideParentheses(str) {
    let store = [];
    let map = { "}": "{", ")": "(", "]": "[" };
    for (let char of str) {
      if (["(", "{", "["].includes(char)) {
        store.push(char);
      } else if ([")", "}", "]"].includes(char)) {
        if (store.pop() !== map[char]) {
          return false;
        }
      }
    }
    return store.length === 0;
  }
  // console.log(checkValideParentheses("({[]})"));
}
{
  function checkParenthesis(str) {
    let store = [];
    let map = { "}": "{", ")": "(", "]": "[" };
    for (let char of str) {
      if (["(", "{", "["].includes(char)) {
        store.push(char);
      } else if ([")", "]", "}"].includes(char)) {
        if (store.pop() !== map[char]) {
          return false;
        }
      }
    }
    return store.length === 0;
  }
  // console.log(checkParenthesis("({[]})"));
}
{
  // Find subArray with maximum Sum
  function maxSubArray(arr) {
    let maxFindHere = arr[0];
    let maxSofar = arr[0];
    for (let val of arr.slice(1)) {
      maxFindHere = Math.max(val, maxFindHere + val);
      maxSofar = Math.max(maxSofar, maxFindHere);
    }
    return maxSofar;
  }
  // console.log(maxSubArray([1, 2, -1, -2]));
}
{
  function subArr(arr) {
    let findMax = 0;
    let maxSoFar = 0;
    for (let i = 0; i < arr.length; i++) {
      findMax = Math.max(arr[i], findMax + arr[i]);
      maxSoFar = Math.max(maxSoFar, findMax);
    }
    return maxSoFar;
  }
  // console.log(subArr([1, 2, -1, -2]));
}
{
  // Switch Case Statement
  // Write a switch statement to print the name of the day when given a number (1 = Monday, 7 = Sunday).
  let days = 0;
  switch (days) {
    case 1:
      console.log("Today Is Monday");
      break;
    case 2:
      console.log("Today Is Tuesday");
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
    // console.log("Enter Valid Day Number 1 to 7");
  }
}
{
  // Use switch to implement a calculator (addition, subtraction, multiplication, division) based on an operator (+, -, *, /).
  let num1 = 34;
  let num2 = 34;
  let sign = "";
  switch (sign) {
    case "+":
      console.log(num1 + num2);
      break;
    case "-":
      console.log(num1 - num2);
      break;
    case "*":
      console.log(num1 * num2);
      break;
    case "/":
      console.log(num1 / num2);
      break;
    default:
    // console.log("Eneter Valid Operator");
  }
}
{
  // Write a switch that prints “Vowel” if the user enters a, e, i, o, u, otherwise print “Consonant”.
  let userEnter = "Akash";
  switch (userEnter[0].toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      // console.log("Vowel");
      break;
    default:
    // console.log("Constant");
  }
}
{
  let monthNum = "";
  switch (monthNum) {
    case 1:
      console.log("Jan");
      break;
    case 2:
      console.log("Fab");
      break;
    case 3:
      console.log("Mar");
      break;
    case 4:
      console.log("Apr");
      break;
    case 5:
      console.log("May");
      break;
    case 6:
      console.log("Jun");
      break;
    case 7:
      console.log("Jul");
      break;
    case 8:
      console.log("Aug");
      break;
    case 9:
      console.log("Sep");
      break;
    case 10:
      console.log("Oct");
      break;
    case 11:
      console.log("Nov");
      break;
    case 12:
      console.log("Dec");
      break;
    // default: console.log("Enter Valid Number 1 to 12");
  }
}
{
  // Create a Switch that prints the grade based on marks (A, B, C, D)
  let mark = 88;
  switch (true) {
    case mark >= 90:
      console.log("A");
      break;
    case mark > 79 && mark <= 89:
      // console.log("B");
      break;
    case mark > 65 && mark <= 79:
      console.log("C");
      break;
    case mark > 55 && mark <= 65:
      console.log("D");
      break;
    default:
      console.log("Fail");
  }
}
{
  // Geneteren All Permutations Of string
  //
  function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1;

    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (target < arr[mid]) return binarySearch(arr, target, left, mid - 1);
    return binarySearch(arr, target, mid + 1, right);
  }

  // console.log(binarySearch([1, 2, 3, 4, 5, 6], 4));
  // Output: 3 (index of 4)
}
{
  function isBalanced(str) {
    let stack = [];
    let map = { ")": "(", "}": "{", "]": "[" };

    for (let char of str) {
      if (["(", "{", "["].includes(char)) {
        stack.push(char);
      } else if ([")", "}", "]"].includes(char)) {
        if (stack.pop() !== map[char]) return false;
      }
    }
    return stack.length === 0;
  }

  // console.log(isBalanced("{[()]}")); // true
  // console.log(isBalanced("{[(])}")); // false
}
{
  function permutations(str) {
    if (str.length <= 1) return [str];

    let result = [];
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      let rest = str.slice(0, i) + str.slice(i + 1);
      for (let perm of permutations(rest)) {
        result.push(char + perm);
      }
    }
    return result;
  }

  // console.log(permutations("abc"));
  // Output: ["abc", "acb", "bac", "bca", "cab", "cba"]
}
{
  function longestWord(sentence) {
    let words = sentence.split(" ");
    let longest = "";

    for (let word of words) {
      if (word.length > longest.length) {
        longest = word;
      }
    }
    return longest;
  }

  // console.log(longestWord("I love JavaScript programming"));
  // Output: "programming"
}
{
  // Write a Function that take two numbers and returns their sum
  function findSum(num1, num2) {
    return num1 + num2;
  }
  // console.log(findSum(1, 4));
}
{
  // Write a function to check wether a number is even or odd
  function findNum(num) {
    return num % 2 === 0 ? "Even" : "Odd";
  }
  // console.log(findNum(2));
}
{
  // Create a Function that returns the factorial of a given number
  function findFactorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    // console.log(result);
  }
  findFactorial(5);
}
{
  // Write a Function to convert celsius to fahrenheit;
  function findCelsiusToFahrenheit(n) {
    let celsius = n;
    let divisior = 9 / 5;
    let sumNum = 32;
    return celsius * divisior + sumNum;
  }
  // console.log(findCelsiusToFahrenheit(25),"°F");
}
{
  // Write a Function That Takes a string and return it in reverse order;
  function reverseOrder(str) {
    return str.split("").reverse().join("");
  }
  // console.log(reverseOrder("Akash"));
}
{
  function reverseOrder(str) {
    // let temp = str.split("");
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reverse += str[i];
    }
    return reverse;
  }
  // console.log(reverseOrder("Akash"));
}
{
  // Write a Number that return the maximum number of an array;
  function findMaximum(arr) {
    let maximum = [];
    for (let val of arr) {
      if (val > maximum) {
        maximum = val;
      }
    }
    return maximum;
  }
  // console.log(findMaximum([1, 2, 3, 4, 5]));
}
{
  function findmax(arr) {
    return Math.max(...arr);
  }
  // console.log(findmax([1,102, 3, 4, 5]));
}

{
  // Write a Function that counts the  number of vowelss in a string
  function countVowls(str) {
    let vowels = "aeiou";
    let count = 0;
    for (char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }
  // console.log(countVowls("aeceeeeeeeeede"));
}
{
  // Write a Function To check if a given srting is a palindrome.
  function checkPlaindrome(str) {
    let isPlaindrome = true;
    for (let i = 0; i <= str.length / 2; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        isPlaindrome = false;
        break;
      }
    }
    if (isPlaindrome) {
      // console.log(str, "Is a Palindrome");
    } else {
      console.log(str, "Is Not a Plaindrome");
    }
  }
  checkPlaindrome("level");
}
{
  function checkPlaindrome(num) {
    let str = num.toString();
    let val = str.split("").reverse().join("");
    let reverse = parseInt(val);
    if (reverse === num) {
      // console.log(reverse, "Is a Palindrome");
    } else {
      console.log(reverse, "Not a Palindrome");
    }
  }
  checkPlaindrome(121);
}
{
  function isPlaindrome(num) {
    let reverse = 0;
    let temp = num;
    let toStr = num.toString();
    for (let i = 0; i <= toStr.length - 1; i++) {
      let digit = parseInt(temp % 10);
      reverse = reverse * 10 + digit;
      temp = Math.floor(temp / 10);
    }
    if (num === reverse) {
      // console.log(reverse, "Plaindreome");
    } else {
      console.log(reverse, "Not Palindrome");
    }
  }
  isPlaindrome(121);
}
{
  function findFibbonacci(num) {
    let a = 0,
      b = 1,
      next;
    if (a === num) return a;
    if (b === num) return b;
    for (let i = 2; i <= num; i++) {
      next = a + b;
      a = b;
      b = next;
    }
    return b;
  }
  // console.log(findFibbonacci(5));
}
{
  function findDuplicate(arr) {
    let duplicate = [];
    for (let i = 0; i < arr.length - 1; i++) {
      if (!duplicate.includes(arr[i])) {
        duplicate.push(arr[i]);
      }
    }
    // console.log(duplicate);
  }
  findDuplicate([1, 1, 2, 2, 3, 3]);
}
{
  // Write a Recursive Function to Calculate sum of Two Numbers
  function recursiveSum(num) {
    let sum = 0;
    if (num < 10) {
      return num;
    }
    sum = (num % 10) + recursiveSum(Math.floor(num / 10));
    return sum;
  }
  // console.log(recursiveSum(1234));
}
{
  // Write a Function That Takes a String and returns The First non-repeated character
  function nonRepeatedChar(str) {
    let freq = {};
    for (char of str) {
      freq[char] = (freq[char] || 0) + 1;
    }
    for (char of str) {
      if (freq[char] === 1) {
        return char;
      }
    }
    return null;
  }
  // console.log(nonRepeatedChar("sstr"));
}
{
  // Write a Function That sort an aaray of number without using built-in-sort()
  function sortArr(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  // console.log(sortArr([6, 5, 4, 3, 2, 1, 0]));
}
{
  // Sorting Array Numbers in Quick Sort
  function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  // console.log(quickSort([5, 2, 9, 1, 5, 6]));
}
{
  function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    // console.log(left);
    // console.log(right);
    // console.log(arr);

    return merge(left, right);
  }
  function merge(left, right) {
    let result = [];
    let i = 0,
      j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i++]);
      } else {
        result.push(right[j++]);
      }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
  }
  // console.log(mergeSort([5, 2, 9, 1, 5, 6]));
}
{
  // Impliment a Function To Debounce another function
  function debounce(fun, delay) {
    let timeOutId;
    return function (...args) {
      clearTimeout(timeOutId);
      // timeOutId = setTimeout(() => {
      //   fun.apply(this, args);
      // }, delay);
    };
  }
  // const log = debounce(() => console.log("Called"), 1000);
  // log();
}

{
  function debounce(func, delay) {
    let timeOutId;
    return function (...arg) {
      // timeOutId = setTimeout(() => {
      //   func.apply(this, arg);
      // }, delay)
    };
  }
  const log = debounce(function (msg) {
    // console.log(this.name + ": " + msg);
  }, 1000);

  let obj = { name: "Akash" };
  // log.call(obj,  "Hello")
}
{
  function debounce(func, delay) {
    let timeOutId;
    return function (...arg) {
      clearTimeout(timeOutId);
      // timeOutId = setTimeout(() => {
      //   func.apply(this, arg);
      // }, delay);
    };
  }
  const log = debounce(function (msg) {
    // console.log(this.name + ": " + msg);
  }, 1000);

  let obj = { name: "Akash" };
  log.call(obj, "Hello");
}
{
  function debounce(func, delay) {
    let timeOutId;
    return function (...arg) {
      clearTimeout(timeOutId);
      // timeOutId = setTimeout(() => {
      //   func.apply(this, arg);
      // }, delay);
    };
  }

  // const log = debounce(function (msg) {
  // console.log(this.name, msg)
  // }, 1000);
  // let obj = {name: "Akash"};
  // log.call(obj, "Hello");
}
{
  function findAnagram(str1, str2) {
    let normalize = (str) => str.toLowerCase().split("").sort().join("");
    console.log(normalize);

    return normalize(str1) === normalize(str2);
  }
  // console.log(findAnagram("listen", "silent"));
}

// ==================== SWITCH CASE ========================
{
  // Write a program using switch to print the name of the month
  function findMonth(num) {
    switch (true) {
      case num === 1:
        console.log("Jan");
        break;
      case num === 2:
        console.log("Fab");
        break;
      case num === 3:
        console.log("Mar");
        break;
      case num === 4:
        console.log("Apr");
        break;
      case num === 5:
        console.log("May");
        break;
      case num === 6:
        console.log("Jun");
        break;
      case num === 7:
        console.log("Jul");
        break;
      case num === 8:
        console.log("Aug");
        break;
      case num === 9:
        console.log("Sep");
        break;
      case num === 10:
        console.log("Oct");
        break;
      case num === 11:
        console.log("Nov");
        break;
      case num === 12:
        console.log("Dec");
        break;
      default:
        console.log("Enter Valid Month Number");
    }
  }
  // findMonth(5);
}
{
  // Take a Number (0-6) and print the day of the week
  function findWeek(num) {
    switch (true) {
      case num === 0:
        console.log("Today Is Sunday");
        break;
      case num === 1:
        console.log("Today Is Monday");
        break;
      case num === 2:
        console.log("Today Is Tuesday");
        break;
      case num === 3:
        console.log("Today Is Wednesday");
        break;
      case num === 4:
        console.log("Today Is Thusday");
        break;
      case num === 5:
        console.log("Today Is Friday");
        break;
      case num === 6:
        console.log("Today Is SaturDay");
        break;
      default:
        console.log("Enter Valid Number of Week");
    }
  }
  // findWeek(2);
}
{
  // Write a Program to Check The Type Of Fruit
  function typeFruit(str) {
    switch (str.toLowerCase()) {
      case "apple":
      case "mango":
      case "banana":
        console.log("This Is a Fruit");
        break;
      case "carrot":
        console.log("Vegitable");
        break;
      default:
        console.log("Unknown Item");
    }
  }
  // typeFruit("mango");
}
{
  function calculator(num1, operator, num2) {
    switch (true) {
      case operator === "+":
        console.log(num1 + num2);
        break;
      case operator === "-":
        console.log(num1 - num2);
        break;
      case operator === "*":
        console.log(num1 * num2);
        break;
      case operator === "/":
        console.log(num1 / num2);
        break;
      default:
        console.log("Enter Valid Operator");
    }
  }
  // calculator(2, "/", 9);
}
{
  // Take a color (red, green, yellow) and print trafic light instruction using switch
  function traficLight(clr) {
    switch (clr) {
      case "red":
        console.log("Stop");
        break;
      case "Yellow":
        console.log("Ready");
        break;
      case "Green":
        // console.log("Go");
        break;
      default:
        console.log("Enter Valid Color");
    }
  }
  // traficLight("red");
}
{
  // Write a Program that group multiple cases
  function multipeCase(weekday) {
    switch (weekday.toLowerCase()) {
      case "monday":
      case "tueday":
      case "wednesday":
      case "thusday":
      case "friday":
        console.log(`${weekday} is a Weekday`);
        break;
      case "Sunday":
      case "Saturday":
        console.log(`${weekday} is Weekend`);
        break;
      default:
        console.log("Enter Valid Day");
    }
  }
  // multipeCase("Monday");
}
{
  // Impliment a menu driven program
  function menuDriven(num1, choice, num2) {
    switch (choice) {
      case 1:
        console.log("Add: " + (num1 + num2));
        break;
      case 2:
        console.log("Substract: " + (num1 - num2));
        break;
      case 3:
        console.log("Multiply: " + num1 * num2);
        break;
      case 4:
        console.log("Devide: " + num1 / num2);
        break;
      case 5:
        console.log("Exit :");
        break;
      default:
        console.log("Invalid Choice");
    }
  }
  // menuDriven(2, 3, 5);
}
{
  // Write a program that takes a number 1-12 and tells you thw season
  function seasonNum(num) {
    switch (num) {
      case 1:
      case 2:
      case 12:
        console.log(`Month ${num} is Winter`);
        break;
      case 3:
      case 4:
      case 5:
        console.log(`Month ${num} is Spring`);
        break;
      case 6:
      case 7:
      case 8:
        console.log(`Month ${num} is Summer`);
        break;
      case 9:
      case 10:
      case 11:
        console.log(`Month ${num} is Autumn`);
        break;
      default:
        console.log("Enter Valid Month Number");
    }
  }
  // seasonNum(1);
}
{
  function atmMenu(amount, choice) {
    let balance = 2000;
    switch (choice) {
      case 1:
        console.log(`Your Balance Is : ${balance}`);
        break;
      case 2:
        balance += amount;
        console.log(`Deposited : ${balance}`);
        break;
      case 3:
        if (amount <= balance) {
          balance -= amount;
          console.log("Withdrawl :" + amount + "New Balance" + balance);
        } else {
          console.log("Insufficient Balance");
        }
        break;
      case 4:
        console.log("Thank You For Using ATM");
        break;
      default:
        console.log("Invalid option");
    }
  }
  // atmMenu(200, 4);
}
{
  let color = "red";

  switch (color) {
    case "red":
      // console.log("Stop");
      break;
    case "yellow":
      console.log("Wait");
      break;
    case "green":
      console.log("Go");
      break;
    default:
    // console.log("Invalid color");
  }
}
{
  function checkAge(age) {
    switch (true) {
      case age < 13:
        console.log("Child");
        break;
      case age >= 13 && age < 20:
        console.log("Teenager");
        break;
      case age >= 20:
        console.log("Adult");
        break;
      default:
        console.log("Invalid age");
    }
  }
  // checkAge(23);
}
{
  // Tic Tac Toy
  let arr = [
    ["X", null, "O"],
    [null, "X", null],
    ["O", null, "X"],
  ];
  arr[0][1] = "X";
  // console.log(arr);
}
{
  function checkArmstrongNumber(num) {
    let nums = num.toString().split("").map(Number);
    let output = "Not Armstrong";
    let temp = [];
    for (let i = 0; i < nums.length; i++) {
      temp.push(Math.pow(nums[i], 3));
    }
    let sum = temp.reduce((acc, crr) => acc + crr, 0);
    if (sum === num) {
      output = "Armstrong";
    }
    return output;
  }
  // console.log(checkArmstrongNumber(342));
}

{
  function checkArmstrongNumber(num) {
    return num ===
      num
        .toString()
        .split("")
        .map(Number)
        .reduce((sum, x) => sum + Math.pow(x, 3), 0)
      ? "Armstrong"
      : "Not Armstrong";
  }
  // console.log(checkArmstrongNumber(342));
}
{
  function armstrong(num) {
    let x = num.toString().split("");
    let length = x.length;
    const y = x.reduce((acc, crr) => {
      const number = Number(crr);
      return acc + crr ** length;
    }, 0);
    return y === num ? "Armstrong" : "Not Armstrong";
  }
  // console.log(armstrong(370))
}
{
  function checkArmstrongNumber(num) {
    let num1 = num.toString().split("").map(Number);
    console.log(num1);

    let res = [];
    for (let i = 0; i < num1.length; i++) {
      res.push(num1[i] * num1[i] * num1[i]);
    }

    let ans = res.reduce((a, b) => a + b);

    return num == ans ? "Armstrong" : "Not Armstrong";
  };
  // console.log(checkArmstrongNumber(153));
}
{
  function checkArmstrong(num){
    let num1 = num.toString().split("");
    let res = [];
    for(let i = 0; i < num1.length; i++){
      res.push(Math.pow(num1[i], 3));
    };
    let ans = res.reduce((a,b) => a+b, 0);
    return num === ans ? "Armstrong" : "Not Armstrong";
  };
  console.log(checkArmstrong(153));
}

{
  // 
}