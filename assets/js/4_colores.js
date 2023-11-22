const boxBlue = document.querySelector ("#blue")
const boxRed = document.querySelector ("#red")
const boxGreen = document.querySelector ("#green")
const boxYellow = document.querySelector ("#yellow")

const changeColor = (element) => {
element.style.backgroundColor = "black"
}

boxBlue.addEventListener ("click", () => {
  changeColor(boxBlue)
})
boxRed.addEventListener ("click", () => {
  changeColor(boxRed)
})
boxGreen.addEventListener ("click", () => {
  changeColor(boxGreen)
})
boxYellow.addEventListener ("click", () => {
  changeColor(boxYellow)
})

//alternativa
/* const colorBoxes = document.querySelectorAll("section");

colorBoxes.forEach(function (box) {
  box.addEventListener("click", function () {
    box.style.backgroundColor = "black";
  });
});

 */