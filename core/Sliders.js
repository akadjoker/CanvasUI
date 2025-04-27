

class Slider extends Widget
{
    constructor(min = 0, max = 1, step = 0.01, value = 0, orientation = 0)
    {
        super();
        this.min = min;
        this.max = max;
        this.step = step;
        this.value = value;
        this.orientation = orientation;
        this.dragging = false;
        this.onChange = null;
        this.padding = 4;
        this.knob = 8;
    }

    setValue(val)
    {
        this.value = Math.min(this.max, Math.max(this.min, val));
        if (this.onChange) this.onChange(this.value);
    }

    getPercent() {
        return (this.value - this.min) / (this.max - this.min);
    }


    handleMouseDown(x, y)
    {
        if (!this.active || !this.visible) return false;
        if (this.contains(x, y))
        {
            this.isPressed = true;
            this.dragging = true;
            return true; // Handled
        }
        
     

        return false;
    }
    handleMouseMove(x, y)
    {
        if (!this.active || !this.visible) return false;
        const localX = x - this.x;
        const localY = y - this.y;


        this.isHovered = this.contains(x, y);
          
        if (this.dragging)
        { // Mouse move
            const percent = this.orientation === 0
                ? localX / this.width
                : 1 - (localY / this.height);
            const rawValue = this.min + percent * (this.max - this.min);
            const stepped = Math.round(rawValue / this.step) * this.step;
            this.setValue(stepped);
            return true;
        }
                    
            
        return false;
    }
    handleMouseWheel(value)
    {
        
        if (!this.active || !this.visible || !this.isHovered) return false;
     
        this.value = Math.max(this.min, Math.min(this.max, this.value - (value*this.step)));

        return false;
    }

    handleMouseUp(x, y)
    {
        this.dragging = false;
        this.isHovered = false;
        if (this.contains(x, y)) 
        {
              return false;

        }
        return false;
    }
   

    render(g) {
        if (!this.visible) return;

        g.ctx.font = '14px Arial';
        g.ctx.textAlign = 'left';
        g.ctx.textBaseline = 'top';
        
        const txt = this.value.toFixed(2);
        const w = g.measureText(txt);
        const h = 16;
      
        
        this.bound.set(this.x, this.y, this.width, this.height);
    
        // Track externo
        g.setColor(Theme.colors[SLIDER]);
        if (this.orientation === 0)
            g.drawRoundedRect(this.x , this.y, this.width , this.height, 4);
        else
            g.drawRoundedRect(this.x, this.y , this.width, this.height , 4);
    
        // Track interior
        g.setColor(Theme.colors[SLIDER_TRACK]);
        if (this.orientation === 0)
            g.fillRect(this.x, this.y + this.height / 2 - 3, this.width, 6);
        else
            g.fillRect(this.x + (this.width) / 2 - 3, this.y, 6, this.height);
    
        // // Fill
        const percent = this.getPercent();
        g.setColor(Theme.colors[SLIDER_FILL]);
        if (this.orientation === 0)
            g.fillRect(this.x, this.y + this.height / 2 - 3, (this.width) * percent, 6);
        else
            g.fillRect(this.x + (this.width) / 2 - 3, this.y + this.height * (1 - percent), 6, this.height * percent);
    
        // Thumb
        g.setColor(Theme.colors[SLIDER_THUMB]);
        if (this.orientation === 0)
        {
            const tx = (this.x+this.knob) + (this.width-(this.knob*2)) * percent ;
            g.fillCircle(tx , this.y + this.height / 2, this.knob);
        } else
        {
            const ty = (this.y+this.knob) + (this.height-(this.knob*2)) * (1 - percent);
            g.fillCircle(this.x + (this.width) / 2, ty , this.knob);
        }
    
        // Valor
        g.setColor(Theme.colors[SLIDER_TEXT]);
        if (this.orientation === 0)
            {
                g.drawText(txt, this.x + this.width+this.padding, this.y + this.height * 0.5 - (h * 0.5));
            } else
            {
                g.drawText(txt, this.x + (this.width*0.5)-(w*0.5), this.y + this.height+this.padding );
        }
        
        if (this.isHovered)
        {
            g.setColor(Theme.colors[SLIDER_BORDER]);
            g.drawRect(this.bound.x, this.bound.y, this.bound.width, this.bound.height);
        }
    

    // g.setColor("#ff0000");
    // g.drawRect(this.bound.x, this.bound.y, this.bound.width, this.bound.height);
        
    }
    
}


class ProgressBar extends Widget
{
    constructor(max,orientation = 0)
    {
        super();
        this.value = 0;
        this.max = max;
        this.orientation = orientation;
    }

    setValue(val)
    {
        this.value = Math.max(0, Math.min(this.max, val));
    }
    render(g)
    {
        if (!this.visible) return;
    
        const percent = this.value / this.max;
    
        // Fundo
        g.setColor(Theme.colors[PROGRESS_BAR]);
        g.fillRect(this.x, this.y, this.width, this.height);
    
        // Barra de progresso
        if (this.orientation === 0)
            {
            const pos = this.width * percent;
            
            g.ctx.font = '12px Arial';
            g.ctx.textAlign = 'left';
            g.ctx.textBaseline = 'top';

            const txt = this.value.toFixed(2);
            const w = g.measureText(txt);
            const h =14;
            g.setColor(Theme.colors[PROGRESS_BAR_FILL]);
            g.fillRect(this.x, this.y, pos, this.height);
 
            g.setColor(Theme.colors[PROGRESS_BAR_TEXT]);
            g.drawText(txt, this.x + (this.width * 0.5) - (w * 0.5), this.y + (this.height * 0.5) - (h * 0.5));
            
            g.setColor(Theme.colors[PROGRESS_BAR_BORDER]);
            g.drawRect(this.x, this.y, this.width, this.height);
        } else
        {
            const pos = this.y + this.height * (1 - percent);
            g.setColor(Theme.colors[PROGRESS_BAR_FILL]);
            g.fillRect(this.x, pos, this.width, this.height * percent);
            g.setColor(Theme.colors[PROGRESS_BAR_BORDER]);
            g.drawRect(this.x, this.y, this.width, this.height);
          
        }
    }
    
}




class Stepper extends Widget
{
    constructor(min = 0, max = 10, step = 1, value = 0, onChange = null) {
        super();
        this.min = min;
        this.max = max;
        this.step = step;
        this.value = value;
        this.onChange = onChange;
        this.focus = false;
        this.btnSize = 20;
        this.width = this.btnSize * 4;
        this.height = this.btnSize;
        this.hoverMinus = false;
        this.hoverPlus = false;
        this.state = 0;
        this.progressive = false;
        this.plus = new Rectangle(0, 0,10,10);
        this.minus = new Rectangle(0, 0, 10, 10);
        this.orientation = 0;
    }


    handleMouseDown(x, y)
    {
        if (!this.active || !this.visible) return false;
        if (this.contains(x, y))
        {
            this.isHovered = true;
            this.isPressed = true;
    
            if (this.plus.contains(x, y))
            {
                this.state |= 1; // PRESS_PLUS
                this.value = Math.min(this.max, this.value + this.step);
                if (this.onChange) this.onChange(this.value);
                this.focus = true;
            }
            else if (this.minus.contains(x, y))
            {
                this.state |= 2; // PRESS_MINUS
                this.value = Math.max(this.min, this.value - this.step);
                if (this.onChange) this.onChange(this.value);
            }
    
            this.onClick();
            return true; // handled
        }
        return false;
    }
    
    handleMouseMove(x, y)
    {
        if (!this.active || !this.visible) return false;
        const wasHovered = this.isHovered;
        this.isHovered = this.contains(x, y);
    
        // Hover Plus
        if (this.plus.contains(x, y))
            this.state |= 4;   // ativa HOVER_PLUS
        else
            this.state &= ~4;  // limpa HOVER_PLUS
    
        // Hover Minus
        if (this.minus.contains(x, y))
            this.state |= 8;   // ativa HOVER_MINUS
        else
            this.state &= ~8;  // limpa HOVER_MINUS
    
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
            this.state &= ~1; 
            this.state &= ~2;  
              return false;

        }
        return false;
    }

    handleMouseWheel(value)
    {
        
        if (!this.active || !this.visible || !this.isHovered) return false;
        this.value = Math.max(this.min, Math.min(this.max, this.value - (value*this.step)));
        if (this.onChange) this.onChange(this.value);
        return false;
    }

    

    render(g)
    {
        if (!this.visible) return;

 

        g.ctx.font = '12px Arial';
        g.ctx.textAlign = 'center';
        g.ctx.textBaseline = 'middle';

        const txt = this.value;
        const w = 12;
        const h = 12;
        this.bound.set(this.x, this.y, this.width, this.height);
        this.plus.set(this.x + this.width - this.btnSize, this.y, this.btnSize, this.height);
        this.minus.set(this.x, this.y, this.btnSize, this.height);


 

        // Caixa principal
         g.setColor(Theme.colors[STEPPER]);
         g.fillRect(this.x, this.y, this.width, this.height);


            // Minus
            if (this.state & 2) // Pressed
            {
                g.setColor(Theme.colors[STEPPER_PRESS]);
            }
            else if (this.state & 8) // Hover
            {
                g.setColor(Theme.colors[STEPPER_HOVER]);
            }
            else
            {
                g.setColor(Theme.colors[STEPPER_BUTTON]);
            }
            g.fillRect( this.minus.x, this.minus.y, this.minus.width, this.minus.height);
        g.setColor(Theme.colors[STEPPER_TEXT]);
        g.drawText("−", this.minus.x+(this.minus.width*0.5), this.minus.y+(this.minus.height*0.5));
        
        // Plus
        if (this.state & 1) // Pressed
        {
            g.setColor(Theme.colors[STEPPER_PRESS]);
        }
        else if (this.state & 4) // Hover
        {
            g.setColor(Theme.colors[STEPPER_HOVER]);
        }
        else
        {
            g.setColor(Theme.colors[STEPPER_BUTTON]);
        }
        g.fillRect( this.plus.x, this.plus.y, this.plus.width, this.plus.height);
        g.setColor(Theme.colors[STEPPER_TEXT]);
        g.drawText("+", this.plus.x+(this.plus.width*0.5), this.plus.y+(this.plus.height*0.5));


        g.ctx.lineWidth = this.isHovered ? 2 : 1;
        if (this.isHovered)
        {
                g.setColor(Theme.colors[STEPPER_BORDER]);
                g.drawRect(this.x, this.y, this.width, this.height);
            }
        g.ctx.lineWidth = 1;

        // Valor

        g.setColor(Theme.colors[STEPPER_TEXT]);
        g.drawText(txt, this.x + this.width / 2, this.y + (this.height * 0.5));
        


        // g.setColor("#ff0000");
        // //g.drawRect(this.bound.x, this.bound.y, this.bound.width, this.bound.height);
        // g.setColor("#ff00ff");
        // g.drawRect(this.minus.x, this.minus.y, this.minus.width, this.minus.height);
        // g.setColor("#00ff00");
        // g.drawRect(this.plus.x, this.plus.y, this.plus.width, this.plus.height);
    }
}

class ScrollBar extends Widget
{
    constructor(orientation = 0)
    {
        super();
        this.orientation = orientation; // vertical ou horizontal

        this.trackColor = "#444";
        this.thumbColor = "#888";

        this.scrollValue = 0; // de 0.0 a 1.0
        this.visibleRatio = 0.2; // 20% visível inicialmente

        this.dragging = false;
        this.dragStartMouse = 0;
        this.dragStartScroll = 0;
    }

    
    render(g)
    {

        g.setColor(Theme.colors[SCROLL_BAR]);
        g.fillRect(this.x, this.y, this.width, this.height, this.trackColor);
        this.bound.set(this.x, this.y, this.width, this.height);

        g.setColor(this.dragging ? Theme.colors[SCROLL_BAR_THUMB] : Theme.colors[SCROLL_BAR_THUMB_MOVE]);
        
        if (this.orientation === 0)
        {
            const thumbHeight = this.height * this.visibleRatio;
            const thumbY = this.y + this.scrollValue * (this.height - thumbHeight);
            this.thumbX = this.x+1;
            this.thumbY = thumbY;
            this.thumbWidth = this.width-2;
            this.thumbHeight = thumbHeight;

            
            g.fillRect(this.thumbX, this.thumbY, this.thumbWidth, this.thumbHeight, this.thumbColor);
        } else
        {
            const thumbWidth = this.width * this.visibleRatio;
            const thumbX = this.x + this.scrollValue * (this.width - thumbWidth);
            this.thumbX = thumbX;
            this.thumbY = this.y+1;
            this.thumbWidth = thumbWidth;
            this.thumbHeight = this.height-2;

            
           g.fillRect(this.thumbX, this.thumbY, this.thumbWidth, this.thumbHeight, this.thumbColor);
        }
    }

    setContent(totalSize, viewSize)
    {
        if (totalSize <= viewSize)
        {
            this.visibleRatio = 1;
        } else
        {
            this.visibleRatio = viewSize / totalSize;
        }
    }

    scrollBy(delta)
    {
        this.scrollValue = Math.max(0, Math.min(1, this.scrollValue + delta));
    }

    isInsideThumb(mx, my)
    {
        return mx >= this.thumbX && mx <= this.thumbX + this.thumbWidth &&
               my >= this.thumbY && my <= this.thumbY + this.thumbHeight;
    }

    handleMouseDown(mx, my)
    {
        if (this.isInsideThumb(mx, my))
        {
            this.dragging = true;
            this.dragStartMouse = (this.orientation === 0) ? my : mx;
            this.dragStartScroll = this.scrollValue;
            return true;
        }
        return false;
    }

    handleMouseMove(mx, my)
    {
        this.isHovered = this.contains(mx, my);
        if (this.dragging)
        {
            const totalMove = (this.orientation === 0) ? my - this.dragStartMouse : mx - this.dragStartMouse;
            const totalLength = (this.orientation === 0) ? this.height - this.thumbHeight : this.width - this.thumbWidth;
            if (totalLength > 0)
            {
                this.scrollValue = this.dragStartScroll + (totalMove / totalLength);
                this.scrollValue = Math.max(0, Math.min(1, this.scrollValue));
            }
            return true;
        }
        return false;
    }

    handleMouseUp()
    {
        this.dragging = false;

    }
    handleMouseWheel(value)
    {
        if (!this.active || !this.visible || !this.isHovered) return false;
        this.scrollValue += value * 0.1;
        this.scrollValue = Math.max(0, Math.min(1, this.scrollValue));
        return true;
    }
}
