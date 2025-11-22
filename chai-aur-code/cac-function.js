-
//     console.log("h");
// }
// hiteshName()

// hiteshName    ==> this is called functions reference .
// hiteshName()  ==> this is called functions execution .


// function addTwoNumbers(number1, number2) { //<== when we creat functions defination, whatever value we store inside it we call them as parameters.
    // console.log(number1 + number2);
// }
// addTwoNumbers(3, 4)  // when we call functions,whatever value we pass inside that time we call them as Arguements.0



// function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result = number1 + number2 // Another Way
    // return number1 + number2
// }
// const result = addTwoNumbers(3, 4)
// console.log("Result :", result);



function loginUserMessage(username) {
    if (username === undefined) { 
        console.log("please enter a name");
        return
    }
    return `${username} just logged in`
}                                           // This how parameters taken .
// console.log(loginUserMessage("Akash"));



// function loginUserMessage(username = "Akash") {
//     if (!username) {                        // suppose in this type of situation , and we want to avoid or user did not pass anything to it ,
//         console.log("please enter a name"); // we have to give defult values. 
//         return                  // To give default values =>(in functions defination we have to give "function loginUserMessage(username ="Akash"))
//     }
//     return `${username} just logged in`
// }                                           // This how parameters taken .
// console.log(loginUserMessage());// when you give name in here(function execute "loginUserMessage("")" it will automatically overide)


function calculateCartPrise(num1){      // how to combine all values together ? ==>  By using "..."(rest operater)
    return num1                         // "..." => this is (rest operator) and also (spred operator), it used depending on the situation . 
}
// console.log(calculateCartPrise(200, 400, 500));


// --------------how To pass Object in Function ?---------------------
const user = {
    username: "Akash",
    price: 199,
}

function handelObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handelObject(user)
// handelObject({
//     username: "Akash",
//     price: 200
// })

// -----------------------------How To pass Objects in Array---------------------
// const arr = new Array(200, 300 ,400);

// function returnSecondValue(getArray){
//     return getArray[2]
// }
// console.log(returnSecondValue(arr));
