function x() {
  for (var i = 1; i <= 5; i++) {
    // setTimeout(function () {
    //   console.log(i);
    // }, i * 3000);
  }
//   console.log("Hello World");
}
x();
{
  function x() {
    for (var i = 1; i <= 5; i++) {
      function close(i) {
        setTimeout(function () {
          // console.log(i);
        }, i * 1000);
      }
      close(i);
    }
    // console.log("Hello World");
  };
  x();
  
}

{
  let name = {
    firstName: "Hello",
    lastName: "World",
    printFullName: function (){
      console.log(this.firstName + " " + this.lastName);
    }
  };
  name.printFullName(); 


  let name2 = {
    firstName: "Virat",
    lastName: "Kohli",
  }
  name.printFullName.call(name2)

}



function debounce(fun, delay) {
  let timeOutId;
  return function (...args) {
    clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      fun.apply(this, args);
    }, delay)
  };
}
// const log = debounce(() => console.log("Called"), 1000);
// log();

