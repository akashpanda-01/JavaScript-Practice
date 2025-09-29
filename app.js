function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
    //   console.log(i);
    }, i * 3000);
  }
//   console.log("Hello World");
}
x();
{
  function x() {
    for (var i = 1; i <= 5; i++) {
      function close(i) {
        setTimeout(function () {
          console.log(i);
        }, i * 1000);
      }
      close(i);
    }
    console.log("Hello World");
  };
  x();
  
}
