const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listEl = document.querySelector('#ingredients');
const components = ingredients.map(el => {
  const item = document.createElement('li');

  item.textContent = el;
  item.classList.add('item');

  listEl.append(item);
});

console.log(listEl);
