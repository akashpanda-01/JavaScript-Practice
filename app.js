// FUNCTION CALL BACK HELL

// function one(){
//     return 1;
//   };
//   function two(){
//     return one() + one();
//   };
//   function three(){
//     let ans = two() + one();
//     console.log(ans);
//   };
//   three();

h1 = document.querySelector("h1");
function changeColor(color, delay, nextChangeColor) {
  setTimeout(() => {
    h1.style.color = color;
    if (nextChangeColor) nextChangeColor();
  }, delay);
}
changeColor("red", 1000, () => {
  changeColor("blue", 1000, () => {
    changeColor("green", 1000, () => {
      changeColor("orange", 1000, () => {
        changeColor("red", 1000);
      });
    });
  });
});
