

export class Rectangle
{
  constructor(x = 0, y = 0, width = 0, height = 0)
  {
    this.set(x, y, width, height);
  }

  set(x, y, width, height) {
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

  isEmpty() {
    return this.width === 0 || this.height === 0;
  }

  clone() {
    return new Rectangle(this.x, this.y, this.width, this.height);
  }
  transform(matrix) {
    const points = [
      matrix.transformPoint(this.x, this.y),
      matrix.transformPoint(this.x + this.width, this.y),
      matrix.transformPoint(this.x, this.y + this.height),
      matrix.transformPoint(this.x + this.width, this.y + this.height)
    ];
  
    const xs = points.map(p => p[0]);
    const ys = points.map(p => p[1]);
  
    const minX = Math.min(...xs);
    const minY = Math.min(...ys);
    const maxX = Math.max(...xs);
    const maxY = Math.max(...ys);
  
    return new Rectangle(minX, minY, maxX - minX, maxY - minY);
  }
  
}


export class MatrixStack {
  constructor() {
    this.stack = [MatrixStack.identity()];
  }

  static identity() {
    return [1, 0, 0, 1, 0, 0];
  }

  get current() {
    return this.stack[this.stack.length - 1];
  }

  push() {
    this.stack.push(this.current.slice());
  }

  pop() {
    this.stack.pop();
  }

  translate(x, y) {
    const m = this.current;
    m[4] += x * m[0] + y * m[2];
    m[5] += x * m[1] + y * m[3];
  }

  applyToGraphics(g) {
    const m = this.current;
    g.setTransform(...m);
  }

  scale(sx, sy = sx) {
    const m = this.current;
    m[0] *= sx;
    m[1] *= sx;
    m[2] *= sy;
    m[3] *= sy;
  }


  transformPointInverse(x, y) {
    const [a, b, c, d, e, f] = this.current;
    const det = a * d - b * c;
    if (det === 0) return [0, 0];
    const ia = d / det;
    const ib = -b / det;
    const ic = -c / det;
    const id = a / det;
    const ie = (c * f - d * e) / det;
    const iff = (b * e - a * f) / det;
    return [
      ia * x + ic * y + ie,
      ib * x + id * y + iff
    ];
  }
  rotate(angle) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);

    const m = this.current;

    const a = m[0] * cos + m[2] * sin;
    const b = m[1] * cos + m[3] * sin;
    const c = m[0] * -sin + m[2] * cos;
    const d = m[1] * -sin + m[3] * cos;

    m[0] = a;
    m[1] = b;
    m[2] = c;
    m[3] = d;
  }

  transformPoint(x, y) {
    const [a, b, c, d, e, f] = this.current;
    return [
      a * x + c * y + e,
      b * x + d * y + f
    ];
  }

}
