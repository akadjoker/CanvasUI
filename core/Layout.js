import { Widget, Margin } from "./Widget.js";




export class Layout extends Widget
{
    constructor(x = 0, y = 0, width = 1, height = 1)
    {
        super(x, y, width, height);
        this.children = [];
        this.debug = false;
        this.margin = new Margin(0, 0, 0, 0);
        this.usePercentage = false;

    }

    clear()
    {
        this.children = [];
    }

    setMargins(left = 0, top = 0, right = 0, bottom = 0)
    {
        this.margin.left = left;
        this.margin.top = top;
        this.margin.right = right;
        this.margin.bottom = bottom;
    }

    add(widget)
    {
        this.children.push(widget);
        return widget;
    }


    update(dt)
    {
        if (!this.visible) return;
        this.children.forEach(child => child.update(dt));
    }

    render(g)
    {
        if (!this.visible) return;
        if (this.debug)
        {
           this.renderDebug(g);

        }
        this.children.forEach(child =>
        {
            child.reset();
            if (child.visible) child.render(g);
        });
      //  console.log("render",this.x, this.y, this.width, this.height);
    }

    resize(width, height)
    {
        this.width = width;
        this.height = height;
        this.updateLayout();
    }
    
    

    handleMouse(type, x, y, button)
    {
       // console.log("layout handleMouse", type, x, y, button);
        if (!this.enabled) return false;

      

        let ignore = -1;
        
        // propagar do topo (último desenhado) para o fundo
        for (let i = this.children.length - 1; i >= 0; i--)
        {
            const child = this.children[i];
            if (child.handleMouse(type, x, y, button))
            {
                ignore = i;
                break;
            }
        
        }

        for (let i = this.children.length - 1; i >= 0; i--)
        {
            if (i !== ignore)
            {
                const child = this.children[i];
                child.handleMouseOut(x, y);
            }
        }

        return false;
    }
    renderDebug(g) {
        // 1. Área total do widget com margens
        const outerX = this.x - this.margin.left;
        const outerY = this.y - this.margin.top;
        const outerW = this.width + this.margin.left + this.margin.right;
        const outerH = this.height + this.margin.top + this.margin.bottom;
    
        // 2. Desenhar margem (zona em volta do widget)
        g.setColor("rgba(122, 211, 100, 0.2)"); // laranja
        g.fillRect(outerX, outerY, outerW, outerH);
    
        // 3. Desenhar conteúdo 
        g.setColor("rgba(255, 123, 0, 0.62)"); // vermelho
        g.fillRect(this.x, this.y, this.width, this.height);
    
   
    }
    
}

export class VerticalLayout extends Layout {
    constructor(x = 0, y = 0, width = 100, height = 100) {
        super(x, y, width, height);
        this.setMargins(10, 10, 10, 10);
        this.usePercentage = false;
        this.spacing = 5;
    }

    updateLayout() {
        const count = this.children.length;
        if (count === 0) return;

        const m = this.margin;
        const spacing = this.spacing;

        const innerWidth = this.width - m.left - m.right;
        const innerHeight = this.height - m.top - m.bottom;

        let totalPercent = 0;
        for (const child of this.children)
        {
            totalPercent += child.heightPercent;
        }

        const totalSpacing = spacing * (count - 1);
        const fixedHeight = innerHeight - totalSpacing;
        const childHeight = fixedHeight / count;

        let currentY = this.y + m.top;

        for (let i = 0; i < count; i++) {
            const child = this.children[i];

            child.x = this.x + m.left;
            child.y = currentY;

            if (this.usePercentage)
                child.height = fixedHeight * child.heightPercent;
            else
                child.height = childHeight;

            child.width = innerWidth;

            child.resize(innerWidth, child.height);

            currentY += child.height + spacing;
        }
    }
}


export class HorizontalLayout extends Layout
{
    constructor(x = 0, y = 0, width = 100, height = 100)
    {
        super(x, y, width, height);
        this.setMargins(10, 10, 10, 10);
        this.usePercentage = false;
        this.spacing = 5;
  
    }
    updateLayout()
    {
        const count = this.children.length;
        if (count === 0) return;
    
        const m = this.margin;
        const spacing = this.spacing ;
    
        const innerWidth = this.width - m.left - m.right;
        const innerHeight = this.height - m.top - m.bottom;
    
        let totalPercent = 0;
        for (const child of this.children)
        {
            totalPercent += child.widthPercent;
        }
    
        const totalSpacing = spacing * (count - 1);
        const fixedWidth = (innerWidth - totalSpacing);
        const childWidth = fixedWidth / count;
    
        let currentX = this.x + m.left;
    
        for (let i = 0; i < count; i++)
        {
            const child = this.children[i];
    
            child.x = currentX;
            child.y = this.y + m.top;
    
            if (this.usePercentage)
                child.width = fixedWidth * child.widthPercent ;
            else
                child.width = childWidth;
    
            child.height = innerHeight;
    
            child.resize(child.width, innerHeight);
    
            currentX += child.width  + spacing;

        }
    }
    
    
}


export class AnchorLayout extends Layout
{
    constructor(x = 0, y = 0, width = 100, height = 100)
    {
        super(x, y, width, height);
        this.anchors = new Map(); // child -> anchorConfig
    }

    setAnchor(child, anchor)
    {
        this.add(child);
        this.anchors.set(child, anchor);
    }

    updateLayout()
    {
        const parentX = this.x + this.margin.left;
        const parentY = this.y + this.margin.top;
        const parentW = this.width - this.margin.left - this.margin.right;
        const parentH = this.height - this.margin.top - this.margin.bottom;

        for (const child of this.children)
        {
            const anchor = this.anchors.get(child) || {};

            // Horizontal
            if (anchor.left !== undefined && anchor.right !== undefined)
            {
                child.x = parentX + anchor.left;
                child.width = parentW - anchor.left - anchor.right;
            } else if (anchor.centerX !== undefined)
            {
                const offset = anchor.centerX;
                child.x = parentX + (parentW / 2) - (child.width / 2) + offset;
            } else if (anchor.left !== undefined)
            {
                child.x = parentX + anchor.left;
            } else if (anchor.right !== undefined)
            {
                child.x = parentX + parentW - child.width - anchor.right;
            }

            // Vertical
            if (anchor.top !== undefined && anchor.bottom !== undefined)
            {
                child.y = parentY + anchor.top;
                child.height = parentH - anchor.top - anchor.bottom;
            } else if (anchor.centerY !== undefined)
            {
                const offset = anchor.centerY;
                child.y = parentY + (parentH / 2) - (child.height / 2) + offset;
            } else if (anchor.top !== undefined)
            {
                child.y = parentY + anchor.top;
            } else if (anchor.bottom !== undefined)
            {
                child.y = parentY + parentH - child.height - anchor.bottom;
            }

            child.resize(child.width, child.height);
        }
    }
}



export class ConstraintLayout extends Layout {
    constructor(x = 0, y = 0, width = 100, height = 100) {
        super(x, y, width, height);
        this.anchors = new Map(); // Map<Widget, AnchorInfo>
    }

    setAnchor(widget, anchorInfo) {
        this.anchors.set(widget, anchorInfo);
        this.add(widget);
    }
    updateLayout()
    {
        const parentX = this.x + this.margin.left;
        const parentY = this.y + this.margin.top;
        const parentW = this.width - this.margin.left - this.margin.right;
        const parentH = this.height - this.margin.top - this.margin.bottom;
    
        // 1ª Passagem – Calcular x e y
        for (const child of this.children)
        {
            const anchor = this.anchors.get(child);
            if (!anchor) continue;
    
            // Horizontal
            if (anchor.leftToLeft)
            {
                const ref = anchor.leftToLeft;
                child.x = (ref === this ? parentX : ref.x) + (anchor.marginLeft || 0);
            }
            else if (anchor.leftToRight)
            {
                const ref = anchor.leftToRight;
                child.x = (ref === this ? parentX + parentW : ref.x + ref.width) + (anchor.marginLeft || 0);
            }else if (anchor.rightToRight)
                {
                    const right = (anchor.rightToRight === this ? parentX + parentW : anchor.rightToRight.x + anchor.rightToRight.width) - (anchor.marginRight || 0);
                    child.x = right - child.width;
                }
        
                else if (anchor.rightToLeft)
                {
                    const right = (anchor.rightToLeft === this ? parentX : anchor.rightToLeft.x) - (anchor.marginRight || 0);
                    child.x = right - child.width;
                }
    
            // Vertical
            if (anchor.topToTop)
            {
                const ref = anchor.topToTop;
                 child.y = (ref === this ? parentY : ref.y) + (anchor.marginTop || 0);
            }
            else if (anchor.topToBottom)
            {
                const ref = anchor.topToBottom;
                child.y = (ref === this ? parentY + parentH : ref.y + ref.height) + (anchor.marginTop || 0);
            }else if (anchor.bottomToBottom)
                {
                    const bottom = (anchor.bottomToBottom === this ? parentY + parentH : anchor.bottomToBottom.y + anchor.bottomToBottom.height) - (anchor.marginBottom || 0);
                    child.y = bottom - child.height;
                }
                else if (anchor.bottomToTop)
                {
                    const bottom = (anchor.bottomToTop === this ? parentY : anchor.bottomToTop.y) - (anchor.marginBottom || 0);
                    child.y = bottom - child.height;
                }
        }
    
        // 2ª Passagem – Calcular width e height (se ambos os lados forem definidos)
        for (const child of this.children)
        {
            const anchor = this.anchors.get(child);
            if (!anchor) continue;
    

                
            // WIDTH
            if (anchor.leftToRight && anchor.rightToLeft)
                {
                    const left = (anchor.leftToRight === this 
                        ? parentX 
                        : anchor.leftToRight.x + anchor.leftToRight.width) 
                        + (anchor.marginLeft || 0);
                
                    const right = (anchor.rightToLeft === this 
                        ? parentX + parentW 
                        : anchor.rightToLeft.x) 
                        - (anchor.marginRight || 0);
                
                    child.x = left;
                    child.width = right - left;
                }
                
            
    
            // HEIGHT
            if (anchor.topToBottom && anchor.bottomToTop)
            {
          
                const topRef    = anchor.topToBottom;
                const bottomRef = anchor.bottomToTop;
            
                const top = (topRef === this ? parentY + parentH : topRef.y + topRef.height)  + (anchor.marginTop || 0);
                const bottom = (bottomRef === this ? parentY : bottomRef.y) - (anchor.marginBottom || 0);
            
                child.y = top;
                child.height = bottom - top;
            }
            

            if (anchor.leftToLeft && anchor.rightToRight)
            {
                const left = (anchor.leftToLeft === this ? parentX : anchor.leftToLeft.x) + (anchor.marginLeft || 0);
                const right = (anchor.rightToRight === this ? parentX + parentW : anchor.rightToRight.x + anchor.rightToRight.width) - (anchor.marginRight || 0);
                child.x = left;
                child.width = right - left;
            }
            
            if (anchor.topToTop && anchor.bottomToBottom)
            {
                const top = (anchor.topToTop === this ? parentY : anchor.topToTop.y) + (anchor.marginTop || 0);
                const bottom = (anchor.bottomToBottom === this ? parentY + parentH : anchor.bottomToBottom.y + anchor.bottomToBottom.height) - (anchor.marginBottom || 0);
                child.y = top;
                child.height = bottom - top;
            }
            
    
            child.resize(child.width, child.height);
        }
    }
    

}