class Layout extends Widget
{
    constructor()
    {
        super(0,0,0,0);
        this.children = [];
        this.id = "Layout";
 
    }
    add(widget)
    {
        widget.parent = this;
        this.children.push(widget);
        return widget;
    }
    remove(widget)
    {
        const idx = this.children.indexOf(widget);
        if (idx !== -1)
        {
            this.children.splice(idx, 1);
            widget.parent = null;
        }
    }
    clear()
    {
        for (let child of this.children) child.parent = null;
        this.children = [];
    }
    resize(w, h)
    {
        for (let child of this.children)
        {
            child.resize(w,h);
        }
    }
    render(renderer)
    {
        
        for (let child of this.children)
        {
            if (!child.visible && !child.active ) continue;
            child.render(renderer);
        }
    }
    debug(renderer)
    {
        super.debug(renderer);
        for (let child of this.children)
        {
            child.debug(renderer);
        }
    }
    update(dt)
    {
        for (let child of this.children)
        {
            if (!child.visible && !child.active ) continue;
            child.update(dt);
        }
    }

    handleMouse(type, x, y, button)
    {
        if (type === Input.WHEEL)
        {
            let value = Math.sign(y);
            for (let i = this.children.length - 1; i >= 0; i--)
            {
                const child = this.children[i];
               
                if (child.handleMouseWheel( value))
                {
                    break;
                }
                
            }
            return false;
        }
        if (type === Input.UP)
        {
            for (let i = this.children.length - 1; i >= 0; i--)
            {
                const child = this.children[i];
                if (child.handleMouseUp(x, y))
                {
                    break;
                }
            }
            return false;
        }
        if (type === Input.DOWN)
        {
            for (let i = this.children.length - 1; i >= 0; i--)
            {
                let child = this.children[i];
                if (child.handleMouseDown(x, y))
                {
                    break;
                }
            } 
            return false;
        }
    
        let active=-1;
        if (type === Input.MOVE)
        {
            for (let i = this.children.length - 1; i >= 0; i--)
            {
                let child = this.children[i];
                {
                    if (child.handleMouseMove(x, y))
                    {
                         active = i;
                         break;
                    }
                    
                }
            }
        }
        if (active !== -1)
        {
            for (let i = this.children.length - 1; i >= 0; i--)
            {
                let child = this.children[i];
                {
                    if (i !== active)
                    {
                        child.handleMouseUp(x, y);
                    }
                
                }
            }
        }
        return false;
    }

    getById(id)
    {
        for (let child of this.children)
        {
            if (child.id === id) return child;
        }
        return null;
    }
    getByTag(tag)
    {
        for (let child of this.children)
        {
            if (child.tag === tag) return child;
        }
        return null;
    }
}


 
class LayoutScroll extends Layout
{
    constructor()
    {
        super();
        this.scrollX = 0;
        this.scrollY = 0;
        this.scrollSpeed = 40;

        this.scrollbarVertical  = new ScrollBar(0);
        this.scrollbarHorizontal = new ScrollBar(1);
        this.dirty = true;
        
    }

    add(widget)
    {
        this.dirty = true;
        return super.add(widget);
    }

    update(dt)
    {
        super.update(dt);
        this.scrollbarVertical.update(dt);
        this.scrollbarHorizontal.update(dt);
     
        
        if (this.dirty)
        {
            this.contentWidth = 0;
            this.contentHeight = 0;
            for (let child of this.children)
            {
                this.contentWidth = Math.max(this.contentWidth,   child.x + child.width);
                this.contentHeight = Math.max(this.contentHeight, child.y + child.height);
            }

            this.scrollbarVertical.setContent(this.contentHeight, this.height);
            this.scrollbarHorizontal.setContent(this.contentWidth, this.width);
            this.dirty = false;
       
        }


        if (this.contentHeight > this.height)
        {
            this.scrollY = this.scrollbarVertical.scrollValue * (this.contentHeight - this.height);
        
        }
        if (this.contentWidth > this.width )
        {
            this.scrollX = this.scrollbarHorizontal.scrollValue * (this.contentWidth - this.width);

        }
    }

    render(g)
    {

        g.save();
        g.setColor(Theme.colors[WINDOW_BACKGROUND]);
        g.fillRect(this.x, this.y, this.width, this.height);
        g.clip(this.x, this.y, this.width, this.height);

        g.ctx.translate(this.x - this.scrollX, this.y - this.scrollY);

        
        super.render(g);
       
        g.restore();
        this.bound.set(this.x, this.y, this.width, this.height);

        if (this.contentHeight > this.height) 
        {
            this.scrollbarVertical.x = this.x + this.width;
            this.scrollbarVertical.y = this.y;
            this.scrollbarVertical.width = 18;
            this.scrollbarVertical.height = this.height;
            this.scrollbarVertical.render(g);
        }

        if (this.contentWidth > this.width) 
        {
            this.scrollbarHorizontal.x = this.x;
            this.scrollbarHorizontal.y = this.y + this.height;
            this.scrollbarHorizontal.width = this.width+18;
            this.scrollbarHorizontal.height = 18;
            this.scrollbarHorizontal.render(g);
        }
    }

    handleMouseWheel(deltaY)
    {
        if (!this.active || !this.visible || !this.isHovered) return false;

        if (this.scrollbarVertical.handleMouseWheel(deltaY)) return true;
        if (this.scrollbarHorizontal.handleMouseWheel(deltaY)) return true;
    
        // if (this.contentHeight > this.height)
        // {
        //     this.scrollY += deltaY * this.scrollSpeed * 0.01;
        //     this.scrollY = Math.max(0, Math.min(this.scrollY, this.contentHeight - this.height));
        //     this.scrollbarVertical.scrollValue = this.scrollY / (this.contentHeight - this.height);
        //     return true; // Só scroll vertical
        // }
        // else if (this.contentWidth > this.width)
        // {
        //     this.scrollX += deltaY * this.scrollSpeed * 0.01;
        //     this.scrollX = Math.max(0, Math.min(this.scrollX, this.contentWidth - this.width));
        //     this.scrollbarHorizontal.scrollValue = this.scrollX / (this.contentWidth - this.width);
        //     return true; // Ou scroll horizontal se não houver vertical
        // }
        return false;
    }
    

    handleMouseDown(mx, my)
    {
        this.isHovered = this.contains(mx, my);
        if (this.scrollbarVertical.handleMouseDown(mx, my)) return true;
        if (this.scrollbarHorizontal.handleMouseDown(mx, my)) return true;

        return  super.handleMouseDown(mx, my);
    }

    handleMouseMove(mx, my)
    {
        this.isHovered = this.contains(mx, my);
        const stateA =this.scrollbarVertical.handleMouseMove(mx, my);
        const stateB =this.scrollbarHorizontal.handleMouseMove(mx, my);

    
    

        return super.handleMouseMove(mx, my);
    }

    handleMouseUp()
    {
        if (this.scrollbarVertical.handleMouseUp()) return true;
        if (this.scrollbarHorizontal.handleMouseUp() ) return true;
        return super.handleMouseUp();
    }
}
