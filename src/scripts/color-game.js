var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('color__display');
var message = document.getElementById('message');
var h1 = document.querySelector('h1');

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function () {
    
        if (this.style.backgroundColor === pickedColor) {
            message.textContent = "Correct!!!";
            h1.style.backgroundColor = pickedColor;
            changeColor(pickedColor);
        } else {
            this.style.backgroundColor = "#232323";
            message.textContent = "Try again";
        }

    });
}

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
  return "rgb(" + r + ", " + g + ", " + b +")" 
}