

class FieldValue extends Widget
{
    constructor(label = "Value", value = 0.0, min = -Infinity, max = Infinity, step = 0.01)
    {
        super();
        this.label = label;
        this.value = value;
        this.min = min;
        this.max = max;
        this.step = step;
        this.hovered = false;
        this.dragging = false;
        this.startX = 0;
        this.startValue = value;
        this.onChange = null;
        this.fraction = 1;
    }

    setValue(v)
    {
        this.value = Math.min(this.max, Math.max(this.min, v));
        if (this.onChange) this.onChange(this.value);
    }

    handleMouseDown(x, y)
    {
        if (!this.active || !this.visible) return false;
        if (!this.contains(x, y)) return false;

        this.dragging = true;
        this.startX =  x;
        this.startValue = this.value;
        this.isHovered = true;

        return false;
    }
    handleMouseMove(x, y)
    {
        if (!this.active || !this.visible) return false;
        
            if(this.dragging)
            {
                
                const delta = x - this.startX;
                this.isHovered = true;
                const newVal = this.startValue + delta * this.step;
                this.setValue(newVal);
                
                return true;
            }
            if (this.contains(x, y)) 
            {
                this.isHovered = true;
                return true;
            }  
            
            this.isHovered = false;
                    
            
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

        this.bound.set(this.x, this.y, this.width, this.height);
    
        // Fundo
        g.setColor(Theme.colors[FIELD]);
        g.fillRect(this.x, this.y, this.width, this.height);
    
   
        g.ctx.font = '11px Arial';
        g.ctx.textAlign = 'left';
        g.ctx.textBaseline = 'middle';
        const valStr = this.value.toFixed(this.fraction);
        const textSize = g.measureText(valStr);
    
        // Label
        const labelW = textSize;
        g.setColor(Theme.colors[FIELD_LABEL]);
        g.drawText(this.label, this.x + 4, this.y + this.height / 2);
    
        // Valor
        g.setColor(Theme.colors[FIELD_TEXT]);
        g.drawText(valStr, this.x+ (this.width) - (textSize+5)  , this.y + this.height / 2 );
    
        // Hover
        if (this.isHovered)
        {
            g.setColor(Theme.colors[FIELD_HOVER]);
            g.drawRect(this.x, this.y, this.width, this.height);
        }
  
       //g.setColor("#ff0000");
     //  g.drawRect(this.bound.x, this.bound.y, this.bound.width, this.bound.height);
    }
    
}