{
  // Find Factorial of a given number 5.
  let num = 1;
  for (let i = 1; i <= 5; i++) {
    num = num * i;
  }
  // console.log(num);
}
{
  //Reverse a given number 123.
  let n = 123;
  let reverse = 0;
  for (let temp = n; temp > 0; temp = Math.floor(temp / 10)) {
    reverse = reverse * 10 + (temp % 10);
  }
  // console.log(reverse);
}
{
  function checkArmstrong(enterNum) {
    // let enterNum = prompt("Enter Number");
    let sum = 0;
    let digit = enterNum.toString().length;
    let temp = +enterNum;
    while (temp > 0) {
      let remainder = temp % 10;
      sum += remainder ** digit;
      temp = Math.floor(temp / 10);
    }
    // console.log(sum);
  }
  // checkArmstrong(135);
}

{
  // let lastNum = parseInt(prompt("Enter Last Number"));
  // let highNum = parseInt(prompt("Enter High Number"));
  // for (let i = lastNum; i <= highNum; i++) {
  //   let temp = i;
  //   let numOfDigit = i.toString().split("");
  //   let sum = 0;
  //   while (temp > 0) {
  //     let remainder = temp % 10;
  //     sum += remainder ** numOfDigit;
  //     temp = parseInt(temp / 10);
  //   }
  // }
  // console.log(sum);
}
{
  const arr = [5, 1, 3, 7, 2, 4];
  const output = arr.reduce(function (acc, crr) {
    // console.log(acc);
    // console.log(crr);
    return acc + crr;
  }, 10);
  // console.log(output);
}

{
  const arr = [5, 1, 3, 2, 4];
  let max = arr.reduce((acc, crr) => {
    acc = crr > acc ? crr : acc;
    return acc;
  });
  // console.log(max);
}
{
  let user = [
    { fullName: "Krishna", lastName: "Lord", age: 26 },
    { fullName: "Akash", lastName: "Panda", age: 26 },
    { fullName: "Donald", lastName: "Trump", age: 56 },
    { fullName: "Elon", lastName: "Musk", age: 76 },
  ];

  const output3 = user.reduce((acc, crr) => {
    if (crr.age <= 30) {
      acc.push(crr.fullName);
    }
    return acc;
  }, []);
  // console.log(output3);

  const output2 = user
    .filter(function (ele) {
      if (ele.age <= 30) {
        return ele;
      }
    })
    .map((x) => {
      return x.fullName;
    });
  // console.log(output2);

  const output1 = user.reduce((acc, crr) => {
    if (acc[crr.age]) {
      acc[crr.age].push(crr.fullName);
    } else {
      acc[crr.age] = [crr.fullName];
    }
    return acc;
  }, {});
  // console.log(output1);

  // let output = user.reduce((acc, crr) => {
  //   if(acc[crr.age]){
  //     acc[crr.age] = ++acc[crr.age];
  //   } else {
  //     acc[crr.age] = 1;
  //   };
  //   return acc;
  // }, {});
  // console.log(output);
}

{
  // let name = {
  //   firstName: "Radhe",
  //   lastName: "Krishna"
  // };
  // let printMyName = function () {
  //   console.log(this.firstName + " " + this.lastName);
  // };
  // Function.prototype.mybind = function(...args){
  //   let obj = this;
  //   console.log(this);
  //   return function () {
  //     obj.call(args[0])
  //   };
  // };
  // let printMyName2 = printMyName.mybind(name);
  // printMyName2();
}

{
  let name = {
    firstName: "Radhe",
    lastName: "Krishna",
  };

  let printName = function (hometown, state) {
    // console.log(this.firstName + " " + this.lastName + ", " + hometown + ", " + state);
  };

  Function.prototype.mybind = function (...args) {
    let obj = this;
    params = args.splice(1);
    // console.log(params);
    return function (...args2) {
      obj.apply(args[0], [...params, ...args2]);
      // console.log(...params, ...args2);
    };
  };
  const printMyName2 = printName.mybind(name, "Duarka");
  printMyName2("unknown");
}

{
  function Person(name) {
    this.name = name;
  }

  Person.prototype.sayHello = function () {
    // console.log(`Hello I am Devoti of ${this.name}`);
  };

  const p1 = new Person("Radhe");
  const p2 = new Person("Krishna");

  p1.sayHello();
  p2.sayHello();
}

// =========================== ARRAY ============================
{
  // Create an array of your 5 favorite fruits and print the first and last fruit.
  let arr = ["mango", "orange", "banana", "appel", "fruit"];
  let val = `First: ${arr[0]}, and Last: ${arr[4]}`;
  // console.log(val);
}
{
  /*
Add and remove elements

Add 4 at the end
Add 0 at the beginning
Remove the last element
Print the final array.
  */
  let numbers = [1, 2, 3];
  numbers.push(4);
  numbers.unshift(0);
  numbers.pop();
  
  // console.log(numbers);
  
}
{
  // Write a program to print the number of elements in an array:
  let cities = ["Delhi", "Mumbai", "Kolkata", "Chennai"];
  // console.log(cities.length);
}
{
  // Print all elements of this array using a for loop and a forEach loop:
  let names = ["Radhe", "Krishna", "Govind"];
  // With for Loop
  let print = [];
  for(let i = 0; i < names.length; i++){
    print.push(names[i]);
  };
  // console.log(print);
  
  // forEach Loop
  names.forEach((item) => {
    // console.log(item);
    
  })
}
{
  // Print the middle element of an array (no matter how many elements are there).
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let value = [];
  let middle = Math.floor(arr.length / 2);
  // console.log(arr[middle]);

  let mid = arr.filter((_, i) => i === Math.floor(arr.length / 2))[0];
  // console.log(mid);
}