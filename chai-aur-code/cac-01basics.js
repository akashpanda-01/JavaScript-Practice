//(Differense - Primitive, Non-primitive) All datas how all they stored in memory, And how they can accessed 


//primitive
// (call by value-> Means- whenever we copy these values the orignal data reference not given to us. data come to us as copied)

// (7 category)
// 1 - string 
// 2 - Number
// 3 - Boolean
// 4 - null => (Empty)
// 5 - Undefined
// 6 - Symbol (Make Value Uniqe)
// 7 - bigInt (Some scintific value / big values that can not handeled these are we used in bigInt )


// const string = "";
// const score = 20 ;
// const scoreValue = 100.3;
// const isLoggedIn = false;
// const outsideTemp = null;
// let uesrEmail;

// const bigNumber = 12345687898657n
// console.log(typeof(bigNumber));


// const id = Symbol('123');
// const anotherId = Symbol('123');
// console.log();

// FAQ - Is JavaScript Dynamic type Language or Sataticly type Language ?
// ANS -  

// Non-Primitive (call by Reference)
// (Reference type- Means - all these values such that their reference can be directky allocated to us in meomory)

// Array = arrays are defined inside []-Squarebreas
// const god = ["Krishna", "Krishna", "Krishna"]

// Objects = Inside {} curlybreas Object Defined
// let my = {
//     name: "gitesh",
//     age: 24,
// }

// Functions = functions declared ni various ways 
//(variable Way)
// const myFunction = function () {
    
//     console.log("akah");
// }
// https://262.ecma-international.org/5.1/#sec-11.4.3



//--------------------MEMORY----------------------------

// 1 - Stack Memory (Primitive types Are used in stack Memory)
// 2 - Heap Memory (Non primitive / Reference Types Are Used in Heap Memory)

// Ex => Stack Memory
// let myYtname = "Akash";
// anotherName = "AK";

// console.log(myYtname);
// console.log(anotherName);

// // EX => Heap Memory 
// let user1 = {
//     email : "user@gmail.com",
//     upi : "user@ybl",
// }
// let user2 = user1;
// user2.email = "hitesh@googlw.com";

// console.log(user1.email);
// console.log(user2.email);


//----------------String------------------
// const a1 = "user1 ";
// const a2 = 20  ;
// console.log(a1 +  a2 +  30);
// console.log(`my name is ${a1}. And My total Repositry no ${a2}`); // this is called String Interpoletion


// const gameName = new ('hitesh-uc'); // Used Object inside it (new) 
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.toUpperCase().charAt(2).indexOf(`K`));
// console.log(gameName.indexOf(`h`));

//  let newString = gameName.substring(0, 4); // (SubString not allow -minus .)
//  console.log(newString);    //>>>>> Output => hite
 

//  const anotherString = gameName.slice(-8, 4);
//  console.log(anotherString);  //  ()>>>>>>.output => ite) the no 4 position was exclude from right side

// const anumber ="Hello, akash JavaScript!";       /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
// console.log(anumber.slice(-11, -1));

// const bnumber = [1, 2, 3, 4, 5, 6, 7];
// console.log(bnumber.slice(-6, 2));
// console.log(typeof bnumber);


// const bnumber = anumber.slice(-10, -1)
// console.log(bnumber);
// console.log(typeof bnumber);

//  javaSceipt Arrays are heterogeneous, meaning they can store different types of data in the same array 
//like => number, string, booleans, objects, arrays(Nested Arrays), functions;
// const mixedArray = [1, 'Hello', true, {name: 'jhon'}, [1, 2, 3]];
// console.log(mixedArray);



// const newStringOne = "    hitesh.     ";// these type of strings commonlly comes form inputform on website when user knowinly unknowingly add extra
                                        // characters and spaces.
// console.log(newStringOne);
// console.log(newStringOne.trim()); //  ()>>> Output => hitesh.)
                                        

// const url = "https://hitesh.com/hitesh%20choudhry"; // Browser Can not understans spaces. if we give hitesh choudhey it will convert space into %20 .

// // if we want to replace hitesh url 
// console.log(url.replace('%20', '-'));

// console.log(url.includes('sumder'));

// const gameName = new ('hitesh-uc');
// console.log(gameName.split('t'));  >>>>> output => 'hitesh', 'hc',


// -------------------Number and Maths---------------------
// const score = 499;
// console.log(score);

// const balance = new Number(300);
// console.log(balance.toString().length);
// console.log(typeof(balance.toString()));
// console.log(balance.toFixed(2)); //toFixed() used for precision value ex=> 100.00

// const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(4));

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));

//Math
// console.log(Math);

// console.log(Math.abs(+5)); // convert minus value into plus
// console.log(Math.round(4.5)); // output => 4 , if the numbers value after decimal avobe 5 (4.6) then output => 5
//                              // if the the number value after decimal below to 5 (4.4) then output => 4

// console.log(Math.ceil(4.1)); // if decimal value anything 1 to 9 the ceiling(ceil) give value always avobe. (4.1) output => 5

// console.log(Math.floor(4.9)); // Output => 4,  Whatever value in decimal after number (4.9), it will give always the number (output => 4)

// console.log(Math.min(1, 2, 23, 54)); // chooses the small number.
// console.log(Math.max(1, 23, 44, 54)); // chooses the big number .


// console.log(Math.random());
// console.log(Math.random() * 10);
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

// const min = 10;
// const max = 20 ;

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);


//----------------DATES-----------------

// let myDate = new Date();
// console.log(myDate.toString()); // >>>> Output => Sat Mar 29 2025 18:48:51 GMT+0530 (India Standard Time)
// console.log(myDate.toJSON());// >>>> Output => 2025-03-29T13:18:51.715Z
// console.log(myDate.toLocaleDateString());// >>> Output => 3/29/2025
// console.log(myDate.toDateString());// >>>> Output => Sat Mar 29 2025
// console.log(myDate.toLocaleString());// >>>> Output => 3/29/2025, 6:48:51 PM
// console.log(myDate.toLocaleTimeString());// >>>> Output => 6:58:41 PM
// console.log(myDate.toTimeString());// >>>> Output => 18:58:41 GMT+0530 (India Standard Time)
// console.log(myDate.toUTCString());// >>>> Output => Sat, 29 Mar 2025 13:28:41 GMT
// console.log(myDate.getTimezoneOffset());// >>>> Output => -330

// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

// console.log(myDate.toDateString());


// let anotherDate =new Date(2023, 1, 23, 5, 3, 23);
// console.log(anotherDate.toLocaleString());

// let dateNo1 = new Date("2023-01-14");    // Method - (YY-MM-DD)
// console.log(dateNo1.toLocaleString());

let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());  // Method - (MM-DD-YY)


let myTimeStamp = Date.now();
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
// console.log(newDate.getMonth());
// console.log(newDate.getDate());
// console.log(newDate.getDay());

// console.log(newDate.toLocaleString('default', {
//     weekday: "long",
// }));


