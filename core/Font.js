export class Font {
    constructor(size = 12, family = "Arial", color = "#ffffff") {
        this.size = size;
        this.family = family;
        this.color = color;

        this.align = "left";
        this.baseline = "top";
    }

    apply(ctx) {
        ctx.font = `${this.size}px ${this.family}`;
        ctx.fillStyle = this.color;
        ctx.textAlign = this.align;
        ctx.textBaseline = this.baseline;
    }

    measure(text, ctx) {
        this.apply(ctx);  
        const metrics = ctx.measureText(text);
        const width = metrics.width;
        const height = this.size; // aproximação  
        return { width, height };
    }

    clone() {
        const copy = new Font(this.size, this.family, this.color);
        copy.align = this.align;
        copy.baseline = this.baseline;
        return copy;
    }
}
