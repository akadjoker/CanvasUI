
class TextView extends Widget
{
    constructor(content)
    {
      super();
      this.content = content;
      this.scrollPosition = 0;
      this.maxScroll = 0;
      this.isDraggingScroll = false;
      this.scrollBarWidth = 15;
      this.lineHeight = 20;
    }
    
    render(g)
    {
      const ctx = g.ctx;
      // Fundo
      ctx.fillStyle = '#ecf0f1';
      ctx.fillRect(this.x, this.y, this.width, this.height);
      
      // Área de conteúdo
      ctx.save();
      ctx.beginPath();
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.clip();
      
      // Renderizar texto
      this._renderContent(ctx);
      
      ctx.restore();
      
      // Barra de rolagem
      this._drawScrollBar(g);
    }
    
    _renderContent(ctx)
    {
      ctx.fillStyle = '#34495e';
      ctx.font = '14px Arial';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
      
      const maxWidth = this.width - this.scrollBarWidth - 10;
      const words = this.content.split(' ');
      this.bound.set(this.x, this.y, this.width, this.height);
      
      let line = '';
      let y = this.y + 10 - this.scrollPosition;
      
        for (let i = 0; i < words.length; i++)
        {
        const testLine = line + words[i] + ' ';
        const metrics = ctx.measureText(testLine);
        
            if (metrics.width > maxWidth && i > 0)
            {
          ctx.fillText(line, this.x + 10, y);
          line = words[i] + ' ';
          y += this.lineHeight;
        } else {
          line = testLine;
        }
      }
      
      ctx.fillText(line, this.x + 10, y);
      
      // Calcular altura total do conteúdo
      const contentHeight = y + this.lineHeight - this.y + this.scrollPosition;
      this.maxScroll = Math.max(0, contentHeight - this.height + 20);
    }
    
    _drawScrollBar(g)
    {
        if (this.maxScroll > 0)
        {
        const contentHeight = this.scrollPosition + this.height + this.maxScroll;
        const scrollHeight = Math.max(30, this.height * (this.height / contentHeight));
        const scrollPosition = (this.scrollPosition / this.maxScroll) * (this.height - scrollHeight);
        
        // Trilho da barra de rolagem
        g.setColor(Theme.colors[SCROLL_BAR]);
        g.fillRect(this.x + this.width - this.scrollBarWidth, this.y, this.scrollBarWidth, this.height);
        
        g.setColor(this.isDraggingScroll ? Theme.colors[SCROLL_BAR_THUMB] : Theme.colors[SCROLL_BAR_THUMB_MOVE]);
        g.fillRect(
          this.x + this.width - this.scrollBarWidth + 2, 
          this.y + scrollPosition, 
          this.scrollBarWidth - 4, 
          scrollHeight
        );
      }
    }
    
    _isPointInScrollBar(x, y)
    {
      return x >= this.x + this.width - this.scrollBarWidth && 
             x <= this.x + this.width && 
             y >= this.y && 
             y <= this.y + this.height;
    }


 
    
    handleMouseMove(x, y)
    {
        if (!this.active || !this.visible) return false;
        this.isHovered = this.contains(x, y);
        
      

        if (this.isDraggingScroll && this._isPointInScrollBar(x, y))
        {
        const scrollableHeight = this.height - (this.height * (this.height / (this.maxScroll + this.height)));
        const scrollRatio = (y - this.y) / this.height;
        this.scrollPosition = Math.max(0, Math.min(this.maxScroll, this.maxScroll * scrollRatio));
        return true;
      }
      return this.isHovered;
    }
    
    handleMouseDown(x, y)
    {
        if (this._isPointInScrollBar(x, y))
        {
          this.isDraggingScroll = true;
          return true;
       }
      return false;
    }
  
    handleMouseUp(x, y)
    {
      this.isDraggingScroll = false;
      return false;
    }
    
 
    
    handleMouseWheel(deltaY)
    {
      if (!this.active || !this.visible || !this.isHovered) return false;
        this.scrollPosition += deltaY * 10;
        this.scrollPosition = Math.max(0, Math.min(this.maxScroll, this.scrollPosition));
        return true;
    }
  }
