function x() {
  for (var i = 1; i <= 5; i++) {
    // setTimeout(function () {
    //   console.log(i);
    // }, i * 3000);
  }
//   console.log("Hello World");
}
x();
{
  function x() {
    for (var i = 1; i <= 5; i++) {
      function close(i) {
        setTimeout(function () {
          // console.log(i);
        }, i * 1000);
      }
      close(i);
    }
    // console.log("Hello World");
  };
  x();
  
}

{
  let name = {
    firstName: "Hello",
    lastName: "World",
    printFullName: function (){
      // console.log(this.firstName + " " + this.lastName);
    }
  };
  name.printFullName(); 


  let name2 = {
    firstName: "Virat",
    lastName: "Kohli",
  }
  name.printFullName.call(name2)

}



// function debounce(fun, delay) {
//   let timeOutId;
//   return function (...args) {
//     clearTimeout(timeOutId);
//     timeOutId = setTimeout(() => {
//       fun.apply(this, args);
//     }, delay)
//   };
// }
// const log = debounce(() => console.log("Called"), 1000);
// log();

{
  class Person {
    constructor(name, age){
      this.name = name;
      this.age = age;
    };

    greet(){
      // console.log(`Hello My Name Is ${this.name}`);
    };
  };
  const person1 = new Person("Akash", 23);
  const person2 = new Person("Virat", 37);

  person1.greet();
  person2.greet();
}
{
  // Function Statement
  function sayHello() {
  // console.log("Hello World");
}
// sayHello()
}
{
  // Function Expression
  // Function Expression
const greet = function(name) {
  return "Hello " + name;
};

// console.log(greet("Akash"));  // Hello Akash
}
{
  // Named Function Expression
  const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1); // recursive call using its own name
};

// console.log(factorial(5)); // 120
// console.log(fact(5));
}
{
  // String Creates New string While Using a method
  let str = "hello";
  let upper = str.toUpperCase();
  // console.log(upper);
  // console.log(str);
}
{
  // Method With Argument
  let str = "Hellow World";
  // console.log(str.indexOf("l"));
}
{
  // Method Chaining
  // Using One Method after another. Order Of Execution will be left to right.
  let msg = "Hello world           ";
  // console.log(msg.toUpperCase().trim());
}
{
  let str = "    hello      ";
  let newEdit  = str.trim();
  // console.log(newEdit);
  let newMsg = newEdit.toUpperCase();
  // console.log(newMsg);
}
{
  // Slice() Method
  // Return a part of the original string as a new string
  let str = "Hello World";
  // let cut = str.slice(6, 11);
  let cut = str.slice(-3)
  // console.log(cut); 
}
{
  // Replace Method (replace())
  // search a value in string and return a new srting with the value repalced
  let str = "i Love Coding";
  let replace = str.replace("Love", "do");
  // console.log(replace);
}
{
  // Repeat method()
  // Return a string the Number of copies of a string
  let str = "Hello";
  let newStr = str.repeat(3);
  // console.log(newStr);
}

{
  // QN => For the given string trim it and convert to uppercase
  let msg = "hello";
  let edit = msg.trim().toUpperCase();
  // console.log(edit);
}
// Array
{
  // splice(start, delete, add)
  let color = ["red", "yellow", "blue", "green", "orange", "white"];
  // console.log(color.splice(2));
  // console.log(color.splice(0, 1, 0));
  // console.log(color.splice(0 , 1, "black", "gray"));
  // console.log(color);
}

{
  function attachEvent(){
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", function xyz(){
      // console.log("Button Clicked", count++);
    });
  };
  attachEvent();
}
{
  // // Find Arm Strong Number
  // function findArmstrong(num){
  //   let sum = 0;
  //   let temp = num;
  //   let toStr = num.toString(); 
  //   while(true){
  //     if()
  //   }
  // }
}