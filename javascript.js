var butWidth = window.innerWidth - 30;
console.log(window.innerWidth);
var but = document.getElementsByClassName("but");

function setUp(){

//page 2 buttons
buttonLength();
setInterval(buttonLength, 1000);
buttonSetUp();

//page bar
var pageButtons = document.getElementById("pageBar");
pageButtons.innerHTML = ("<a href = 'index.html'><button class = 'pageS'>page 1</button></a><a href = 'page2.html'><button class = 'pageS'>page 2</button></a>");
}

//sets up the buttons on page 2
function buttonLength() {
    //mkes buttons the right size
    var butWidth = window.innerWidth - 30;
    for(var i = 0; i < but.length; i++){
        but[i].style.width = (butWidth) + "px";
    }
}

function buttonSetUp () {
    var right = Math.floor(Math.random() * but.length) + 1;
    for(var i = 0; i < but.length; i++ ){
        if(but[i] == but[right]){
            but[i].id = "right";
            console.log("button " + i + " is right")
        } else {
            but[i].id = "wrong";
            console.log("button " + i + " is wrong")
        }
    }
}



window.onload = setUp();