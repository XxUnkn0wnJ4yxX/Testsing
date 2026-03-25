var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

function setUp() {
    var but = document.getElementById("coloredButton");
    but.style.width = (WIDTH);

    but.style.backgroundColor = randomColor();
}

function randomColor() {
    var color = "#";
    var possibleVars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f"];
    console.log(possibleVars);
    for(var i = 0; i < 17; i++) {
        var listNum = Math.random() * 16;
        color = color += listNum;
        console.log(color);
    }
}

window.onload = setUp();