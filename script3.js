var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

function setUp() {
    var but = document.getElementById("coloredButton");
    but.style.width = (WIDTH + "px");
    but.style.height = (HEIGHT + "px");

    but.style.backgroundColor = (randomColor());
}

function randomColor() {
    var color = "#";
    var possibleVars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f"];
    console.log(possibleVars);
    for(var i = 0; i < 6; i++) {
        var rawListNum = Math.random() * 16;
        var listNum = Math.floor(rawListNum);
        console.log(listNum)
        color = color += possibleVars[listNum];
        console.log(color);
    }
    return(color)
}

window.onload = setUp();