
 class Window extends Widget
{
     constructor(x, y, width, height, title = "Janela")
     {
         super();
         this.x = x;
         this.y = y;
         this.width = width;
         this.height = height;
        this.title = title;
        this.dragging = false;
        this.resizing = false;
        this.minimized = false;
        this.barHeight = 30;
        this.resizeZone = 15;
        this.dragOffset = { x: 0, y: 0 };
       
        this.closeBound = new Rectangle(this.width - 30, 0, 30, 30);
        this.dragBound = new Rectangle(0, 0, this.width, this.barHeight);
        this.resizeBound = new Rectangle(this.width - this.resizeZone, this.height - this.resizeZone, this.resizeZone, this.resizeZone);
        this.minimizeBound = new Rectangle(this.width - this.resizeZone * 2, this.height - this.resizeZone, this.resizeZone, this.resizeZone);
        this.layout = new Layout();
        this.scale = 0;
        this.tween = new Tween(this, "scale", 0, 1, 1, Tween.EASE_OUT_BOUNCE, Tween.MODE_PERSIST, false,false);
        this.tween.play();
        this.onResize = null;


        
        

    }

    handleMouseDown(x, y)
    {
        const localX = x - this.x;
        const localY = y - this.y;

            if (this.dragBound.contains(x, y))
            {
                this.dragging = true;
                this.dragOffset.x =x- this.x;
                this.dragOffset.y =y - this.y;
                return true;
            }
    
            if (this.minimizeBound.contains(x, y))
            {
                    return true;
            }
    
            if (this.closeBound.contains(x, y))
            {
                return true;
            }
            
    
            if (this.resizeBound.contains(x, y))
            {
                this.resizing = true;
                return true;
            }

            if (this.layout.handleMouseDown( localX - this.layout.x, localY - this.layout.y - this.barHeight))
            {
                return true;
            }
            if (this.bound.contains(x, y))
            {
                return true;
            }

        return false;
    }
    handleMouseMove(x, y)
    {
        const localX = x - this.x;
        const localY = y - this.y;
            if (this.dragging)
            {
                this.x = x - this.dragOffset.x;
                this.y = y - this.dragOffset.y;
                return true;
            }
            if (this.resizing)
            {
                this.width = Math.max(100, x - this.x);
                this.height = Math.max(80, y - this.y);
                if (this.onResize)
                    this.onResize(this.width, this.height);
                return true;
            }
            if (this.dragBound.contains(x, y))
            {
                return true;
            }
    
            
    
            if (this.resizeBound.contains(x, y))
            {
                return true;
            }
            
            if (this.minimizeBound.contains(x, y))
            {
                return true;
            }
        
            if (this.layout.handleMouseMove(localX - this.layout.x, localY - this.layout.y - this.barHeight))
                {
                    return true;
                }
       
        return false;
    }
    handleMouseUp(x, y)
    {
        const localX = x - this.x;
        const localY = y - this.y;
        if (this.contains(x, y))
        { 
            this.dragging = false;
            this.resizing = false;
            if (this.closeBound.contains(x, y))
            {
                this.visible = false;
                return true;
            }
            if (this.minimizeBound.contains(x, y))
            {
                if (!this.tween.playing)
                {
                    this.tween.reset();
                    this.tween.play();
                    this.minimized = !this.minimized;
                }
                return true;
            }
            if (this.layout.handleMouseUp(localX - this.layout.x, localY - this.layout.y - this.barHeight))
            {
                return true;
            }
            
            return true;
            
        }
        
        return false;
    }
    handleMouseWheel(value) { return false; }
   


    update(dt)
    {
        if (!this.visible) return;
        this.layout.update(dt);
        this.tween.update(dt);


        if (this.tween.finished)
        {
          
            if (this.tween.value === 0)
            {
                this.tween.to = 1;
                this.tween.from = 0;
                this.tween.ease = Tween.EASE_IN_ELASTIC;
            } else 
            {
                this.tween.to = 0;
                this.tween.from = 1;
                this.tween.ease = Tween.EASE_OUT_ELASTIC;
            }
            
        }

        
    }


    render(g) {
        if (!this.visible) return;
    
        this.closeBound.set(this.x + this.width - 27, this.y + 4, 20, 20);
        this.minimizeBound.set(this.x + this.width - 48, this.y + 4, 20, 20);
        this.dragBound.set(this.x, this.y, this.width - 50, this.barHeight);
        this.resizeBound.set(this.x + this.width - this.resizeZone, this.y + this.height - this.resizeZone, this.resizeZone, this.resizeZone);
        this.bound.set(this.x, this.y, this.width, this.height);
    
        const onClose = this.closeBound.contains(Input.mouseX, Input.mouseY);
        const onMinimize = this.minimizeBound.contains(Input.mouseX, Input.mouseY);
        const onDrag = this.dragBound.contains(Input.mouseX, Input.mouseY);
        const onResize = this.resizeBound.contains(Input.mouseX, Input.mouseY);

        g.ctx.font = '13px Arial';
        g.ctx.textAlign = 'left';
        g.ctx.textBaseline = 'middle';
        
     
        const w = g.measureText(this.title);
        const h = 16;
    
        // Top bar
        g.setColor(onDrag ? Theme.colors[WINDOW_BAR_HOVER] : Theme.colors[WINDOW_BAR]);
        g.fillRect(this.x, this.y, this.width, this.barHeight);
    
        // Título
        g.setColor(Theme.colors[WINDOW_TITLE]);
        g.drawText(this.title, this.x + 2, this.y+(this.barHeight*0.5) );
    
        // Botões
        g.setColor(Theme.colors[WINDOW_BUTTON_CLOSE]);
        g.fillRect(this.x + this.width - 25, this.y + 10, 15, 15); // [×]
        g.setColor(Theme.colors[WINDOW_BUTTON_MINIMIZE]);
        g.fillRect(this.x + this.width - 45, this.y + 10, 15, 15); // [–]
    
        // Símbolos
        g.setColor(onClose ? Theme.colors[WINDOW_BUTTON_SYMBOL_HOVER] : Theme.colors[WINDOW_BUTTON_SYMBOL]);
        g.drawText("×", this.x + this.width - 22, this.y + 20);
    
        g.setColor(onMinimize ? Theme.colors[WINDOW_BUTTON_SYMBOL_HOVER] : Theme.colors[WINDOW_BUTTON_SYMBOL]);
        g.drawText("–", this.x + this.width - 42, this.y + 20);
    
        // Conteúdo
        if (this.visible)
        {
            g.save();
            g.clip(this.x, this.y + this.barHeight, this.width, this.height - this.barHeight);
            g.ctx.translate(this.x, this.y + this.barHeight);
            g.ctx.scale(1, this.scale);
    
            g.setColor(Theme.colors[WINDOW_BACKGROUND]);
            //  g.fillRect(0, 0, this.width, this.height - this.barHeight);
            g.drawRoundedRect(0, 0, this.width, this.height - this.barHeight,4);
           
            if (onResize)
            {
                g.setColor(Theme.colors[WINDOW_RESIZE_LINES]);
                g.drawLine(this.width - 20, this.height - this.barHeight, this.width - 1, this.height - this.barHeight - 20);
                g.drawLine(this.width - 10, this.height - this.barHeight, this.width - 1, this.height - this.barHeight - 10);
            }
         

    
            this.layout.width = this.width;
            this.layout.height = this.height - this.barHeight;
            this.layout.render(g);
            g.restore();
        }


           // g.setColor("rgb(255,0,0)");
            // g.drawRect(this.closeBound.x, this.closeBound.y, this.closeBound.width, this.closeBound.height);
            // g.drawRect(this.minimizeBound.x, this.minimizeBound.y, this.minimizeBound.width, this.minimizeBound.height);
            // g.drawRect(this.dragBound.x, this.dragBound.y, this.dragBound.width, this.dragBound.height);
        //g.drawRect(this.resizeBound.x, this.resizeBound.y, this.resizeBound.width, this.resizeBound.height);
  //      g.drawRect(this.bound.x, this.bound.y, this.bound.width, this.bound.height);
//
    }
    
}
