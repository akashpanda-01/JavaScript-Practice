console.log(Math.PI);
Math.PI = 40893;
console.log(Math.PI);

const pi = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(pi);


const chai = {
    name: "Ginger Chai",
    price: 250,
    isAvailabel: true,

    orderChai: function () {
        console.log("Chai")
    }
}

let Check = Object.getOwnPropertyDescriptor(chai, "name");
console.log(Check);

let change = Object.defineProperty(chai, "name", {
    // writable: false,
    enumerable: true
});
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Not iterabel : Because Object are iterabel depends on diffrent situations
// But here if we want to access then we hav eto do Object.entries() inside the loop
for (let [key, value] of Object.entries(chai)){
    if(typeof value !== "function"){
        console.log(key, value);
    }
};