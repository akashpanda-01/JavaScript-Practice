{
  // let firstNum = prompt("Enter First Number");
  // let secondNum = prompt("Enter Last Number");
  let output = "";
  function armstrongNum(userInput) {
    let toStr = userInput.toString().split("").map(Number);
    for (let i = 0; i < toStr.length; i++) {
      output = Math.pow(toStr[i], 3);
    }
    // console.log(output);
  }
  // armstrongNum(123);
}
{
  // Find Factorial of a given number 5.
  let num = 1;
  for (let i = 1; i <= 5; i++) {
    num = num * i;
    // console.log(num);
  }
}
{
  //Reverse a given number 123.
  let n = 123;
  let temp = n;
  let reverse = 0;
  // for (let i = 1; temp >= 0; i++) {
  //   reverse = reverse * 10 + (temp % 10);
  //   temp = temp - (temp % 10) / 10;
  // }
  //   console.log(reverse);
}
//Reverse a given number 123.
let n = 123;
let reverse = 0;
for (let temp = n; temp > 0; temp = Math.floor(temp / 10)) {
  reverse = reverse * 10 + (temp % 10);
}
// console.log(reverse);

// Find the Perfect Square using binary ?
// function squareRootBinary(n){
let low = 1;
let high = n;
while (low <= high) {
  let mid = Math.floor((low + high) / 2);
  let square = mid * mid;

  if (square === n) return mid;
  if (square < n) low = mid + 1;
  else high = mid - 1;
}
// return -1;
// };
// console.log(squareRootBinary(6));

// Find the Imperfect square
function squareRootBinary(n) {
  let ans = 0;
  let low = 1;
  let high = n;
  while(low <= high) {
    let mid = Math.floor((low + high) / 2);
    let square = mid * mid;

    if(square === n) return mid;
    if(square < n){
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
}
console.log(squareRootBinary(6));