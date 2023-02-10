function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createEl = document.querySelector('[data-create]');
const destroyEl = document.querySelector('[data-destroy]');
const numEl = document.querySelector('input');
const boxEl = document.querySelector('#boxes');

createEl.addEventListener('click', createBoxes);

const element = [];

function createBoxes(event) {
  let size = 20;
  for (let i = 0; i < numEl.value; i += 1) {
    const block = document.createElement('div');

    size += 10;

    block.style.width = `${size}px`;
    block.style.height = `${size}px`;
    block.style.backgroundColor = getRandomHexColor();

    element.push(block);

    boxEl.append(...element);
  }
}

destroyEl.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxEl.innerHTML = '';
  numEl.value = 0;
}
