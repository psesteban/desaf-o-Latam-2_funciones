const ele = document.getElementById("ele1");

/* ele.addEventListener("click", function () {
  ele.style.backgroundColor = "yellow"})
 */


  function pintar(color = "green") {
    ele.style.backgroundColor = color;
}

ele.addEventListener("click", () => pintar("yellow"));
