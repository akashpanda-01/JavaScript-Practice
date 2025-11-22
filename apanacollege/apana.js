// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }
    
    
// Callback Hell (Pyramid of Doom)
// getData(1, () => {
//     console.log("getting Data 2......");
//     getData(2, () => {
//         console.log("getting Data 3.......");
//         getData(3, () => {
//             console.log("getting Data 4......");
//             getData(4)
//         })
//     })
// });
    
    
//PROMISES
// let promise = new Promise((resolve, reject) => {
//     console.log("hey Akash");
//     // resolve(1213);
//     reject("Some Error Occured");
// })
    
// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data", dataId);
//             resolve("success");
//             if(getNextData) {
//             getNextData();
//             }
//          }, 5000);
//     });
// }
// getData(1, () => {
//     console.log("getting Data 2......");
//     getData(2, () => {
//         console.log("getting Data 3.......");
//         getData(3, () => {
//             console.log("getting Data 4......");
//             getData(4)
//         })
//     })
// });
    
    
// function sum (a, b) {
//     console.log(a+b);   
// }
    
// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// }
    
// calculator(1, 2, sum);
    
// HOW TO USE PROMISE ?
// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("hey Akash");
//         // resolve("success");
//         reject("Network Error");
//     })
// };
    
    
// PROMISE CHAINING
// function asyncFunction1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 4000);
//     })
// }
    
// function asyncFunction2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 4000);
//     })
// }
    
// console.log("fatching Data1");
// let p1 = asyncFunction1();
// p1.then((res) => {
//     console.log(res);
//     console.log("fatching Data 2");
//     let p2 = asyncFunction2();
//     p2.then((res) => {
//         console.log(res);        
//     })    
// })
    
//SIMPLIFY PROMISE CHAINING
// console.log("Fetching Data 1 .....");
// asyncFunction1().then((res) => {
//     console.log("Fetching Data 2.....");
//     asyncFunction2().then((res) => {});
// });
    
    
// .then and .Catch

// let promise = getPromise();
// promise.then((res) => {
//     console.log("Promise Fulfilled", res);  
// });
    
// promise.catch((err) => {
//     console.log("rejected", err);
          
//   });
    
    
    
// CALLBACK HELL WIEH PROMISE CHAINING 
// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data", dataId);
//             resolve("success");
//         }, 5000);
//     });
// }
    
// ACTUAL WAY PROMISE CHAINING
// getData(1)
// .then((res) => {
//     return getData(2);
// })
// .then((res) => {
//     return getData(3);
// })
// .then((res) => {
//     console.log(res);
// })
    
    
// CALLBACK HELL WIEH PROMISE CHAINING 
// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data", dataId);
//             resolve("success");
//             if(getNextData) {
//                 getNextData();
//             }
//         }, 5000);
//     });
// }
    
// console.log("getting data 1....");
// getData(1).then((res) => {
//     console.log(`${res}\ngetting Data 2.......`);
//     getData(2).then((res) =>{
//         console.log(res);
//     })  
// })
    
    
 // ASYNC-AWAIT
// async function hello () {
//     console.log("hello");
// }

// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data..");
//             resolve(200);
//         }, 2000);
//     });
// };

// async function getWeatherData(){
//     await api();
//     await api();
// }


// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             console.log("Data", dataId);
//             resolve("success");
//         }, 2000);
//     });
// };

// async function getAllData() {
//     await getData(1);
//     await getData(2);
//     await getData(3);
// };


//IIFE (IMMEDIATE INVOKED FUNCTION EXPRESION)
// (async function() {
//     await getData(1);
//     await getData(2);
//     await getData(3);
// })();

// (function () {
//   getData(1);
//   getData(2);
//   getData(3);
// })();

// (() => {
//     getData(2);
//     getData(1);
//     getData(3);
// })() ;