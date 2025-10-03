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
      console.log(this.firstName + " " + this.lastName);
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
      console.log(`Hello My Name Is ${this.name}`);
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
  console.log("Hello World");
}
// sayHello()
}
{
  // Function Expression
  // Function Expression
const greet = function(name) {
  return "Hello " + name;
};

console.log(greet("Akash"));  // Hello Akash
}
{
  // Named Function Expression
  const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1); // recursive call using its own name
};

console.log(factorial(5)); // 120
// console.log(fact(5));
}
{
  let str = "hello";
  let upper = str.toUpperCase();
  console.log(upper);
  console.log(str);
  
}