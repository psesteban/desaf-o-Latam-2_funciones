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

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    color = "pink";
    document.getElementById("key").style.backgroundColor = color;
  } else if (event.key === "s") {
    color = "orange";
    document.getElementById("key").style.backgroundColor = color;
  } else if (event.key === "d") {
    color = "lightblue";
    document.getElementById("key").style.backgroundColor = color;
  } else if (event.key === "q") {
    const newSection = document.createElement("section");
    newSection.style.width = "200px";
    newSection.style.height = "200px";
    newSection.style.backgroundColor = "purple";
    newSection.style.border = "1px solid black";
    document.body.appendChild(newSection);
  } else if (event.key === "w") {
    let newSection = document.createElement("section");
    newSection.style.width = "200px";
    newSection.style.height = "200px";
    newSection.style.backgroundColor = "gray";
    newSection.style.border = "1px solid black";
    document.body.appendChild(newSection);
  } else if (event.key === "e") {
    let newSection = document.createElement("section");
    newSection.style.width = "200px";
    newSection.style.height = "200px";
    newSection.style.backgroundColor = "brown";
    newSection.style.border = "1px solid black";
    document.body.appendChild(newSection);
  }
});
