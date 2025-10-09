{
  // Find Factorial of a given number 5.
  let num = 1;
  for (let i = 1; i <= 5; i++) {
    num = num * i;
  }
  // console.log(num);
}
{
  //Reverse a given number 123.
  let n = 123;
  let reverse = 0;
  for (let temp = n; temp > 0; temp = Math.floor(temp / 10)) {
    reverse = reverse * 10 + (temp % 10);
  }
  // console.log(reverse);
}
{
  function checkArmstrong(enterNum) {
    // let enterNum = prompt("Enter Number");
    let sum = 0;
    let digit = enterNum.toString().length;
    let temp = +enterNum;
    while (temp > 0) {
      let remainder = temp % 10;
      sum += remainder ** digit;
      temp = Math.floor(temp / 10);
    }
    // console.log(sum);
  };
  // checkArmstrong(135);
}

{
  // let lastNum = parseInt(prompt("Enter Last Number"));
  // let highNum = parseInt(prompt("Enter High Number"));

  // for (let i = lastNum; i <= highNum; i++) {
  //   let temp = i;
  //   let numOfDigit = i.toString().split("");
  //   let sum = 0;

  //   while (temp > 0) {
  //     let remainder = temp % 10;
  //     sum += remainder ** numOfDigit;
  //     temp = parseInt(temp / 10);
  //   }
  // }
  // console.log(sum);
}
{
  const arr = [5, 1, 3, 7, 2, 4];
  const output = arr.reduce(function (acc, crr){
    // console.log(acc);
    // console.log(crr);
    return acc + crr;
  },10);
  // console.log(output);
}

{
  const arr = [5, 1, 3, 2, 4];
  let max = arr.reduce((acc , crr) => {
    acc = crr > acc ? crr : acc;
    return acc;
  })
  // console.log(max);
}
{
  let user = [
    {fullName: "Krishna", lastName: "Lord", age: 26},
    {fullName: "Akash", lastName: "Panda", age: 26},
    {fullName: "Donald", lastName: "Trump", age: 56},
    {fullName: "Elon", lastName: "Musk", age: 76},
  ];

  const output3 = user.reduce((acc, crr) => {
    if(crr.age <= 30) {
      acc.push(crr.fullName);
    };
    return acc;
  }, []);
  console.log(output3);
  

  const output2 = user.filter(function (ele){
    if(ele.age <= 30){
      return ele;
    };
  }).map((x) => {
    return x.fullName;
  })
  // console.log(output2);
  

  const output1 = user.reduce((acc, crr) => {
    if(acc[crr.age]){
      acc[crr.age].push(crr.fullName);
    } else {
      acc[crr.age] = [crr.fullName];
    };
    return acc;
  }, {});
  // console.log(output1);
  

  // let output = user.reduce((acc, crr) => {
  //   if(acc[crr.age]){
  //     acc[crr.age] = ++acc[crr.age];
  //   } else {
  //     acc[crr.age] = 1;
  //   };
  //   return acc;
  // }, {});
  // console.log(output);
  
}