let counterValue = 0;

const valueEl = document.querySelector('#value');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

btnDecrement.addEventListener('click', () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

btnIncrement.addEventListener('click', () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
