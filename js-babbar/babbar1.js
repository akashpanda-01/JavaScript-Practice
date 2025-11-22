// Variables / Datatype


//function scoped
// function example(){
//     var x = 10;
//     console.log(x)
// }
// example()

//global scoped
// var x = 10;

// if (true) {
//     console.log(x);
// }


// let x = 10;   global scoped
// {
// // let x = 10;  block scoped
// console.log(x)
// }


// const x = 10;
// console.log(x);



// Datatype

// let number = 10 ;
// let string = "Akash";
// let boolean = true ;
// let undefined;     => value not defined
// let nul = null;    => its an object
// let sym = [20];       => its an object
// let bigint = 236542765437534075430756430756n;
// console.log(typeof(bigint));



//Operators / Conditionls

//Arithmatic (+ , -, *, /, %, **, ++, --)

// let a = 2 ;
// let b = 5 ;

// console.log(a + b);
// console.log(a - b);
// console.log(a / b);
// console.log(a * b);
// console.log(a ** b);
// console.log(a % b);
// console.log(a++);
// console.log(--a);


// a += 3;
// console.log(a);

// a -= 2;
// console.log(a);

// a *= 2;
// console.log(a);

// a /= 2;
// console.log(a);

// a **= 2;
// console.log(a);

// a %= 3;
// console.log(a);


//Comparision operator
//  let a = 5;
// let b = 5;

// console.log(a > b);
// console.log(a < b);
// console.log(a == b);
// console.log(a === b);
// console.log(a != b);
// console.log(a <= b);
// console.log(a >= b);

// Ternary Operator

// let age = 15;
// let status = ( age > 18) ? 'can vote': 'can not vote';
// console.log(status);


//Logical Operator( And-&&, Or-||, not-!)

// let ans = true && true && true ;
// console.log(ans);

// let ans = false || false || true ;
// console.log(ans);

// let ans = !(false);
// console.log(ans);


// cons/ole.log( 2 | 5);
// console.log(2 & 5);
// console.log(2 ^ 5);
// console.log(~(0));

// left shift / right shift

// console.log(10 >> 1);
// console.log(10 << 1);


//CONDITIONALS

// let age = 19;

// if (age > 18) {
//     console.log("you can vote");
// } else if (age > 17) {
//     console.log("b");
// } else if (age > 16){
//     console.log("c");
// } else {
//     console.log( "can not");
    
// }


// SWITCH
// let num = 4;
// switch (num) {
//     case 1: console.log("a");
//     case 2: console.log("b");
//     case 3: console.log("c");
        
//         break;

//     default: console.log("f");
    
//         break;
// }


// loops & Strings

// Loops
// for (let i = 5; i >= 1; i--){
//     console.log(i);
// }

 //BREAK
// for(i = 1; i <= 6; i++){
//     if (i == 4) {
//         break;
//     } else {
//         console.log(i);
        
//     }
// }


//CONTINUE
// for(i = 1; i<=4; i++){
//     if (i == 3) {
//         continue;
//     } else {
//         console.log(i);
        
//     }
// }


// WHILE LOOP
// let i = 1;
// while(i <= 10) {
//     console.log("babbar");
//     i++;
// }

// let i = 1;
// while(i < 5){
//     if(i == 3)
//         break;
//      else 
//         console.log(i);
//     i++;
// }


//infinite loop
// let i =1;
// while(i < 5) {
//     console.log("inside the loop");
    
//     if(i == 3){
//         i++;
//         continue;
        
//     }
//      else 
//      console.log(i);
//      i++;
// }

// DO-WHILE LOOP
// let i= 1;
//  do {
//     console.log("babbar");
//     i++;
//  } while (i <= 10);

// STRINGS
// let a = "akask";
// let b = 'akash';
// let c = `Akash`;
// let d = new String("Akash");

//OPERATIONS ON STRING
// CONCATINATING
// let a = "hello";
// let b ="babbbar";


// let c = `${a} ${b}`;
// console.log(c);


// let c = a + b;
// console.log(c);

// SUBSTRING
// let a = "babbar";
// console.log(a.substring(2, 5));


// UPPER CASE / LOWER CASE
// let a = "babbar";
// console.log(a.toUpperCase());

// let a = "BABBAR";
// console.log(a.toLowerCase());


// SPLIT
// let a ="hello ji kese ho saare";
// let b = a.split(" ");
// console.log(b);



// FUNCTION
// function logic(a, b){
//     let num = `${a}, ${b}`;
//     console.log(num);
    
// }
// logic(2, 4); // <== to use function we have to call it (logic(); )

//Reutrn Function
// function getsum(a, b, c){
//     let sum = a + b + c;
//     return sum;
// }
// let total = getsum(2, 4, 5);
// console.log(total);
// console.log(getsum(1, 2, 3));


// const greet = function (name) {
//     return `hello ${name}`;
// }
// console.log(greet("Akash"));


// function loop() {
//     for (let i=1; i<=5; i++){
//         console.log(i);
//     }
// }
// loop();

// function printcount() {
//     let i =1;
//     while(i <= 100){
//         console.log(i);
//         i++ 
//     }
// }
// printcount()


// function getMyName(firstname, lastname){
//     // let fullname = firstname + " " + lastname;
//     let fullname = firstname + lastname; // it wil return output 3 when we printing value. because not have empty string in side it.
//     return fullname;
// }
// // let fullname = getMyName("i am", "Akash");
// let fullname = getMyName(1, 2); // returns (1 2) because of the variable declared in function have empty string .
// console.log(fullname);


// function getMultiplication(a,b){
//     return a*b;
// }
// console.log(getMultiplication(2, 5));


// OBJECT
// let obj = {
//     name: "akash",
//     // "full name": "Akash",
//     age: 15,
//     waight: 50,
//     height: "6ft",
//     greet: function(){
//         console.log(`heloo my name is ${obj.name} and age is${obj.age}`);
//         console.log("hii my name is Akash");
        
//     }
// };
// console.log(obj);
// obj.greet();
// console.log(typeof(obj));


// ARRAYS
// let arr = new Array("a", "b", true, 45);

// console.log(arr[0]);

// arr.push("Akash");
// arr.pop();
// arr.shift();
// arr.unshift("babbar")
// arr.slice(1,2);
// arr.splice(1,2, "kunal")

// console.log(arr.splice(1,2));
// console.log(arr);

// let arr = new Array(10, 20 ,30);
// arr.map((number, index) => {
//     console.log(number + 1);
//     console.log(index);
      
// })

// FILTER
// let arr = [12, 13, 14, 17, 20];
// let ansArr = arr.filter((number) => {
//     if(number % 2 === 0){
//         return true ;
//     } else {
//         return false;
//     }
// })
// console.log(ansArr);


// let arr = [1 ,2 , "akash", "babbar", true, null];
// let ansArr = arr.filter((value) => {
//     if(typeof(value) === 'string') {
//         return true;
//     } else {
//         return false;
//     }
// })
// console.log(ansArr);

// REDUCE
// let arr = [10, 20, 30, 40];
// let ans = arr.reduce((acc,curr) => {
//     return acc + curr;
// },0)
// console.log(ans);

// SORT

// let arr = [1, 4, 5, 2, 3, 6, 9];

// let ans = arr.sort()
// console.log(ans);

// let ansDecend = arr.sort((a, b) => {
//     return b - a;
// })
// console.log(ansDecend);


// let arr = [1, 3, 4, 6, 7, 8, 9];
// console.log(arr);

// let ans = arr.sort((a, b) => {
//     return b - a;
// });
// let ans1 = arr.filter((number) => {
//     return number % 2 === 0 ;
// })
// console.log(arr, ans, ans1);

// FIND
// const arr = [5, 12, 8, 44, 130];

// const found = arr.find((akash) => {
//     return akash => 20;
// })
// console.log(found);

// let found = arr.find((value) => {
    // return value === 13;
// })
// console.log(found);

// for(i=0; i<=5; i++){
//     let str = "";
//     for(j=0; j<=5; j++){
//         str = str + j;
//     }
//     console.log(i,str);
    
// }


//HOISTING

//It Only Allow Hoisting Variable declaration
// console.log(age);
// var age = 24;

// Function Allow Hoisting
// myName("akash")
// function myName(name){
//     console.log(name);
// }

//Function Expresion not allow hoisting

// hello();
// let hello = function () {
//     console.log("Hello Jee");
// }

// CALLBACK
// const arr = [
//     function (a,b) {
//         return a + b;
//     },
//     function (a, b) {
//         return a-b;
//     },
//     function (a, b) {
//         return a * b;
//     }
// ];
// let first = arr[2];
// let ans = first(5, 10);
// console.log(ans);


// let obj = {
//     age : 25,
//     waight : 40,
//     height: 5.9,
//     greet: () => {
//         console.log("Hello");
//     }
// };
// console.log(obj.age);
// obj.greet();

// let users = [
//     {id: 1, name: "akash"},
//     {id: 2, name: "Bob"},
//     {id: 3, name: "Bob"}
// ];

// //find() method
// console.log(users.find(user => user.name === "Bob"));

// //filter method
// console.log(users.filter(user => user.name === "Bob"));

// // findIndex Method
// console.log(users.findIndex(user => user.name === "Bob"));


// for-Each()

// let arr = [10, 20, 30];
// arr.forEach((value, index) => {
//     console.log("Value", value, "Index", index);
// })

// let length = arr.length;

//Treditional LOOP
// for(let index = 0; index < length; index++){
    // console.log(arr[index]);
// }

// for-in()
// let obj = {
//     name: "akash",
//     // "full name": "Akash",
//     age: 15,
//     waight: 50,
//     height: "6ft",
//     greet: function(){
//         console.log(`heloo my name is ${obj.name} and age is${obj.age}`);
//         console.log("hii my name is Akash");
        
//     }
// };

// for (const key in obj) {
//     console.log(key, obj[key]);
// }

// ----------------Array Discouraged------------------
// const colors = ["red", "green", "blue"];
// for (let index in colors) {
//   console.log(index, colors[index]); // index is string
// }


// ---------------for-of---------------

// Array Example
// let arr = [10, 20, 30, 40, 50];
// for(let value of arr) {
//     console.log(value);
// };

// String Example
// let values = ("akash", "raj", "akas");
// for(let value of values) {
//     console.log(value);
// };

// const fruits = ["apple", "banana", "cherry"];

// for (const fruit of fruits) {
//   console.log(fruit); // outputs: apple, banana, cherry
// }


// ARRAY WITH FUNCTION (behave / pass)
// let arr = [10, 20, 30];

// function getSum(arr) {
//     let len = arr.length;
//     let sum = 0;
//     for(let index=0; index<len; index++){
//         sum = sum + arr[index];
//     }
//     return sum;
// }

// let totalsum = getSum(arr);
// console.log(totalsum);



// console.log(marks);
// console.log("ak");
// console.log("akash");

// console.log(res);


// let res = 3;
// console.log(res);

// ------------------------CLONING OBJECT--------------------------
// let object1 = {
//     name: 'akash', 
//     age: 20, 
//     ht: 180, 
//     city: 'Delhi'
// };

// let newObj = {
//     country: 'india',
//     state: 'odisha'
// };

// let combine = Object.assign({}, object1, newObj);
// console.log(combine);




// let object1 = {name: 'akash', age: 20, ht: 180, city: 'Delhi'};
// let object2 = {};

// for(let key in object1){
//     // let newKey = key;
//     // let value = object1[key];
//     // object2[newKey] = value;

//     // another way
//     if(object1.hasOwnProperty(key)){
//         object2[key] = object1[key];
//     }
// };

// object2.color = 'red';

// console.log(object1);
// console.log(object2);


