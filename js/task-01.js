const categoriesEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesEl.length}`);

const itemEl = document.querySelectorAll('.item');

const countsElements = [...itemEl].map(el => {
  const categoriesElLength = el.querySelectorAll('li');
  const titleEl = el.querySelector('h2');

  console.log(`Category: ${titleEl.textContent}`);
  console.log(`Elements: ${categoriesElLength.length}`);
});
