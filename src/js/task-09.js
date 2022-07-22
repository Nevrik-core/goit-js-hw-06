function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');
const bgSpanEl = buttonEl.previousElementSibling.lastChild;

buttonEl.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
  bgSpanEl.textContent = document.body.style.backgroundColor;
});



