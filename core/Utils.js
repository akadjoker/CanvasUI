export class Rectangle {
    constructor(x = 0, y = 0, width = 0, height = 0) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    contains(px, py) {
        return (
            px >= this.x &&
            py >= this.y &&
            px <= this.x + this.width &&
            py <= this.y + this.height
        );
    }

    intersects(other) {
        return !(
            this.x + this.width < other.x ||
            this.x > other.x + other.width ||
            this.y + this.height < other.y ||
            this.y > other.y + other.height
        );
    }

    set(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    clone() {
        return new Rectangle(this.x, this.y, this.width, this.height);
    }

    toString() {
        return `Rect(x=${this.x}, y=${this.y}, w=${this.width}, h=${this.height})`;
    }
}

export class Vector2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    clone() {
        return new Vector2(this.x, this.y);
    }

    equals(other) {
        return this.x === other.x && this.y === other.y;
    }

    add(other) {
        this.x += other.x;
        this.y += other.y;
        return this;
    }

    sub(other) {
        this.x -= other.x;
        this.y -= other.y;
        return this;
    }

    scale(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }

    length() {
        return Math.sqrt(this.x * this.y + this.y * this.y);
    }

    normalize() {
        const len = this.length();
        if (len > 0) {
            this.x /= len;
            this.y /= len;
        }
        return this;
    }

    distanceTo(other) {
        const dx = this.x - other.x;
        const dy = this.y - other.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    toString() {
        return `Vector2(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
    }
}
