const listItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${listItems.length}`);

listItems.forEach(el => {
    console.log(`Category: ${el.querySelector('h2').textContent}`);
    console.log(`Elements: ${el.querySelectorAll('li').length}`);
});
