debugger;
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log("HEllo My Name " + this.name + " And My Age " + this.age);
};

const p1 = new Person("Akash", 23);
p1.greet();