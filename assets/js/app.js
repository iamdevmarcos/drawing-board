const get = (element) => document.querySelector(element);
const getAll = (element) => document.querySelectorAll(element);

// Initial Data
let currentColor = 'black';
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

const screen = get('#screen');
const ctx = screen.getContext('2d');

// Events
getAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', handleColorClick);
});

screen.addEventListener('mousedown', handleMouseDown);
screen.addEventListener('mousemove', handleMouseMove);
screen.addEventListener('mouseup', handleMouseUp);
get('.clear').addEventListener('click', handleClearScreen);

// Functions
function handleColorClick(e) {
    const color = e.target.getAttribute('data-color');
    currentColor = color;

    get('.color.active').classList.remove('active');
    e.target.classList.add('active');
}

function handleMouseDown(e) {
    canDraw = true;
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
}

function handleMouseMove(e) {
    if(canDraw) {
        draw(e.pageX, e.pageY);
    }
}

function handleMouseUp() {
    canDraw = false;
}

function draw(x, y) {
    const pointX = x - screen.offsetLeft;
    const pointY = y - screen.offsetTop;

    lineWidth = 5;
    if(currentColor === 'white') {
        lineWidth = 25;
    }

    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.lineJoin = "round";
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pointX, pointY);
    ctx.closePath();
    ctx.strokeStyle = currentColor;
    ctx.stroke();

    mouseX = pointX;
    mouseY = pointY;
}

function handleClearScreen() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}