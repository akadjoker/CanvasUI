
import { Layout } from "./Layout.js";
import { Rectangle } from "./Utils.js";
import {Input} from "./Input.js";
import { Tween } from "./Tween.js";


class MenuItem
{
    constructor(label, submenu = null)
    {
      this.label = label;
      this.submenu = submenu;
      this.bounds = new Rectangle(0,0,1,1);
    }
    
    getSize(g)
    {
        return g.measureText(this.label); 
    }

  }
  

class MenuBar
{
    constructor()
    {
      this.items = [];        // Lista de MenuItem
      this.activeIndex = -1;  // Index do menu aberto (-1 = nenhum)
      this.isOpen = false;
        this.height = 30;       // altura da barra
        this.width = 0;
        this.height = 0;
    }

    resize(w, h)
    {
        this.width = w;
        this.height = h;
    }
  
      addMenu(label, submenu)
      {
          let item = new MenuItem(label, submenu);
          this.items.push(item);
          return item;
    }
  
    update(dt)
    {
      const spacing = 20;
      let x = spacing;
  
        for (const item of this.items)
        {
            const size = item.getWidth();
            const w = size.width;
            const h = size.height;
            item.bounds.set(x, 0, w + spacing * 2, this.height);
            x += item.bounds.width;
      }
    }
  
    handleMouseDown(mouseX, mouseY)
    {
        for (let i = 0; i < this.items.length; i++)
        {
        const item = this.items[i];
            if (item.bounds.contains(mouseX, mouseY))
            {
                if (this.activeIndex === i && this.isOpen)
                {
                this.close();
                } else
                {
                this.open(i);
                }
          return true;
        }
      }
      this.close();
      return false;
    }
  
    open(index)
    {
      this.activeIndex = index;
      this.isOpen = true;
    }
  
    close()
    {
      this.activeIndex = -1;
      this.isOpen = false;
    }
  
  render(g)
  {
      g.setColor("#f0f0f0");
      g.fillRect(0, 0, g.canvas.width, this.height);
  
    for (let i = 0; i < this.items.length; i++)
    {
        const item = this.items[i];
        const hovered = i === this.activeIndex && this.isOpen;
  
        g.setColor(hovered ? "#dddddd" : "#f0f0f0");
        g.fillRect(item.bounds.x, item.bounds.y, item.bounds.width, item.bounds.height);
  
        g.setColor("#000");
        g.drawText(item.label, item.bounds.x + 10, item.bounds.y + 7);
      }
  
    if (this.isOpen && this.activeIndex !== -1)
    {
        const submenu = this.items[this.activeIndex].submenu;
        submenu.render(g, this.items[this.activeIndex].bounds.x, this.height);
      }
    }
  }
  