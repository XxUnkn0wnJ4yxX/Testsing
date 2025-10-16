function start(){
      mouseClickMethod(newRect);
}

function newRect(e){
    var rect = new Rectangle(20, 30);
    rect.setPosition(e.getX() - 10, e.getY() - 15);
    rect.setColor(Randomizer.nextColor());
    add(rect);
}
