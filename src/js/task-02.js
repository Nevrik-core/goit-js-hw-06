const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ingredientsSelector = document.querySelector('#ingredients');

const ingList = ingredients.map(el => {
  const elList = document.createElement('li');
  elList.classList.add('item');
  elList.textContent = el;
  return elList;
});
// console.log(...ingList);
ingredientsSelector.append(...ingList);

