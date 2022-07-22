const inputSizeControl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputSizeControl.addEventListener('input', (event) => {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
});