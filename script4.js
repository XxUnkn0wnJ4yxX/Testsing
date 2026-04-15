var one = false;
var two = false;
var three = false;


function setUp(){

    var pageButtons = document.getElementById("pageBar");
    pageButtons.innerHTML = ("<a href = 'index.html'><button class = 'pageS'>page 1</button></a><a href = 'page2.html'><button class = 'pageS'>page 2</button></a><a href = 'page3.html'><button class = 'pageS'>Page 3</button></a><a href = 'page4.html'><button class = 'pageS'>Page 4</button></a>");

    var colorsint = setInterval(() => {
        var htmll = document.getElementsByTagName("html");
        var col = randomColor();
        htmll[0].style.backgroundColor = col;
        var nexxt = document.getElementById("next");
        nexxt.style.backgroundColor = col

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
    var but1 = document.getElementById("but1");
    var but2 = document.getElementById("but2");
    if(one == true){
        one = false;
        but1.style.backgroundColor = "#000000"
    }else{
        one = true;
        but1.style.backgroundColor = "#dddddd"
    }
    if(two == true){
        two = false;
        but2.style.backgroundColor = "#000000"
    }else{
        two = true;
        but2.style.backgroundColor = "#dddddd"
    }
    if(three == true){

    }else{
        
    }
    if(one == true && two == true && three == true){

        var nexxt = document.getElementById("next");
        nexxt.style.visibility = "visible";
        
    }
}
function twoclick(){
    var but2 = document.getElementById("but2");
    var but3 = document.getElementById("but3");
      if(one == true){

    }else{

    }
    if(two == true){
        two = false;
        but2.style.backgroundColor = "#000000"
    }else{
        two = true
        but2.style.backgroundColor = "#dddddd"
    }
    if(three == true){
        three = false
        but3.style.backgroundColor = "#000000"
    }else{
        three = true
        but3.style.backgroundColor = "#dddddd"
    }  
}
function threeclick(){
    var but1 = document.getElementById("but1");
    var but3 = document.getElementById("but3");
    if(one == true){
        one = false;
        but1.style.backgroundColor = "#000000"
    }else{

    }
    if(two == true){

    }else{
        
    }
    if(three == true){
        three = false;
        but3.style.backgroundColor = "#000000"
    }else{
        three = true
        but3.style.backgroundColor = "#dddddd"
    }
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