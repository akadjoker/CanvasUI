

class ListBox extends Widget
{
    constructor() {
        super();
        this.items = [];
        this.selectedIndex = -1;
        this.hoverIndex = -1;
        this.scroll = 0;
        this.itemHeight = 30;
        this.maxVisibleItems = 6;
        this.onSelect = null;
        this.itemSelected = false;
        this.dragStartY = 0;
        this.scrollStart = 0;
        this.dragging = false;
        this.size = 0;
 
    }

    add(text)
    {
        this.items.push(text);
        const visibleCount = Math.min(this.maxVisibleItems, this.items.length);
        this.height = visibleCount * this.itemHeight;
        return this;
    }
 

    handleMouseDown(x, y)
    {
        if (!this.active || !this.visible) return false;
        const localY = y - this.y;
        const localX = x - this.x;
         
            if (this.contains(x, y))
            {
                this.isPressed = true;
                this.onClick();
             
                this.dragStartY = y;
                this.scrollStart = this.scroll;
                this.dragTimer = 0;
                this.dragging = true;
                const index = Math.floor((localY + this.scroll) / this.itemHeight);
                if (index >= 0 && index < this.items.length)
                    {
                        this.selectedIndex = index;
                        this.itemSelected = true;
                    if (this.onSelect)
                    {
                        this.onSelect(index, this.items[index]);
                    }
                }
          
            


                return true; // Handled
            }
        
        return false;
    }
    handleMouseMove(x, y)
    {
        if (!this.active || !this.visible) return false;
        const localY = y - this.y;
        const localX = x - this.x;

 
        this.isHovered = this.contains(x, y);
   

        this.itemSelected = false;
        if (this.dragging)
        {
            this.hoverIndex = -1;
            const dy = y - this.dragStartY;
            this.scroll = this.scrollStart - dy;
            this.clampScroll();
            return true;
        }
        
        if (this.isHovered)
        {
            const index = Math.floor((localY + this.scroll) / this.itemHeight);
            this.hoverIndex = index;
            return true;
        }

        this.dragging = false;
        this.hoverIndex = -1;
        
        return false;
    }
    handleMouseUp(x, y)
    {
        this.isPressed = false;
        this.dragging = false;
        this.hoverIndex = -1;
        this.itemSelected = false;
        if (this.contains(x, y))
        {
            return true; // Handled
        }
        
        return false;
    }
    handleMouseWheel(value)
    {
        
        if (!this.active || !this.visible || !this.isHovered) return false;
        
        this.scroll -= value * 10;
        this.clampScroll();
        return false;
    }

    clampScroll()
    {
        const maxScroll = Math.max(0, this.items.length * this.itemHeight - this.maxVisibleItems * this.itemHeight);
        this.scroll = Math.max(0, Math.min(this.scroll, maxScroll));
    }

    render(g) {
        if (!this.visible) return;
    
        const tumb = 5;
        g.setColor(Theme.colors[LISTBOX ]);
        g.fillRect(this.x, this.y, this.width, this.height);
        this.bound.set(this.x, this.y, this.width, this.height);
    
        g.ctx.font = '12px Arial';
        g.ctx.textAlign = 'left';
        g.ctx.textBaseline = 'top';
        
        g.save();
        g.clip(this.x, this.y, this.width, this.height);
        g.ctx.translate(0, -this.scroll);
    
        for (let i = 0; i < this.items.length; i++)
        {
            const itemY = this.y + i * this.itemHeight;
    
            if (i === this.selectedIndex)
            {
                g.setColor(Theme.colors[LISTBOX_SELECTED]);
                g.fillRect(this.x, itemY, this.width-tumb, this.itemHeight);
            } else if (i === this.hoverIndex)
            {
                g.setColor(Theme.colors[LISTBOX_HOVER]);
                g.fillRect(this.x, itemY, this.width-tumb, this.itemHeight);
            }
    
            g.setColor(Theme.colors[LISTBOX_TEXT]);
            g.drawText(this.items[i], this.x + 10, itemY + 8);
        }
    
        g.ctx.translate(0, this.scroll);
        g.restore();

        if (this.isHovered)
        {
            g.setColor(Theme.colors[LISTBOX_BORDER]);
            g.drawRect(this.bound.x, this.bound.y, this.bound.width, this.bound.height);
        }

        const totalHeight = this.items.length * this.itemHeight;
        if (totalHeight > this.height)
        {
            const scrollRatio = this.scroll / (totalHeight - this.height);
            const thumbHeight = Math.max(20, (this.height / totalHeight) * this.height);
            const thumbY = this.y + scrollRatio * (this.height - thumbHeight);
            const barX = this.x + this.width - tumb;

            // Track (barra de fundo)
            g.setColor(Theme.colors[LISTBOX_BAR] );
            g.fillRect(barX, this.y, tumb, this.height);

            // Thumb (progresso atual)
            g.setColor(Theme.colors[LISTBOX_THUMB]);
            g.fillRect(barX, thumbY, tumb, thumbHeight);
        }
      //  g.setColor("#ff0000");
     //  g.drawRect(this.bound.x, this.bound.y, this.bound.width, this.bound.height);
    }
    

    update(dt)
    {
       
    }
}


class ComboBox extends Widget
{
    constructor( onSelect = null) {
        super();
        this.items = [];
        this.selectedIndex = -1;
        this.hoverIndex = -1;
        this.open = false;
        this.scroll = 0;
        this.itemHeight = 30;
        this.maxVisibleItems = 4;
        this.onSelect = onSelect;
        this.dragging = false;
        this.dragStartY = 0;
        this.scrollStart = 0;
        this.boxSize = 20;
        this.lastItem = -1;
        this.default = "Select...";

        this.scale = 0;
        this.tweenOut = new Tween(this, "scale", 0, 1, 0.5, Tween.EASE_OUT_BOUNCE, Tween.MODE_PERSIST, false, false);
        this.tweenOut.stop();

        this.tweenOut.OnEnded = () =>
        {
           
        }

    }

    toggleOpen()
    {

       
       
        this.open = !this.open;
      
    }

    setSize(w, h)
    {
        this.width = w;
        this.height = h;
    
        this.boxSize = Math.min(this.height, this.width * 0.4);
        this.boxSize = Math.max(20, this.boxSize);
    

    }
    

    clampScroll()
    {
        const totalHeight = this.items.length * this.itemHeight;
        const visibleHeight = this.maxVisibleItems * this.itemHeight;
        const maxScroll = Math.max(0, totalHeight - visibleHeight);
        this.scroll = Math.max(0, Math.min(this.scroll, maxScroll));
    }

    pointInBox(px, py)
    {
        return (
            px >= this.x &&
            py >= this.y &&
            px <= this.x + this.width &&
            py <= this.y + this.boxSize
        );
    }

    handleMouseDown(x, y)
    {
        const localY = y - this.y; // y relativo ao início do ComboBox
    
                   

                if (this.open)
                {
                    if (this.contains(x, y))
                    {
                        
                        this.isPressed = true;
                            
                        this.onClick();
        
                        this.dragging = true;
                        this.dragStartY = y;//  localY - this.boxSize + this.scroll;  
                        this.scrollStart = this.scroll;
                        const index = Math.floor((localY + this.scroll - this.boxSize) / this.itemHeight);
                        if (index >= 0 && index < this.items.length)
                        {
                            this.selectedIndex = index;
                        
                        }
                        return true;
                    } else
                    {
                        
                   
                        
                             if (this.open)
                            {
                                this.tweenOut.reset();
                                this.tweenOut.to = 0;
                                this.tweenOut.from = 1;
                                this.tweenOut.ease = Tween.EASE_IN_ELASTIC;
                                this.tweenOut.play();
                            } 
                        this.toggleOpen();
                        return false;
                    }
            } 
    
                
            if (this.pointInBox(x, y))
            {
                this.isPressed = true;
                this.onClick();
                this.toggleOpen();
                return true;
            }
        
       
            
        
        return false;
    }
    handleMouseMove(x, y)
    {
        
        this.isHovered = this.contains(x, y);
        const localY = y - this.y; // y relativo ao início do ComboBox
    
      
    
        if (this.open)
        {
            if (this.dragging)
            {
                const dy = y - this.dragStartY;
                this.scroll = this.scrollStart - dy;
                this.clampScroll();
                return true;
                } 
            else if (this.isHovered)
            {
                const index = Math.floor((localY + this.scroll - this.boxSize) / this.itemHeight);
                this.hoverIndex = index;
            }
            return true
        }
      
        return false;
    }
    handleMouseUp(x, y)
    {

            if (this.pointInBox(x, y))
            {
                
                    this.tweenOut.reset();
    
                        // this.tweenOut.to = 1;
                        // this.tweenOut.from = 0;
                        // this.tweenOut.ease = Tween.EASE_IN_ELASTIC;
                 
                    if (!this.open)
                    {
                        this.tweenOut.to = 0;
                        this.tweenOut.from = 1;
                        this.tweenOut.ease = Tween.EASE_IN_ELASTIC;
                    } else 
                    {
                        this.tweenOut.to = 1;
                        this.tweenOut.from = 0;
                        this.tweenOut.ease = Tween.EASE_OUT_ELASTIC;
                    }
                    this.tweenOut.play();
                    console.log("Play");
                
            }

            this.isPressed = false;
            if (this.dragging)
            {
                this.dragging = false;
            } else if (this.isPressed && this.open)
            {
                const index = Math.floor((localY + this.scroll - this.boxSize) / this.itemHeight);
                if (index >= 0 && index < this.items.length)
                {
                     this.selectedIndex = index;
                    if (this.onSelect) this.onSelect(index, this.items[index]);
                   
                        this.toggleOpen();
                }
                return true;
            }
        
        this.hoverIndex = -1;
  
        return false;
    }
    handleMouseWheel(value)
    {
    
        if (!this.active || !this.visible || !this.open) return false;
 
        this.scroll -= value * this.itemHeight;
        this.clampScroll();
        return true;
    }
   
 

    

    update(dt)
    {
        if (!this.visible) return;

        this.tweenOut.update(dt);

           


        
    }
    
    add(text)
    {
        this.items.push(text);
        const availableHeight = this.height - this.boxSize;
        this.maxVisibleItems = Math.floor(availableHeight / this.itemHeight);
        this.maxVisibleItems = Math.max(3, this.maxVisibleItems); // garantir pelo menos 
        return this;
    }

    render(g)
    {
        if (!this.visible) return;

        const tumb = 6;




                // Atualiza dinamicamente quantos itens visíveis cabem abaixo do botão
        const availableHeight = this.height - this.boxSize;
        this.maxVisibleItems = Math.floor(availableHeight / this.itemHeight);
        this.maxVisibleItems = Math.max(3, this.maxVisibleItems); // garantir pelo menos 3

        // Caixa principal (fechada)
        g.setColor(Theme.colors[COMBOBOX]);
        g.fillRect(this.x, this.y, this.width, this.height);

        g.setColor(Theme.colors[COMBOBOX_TEXT]);
        const label = this.selectedIndex >= 0 ? this.items[this.selectedIndex] : this.default;

        g.ctx.font = '12px Arial';
        g.ctx.textAlign = 'top';
        g.ctx.textBaseline = 'middle';

        const textY = this.y + (this.boxSize*0.5) ; // Centro vertical
        g.drawText(label, this.x + 10, textY);

        // Seta
        g.setColor(Theme.colors[COMBOBOX_ARROW]);
        g.drawText(this.open ? "▲" : "▼", this.x + this.width - 20, textY);



  
        const visibleCount = Math.min(this.maxVisibleItems, this.items.length);
        const listHeight = visibleCount * this.itemHeight;
        this.bound.set(this.x, this.y, this.width, this.boxSize);

        let progresss = listHeight * this.scale;
       // console.log(progresss);
     
        

        if (this.scale>0.01)
        {
            // Fundo da lista
            this.bound.set(this.x, this.y+ this.boxSize, this.width,  listHeight);
            g.save();
            g.setColor(Theme.colors[COMBOBOX_LIST_BACKGROUND]);
            g.fillRect(this.x, this.y + this.boxSize, this.width, progresss);
            g.clip(this.x, this.y + this.boxSize, this.width, progresss);
            g.ctx.translate(0, -this.scroll);
            

            for (let i = 0; i < this.items.length; i++)
            {
                const itemY = this.y + this.boxSize + i * this.itemHeight;

                if (itemY + (this.itemHeight-13) - this.scroll > this.y + this.boxSize + progresss) break;
                if (itemY - this.scroll < this.y + this.boxSize-13) continue;

                if (i === this.selectedIndex)
                {
                    g.setColor(Theme.colors[COMBOBOX_LIST_SELECT]);
                    g.fillRect(this.x, itemY, this.width - tumb, this.itemHeight);
                } else if (i === this.hoverIndex) {
                    g.setColor(Theme.colors[COMBOBOX_LIST_HOVER]);
                    g.fillRect(this.x, itemY, this.width - tumb, this.itemHeight);
                }

                g.setColor(Theme.colors[COMBOBOX_TEXT]);
                const itemTextY = itemY + ((this.itemHeight*0.5) );
                g.drawText(this.items[i], this.x + 10, itemTextY);
            }
            
            g.ctx.translate(0, this.scroll);
            g.restore();
            const totalHeight = this.items.length * this.itemHeight;
            if (totalHeight > this.height)
            {
                const scrollRatio = this.scroll / (totalHeight - listHeight);
                const thumbHeight = Math.max(20, ((this.height+this.boxSize) / totalHeight) * listHeight);
                const thumbY = this.y + this.boxSize + scrollRatio * (listHeight - thumbHeight);
                const barX = this.x + this.width - tumb;
    
                // Track (barra de fundo)
                g.setColor(Theme.colors[LISTBOX_BAR]);
                g.fillRect(barX, this.y + this.boxSize, tumb, listHeight);
    
                // Thumb (progresso atual)
                g.setColor(Theme.colors[LISTBOX_THUMB]);
                g.fillRect(barX, thumbY, tumb, thumbHeight);
            }
        }
            
            // Borda
            g.setColor(Theme.colors[COMBOBOX_BORDER]);
            g.drawRect(this.bound.x, this.bound.y, this.bound.width, this.bound.height);
            //g.drawRect(this.x, this.y, this.width, this.boxSize);
            

        
        
        


     
        
      
    //    g.setColor("#ff0000");
    //    g.drawRect(this.bound.x, this.bound.y, this.bound.width, this.bound.height);
        
    }
}

