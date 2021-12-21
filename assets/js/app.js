const get = (element) => document.querySelector(element);
const getAll = (element) => document.querySelectorAll(element);

// Initial Data
let currentColor = 'black';
let screen = get('#tela');

// Events
getAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', handleColorClick);
});

// Functions
function handleColorClick(e) {
    const color = e.target.getAttribute('data-color');
    currentColor = color;

    get('.color.active').classList.remove('active');
    e.target.classList.add('active');
}