const colorBoxes = document.querySelectorAll("section");

colorBoxes.forEach(function (box) {
  box.addEventListener("click", function () {
    box.style.backgroundColor = "black";
  });
});

