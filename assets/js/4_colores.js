const boxBlue = document.querySelector ("#blue")
const boxRed = document.querySelector ("#red")
const boxGreen = document.querySelector ("#green")
const boxYellow = document.querySelector ("#yellow")

const changeColor = (element) => {
element.style.backgroundColor = "black"
}
/* 
Mejor alternativa 
const changeColor = (e) => (e.target.style.color = 'black') */

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
const keyColor = (color) => {
document.getElementById("key").style.backgroundColor = color;
}

const newSection = (color) => {
  const newSection = document.createElement("section");
  newSection.style.width = "200px";
  newSection.style.height = "200px";
  newSection.style.backgroundColor = color;
  newSection.style.border = "1px solid black";
  document.body.appendChild(newSection);  }

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
 keyColor ('pink')
  } else if (event.key === "s") {
    keyColor ('orange')
  } else if (event.key === "d") {
    keyColor ('lightblue')
  } else if (event.key === "q") {
    newSection ('purple')
  } else if (event.key === "w") {
    newSection ('gray')
  } else if (event.key === "e") {
    newSection ('brown')
  }
});
