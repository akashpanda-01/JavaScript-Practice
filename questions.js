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
  // console.log(res);
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
  let result = marks.reduce(
    (acc, crr) => {
      if (crr <= 40) acc.allAbove40 = false;
      return acc;
    }
    // { allAbove40: true }
  );

  // console.log(result.allAbove40 ? "All Above 40" : "Some Above 40");
}
{
  let marks = [45, 67, 89, 90, 50];
  let allAbove40 = marks.filter((items) => items >= 40);
  // console.log(allAbove40 ? "All Above 40" : "Some Above 40");
}
{
  let marks = [45, 67, 89, 90, 50];
  let allAbove40 = true;
  for (let nums of marks) {
    if (nums >= 40) {
      // allAbove40 = true;
    } else {
      allAbove40 = false;
    }
  }
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
    if (acc < crr) {
      newArr.push(acc);
    }
  });
  // console.log(res);
}
{
  // Flatten Nasted Array
  let arr = [1, 2, [3, 4, [5, [6]]]];
  let res = arr.flat(Infinity);
  // console.log(res);
}

{
  // Sort Array
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
  // Find Maximum Number in [10, 20, 30, 40, 50] using Math.max(), .reduce()
  let arr = [10, 20, 30, 40, 50];
  let max = Math.max(...arr);
  // console.log(max);
}
{
  let arr = [10, 20, 30, 40, 50];
  let max = arr.reduce((acc, crr) => {
    if (crr > acc) {
      acc = crr;
    }
    return acc;
  });
  // console.log(max);
}
{
  // Clone let arr = [1, 2, 3]; into a new array and add 4 without changing the original one.
  let arr = [1, 2, 3];
  // let temp = arr.slice();
  let temp = [...arr];
  // let temp = Array.from(arr);
  temp.push(4);
  // console.log(arr);
  // console.log(temp);
}
{
  // Check if 50 exists in [10, 20, 30, 40, 50].
  let arr = [10, 20, 30, 40, 50];
  let isInclude = arr.includes(50);
  console.log(isInclude);
}
{
  // Find the first and last index of 2 in [1, 2, 3, 2, 4].
  const arr = [1, 2, 3, 2, 4];
  const firstIdx = arr.indexOf(2);
  const lastIdx = arr.lastIndexOf(2);
  // console.log(firstIdx, lastIdx);
}
{
  // Find the first number greater than 10, and its index.
  let nums = [5, 10, 15, 20];
  let find = nums.find((n) => n > 10);
  let findIdx = nums.findIndex((n) => n > 10);
  // console.log(find, findIdx);
}
{
  // Create a new array with each number doubled.
  let arr = [2, 4, 6];
  let doubled = arr.map((n) => n * 2);
  // console.log(doubled);
}
{
  // Return only ages greater than or equal to 18.
  let ages = [12, 25, 17, 30];
  let returnVal = ages.filter((n) => n > 18);
  // console.log(returnVal);
}
{
  // Find the sum of all numbers in [1, 2, 3, 4, 5].
  let nums = [1, 2, 3, 4, 5];
  let sum = nums.reduce((acc, crr) => acc + crr);
  // console.log(sum);
}
{
  // Sort [40, 100, 1, 5, 25] in ascending numeric order.
  let arr = [40, 100, 1, 5, 25];
  let sortArr = arr.sort((a, b) => a - b);
  // console.log(sortArr);
}
{
  // Reverse the array [1, 2, 3, 4].
  let arr = [1, 2, 3, 4];
  let reverse = arr.reverse();
  // console.log(reverse);
}
{
  // Flatten [1, [2, [3, [4]]]] into a single array.
  let arr = [1, [2, [3, [4]]]];
  let flatten = arr.flat(Infinity);
  // console.log(flatten);
}
{
  // Check if all marks are greater than 40.
  // Check if some marks are greater than 80.
  let marks = [45, 67, 89, 90, 50];
  let allAbove40 = marks.every((mrk) => mrk < 40);
  let allAbove80 = marks.some((sm) => sm > 80);
  if (allAbove40) {
    console.log("Some Above 40");
  } else {
    // console.log("all above 40");
  }
  if (allAbove80) {
    // console.log("Some are Greater Than 80");
  } else {
    console.log("All Above 80");
  }
}
{
  // Create an array of length 5 and fill it with "A".
  let arr = ["a", "b", "c", "d", "e"];
  let fil = arr.fill("A", 3, 4);
  // console.log(fil);
}
{
  // Check which of these are arrays:
  let check = [[1, 2, 3], "Hello", { a: 1 }, new Array(3)];
  // check.forEach((i) => console.log(Array.isArray(i)));

  let result = check.map((i) => Array.isArray(i));
  if (result) {
    // console.log("First");
  }
  // console.log(result);
}

{
  // How to Copy an Object ?
  let obj = { name: "Akash", address: { state: "someplace" } };
  // Shallow Copy (One Level Copying and Nested Objects Are Reference)
  let copy1 = { ...obj };
  copy1.name = "Rahul";
  copy1.address.state = "new State";
  // console.log(copy1.name);
  // console.log(obj.name);
  // console.log(copy1.address.state);
  // console.log(obj.address.state);

  // Depp Copy (All In Object Including Nested objects are Copied No Reference)
  let obj1 = { name: "RadheKrishna", heroes: { h1: "Ironman" } };
  // console.log(obj1.name, obj1.heroes.h1);
  let deepCopy = JSON.parse(JSON.stringify(obj1));
  deepCopy.name = "HariGobinda";
  deepCopy.heroes.h1 = "Tony Stark";
  // console.log(deepCopy.name, deepCopy.heroes.h1);
  // console.log(obj1.name, obj1.heroes.h1);
}
{
  // Destructuring
  let obj = { name: "A", age: "2" };
  let { name: key, age } = obj;
  // console.log(key, age);
}
{
  // Object.freez()
  let obj = { name: "a" };
  Object.freeze(obj);
  obj.name = "b";
  // console.log(obj.name);
}
{
  let obj = { name: "a", age: "200" };
  Object.seal(obj);
  obj.name = "akash";
  delete obj.name;
  // console.log(obj.name);
}
{
  // Merge Two Objects
  let obj1 = { name: "a" };
  let obj2 = { age: "100" };
  let merge = { ...obj1, ...obj2 };
  // console.log(merge);
}
{
  // Object.create inheritance
  let parent = { name: "ab", age: "12" };
  let child = Object.create(parent);
  // console.log(child.name, child.age);
}
{
  // Getter and Setter
  let user = {
    fistname: "AB",
    lastName: "CD",
    get fullName() {
      return this.firstName + " " + this.lastName;
    },
    set fullName(name) {
      [this.firstName, this.lastName] = name;
    },
  };
  user.fullName = "Rahul Kumar";
  // console.log(user.fullName);
}
{
  // Optional Chaining
  let obj = { name: "a", ageof: { a: "100" } };
  // console.log(obj.ageof?.a);
  // console.log(obj.ageof?.b);
}
{
  // Difference Between __proto__ and prototype
  function Person() {}
  let p = new Person();
  // console.log(p.__proto__ === Person.prototype);
}
{
  // Map and Object
  let map = new Map();
  map.set("a", 1);
  map.set({ a: 2 }, "values");
  // console.log(map);
}
{
  // Singleton (both variable point to the same single object)
  let config = {
    name: "AppConfig",
    version: 1.0,
  };
  let anotherConfig = config;
  anotherConfig.version = 2.0;
  // console.log(config);
  // console.log(anotherConfig);

  // console.log(result);
  // };
  // console.log(result);
}
{
  // Use copyWithin() to copy the first two elements to positions starting from index 3.
  let arr = [1, 2, 3, 4, 5];
  let copy = arr.copyWithin(3, 0, 2);
  // console.log(copy);
}
{
  // Convert the string "HELLO" into an array of its characters using Array.from().
  let str = "HELLO";
  let inArr = Array.from(str);
  // console.log(inArr);
}
{
  /*
  From [1, 2, 3, 4, 5],
👉 filter numbers > 2
👉 double them
👉 find the total sum (use chaining with filter(), map(), reduce()).
  */

  let arr = [1, 2, 3, 4, 5];
  let chain = arr
    .filter((n) => n > 2)
    .map((m) => m * 2)
    .reduce((acc, crr) => acc + crr);
  // console.log(chain);
}
{
  // try & catch method
  // console.log("Hello");
  // console.log("Hello");
  try {
    // console.log(a);
  } catch (err) {
    // console.log(err);
  }
  // console.log("Hello1");
}

// =========================== PROMISE =========================
{
  let data = {
    name: "a",
    name2: "b",
  };

  let promise = new Promise(function (res, rej) {
    if (data) {
      res(data.name);
    } else {
      rej("Data not Found");
    }
  });

  promise
    .then((result) => {
      // console.log(result);
    })
    .catch((err) => {
      // console.log(err);
    })
    .finally(() => {
      // console.log("Done");
    });
}

{
  let success = false;
  let promise2 = new Promise((res, rej) => {
    if (success) {
      res("Success");
    } else {
      rej("Failed");
    }
  });

  promise2
    .then((result) => {
      // console.log(result);
    })
    .catch((err) => {
      // console.log(err);
    });
}

{
  let promise = new Promise((res, rej) => {
    setTimeout(() => {
      res("Data Fetched");
    });
  });

  // promise.then((result) => console.log(result));
}

{
  // let cart = ["shoes", "Pants", "Kurata"];
  // createCartOrder(function (cart) {
  //   proceedPayment(function (orderId){
  //   })
  // })
  // let promise = createOrder(cart)
  // promise.then((orderId) => {
  //   proceedPayment(orderId);
  // });
}
{
  // promise.all()
  // promise.allSeteled()
  // promise.race()
  // promise.any()

  let p1 = new Promise((res, rej) => {
    setTimeout(() => {
      res("p1 success");
      // rej("p1 success");
    }, 3000);
  });
  let p2 = new Promise((res, rej) => {
    setTimeout(() => {
      res("p2 success");
      // rej("p2 success");
    }, 1000);
  });
  let p3 = new Promise((res, rej) => {
    setTimeout(() => {
      res("p3 success");
      // rej("p3 success");
    }, 2000);
  });

  Promise.all([p1, p2, p3])
    // .then((result) => console.log(result))
    .catch((err) => console.log(err));

  Promise.allSettled([p1, p2, p3])
    // .then((result) => console.log(result))
    .catch((err) => console.log(err));

  Promise.race([p1, p2, p3])
    // .then((result) => console.log(result))
    .catch((err) => console.log(err));

  Promise.any([p1, p2, p3])
    // .then((result) => console.log(result))
    .catch((err) => console.log(err));
}

{
  const p1 = new Promise((res, rej) => {
    setTimeout(() => {
      res("P1 Success");
    }, 10000);
  });
  const p2 = new Promise((res, rej) => {
    setTimeout(() => {
      res("P2 Success");
    }, 5000);
  });

  async function handelPromise() {
    // console.log("Hello")
    const val = await p1;
    // console.log(val);

    const val2 = await p2;
    // console.log(val2)
  }

  // handelPromise();
}

{
  async function handlePromise() {
    const API_URL = "https://api.github.com/users/akshaymarch7";
    const data = await fetch(API_URL);
    console.log(data);
    let value = await data.json();
    console.log(value);
  };
  // handlePromise();
}

{
  async function test1(){
    return "Hello World";
  };
  // console.log(test1());
}
{
  async function test2(){
    let result = await "Hii";
    // console.log(result);
  };
  test2();
  // console.log("End");
}
{
  async function test3 (){
    let p = new Promise(res => res("Resolve"))
    let result = await p;
    // console.log(result);
  };
  test3();
}
{
  async function test4(){
    // throw new Error("Something Went Wrong");
  };
  test4();
  // console.log("After Function Call");
}
{
  function delay(ms){
    return new Promise(res => setTimeout(res, ms));
  };
  async function sequential(){
    console.log("Satrt");
    await delay(1000);
    console.log("1 Second Passed");
    await delay(1000);
    console.log("2 Second Passed");
  };
  // sequential();
}
{
  function delay(ms, value){
    return new Promise((res) => setTimeout(() => res(value), ms));
  };

  async function parallel(){
    const p1 = delay(2000, "A");
    const p2 = delay(2000, "B");

    let result1 = await p1;
    let result2 = await p2;

    console.log(result1);
    console.log(result2);
  };
  // parallel();
}
{
  function delay(ms, value){
    return new Promise((res) => setTimeout(() => res(value), ms));
  };

  async function parallelBetter(){
    const [a, b] = await Promise.all([delay(2000, "A"), delay(2000, "B")]);
    console.log(a);
    console.log(b);
  };
  // parallelBetter();
}
{
  async function testError(){
    try{
      const p1 = Promise.reject("Failed");
      let res = await p1;
      console.log(res);
    }
    catch(err){
      console.log("Caught", err);
    };
  };
  // testError();
}
{
  async function throwErr(){
    try{
      throw "Manual Error";
    }
    catch(err){
      console.log(err);
    };
  };
  // throwErr();
}
{
  async function demo(){
    console.log("A");
    setTimeout(() => console.log("B"), 0);
    await Promise.resolve();
    console.log("c");
  };
  // demo();
  // console.log("D");
  
}
{
  async function tricky(){
    console.log("Start");
    let p = Promise.resolve("Done");
    p.then(console.log);
    console.log("End");

  };
  tricky();
}