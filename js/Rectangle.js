class Rectangle {
    constructor(x, y, width, height) {
        this._x =x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._canvas = document.getElementById('my-game');
        this._ctx = this._canvas.getContext('2d');
    }

    draw() {
        this._ctx.beginPath();
        this._ctx.fillStyle = "#2d2016"
        this._ctx.rect(this._x, this._y, this._width, this._height);
        this._ctx.fill();
        this._ctx.closePath();
    }

    moveLeft() {
        this._x -= 10;
    }

    moveRight() {
        this._x += 10;
    }

    checkImpactCircle(circle) {
        // kiem tra va cham voi circle
    }
}
