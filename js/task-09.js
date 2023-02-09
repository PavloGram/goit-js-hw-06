function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const colorValueEl = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', changeColor);

function changeColor(event) {
  colorValueEl.textContent = getRandomHexColor();

  bodyEl.style.backgroundColor = getRandomHexColor();
}
