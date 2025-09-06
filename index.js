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
  console.log("Gread-A");
} else if (score >= 70 && score <= 79) {
  console.log("Grade- B");
} else if (score >= 60 && score <= 69) {
  console.log("Grade- C");
} else if (score >= 50 && score <= 59) {
  console.log("Grade- D");
} else {
  console.log("F");
}

function checkPositive(num) {
  if (num >= 0) {
    return `${num}, Positive`;
  } else {
    return num, "Negative";
  }
}
console.log(checkPositive(42));

function eligibleCheck(age) {
  if (age > 18) {
    console.log("Eligible");
  } else {
    console.log("Not Eligible");
  }
}
eligibleCheck(3);
function checkEven(num) {
  if (num % 2 === 0) {
    console.log("Divisible");
  } else {
    console.log("Not Devisible");
  }
}
checkEven(3);

function checkArmstorageNumb(num) {
  return num ===
    num
      .toString()
      .split("")
      .reduce((acc, crr) => acc + Math.pow(crr, 3), 0)
    ? "Armstrong"
    : "Not Armstrong";
};
// console.log(checkArmstorageNumb(153));

function armCheck(num) {
  let nums = num.toString().split("").map(Number);
  let temp = [];
  let output = "Not a Armstrong";

  for(let i = 0; i < nums.length; i++){
    temp.push(Math.pow(nums[i], 3));
  };

  let sum = temp.reduce((acc, crr) => acc + crr, 0);

  if(sum === num){
    output = "Armstrong";
  };
  return output;
};
console.log(armCheck(123));


function isArmstrong(num){
  let digit = toString().split("");
  let power = digit.length;
  let sum  = digit.reduce((acc, crr) => acc + Math.pow(crr, power), 0);
  return sum === num;
};
function checkArmstrongInterval(start, end){
  let result = [];
  for(let i = start; i <= end; i++){
    if(isArmstrong(i)){
      result.push(i)
    }
  }
  return result;
};
console.log(checkArmstrongInterval(1, 999));

