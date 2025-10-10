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
    console.log(i);
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
    console.log(key, val);
  });
  for(let [key, val] of Object.entries(person)){
    console.log(key, val);
  };

  const personMap = new Map(Object.entries(person));
  for(let [key, val] of personMap){
    console.log(key, val);
  };
}