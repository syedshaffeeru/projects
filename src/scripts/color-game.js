var numSquares = 6;


var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById('color__display');
var message = document.getElementById('message');
var h1 = document.querySelector('h1');
var reset = document.querySelector('#reset');
var modes = document.querySelectorAll('.mode');

init();


function init() {
    setUpMode();
    setUpSquares();
    refresh();
}

function setUpMode() {
    for (var i = 0; i < modes.length; i++) {
        modes[i].addEventListener('click', function () {
            
            modes[0].classList.remove('selected');
            modes[1].classList.remove('selected');
            this.classList.add('selected');
            this.textContent==='Easy'? numSquares = 3 : numSquares = 6
            refresh();
        });
    
    }    
}
function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
    
            if (this.style.backgroundColor === pickedColor) {
                message.textContent = "Correct!!!";
                h1.style.backgroundColor = pickedColor;
                changeColor(pickedColor);
                reset.textContent = "Play Again!"
            } else {
                this.style.backgroundColor = "#232323";
                message.textContent = "Try again";
            }
    
        });
    }

}
function refresh(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    reset.textContent = "New Colors"
    resetColors(squares);
    h1.style.backgroundColor = "steelblue";
    message.textContent = "";
}


reset.addEventListener('click', function () {
   refresh();
})

function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColors(x) {
    var arr = [];

    for (var i = 0; i < x; i++) {
        arr.push(randomColor());
    }

    return arr;

}

function randomColor() {
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")"
}

function resetColors(element) {
    
    for (var i = 0; i < element.length; i++) {

        if (colors[i]) {
            element[i].style.backgroundColor = colors[i];
            element[i].style.display = "block";
        } else {
            element[i].style.display = "none";
        }
        
    }

}