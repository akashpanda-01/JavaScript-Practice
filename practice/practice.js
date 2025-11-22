// let str = "Geeks" ;
// let length = str.length;
// console.log(length);

// let str = "Hello World" ;
// let reverse = str.split('').reverse().join('');
// console.log(reverse);


// let value = 'madam';
// function isPlaindrome() {
//     let strValue = value.toString().split('').reverse().join('');
//     let numValue = value.toString();

//     if(strValue === numValue) {
//         console.log('Palindrome');
//     } else {
//         console.log('Not a palindrome');
//     };
// };
// isPlaindrome();

// function isPlindrome(str){
//     let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
//     let reverseStr = cleanedStr.split('').reverse().join('');
//     return cleanedStr === reverseStr;

    // if(cleanedStr === reverseStr) {
    //     console.log('Palindrome');
    // } else {
    //     console.log('Not a palindrome');
    // };
// };
// isPlindrome("madam")


// function strLength(str) {
//     return str.toString().length;
//     // console.log(str.length);
// };
// // strLength('akash');
// console.log(strLength(121));

// const d = new Date();
// console.log(d.getFullYear());

// let firstName = 'akash';
// let lastName = 'panda';

// console.log(firstName.concat(" ", lastName));


// console.log((45 * 2) - 10);

// const year = new Date();
// let curYear = year.getFullYear();
// console.log(curYear);

// let val = "Hello";
// console.log(val);
// val = "Hello World";
// console.log(val);

// let msg = 'Its A Error !';
// console.error(msg);

// let sqr = 12 * 12 ;
// console.log(sqr);

// let fName = "The World";
// let age = 20;
// console.log(typeof (fName), typeof (age));

// console.log(100 / 0);

// ===================================== LOOP QUESTIONS =====================

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// };

// for(let i = 1; i <= 20; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     };
// };

// for(let i = 1; i <= 10; i++){
//     console.log("5",i, 5 * i);
// };

// let sum = 0;
// for(let i = 1; i <= 100; i++){
//     sum += i;
    // console.log(sum);
// };

// let i = 1;
// while (i <= 100){
//     sum += i ;
    // console.log(sum);
//     i++
// };

// let sum = 0;
// let i = 1;
// do {
//     sum += i
//     debugger;
//     i++
// } while (i <= 100);
// console.log(sum);

// let n = 100;
// let sum1 = (n * (n + 1)) / 2 ;
// console.log(sum1);

// function getVowels(str){
//     let vowels = "aeiouAEIOU";
//     let found = [];
//     for(let char of str){
//         if(vowels.includes(char)){
//             found.push(char);
//         }
//     }
//     console.log(found);
// }
// getVowels("Hello World");

// let vowels = 'aeiouAEIOU';
// let count = 0 ;
// let value = [];
// function getVowels(str){
//     for(let char of str) {
//         if(vowels.includes(char)){
//             value.push(char)
//         };
//         char.length
//         count++
//     }
//     return count;
// }
// console.log(count, value);

// getVowels("Hello World");

// for(let i = 1; i <= 15; i = i + 2){
//     console.log(i);   
// };

// for(let i = 15; i >= 1; i = i - 2){
//     console.log(i);
// };

// let n = 5;
// for(let i = 1; i <= n; i++){
//     let row = "";
    
//     for(let j = 1; j <= i; j++){
//         row += "* ";
//     };
    // console.log(row);
// }

// for(let i = 1; i <= 10; i++){
//     i += 1;
//     console.log(i);
// };

// let n = 1;
// for(let i = 5; i >= 1; i--){
//     let row = "";
//     for(let j = 1; j <= i; j++) {
//         row += "* "; 
//     };
//     console.log(row);
// }