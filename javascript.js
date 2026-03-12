var butWidth = window.innerWidth - 15;
console.log(window.innerWidth)
function setUp(){
buttonSetUp();
setInterval(buttonSetUp, 100);
var pageButtons = document.getElementById("pageBar");
pageButtons.innerHTML = "
<a href = 'index.html'><button class = 'pageS'>page 1</button></a>
<a href = 'page2.html'><button class = 'pageS'>page 2</button></a>
";
}

function buttonSetUp() {
    var butWidth = window.innerWidth - 15;
    var but = document.getElementsByClassName("but");
    for(var i = 0; i < but.length; i++){
        but[i].style.width = (butWidth) + "px";
        // tryna make button width the window width but js is being stupid
        console.log("setup repeat " + i);
        console.log(but[i].style.width)
    }
}


window.onload = setUp();