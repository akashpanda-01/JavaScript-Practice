{
  let myObj = new Map();

  myObj.set("name", "RadheKrishna");
  myObj.set(true, "Yes");
  myObj.set(1, "One");

  // console.log(...myObj);

  for (let [i, val] of myObj) {
    // console.log(i, val);
  }
  for (let i in myObj) {
    // console.log(i);
  }
}
{
  const person = {
    name: "Radhe",
    age: 21,
    city: "Vrindavan",
  };

  Object.keys(person).forEach((key) => {
    // console.log(key);
  });


  Object.values(person).forEach((val) => {
    // console.log(val);
  });
  for(let val of Object.values(person)){
    // console.log(val);
  };


  Object.entries(person).forEach((key, val) => {
    // console.log(key, val);
  });
  for(let [key, val] of Object.entries(person)){
    // console.log(key, val);
  };

  const personMap = new Map(Object.entries(person));
  for(let [key, val] of personMap){
    // console.log(key, val);
  };
}
{

  // ================== SORTING ALGORIHAM ======================
  // BUBBLE SORT
  // ASSENDING ORDER
  let arr1 = [4, 1, 5, 2, 3];
  let n = arr1.length;
  for(let i = 0; i < n; i++){
    for(let j = i + 1; j < n; j++){
      let temp = arr1[i];
      if(arr1[i] > arr1[j]){
        arr1[i] = arr1[j];
        arr1[j] = temp;
      };
    };
  };
  // console.log(arr1);
  

  // DECENDING ORDER
  let arr2 = [4, 1, 5, 2, 3];
  let n2 = arr2.length;
  for(let i = 0; i < n2; i++){
    for(let j = i + 1; j <= n2; j++){
      let temp = arr2[i];
      if(arr2[i] < arr2[j]){
        arr2[i] = arr2[j];
        arr2[j] = temp;
      };
    };
  };
  // console.log(arr2);
}



// ====================== OBJECT ========================
{
function createUser(name, score){
  this.name = name;
  this.score = score;
};

createUser.prototype.increment = function (){
  this.score++
}

createUser.prototype.printMe = function () {
  // console.log(`Price is ${this.score}`);
};

let chai = new createUser("chai", 20);
chai.printMe()
}

{
  let user = {name : "Akash"};
  // console.log(user.hasOwnProperty("name"));
  // console.log("name" in user); 
}

{
  let obj = {a: "1", b: "2", c: "3"};
  for(let key in obj){
    // console.log(key, obj[key]);
  };
  // console.log(Object.keys(obj));
  // console.log(Object.values(obj));
  // console.log(Object.entries(obj));
}

{
  // Shallow Copy
  let obj = {name : "akash"};
  let copy1 = Object.assign({}, obj);
  let copy2 = {...obj};
  // Deep Copy
  let deepCopy = JSON.parse(JSON.stringify(obj));

  // console.log(copy1);
  // console.log(copy2);
  // console.log(deepCopy);
  
}
  class Parent {
    constructor(name, identy) {
      this.name = name;
      this.identy = identy;
    };
  };

  class Child extends Parent{
    constructor(name, identy){
      // console.log(name, identy);
      super(name, identy);
    };
  };

  let obj = new Child("RadheKrishna", "Bhagawan");

  {
    // QN:=> You are creating a website for your college.
    // Create a class User with 2 propeerties, name & email. it has a method called viewData() that
    // allows user to view website data.

    // Create a new class called admin which inherit from user . Add a new method called editData
    // to Admin that allow it to edit website data.

    let DATA = "Secret Information";
    class User {
      constructor(name, email){
        this.name = name;
        this.email = email;
        
      }

      viewData() {
        // console.log("Data = ", DATA)
      }
    };

    class Admin extends User{
      constructor(name, email){
        super(name, email);
      }

      editData(){
        // DATA = "Some New Values";
      }
    }

    // Admin.__proto__ = User;

    let student1 = new User("Akash", "akash@yahoo.com");
    let student2 = new User("Raj", "raj@gamil.com");
    let admin  = new Admin("admin", "admin@google.com");
    student1.viewData();
    student2.viewData();
    admin.editData();
    // console.log(DATA);
  }