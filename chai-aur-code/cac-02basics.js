// -------------Array------------

// const myArr = [0, 1, 2, 3, 4, 5];
// const myHero = ["krishna", "Krishna"];

// const myArr2 = new Array(1, 2, 4, 5, 7,);
// console.log(typeof myArr2);
// console.log(myArr2[0]);

// -----------Array Methods----------

// myArr.push(6); //adds values in a array 
// myArr.push(7); // it simpely add values
// myArr.pop();   // it will remove the last value in the array.

// myArr.unshift(9); //it will Add value first palce inside array.
// myArr.shift()  // it will remove the first value inside array.

// console.log(myArr.includes(9)); // output will be false, because 9 doesn't exist in myArr.
// console.log(myArr.indexOf(30)); //output will be -1 , because 30 number value not exist insied myArr.

// const newArr = myArr.join();  //Adds all the elements of an array into a string, separated by the specified separator string.

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


//---------Slice, Splice------------

// console.log("A ", myArr);
// const myn1= myArr.slice(1, 3);
// console.log(myn1);
//                                 // in Slice the end index was not included, and it returns copy of a secton of an array.
//                                 // difference is Splice print the Original value from the Variable.
// console.log("B", myArr);        
// const myn2 = myArr.splice(1, 3)
// console.log(myn2);

// console.log("C", myArr);


const marvelHeros = ["thor", "ironman", "spaiderman"];
const dcHeros = ["batman", "flash", "superman"];

// marvelHeros.push(dcHeros);

// console.log(marvelHeros);

// const allHeros = marvelHeros.concat(dcHeros); // it combines two arrays and return value in one array.
// console.log(allHeros);

// const allHeros = [...marvelHeros, ...dcHeros]   // this is called Sprade out Values(...), it will gives all values in indivisually
// console.log(allHeros);

// const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// const Arr = anotherArr.flat(Infinity);                     //in arrays inside array flat converts in single array.
// console.log(Arr);

// console.log(Array.isArray("hitesh"));
// console.log(Array.from("Hitesh"));      //it will convert whatever value you give into Array (objects, strings)
// console.log(Array.from({name: "hitesh"}));  // Output = empty array[], it will not convert {name: "hitesh"} directly.
                                            //we have to specificly said to be which we have to convert into array (keys, or Values).
                                            //intresting

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3)); // Output = [100, 200, 300], Returns a new Array from A set of elements.


// -------------Objects-----------

// Objects can Declared in 2 ways, One is Literall type And another is constructor Type.
//  When We declared literals type then singleton not happens, If declared constructor type then always Singleton Happens.
// Object.create() // ==> This Is Constructor Type

//Object Leterals (Objects Declared method)

// const mySym = Symbol("key1")
// const user = {
//     name: "hitesh",
//     age: 18,
//     "full name": "hitesh choudhry",
//     [mySym]: "key1",
//     loction: "jaipur",
//     email: "hitesh@gmail.com",
//     isLoggedIn: false,
//     lastLoggedInDays: ["Monday", "saturday"]
// }

// console.log(user.email);// When we use DOT(.) then no need of ("")
// console.log(user["email"]);  // another Way to access object

// console.log(user["full name"]);

// console.log(typeof user[mySym]);

// user.email = "hitesh@chatgpt.com";
// Object.freeze(user);
// user.email = "hitesh@microsoft.com";
// console.log(user.email);


// user.greeting = function () {
//     console.log("hello js user");
    
// }

// user.greetingTwo = function () {
//     console.log(`hello jsuser, ${this.name}`); // Whenever you reference same object we can write {this.}
    
// }
// user.greeting();    //OUTPUT => hello js user
// user.greetingTwo(); //OUTPUT => hello js user

// console.log(user.greeting());      
// OUTPUT => hello js user, undefined |// Why returns undefined ?
                                    //|// we call user.greeting() and user.greetingTwo() which are both functions that log messages inside them using
// console.log(user.greetingTwo());   | // console.log() . But do not return anything. In javascript, if a function doesn't explicitly return a value,
// OUTPUT => hello js user , undefined|// It Returns undefined By defult


// ---------------------------Object-2----------------------------

// const tinderUser = new Object();
// console.log(tinderUser);

const tinderUser= {}
tinderUser.id = "123abc" ;
tinderUser.name = "Sammy" ;
tinderUser.isLoggedIn = false ;

// console.log(tinderUser);

const regularUesr = {
    fullname: {
        userfullname: {
            firstname : "hitesh",
            lastname : "choudhary",
        }
    }
}
// console.log(regularUesr.fullname.userfullname);

const Obj1 = {1: "a"};
const Obj2 = {2: "b"}

// const Obj3 = {Obj1, Obj2};

// const Obj3 = Object.assign({}, Obj1, Obj2);

// const Obj3
//  = {...Obj1, ...Obj2}
// console.log(Obj3);

// ------------------- OBJECT-3---------------------

const course = {
    name : "js in hindi",
    price : "999",
    courseInstructor: "hitesh",
}
course.courseInstructor

// const {courseInstructor: instructor} = course     // This is called Object de-Structuring
// console.log(courseInstructor);
// console.log(instructor);

// const navbar = (props.company) => {
                                        // in react by default there was a (props) EX = (props.company).
// };                                   //there we not use this props.company again and again we use this de-structuring method
// const navbar = ({company}) => {      // Like const navbar ({company}) => {}

// }
// navbar(comapany = "hitesh");


// {
//         this is called JSON .
// } 


// [
//  {},
//  {},     this is also called JSON.
//  {},
// ]

