// var c = 300;


// const { useInsertionEffect } = require("react");

// if (true) {
//     let a  = 1
//     const b = 2
//     var c = 3 
//     console.log(a, b);

// };


// Nested scope
// function one(name) {
//     const username = "hitesh";

//     function two() {
//         const website = "youTube";
        // console.log(username);
        // console.log(website);
        
    // }
    // console.log(website); // we can not access the website outside form function two .

    // two()    
// }
// one()


// if(true) {
//     const username = "hitesh";
//     if(username === "hitesh"){
//         const website = "YouTUbe";
//         // console.log(username + website); // print => hitseh YouTube.
//     }
    // console.log(website); // error (out side block)
// }
// console.log(username); // error (out side block)


//----------------------Instresting--------------------

//Normal Function
// addOne();  //Error
// function addOne(num) {  // we can not call or print the function before write.
//     return num + 1;
// }
// addOne(); // Access(call or Print)


//Expression Function

// addTwo(5)       // We Can call or Print Before the Expression function Write
// const addTwo = function (num){
//     return num + 2;
// }
// addTwo(); // Access(We can Call or print)


//----------------Arrow Function----------------

const user = {
    username: "hitesh",
    price: 999,
    
    welcomeMessage: function() {
        console.log(`${this.username}, Welcome To website`); //To refer Current Context(username, price) we have to sue this keyWord.
        console.log(this);
        
    }
}
// user.welcomeMessage();
// user.username ="sam";
// user.welcomeMessage();

// console.log(this); //output => {} (empty object).


// function chai() {
//     let username = "hitesh";
//     console.log(this);
// };
// chai();

// const chai1 = function () {
//     let username = "hitesh";
//     console.log(this);
// };
// chai1();

// const chai = () => {
//     let username = "hitesh";
//     console.log(this);
// }
// chai();

// -------------Arrow Function-------------
// syntax=  () => {}

    // const addTwo = (num1, num2) =>{
    //     return num1 + num2;
    // }
    // console.log(addTwo(2, 4));
    
    // IMPLISITY RETURN IN ARROW FUNCTION
    
    // const addOne = (num1, num2) => num1 + num2;
    // const addOne = (num1, num2) => (num1 + num2);

    //Explicitly means we have to write "return" function.

    //how to add object inside the arrow function ?
    // const addOne = (num1, num2) => {username: "hitesh"}; // we can not return object like this .
    // const addOne = (num1, num2) => ({username: "hitesh"}); //we have to wrap in parenthises, write like this
    // console.log(addOne());
    
    