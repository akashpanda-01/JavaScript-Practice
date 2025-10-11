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
  console.log(arr1);
  

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
  console.log(arr2);
  
}