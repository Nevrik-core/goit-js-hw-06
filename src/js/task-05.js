const inputEl = document.querySelector("#name-input"); 
const outputEl = inputEl.nextElementSibling.lastElementChild;


inputEl.addEventListener('input', (event) => {
    if (event.currentTarget.value === '') {
        outputEl.textContent = "Anonymous";
        
    } else {
        outputEl.textContent = event.currentTarget.value;
    }
    
});