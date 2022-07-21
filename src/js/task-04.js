let counterValue = 0;
const incr = () => counterValue += 1;
const decr = () => counterValue -= 1;

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector('#value');


incrementBtn.addEventListener('click', () => {
    incr();
    valueEl.textContent = counterValue;
});

decrementBtn.addEventListener('click', () => {
    decr();
    valueEl.textContent = counterValue;
});