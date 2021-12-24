let circle = new Circle(100, 100, 20);
circle.draw();

let rec = new Rectangle(200, 350, 100, 20);
rec.draw();

function play() {
    switch (circle._flag) {
        case "Down":
            circle.moveDown();
            break;
        case "Up":
            circle.moveUp();
            break;
    }
    rec.draw();
    rec.checkImpactCircle(circle)
}

window.addEventListener('keyup', function (event) {
    switch (event.keyCode) {
        case 37:
            rec.moveLeft();
            break;
        case 39:
            rec.moveRight();
            break
    }


})

setInterval(play, 100)
