var WIDTH = window.innerWidth;



function setUp() {
    var canvas = document.getElementById("canvas");
    var can = canvas.getContext("2d");

    can.fillStyle = "#ff0000";
    can.fillRect(20,20,20,20);

    canvas.addEventListener("keydown", function(event) {
        console.log(event.code);
        if(event.code === Enter){
                can.fillStyle = "#0000ff";
                can.fillRect(30,30,20,20);
        }
    });
}
