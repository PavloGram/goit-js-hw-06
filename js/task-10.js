function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsEl = document.querySelector('#controls');
const createEl = document.querySelector('[data-create]');
const destroyEl = document.querySelector('[data-destroy]');
const num = controlsEl.querySelector('input');
const box = document.querySelector('#boxes');

num.addEventListener('input', event => {
  const u = event.currentTarget.value;

  createEl.addEventListener('click', createBoxes);

  function createBoxes() {
    
    let size = 30;
    let block = document.createElement('div');
    block.style.width = `${size }px`;
    block.style.height = `${size }px`;


 for (let i = 1; i < u; i += 1) {
  let block = document.createElement('div');
  size += 10;
     
    block.style.width = `${size }px`;
    block.style.height = `${size }px`;
    block.style.backgroundColor = getRandomHexColor();
  
    controlsEl.append(block)
 }

  }



  
})




destroyEl.addEventListener('click', destroyBoxes);




function destroyBoxes() { }




