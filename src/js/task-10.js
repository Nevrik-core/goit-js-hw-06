function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesWrapper = document.querySelector('#boxes');
const createBnt = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const amountInput = document.querySelector('input');
// console.log(createBnt);

function createBoxes(amount) {
  let boxSize = 30;
  let markup = `<div style="background-color: ${getRandomHexColor()}; width: ${boxSize}px; height:${boxSize}px"></div>`;
  amount = amountInput.value;
  for (let i = 1; i < amount; i += 1) {
    boxSize += 10;
    markup += `<div style="background-color: ${getRandomHexColor()}; width: ${boxSize}px; height:${boxSize}px"></div>`;
  }
  console.log(markup);
  boxesWrapper.insertAdjacentHTML('afterbegin', markup);
}

function destroyBoxes() {
  boxesWrapper.innerHTML = '';
}

createBnt.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);