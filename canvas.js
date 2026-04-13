var WIDTH = window.innerWidth;



function setUp() {
    var canvas = document.getElementById("canvas");
    var can = canvas.getContext("2d");
    can.fillStyle = "#ff0000";
    can.fillRect(20,20,20,20);
}

window.onload = setUp;
window.