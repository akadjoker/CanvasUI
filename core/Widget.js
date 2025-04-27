
class Widget
{
    constructor()
    {
        this.x = 0;
        this.y = 0;
        this.width = 1;
        this.height = 1;
        this.minWidth = 0;
        this.minHeight = 0;
        this.maxWidth = Infinity;
        this.maxHeight = Infinity;
        this.alignVertical = AlignVertical.Top;
        this.alignHorizontal = AlignHorizontal.Left;
        this.expandWidth = true;
        this.expandHeight = true;
        this.padding = new Padding();
        this.percent = 0;
        this.parent = null;
        this.id = "Button";
        this.tag = 0;
        this.isHovered = false;
        this.isPressed = false;
        this.visible = true;
        this.active = true;
        this.lines = false;
        this.bound = new Rectangle(0, 0, 0, 0);
    }

    clampSize()
    {
        this.width = Math.max(this.minWidth, Math.min(this.width, this.maxWidth));
        this.height = Math.max(this.minHeight, Math.min(this.height, this.maxHeight));
    }

    resize(w,h) {}
    
    update(dt) { }
    
    render(g) { }

    onClick()
    {
        // Override in subclasses
    }
    handleMouseDown(x, y)
    {
         
            if (this.contains(x, y))
            {
                this.isPressed = true;
                this.onClick();
                return true; // Handled
            }
        
        return false;
    }
    handleMouseMove(x, y)
    {
        const wasHovered = this.isHovered;
        this.isHovered = this.contains(x, y);
        
        if (wasHovered !== this.isHovered)
        {
            return true; 
        }
        return false;
    }
    handleMouseUp(x, y)
    {
        this.isPressed = false;
        if (this.contains(x, y))
        {
            return true; // Handled
        }
        
        return false;
    }
    handleMouseWheel(value) { return false; }
   

    getX() { return  this.x; }
    getY() { return  this.y; }
    
    setPosition(x, y) { this.x = x; this.y = y; return this; }
    setSize(width, height) { this.width = width; this.height = height; return this; }
    setId(id) { this.id = id; return this; }
    setTag(tag) { this.tag = tag; return this; }
    
    contains(px, py)
    {
        return (this.visible && this.active) && this.bound.contains(px, py);
    }

    debug(g)
    {
        if (!this.lines) return;
        g.setColor("#ff0000");
        g.drawRect(this.x, this.y, this.width, this.height);
    }
}