

class Circle {
    constructor(x, y, radius) {
        this._x = x;
        this._y = y;
        this._radius = radius;
        this._canvas = document.getElementById('my-game');
        this._ctx = this._canvas.getContext('2d');
        this._speed = 5;
        this._flag = "Down"
    }

    draw() {
        this._ctx.beginPath();
        this._ctx.fillStyle = "#ff6a00"
        this._ctx.arc(this._x, this._y, this._radius, 0, Math.PI * 2);
        this._ctx.fill();
        this._ctx.closePath();
    }

    moveDown() {
        this.clear();
        this._y += this._speed;
        this.draw();
        this.checkImpact();
    }

    clear() {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height)
    }

    moveUp() {
        this.clear();
        this._y -= this._speed;
        this.draw();
        this.checkImpact();
    }

    checkImpact() {
        if (this._y + this._radius === this._canvas.height) {
            this._flag = 'Up'
        } else if (this._y === this._radius) {
            this._flag = 'Down'
        }
    }
}

