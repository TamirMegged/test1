document.querySelector('#calcArea').addEventListener('click', calcArea);

// calculate rectangle area
function calcArea() {
    const aSide = document.querySelector('#aInput').value;
    const bSide = document.querySelector('#bInput').value;
    if (aSide === "") {
        alertNoVal("a");
        return;
    } else if (bSide === "") {
        alertNoVal("b");
        return;
    }
    drawRect();
    let area = aSide * bSide;
    document.querySelector('#rectArea').textContent = area;
}


// If no value entered in rectangle sides' inputs alert
function alertNoVal(side) {
    document.querySelector('#noNumericVal').style.display = "block";
    setTimeout(() => {
        document.querySelector('#noNumericVal').style.display = "none";
    }, 3000);
    document.querySelector(`#${side}Input`).focus();
}

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');


// draw a rectangle
function drawRect() {
    const a = +document.querySelector('#aInput').value;
    const b = +document.querySelector('#bInput').value;
    const x = +document.querySelector('#xInput').value;
    const y = +document.querySelector('#yInput').value;
    let h = document.querySelector('#canvas').height;
    let w = document.querySelector('#canvas').width;
    if ((a + x) > w || (b + y) > h) {
        alertTooBig();
        return;
    }
    ctx.strokeStyle = "black";
    ctx.strokeRect(x, y, a, b);
}


// if rectangle is bigger than canvas
function alertTooBig() {
    document.querySelector('#rectTooBig').style.display = "block";
    setTimeout(() => {
        document.querySelector('#rectTooBig').style.display = "none";
    }, 3000);
}


//when user click clear board button - clear canvas
let clearBtn = document.getElementById('clearCanvas');
clearBtn.addEventListener('click', clearCanvas);

function clearCanvas() {
    let h = document.querySelector('#canvas').height;
    let w = document.querySelector('#canvas').width;
    ctx.clearRect(0, 0, w, h);
}


// set x and y values by clicking on canvas
canvas.addEventListener('click', setXY);

function setXY(e) {
    document.querySelector('#xInput').value = e.offsetX;
    document.querySelector('#yInput').value = e.offsetY;
}


// onload draw random rectangles - bonus 
let i = 0;
let onloadDraw = setInterval(() => {
    if (i === 10) {
        clearInterval(onloadDraw);
    }
    const a = parseInt(Math.random() * 500);
    const b = parseInt(Math.random() * 500);
    const x = 0;
    const y = 0;
    ctx.strokeStyle = "black";
    ctx.strokeRect(x, y, a, b);
    i++;
}, 500);