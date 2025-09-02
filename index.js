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
// console.log(findArea(4, 6));

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
    realroot = (-b / 2) * a;
    imaginRoot = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
    console.log(
      `Roots are complex: ${realPart} + ${imagPart}i , ${realPart} - ${imagPart}i`
    );
  }
}
quadraticEquation(1, -3, 2);

// Killometers to Milles
function getMiles(Killometer) {
  let factor = 0.621371;
  let findMiles = Killometer * factor;
  return findMiles;
}
// console.log(getMiles(5));

// Javascript Program to Generate a Random Number
function getRandomNum(){
  let min = 10;
  let max = 20;
  let ranomNum = Math.floor(Math.random() * (max - min) + min);
  console.log(ranomNum);
};
getRandomNum();
