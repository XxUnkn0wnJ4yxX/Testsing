var ONE = false;
var TWO = false;
var THREE = false;


function setUp(){

//page bar
var pageButtons = document.getElementById("pageBar");
pageButtons.innerHTML = ("<a href = 'index.html'><button class = 'pageS'>page 1</button></a><a href = 'page2.html'><button class = 'pageS'>page 2</button></a><a href = 'page3.html'><button class = 'pageS'>Page 3</button></a><a href = 'page4.html'><button class = 'pageS'>Page 4</button></a>");

var colorsint = setInterval(() => {
    var htmll = document.getElementsByTagName("html");
htmll[0].style.backgroundColor = randomColor();
}, 500);

var stopBut = document.getElementById("stopp");
stopBut.onclick = function() {
    stopColor(colorsint);
};

var but1 = document.getElementById("but1");
var but2 = document.getElementById("but2");
var but3 = document.getElementById("but3");

but1.onclick = oneclick;
but2.onclick = twoclick;
but3.onclick = threeclick;
}

function oneclick(){

}
function twoclick(){
    
}
function threeclick(){
    
}

function stopColor(int){
    clearInterval(int);
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

window.onload = setUp;