
class Button extends Widget
{
    constructor(x,y,text = "Button", onClick = null)
    {
        super();
        this.x = x;
        this.y = y;
        this.width  = 90;
        this.height = 30;
        this.text = new Label(0, 0, text);
        this.text.setColor("#000");
        this.text.align = AlignHorizontal.Center;
        this.color = Theme.colors[BUTTON];
        this.round = 8;
        this.OnPressed = onClick;
   
        
    }

    onClick()
    {
       if (this.OnPressed)
       {
           this.OnPressed();
       }
    }
   

    render(g)
    {
        if (!this.visible) return;

        this.bound.set(this.x, this.y, this.width, this.height);

        

        let color = this.color;
        if (this.isHovered)
        {
            color = Theme.colors[BUTTON_HOVER];
        }  
        if (this.isPressed)
        {
            color = Theme.colors[BUTTON_PRESS];
        }
       

        g.setColor(color);

        g.drawRoundedRect(this.x, this.y, this.width, this.height, this.round);
  
        this.text.x = this.x + (this.width/2);
        this.text.y = this.y + (this.height/2);
        this.text.render(g);
 
    }

    debug(g)
    {
        if (!this.lines) return;
        g.setColor("#ff0000");
        g.drawRect(this.x, this.y, this.width, this.height);
    }


 
}




 class ToggleButton extends Widget
{
     constructor(x, y, checked = false, onChange = null)
     {
        super();
        this.x = x;
        this.y = y;
        this.checked = checked;
        this.onChange = onChange;
        this.width = 50;
        this.height = 25;
        this.knobRadius = 10;
        this.padding = 3;
        this.width  = 90;
        this.height = 20;
        this.labelOn = "ON";
        this.labelOff = "OFF";
        this.textColor = "#fff";
        this.fontSize = 12;
    }


  
    onClick()
    {
       this.checked = !this.checked;
       if (this.onChange)
       {
           this.onChange(!this.checked);
       }
    }
 

    render(g) {
        if (!this.visible) return;
    
        const knobX = this.x + (this.checked ? this.width - this.height : 0) + this.padding;
        const knobY = this.y + this.padding;
     
        
        let knobSize = this.height - 2 * this.padding;
        if (knobSize < 1.0) knobSize = 1.0;
      
    
        // Fundo (base do botão)
        g.setColor(this.checked ? Theme.colors[TOGGLE_CHECKED] : Theme.colors[TOGGLE]);
        g.drawRoundedRect(this.x, this.y, this.width, this.height, this.height / 2);
    
    
        const label = this.checked ? this.labelOn : this.labelOff;
        g.setColor(Theme.colors[TOGGLE_TEXT]);
        g.ctx.font = 'Bold 10px Arial';
        g.ctx.textAlign = 'left';
        g.ctx.textBaseline = 'top';
        const textSize = g.measureText(this.text);
        const h = 10;

        this.bound.set(this.x, this.y, this.width+textSize, this.height);

        g.drawText(label, this.x+(this.width / 2)-(h*0.5), this.y + (this.height - h) / 2);
    
        // // Knob
        g.setColor(Theme.colors[TOGGLE_KNOB]);
        g.fillCircle(knobX + knobSize / 2, knobY + knobSize / 2, knobSize / 2);
    
        // Hover outline
        if (this.isHovered)
        {
            g.setColor(Theme.colors[TOGGLE_HOVER]);
            g.drawCircle(knobX + knobSize / 2, knobY + knobSize / 2, knobSize / 2);
        }
    }
    
}
