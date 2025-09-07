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
  let digit =  num.toString().split("");
  console.log(digit);
  
  let power =  digit.length;
  console.log(power);
  
  
  let sum = 0;
  while(n>0){
    
    sum += Math.pow(digit, power)
    n = parseInt(n/10)
    
  };
  if(sum === num) {
    console.log("Armstrong");
  } else {
    console.log("Not a Armstrong");
  }
}
// isArmstrongNumber(153);

// =====================================================================================
// Loops
function loopArmStrong(num){
  let digit = num.toString().split("");
  let power = digit.length;
  let sum = 0;

  for(let digits of digit){
    sum += Math.pow(Number(digits), power); 
  };

  return sum === num;
}
// console.log(loopArmStrong(15));

//Mathematical Way
function mathmaticalArmstorage(num) {
  let sum = 0;
  let digit = num.toString().split("");
  let power = digit.length;
  
  let temp = num;
  for(let  i = 0; i<num; i++){
    sum += Math.pow(Number(digit), power);
  };
  return sum === num;
  console.log(sum);
  
}
console.log(mathmaticalArmstorage(153));


function isArmstrong(num){
  let digit = num.toString().split("");
  let power = digit.length;
  let sum = digit.reduce((acc, crr) => acc + Math.pow(Number(crr), power), 0);
  return sum === num;
};
function loopToChecck(start, end){
  let output = [];
  for(let i = start; i<=end; i++){
    if(isArmstrong(i)){
      output.push(`${i} Armstrong`);
    }else {
      output.push(`${i} Not Armstrong`);
    };
  }
  return output;
};
loopToChecck(100, 999);``