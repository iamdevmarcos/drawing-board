const get = (element) => document.querySelector(element);
const getAll = (element) => document.querySelectorAll(element);

// Initial Data
let currentColor = 'black';
let canDraw = false;

const screen = get('#tela');
const ctx = screen.getContext('2d');

// Events
getAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', handleColorClick);
});

screen.addEventListener('mousedown', handleMouseDown);
screen.addEventListener('mousemove', handleMouseMove);
screen.addEventListener('mouseup', handleMouseUp);

// Functions
function handleColorClick(e) {
    const color = e.target.getAttribute('data-color');
    currentColor = color;

    get('.color.active').classList.remove('active');
    e.target.classList.add('active');
}

function handleMouseDown() {
    canDraw = true;
}

function handleMouseMove() {
    if(canDraw) {
        console.log('drawing...');
    }
}

function handleMouseUp() {
    canDraw = false;
}