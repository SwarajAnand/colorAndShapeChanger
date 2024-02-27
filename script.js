const insideContainer = document.getElementById("insideContainer");
const btnChangeShape = document.getElementById("changeShape");
const changeColor = document.getElementById("changeColor");
const container = document.getElementById("container");
const gainSize = document.getElementById("gainSize");
const shrinkSize = document.getElementById("shrinkSize");

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 155);
  let blue = Math.floor(Math.random() * 245);

  return `rgb(${red}, ${green}, ${blue})`;
}

changeColor.addEventListener("click", () => {
  container.style.backgroundColor = getRandomColor();
});

function changeShape(count) {
  if (count == 1) {
    insideContainer.classList.add("rectangle");
    insideContainer.classList.remove("triangle");
  }

  if (count == 2) {
    insideContainer.classList.add("circle");
    insideContainer.classList.remove("rectangle");
  }

  if (count == 3) {
    insideContainer.classList.add("square");
    insideContainer.classList.remove("circle");
  }

  if (count == 0) {
    insideContainer.classList.add("triangle");
    insideContainer.classList.remove("square");
  }
}

let count = 0;
btnChangeShape.addEventListener("click", () => {
  if (count == 0) {
    count = 1;
  } else if (count == 1) {
    count = 2;
  } else if (count == 2) {
    count = 3;
  } else if (count == 3) {
    count = 0;
  }

  changeShape(count);
});

let height = 150;
let width = 150;

gainSize.addEventListener("click", () => {
  height += 10;
  width += 10;

  if (height > 350) {
    height = 350;
    width = 350;
    alert("Height and Width cannot be more than 350px please reduce it");
  }
  container.style.height = `${height}px`;
  container.style.width = `${width}px`;
  //   console.log(height, width);
});

shrinkSize.addEventListener("click", () => {
  height -= 10;
  width -= 10;

  if (height < 150) {
    height = 150;
    width = 150;
    alert("Height and Width cannot be less than 150px");
  }
  container.style.height = `${height}px`;
  container.style.width = `${width}px`;
});
