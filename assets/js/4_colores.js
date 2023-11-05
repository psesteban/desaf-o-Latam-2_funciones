document.getElementById("blue").addEventListener("click", function () {
  this.style.backgroundColor = "black";
});
document.getElementById("red").addEventListener("click", function () {
  this.style.backgroundColor = "black";
});
document.getElementById("green").addEventListener("click", function () {
  this.style.backgroundColor = "black";
});
document.getElementById("yellow").addEventListener("click", function () {
  this.style.backgroundColor = "black";
});

let color;

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    /* Cambiar a color 1 */
    color = "pink";
    document.getElementById("key").style.backgroundColor = color;
  } else if (event.key === "s") {
    /* Cambiar a color 2 */
    color = "orange";
    document.getElementById("key").style.backgroundColor = color;
  } else if (event.key === "d") {
    /* Cambiar a color 3 */
    color = "lightblue";
    document.getElementById("key").style.backgroundColor = color;
  } else if (event.key === "q") {
    /* agregar div morado */
    let newDivQ = document.createElement("div");
    newDivQ.style.width = "200px";
    newDivQ.style.height = "200px";
    newDivQ.style.backgroundColor = "purple";
    newDivQ.style.border= "1px solid black";
    document.body.appendChild(newDivQ);
  } else if (event.key === "w") {
    /* agregar div gris */
    let newDivQ = document.createElement("div");
    newDivQ.style.width = "200px";
    newDivQ.style.height = "200px";
    newDivQ.style.backgroundColor = "gray";
    newDivQ.style.border= "1px solid black";
    document.body.appendChild(newDivQ);
  } else if (event.key === "e") {
    /* agregar div cafe*/
    let newDivQ = document.createElement("div");
    newDivQ.style.width = "200px";
    newDivQ.style.height = "200px";
    newDivQ.style.backgroundColor = "brown";
    newDivQ.style.border= "1px solid black";
    document.body.appendChild(newDivQ);
  }
});

// altenativa de código
// document.addEventListener("keydown", function(event) {
//     switch(event.key) {
//         case "a":
//             color = "pink";
//             document.getElementById("key").style.backgroundColor = color;
//             break;
//         case "s":
//             color = "orange";
//             document.getElementById("key").style.backgroundColor = color;
//             break;
//         case "d":
//             color = "lightblue";
//             document.getElementById("key").style.backgroundColor = color;
//             break;
//         case "q":
//             let newDivQ = document.createElement("div");
//             newDivQ.style.width = "200px";
//             newDivQ.style.height = "200px";
//             newDivQ.style.backgroundColor = "purple";
//             document.body.appendChild(newDivQ);
//             break;
//         case "w":
//             let newDivW = document.createElement("div");
//             newDivW.style.width = "200px";
//             newDivW.style.height = "200px";
//             newDivW.style.backgroundColor = "gray";
//             document.body.appendChild(newDivW);
//             break;
//         case "e":
//             let newDivE = document.createElement("div");
//             newDivE.style.width = "200px";
//             newDivE.style.height = "200px";
//             newDivE.style.backgroundColor = "brown";
//             document.body.appendChild(newDivE);
//             break;
//     }
// });
