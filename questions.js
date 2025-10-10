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
  for (let i = 0; i < names.length; i++) {
    print.push(names[i]);
  }
  // console.log(print);

  // forEach Loop
  names.forEach((item) => {
    // console.log(item);
  });
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
{
  // Check if the number 10 exists in this array:
  let nums = [4, 6, 8, 10, 12];
  let res = nums.includes(10) ? "Exists" : "Not";
  console.log(res);
}
{
  // Use slice() to get [20, 30]
  // Use splice() to remove [30, 40] from original array
  let arr = [10, 20, 30, 40, 50];
  let slice = arr.slice(1, 3);
  // console.log( slice);
  let splice = arr.splice(2, 2);
}
// console.log(splice);
{
  // Combine these two arrays into one:
  // Try using both concat() and spread operator (...).
  let even = [2, 4, 6];
  let odd = [1, 3, 5];

  let combine = even.concat(odd);
  // console.log(combine);

  let add = [];
  add.push(...even, ...odd);
  // console.log(add);
}
{
  // Convert "JavaScript is fun" into an array of words.
  let str = "JavaScript is fun";
  let words = str.split(" ");
  // console.log(words);
}
{
  // Convert ["I", "love", "coding"] into the string "I love coding".
  let arr = ["I", "Love", "Coding"];
  let toStr = arr.join(" ");
  // console.log(toStr);
}
{
  // Use map(), Return a new array where each number is squared.
  let nums = [1, 2, 3, 4];
  let newArr = nums.map((sqr) => sqr ** 2);
  // console.log(newArr);
}
{
  // Use filter(), Return only the ages greater than or equal to 18.
  let ages = [12, 25, 17, 30, 40];
  let greater = ages.filter((itm) => itm > 18);
  // console.log(greater);
}
{
  // Use reduce(), Find the sum of all numbers in:
  let arr = [5, 10, 15, 20];
  let val = arr.reduce((acc, crr) => acc + crr);
  // console.log(val);
}
{
  // Use find(), Find the first user whose age is greater than 22.
  let users = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 30 },
  ];
  let first = users.find((objs) => {
    if (objs["age"] > 22) {
      return objs["age"];
    }
  });
  // console.log(first);
}
{
  // Remove duplicates from:
  let nums = [1, 2, 2, 3, 4, 4, 5];
  let duplicates = [];
  nums.forEach((item) => {
    if (!duplicates.includes(item)) {
      duplicates.push(item);
    }
  });
  // console.log(duplicates);
}
// Check if all marks are greater than 40.
// Check if some marks are greater than 80.
{
  let marks = [45, 67, 89, 90, 50];
  let result = marks.reduce((acc, crr) => {
    if(crr <= 40) acc.allAbove40 = false;
    return acc
  }, {allAbove40: true});

  // console.log(result.allAbove40 ? "All Above 40" : "Some Above 40");
}
{
  let marks = [45, 67, 89, 90, 50];
  let allAbove40 = marks.filter((items) => items >= 40)
  // console.log(allAbove40 ? "All Above 40" : "Some Above 40");
}
{
  let marks = [45, 67, 89, 90, 50];
  let allAbove40 = true;
  for(let nums of marks){
    if(nums >= 40){
      allAbove40  = true;
    } else {
      allAbove40 = false;
    };
  };
  // console.log(allAbove40 ? "All Above 40" : "Some Above 40");
}
{
  // Flatten [1, [2, [3, [4]]]] into a single array using flat().
  let arr = [1, [2, [3, [4]]]];
  let newArr = arr.flat(Infinity);
  // console.log(newArr);
}
{
  // Sort [100, 20, 3, 55] in ascending order correctly (not alphabetically).
  let arr = [100, 20, 3, 55];
  let newArr = [];
  let res = arr.reduce((acc, crr) => {
    if(acc < crr){
      newArr.push(acc);
    }
  });
  console.log(res);
}