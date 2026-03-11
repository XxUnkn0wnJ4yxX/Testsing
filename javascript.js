var BUTWIDTH = window.innerWidth;
console.log(window.innerWidth)
function setUp(){
var but = document.getElementsByClassName("but");
for(var i = 0; i < but.length; i++){
    but[i].style.width = BUTWIDTH;
    // tryna make button width the window width but js is being stupid
    console.log("setup repeat " + i)
}
}



window.onload = setUp();