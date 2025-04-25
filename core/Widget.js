
import { Layout } from "./Layout.js";
import { Rectangle } from "./Utils.js";
import {Input} from "./Input.js";
import { Tween } from "./Tween.js";

export class Margin
{
    constructor(top = 0, right = 0, bottom = 0, left = 0)
    {
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
    }
}


export class Theme
{
    // Buttons
    static buttonBackground = "#dddddd";
    static buttonHover = "#eeeeee";
    static buttonPress = "#cccccc";
    static buttonLabel = "#000000";
    static buttonBorder = "#444444";

    // ComboBox
    static comboBackground = "#eee";
    static comboText = "#000";
    static comboArrow = "#000";
    static comboBorder = "#aaa";
    static comboListBackground = "#ccc";
    static comboListHover = "rgba(100,100,100,0.1)";
    static comboListSelect = "rgba(100,100,100,0.3)";
    static comboSelectedDragging = "rgba(100,100,100,0.5)";

    // ListBox
    static listBackground = "#ccc";
    static listHover = "rgba(65, 64, 64, 0.2)";
    static listSelected = "rgba(100,100,100,0.3)";
    static listSelectedDragging = "rgba(100,100,100,0.5)";
    static listText = "#000";
    static listBorder = "#999";
    

    // Knob
    static knobBackground = "#777";
    static knobPointer = "#aaa";
    static knobText = "#000";
    static knobHoverOutline = "rgba(40,40,40,0.8)";
    static knobMarkers = "#ccc";
    

    // ProgressBar
    static progressBackground = "#888";
    static progressFill = "#444";
    static progressBorder = "#000";
    static progressText = "#fff";
    

    // Slider
    static sliderTrack = "#988";
    static sliderFill = "#555";
    static sliderThumb = "#222";
    static sliderBorder = "#aaa";
    static sliderText = "#000";
    

    // RadioButton
    static radioOuter = "#555";
    static radioInner = "#444";
    static radioText = "#000";
    static radioHoverOutline = "rgba(0,0,0,0.9)";

    //RadioGroup
    static radioGroupBackground = "#ccc";
    static radioGroupBorder = "#000";
    static radioGroupText = "#000";
    static radioGroupHoverOutline = "rgba(40,40,40,0.6)";
    

    // Checkbox
    static checkboxBackground = "#ccc";
    static checkboxHover = "#aaa";
    static checkboxBorder = "#444";
    static checkboxMark = "#000";
    static checkboxText = "#000";
    static checkboxOutline = "rgba(0,0,0,0.4)";
    

    // ValueField
    static dragFieldBackground = "#eee";
    static dragFieldBorder = "#000";
    static dragFieldText = "#000";
    static dragFieldLabel = "#000";
    static dragFieldHoverOutline = "rgba(0,0,0,0.8)";

    // ToggleSwitch
    static toggleBackground = "#aaa";
    static toggleBackgroundChecked = "#4caf50";
    static toggleText = "#fff";
    static toggleKnob = "#fff";
    static toggleHoverOutline = "rgba(0,0,0,0.4)";

    // Tabs
    static tabBackground = "#ccc";
    static tabActive = "#ddd";
    static tabInactive = "#aaa";
    static tabLabel = "#000";
    static tabHoverOutline = "#999";
    static tabCloseIcon = "#000";
    static tabScrollButton = "#888";
    static tabScrollIcon = "#fff";

    // Window (janela)
    static windowBar         = "#333";
    static windowBarHover    = "#444";
    static windowTitle       = "#fff";
    static windowBackground  = "#f0f0f0";
    static windowResizeLines = "#888";

    static windowButtonClose     = "#aaa";
    static windowButtonMinimize  = "#aaa";
    static windowButtonSymbol    = "#000";
    static windowButtonSymbolHover = "#f00";

    static windowBorder          = "#000";


    // Shared
    static highlight = "#4caf50";
    static textDefault = "#000";
    static background = "#f0f0f0";
 

 
 

    static setDark() {
        Theme.buttonBackground = "#333";
        Theme.buttonHover = "#444";
        Theme.buttonPress = "#555";
        Theme.buttonLabel = "#eee";
        Theme.buttonBorder = "#666";
    
        Theme.comboBackground = "#444";
        Theme.comboText = "#fff";
        Theme.comboArrow = "#ccc";
        Theme.comboBorder = "#666";
        Theme.comboListBackground = "#555";
        Theme.comboListHover = "rgba(255,255,255,0.05)";
        Theme.comboListSelect = "rgba(255,255,255,0.1)";
        Theme.comboSelectedDragging = "rgba(255,255,255,0.2)";
    
        Theme.listBackground = "#444";
        Theme.listHover = "rgba(255,255,255,0.05)";
        Theme.listSelected = "rgba(255,255,255,0.1)";
        Theme.listSelectedDragging = "rgba(255,255,255,0.2)";
        Theme.listText = "#fff";
        Theme.listBorder = "#777";
    
        Theme.knobBackground = "#555";
        Theme.knobPointer = "#aaa";
        Theme.knobText = "#fff";
        Theme.knobHoverOutline = "rgba(255,255,255,0.2)";
        Theme.knobMarkers = "#999";
    
        Theme.progressBackground = "#666";
        Theme.progressFill = "#2e7d32";
        Theme.progressBorder = "#000";
        Theme.progressText = "#fff";
    
        Theme.sliderTrack = "#666";
        Theme.sliderFill = "#2e7d32";
        Theme.sliderThumb = "#fff";
        Theme.sliderBorder = "#aaa";
        Theme.sliderText = "#fff";
    
        Theme.radioOuter = "#aaa";
        Theme.radioInner = "#4caf50";
        Theme.radioText = "#fff";
        Theme.radioHoverOutline = "rgba(255,255,255,0.3)";
    
        Theme.radioGroupBackground = "#444";
        Theme.radioGroupBorder = "#777";
        Theme.radioGroupText = "#fff";
        Theme.radioGroupHoverOutline = "rgba(255,255,255,0.2)";
    
        Theme.checkboxBackground = "#555";
        Theme.checkboxHover = "#666";
        Theme.checkboxBorder = "#ccc";
        Theme.checkboxMark = "#fff";
        Theme.checkboxText = "#fff";
        Theme.checkboxOutline = "rgba(255,255,255,0.3)";
    
        Theme.dragFieldBackground = "#444";
        Theme.dragFieldBorder = "#aaa";
        Theme.dragFieldText = "#fff";
        Theme.dragFieldLabel = "#ccc";
        Theme.dragFieldHoverOutline = "rgba(255,255,255,0.3)";
    
        Theme.toggleBackground = "#666";
        Theme.toggleBackgroundChecked = "#4caf50";
        Theme.toggleText = "#fff";
        Theme.toggleKnob = "#fff";
        Theme.toggleHoverOutline = "rgba(255,255,255,0.2)";
    
        Theme.tabBackground = "#444";
        Theme.tabActive = "#555";
        Theme.tabInactive = "#333";
        Theme.tabLabel = "#fff";
        Theme.tabHoverOutline = "#888";
        Theme.tabCloseIcon = "#fff";
        Theme.tabScrollButton = "#555";
        Theme.tabScrollIcon = "#ccc";

        Theme.windowBar = "#2e3440";                  
        Theme.windowBarHover = "#3b4252";             
        Theme.windowTitle = "#d8dee9";               
        Theme.windowBackground = "#2a2f3a";         
        Theme.windowResizeLines = "#4c566a";         
        Theme.windowButtonClose = "#bf616a";      
        Theme.windowButtonMinimize = "#a3be8c";       
        Theme.windowButtonSymbol = "#eceff4";          
        Theme.windowButtonSymbolHover = "#81a1c1";    
    
        Theme.highlight = "#4caf50";
        Theme.textDefault = "#fff";
        Theme.background = "#222";
    }

    static setPastel() {
        Theme.buttonBackground = "#ffe0e9";
        Theme.buttonHover = "#ffd6e1";
        Theme.buttonPress = "#ffc6d8";
        Theme.buttonLabel = "#4b3b47";
        Theme.buttonBorder = "#fbb1c9";
    
        Theme.comboBackground = "#fff0f5";
        Theme.comboText = "#4b3b47";
        Theme.comboArrow = "#d48fa6";
        Theme.comboBorder = "#fbb1c9";
        Theme.comboListBackground = "#fff5fa";
        Theme.comboListHover = "rgba(0,0,0,0.03)";
        Theme.comboListSelect = "rgba(0,0,0,0.07)";
        Theme.comboSelectedDragging = "rgba(0,0,0,0.1)";
    
        Theme.listBackground = "#ffeef2";
        Theme.listHover = "rgba(0,0,0,0.03)";
        Theme.listSelected = "rgba(0,0,0,0.07)";
        Theme.listSelectedDragging = "rgba(0,0,0,0.1)";
        Theme.listText = "#4b3b47";
        Theme.listBorder = "#fbb1c9";
    
        Theme.knobBackground = "#fbb1c9";
        Theme.knobPointer = "#d48fa6";
        Theme.knobText = "#4b3b47";
        Theme.knobHoverOutline = "rgba(0,0,0,0.1)";
        Theme.knobMarkers = "#fcd7e0";
    
        Theme.progressBackground = "#ffe6eb";
        Theme.progressFill = "#f48fb1";
        Theme.progressBorder = "#d48fa6";
        Theme.progressText = "#4b3b47";
    
        Theme.sliderTrack = "#fcd7e0";
        Theme.sliderFill = "#f48fb1";
        Theme.sliderThumb = "#d48fa6";
        Theme.sliderBorder = "#fbb1c9";
        Theme.sliderText = "#4b3b47";
    
        Theme.radioOuter = "#fbb1c9";
        Theme.radioInner = "#f48fb1";
        Theme.radioText = "#4b3b47";
        Theme.radioHoverOutline = "rgba(0,0,0,0.1)";
    
        Theme.checkboxBackground = "#ffe6eb";
        Theme.checkboxHover = "#fcd7e0";
        Theme.checkboxBorder = "#fbb1c9";
        Theme.checkboxMark = "#4b3b47";
        Theme.checkboxText = "#4b3b47";
        Theme.checkboxOutline = "rgba(0,0,0,0.1)";
    
        Theme.dragFieldBackground = "#fff0f5";
        Theme.dragFieldBorder = "#fbb1c9";
        Theme.dragFieldText = "#4b3b47";
        Theme.dragFieldLabel = "#d48fa6";
        Theme.dragFieldHoverOutline = "rgba(0,0,0,0.1)";
    
        Theme.toggleBackground = "#fbb1c9";
        Theme.toggleBackgroundChecked = "#f48fb1";
        Theme.toggleText = "#fff";
        Theme.toggleKnob = "#fff";
        Theme.toggleHoverOutline = "rgba(0,0,0,0.1)";
    
        Theme.tabBackground = "#ffeef2";
        Theme.tabActive = "#fff5fa";
        Theme.tabInactive = "#fcd7e0";
        Theme.tabLabel = "#4b3b47";
        Theme.tabHoverOutline = "#fbb1c9";
        Theme.tabCloseIcon = "#4b3b47";
        Theme.tabScrollButton = "#fcd7e0";
        Theme.tabScrollIcon = "#4b3b47";

        Theme.windowBar = "#e4e4ec";
        Theme.windowBarHover = "#dadade";
        Theme.windowTitle = "#333333";
        Theme.windowBackground = "#fdfdff";
        Theme.windowResizeLines = "#999";
        Theme.windowButtonClose = "#ffaaaa";
        Theme.windowButtonMinimize = "#aaccff";
        Theme.windowButtonSymbol = "#222";
        Theme.windowButtonSymbolHover = "#d33";
    
        Theme.highlight = "#f48fb1";
        Theme.textDefault = "#4b3b47";
        Theme.background = "#fffafc";
    }

    static setTerminal() {
        Theme.buttonBackground = "#000";
        Theme.buttonHover = "#111";
        Theme.buttonPress = "#222";
        Theme.buttonLabel = "#0f0";
        Theme.buttonBorder = "#0f0";
    
        Theme.comboBackground = "#000";
        Theme.comboText = "#0f0";
        Theme.comboArrow = "#0f0";
        Theme.comboBorder = "#0f0";
        Theme.comboListBackground = "#000";
        Theme.comboListHover = "rgba(0,255,0,0.05)";
        Theme.comboListSelect = "rgba(0,255,0,0.1)";
        Theme.comboSelectedDragging = "rgba(0,255,0,0.2)";
    
        Theme.listBackground = "#000";
        Theme.listHover = "rgba(0,255,0,0.05)";
        Theme.listSelected = "rgba(0,255,0,0.1)";
        Theme.listSelectedDragging = "rgba(0,255,0,0.2)";
        Theme.listText = "#0f0";
        Theme.listBorder = "#0f0";
    
        Theme.knobBackground = "#000";
        Theme.knobPointer = "#0f0";
        Theme.knobText = "#0f0";
        Theme.knobHoverOutline = "rgba(0,255,0,0.2)";
        Theme.knobMarkers = "#0f0";
    
        Theme.progressBackground = "#000";
        Theme.progressFill = "#0f0";
        Theme.progressBorder = "#0f0";
        Theme.progressText = "#fff";
    
        Theme.sliderTrack = "#080";
        Theme.sliderFill = "#020";
        Theme.sliderThumb = "#0f0";
        Theme.sliderBorder = "#020";
        Theme.sliderText = "#fff";
    
        Theme.radioOuter = "#0f0";
        Theme.radioInner = "#0f0";
        Theme.radioText = "#0f0";
        Theme.radioHoverOutline = "rgba(0,255,0,0.2)";
    
        Theme.checkboxBackground = "#000";
        Theme.checkboxHover = "#050";
        Theme.checkboxBorder = "#0f0";
        Theme.checkboxMark = "#0f0";
        Theme.checkboxText = "#0f0";
        Theme.checkboxOutline = "rgba(0,255,0,0.3)";
    
        Theme.dragFieldBackground = "#000";
        Theme.dragFieldBorder = "#0f0";
        Theme.dragFieldText = "#0f0";
        Theme.dragFieldLabel = "#0f0";
        Theme.dragFieldHoverOutline = "rgba(0,255,0,0.2)";
    
        Theme.toggleBackground = "#050";
        Theme.toggleBackgroundChecked = "#0f0";
        Theme.toggleText = "#0f0";
        Theme.toggleKnob = "#000";
        Theme.toggleHoverOutline = "rgba(0,255,0,0.1)";
    
        Theme.tabBackground = "#000";
        Theme.tabActive = "#050";
        Theme.tabInactive = "#000";
        Theme.tabLabel = "#0f0";
        Theme.tabHoverOutline = "#0f0";
        Theme.tabCloseIcon = "#0f0";
        Theme.tabScrollButton = "#050";
        Theme.tabScrollIcon = "#0f0";


        Theme.windowBar = "#282a36";                
        Theme.windowBarHover = "#343746";          
        Theme.windowTitle = "#f8f8f2";                
        Theme.windowBackground = "#1e1f29";           
        Theme.windowResizeLines = "#44475a";          
        Theme.windowButtonClose = "#ff5555";      
        Theme.windowButtonMinimize = "#50fa7b";       
        Theme.windowButtonSymbol = "#f8f8f2";         
        Theme.windowButtonSymbolHover = "#ff79c6";     
    
        Theme.highlight = "#0f0";
        Theme.textDefault = "#0f0";
        Theme.background = "#000";
    }
    
    static setNeon() {
        Theme.buttonBackground = "#111";
        Theme.buttonHover = "#222";
        Theme.buttonPress = "#0ff";
        Theme.buttonLabel = "#0ff";
        Theme.buttonBorder = "#0ff";
    
        Theme.comboBackground = "#111";
        Theme.comboText = "#0ff";
        Theme.comboArrow = "#f0f";
        Theme.comboBorder = "#0ff";
        Theme.comboListBackground = "#222";
        Theme.comboListHover = "rgba(0,255,255,0.1)";
        Theme.comboListSelect = "rgba(255,0,255,0.2)";
        Theme.comboSelectedDragging = "rgba(255,255,255,0.2)";
    
        Theme.listBackground = "#111";
        Theme.listHover = "rgba(0,255,255,0.05)";
        Theme.listSelected = "rgba(255,0,255,0.1)";
        Theme.listSelectedDragging = "rgba(255,0,255,0.2)";
        Theme.listText = "#0ff";
        Theme.listBorder = "#0ff";
    
        Theme.knobBackground = "#0ff";
        Theme.knobPointer = "#f0f";
        Theme.knobText = "#000";
        Theme.knobHoverOutline = "rgba(255,255,255,0.2)";
        Theme.knobMarkers = "#fff";
    
        Theme.progressBackground = "#222";
        Theme.progressFill = "#0ff";
        Theme.progressBorder = "#f0f";
        Theme.progressText = "#fff";
    
        Theme.sliderTrack = "#333";
        Theme.sliderFill = "#0ff";
        Theme.sliderThumb = "#f0f";
        Theme.sliderBorder = "#aff";
        Theme.sliderText = "#fff";
    
        Theme.radioOuter = "#0ff";
        Theme.radioInner = "#f0f";
        Theme.radioText = "#fff";
        Theme.radioHoverOutline = "rgba(255,255,255,0.2)";
    
        Theme.checkboxBackground = "#222";
        Theme.checkboxHover = "#333";
        Theme.checkboxBorder = "#0ff";
        Theme.checkboxMark = "#f0f";
        Theme.checkboxText = "#0ff";
        Theme.checkboxOutline = "rgba(255,255,255,0.2)";
    
        Theme.dragFieldBackground = "#111";
        Theme.dragFieldBorder = "#0ff";
        Theme.dragFieldText = "#f0f";
        Theme.dragFieldLabel = "#0ff";
        Theme.dragFieldHoverOutline = "rgba(255,255,255,0.2)";
    
        Theme.toggleBackground = "#222";
        Theme.toggleBackgroundChecked = "#0ff";
        Theme.toggleText = "#000";
        Theme.toggleKnob = "#f0f";
        Theme.toggleHoverOutline = "rgba(255,255,255,0.2)";
    
        Theme.tabBackground = "#111";
        Theme.tabActive = "#222";
        Theme.tabInactive = "#000";
        Theme.tabLabel = "#0ff";
        Theme.tabHoverOutline = "#0ff";
        Theme.tabCloseIcon = "#f0f";
        Theme.tabScrollButton = "#333";
        Theme.tabScrollIcon = "#0ff";
    
        Theme.windowBar = "#2e2e3a";                  // barra topo
        Theme.windowBarHover = "#3b3b4d";             // hover
        Theme.windowTitle = "#f8f8f2";                // texto
        Theme.windowBackground = "#1e1e2e";           // fundo
        Theme.windowResizeLines = "#5a5a6e";          // linhas resize
        Theme.windowButtonClose = "#ff5555";          // fundo botão fechar
        Theme.windowButtonMinimize = "#6272a4";       // fundo botão minimizar
        Theme.windowButtonSymbol = "#f8f8f2";         // símbolo normal
        Theme.windowButtonSymbolHover = "#ff6e6e";    // símbolo hover

        Theme.highlight = "#f0f";
        Theme.textDefault = "#0ff";
        Theme.background = "#000";
    }
    

    static setLight() {
        Theme.buttonBackground = "#f5f5f5";
        Theme.buttonHover = "#e0e0e0";
        Theme.buttonPress = "#d0d0d0";
        Theme.buttonLabel = "#222";
        Theme.buttonBorder = "#aaa";
        Theme.buttonBackground = "#dddddd";
        Theme.buttonHover = "#eeeeee";
        Theme.buttonPress = "#cccccc";
        Theme.buttonLabel = "#000000";
        Theme.buttonBorder = "#888";
    
        Theme.comboBackground = "#fff";
        Theme.comboText = "#000";
        Theme.comboArrow = "#666";
        Theme.comboBorder = "#ccc";
        Theme.comboListBackground = "#fafafa";
        Theme.comboListHover = "rgba(0,0,0,0.05)";
        Theme.comboListSelect = "rgba(0,0,0,0.1)";
        Theme.comboSelectedDragging = "rgba(0,0,0,0.2)";
    
        Theme.listBackground = "#f0f0f0";
        Theme.listHover = "rgba(0,0,0,0.05)";
        Theme.listSelected = "rgba(0,0,0,0.1)";
        Theme.listSelectedDragging = "rgba(0,0,0,0.2)";
        Theme.listText = "#000";
        Theme.listBorder = "#bbb";
    
        Theme.knobBackground = "#ccc";
        Theme.knobPointer = "#888";
        Theme.knobText = "#000";
        Theme.knobHoverOutline = "rgba(0,0,0,0.2)";
        Theme.knobMarkers = "#aaa";
    
        Theme.progressBackground = "#ddd";
        Theme.progressFill = "#888";
        Theme.progressBorder = "#000";
        Theme.progressText = "#222";
    
        Theme.sliderTrack = "#bbb";
        Theme.sliderFill = "#777";
        Theme.sliderThumb = "#444";
        Theme.sliderBorder = "#aaa";
        Theme.sliderText = "#000";
    
        Theme.radioOuter = "#555";
        Theme.radioInner = "#444";
        Theme.radioText = "#000";
        Theme.radioHoverOutline = "rgba(0,0,0,0.9)";
    
        Theme.radioGroupBackground = "#eee";
        Theme.radioGroupBorder = "#999";
        Theme.radioGroupText = "#000";
        Theme.radioGroupHoverOutline = "rgba(0,0,0,0.2)";
    
        Theme.checkboxBackground = "#eee";
        Theme.checkboxHover = "#ccc";
        Theme.checkboxBorder = "#666";
        Theme.checkboxMark = "#222";
        Theme.checkboxText = "#000";
        Theme.checkboxOutline = "rgba(0,0,0,0.3)";
    
        Theme.dragFieldBackground = "#fff";
        Theme.dragFieldBorder = "#aaa";
        Theme.dragFieldText = "#000";
        Theme.dragFieldLabel = "#000";
        Theme.dragFieldHoverOutline = "rgba(0,0,0,0.3)";
    
        Theme.toggleBackground = "#ccc";
        Theme.toggleBackgroundChecked = "#66bb6a";
        Theme.toggleText = "#fff";
        Theme.toggleKnob = "#fff";
        Theme.toggleHoverOutline = "rgba(0,0,0,0.2)";
    
        Theme.tabBackground = "#ddd";
        Theme.tabActive = "#fff";
        Theme.tabInactive = "#ccc";
        Theme.tabLabel = "#000";
        Theme.tabHoverOutline = "#bbb";
        Theme.tabCloseIcon = "#000";
        Theme.tabScrollButton = "#bbb";
        Theme.tabScrollIcon = "#444";
    
        Theme.highlight = "#66bb6a";
        Theme.textDefault = "#000";
        Theme.background = "#fafafa";

        Theme.windowBar         = "#333";
        Theme.windowBarHover    = "#444";
        Theme.windowTitle       = "#fff";
        Theme.windowBackground  = "#f0f0f0";
        Theme.windowResizeLines = "#888";

        Theme.windowButtonClose     = "#aaa";
        Theme.windowButtonMinimize  = "#aaa";
        Theme.windowButtonSymbol    = "#000";
        Theme.windowButtonSymbolHover = "#f00";

        Theme.windowBorder          = "#000";

    }
    
}


export class Widget
{

 
    
  
    constructor(x = 0, y = 0, width = 100, height = 30)
    {
        this.id = "Widget";
        this.tag = 0;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.maxWidth = width;
        this.maxHeight = height;
        this.minWidth = width;
        this.minHeight = height;
        this.visible = true;
        this.enabled = true;
        this.debug = false;
        this.padding = new Margin(0, 0, 0, 0);
        this.MouseX = 0;
        this.MouseY = 0;


        this.widthPercent  = 0.1;
        this.heightPercent = 0.1;
    }

    getWidth()   {return this.width   ;}
    getHeight() { return this.height; }
    
    setWidthPercent(percent) { this.widthPercent = percent;  return this; }
    setHeightPercent(percent) { this.heightPercent = percent;  return this; }

    getX() { return  this.x; }
    getY() { return  this.y; }
    
    setPosition(x, y) { this.x = x; this.y = y; return this; }
    setSize(width, height) { this.width = width; this.height = height; return this; }

    

    update(dt)   {       }
    render(g)    {       }

    handleMouse(type, x, y, button) { return false; }
    

    contains(px, py)
    {
        return (
            px >= this.x &&
            py >= this.y &&
            px <= this.x + this.width &&
            py <= this.y + this.height
        );
    }
    renderDebug(g) {

        g.setColor("rgba(255, 123, 0, 0.62)"); // vermelho
        g.fillRect(this.x, this.y, this.width, this.height);
    
   
    }
    updateLayout()   {       }
    resize(parentWidth, parentHeight) { }
    reset() { }
    
    
}


export class Label extends Widget
{
    constructor(text = "", align = "left")
    {
        super();
        this.text = text;
        this.align = align; // "left", "center", "right"
        this.color = "#fff";
        this.autoSize = false;
    }

    render(g) {
        if (!this.visible) return;

        
        const padding = this.padding || { left: 0, top: 0, right: 0, bottom: 0 };
        const x = this.x + padding.left;
        const y = this.y + padding.top;
        const w = this.width - padding.left - padding.right;
        const h = this.height - padding.top - padding.bottom;

        const textSize = g.measureText(this.text);
        let drawX = x;

        if (this.align === "center") {
            drawX = x + (w - textSize.width) / 2;
        } else if (this.align === "right") {
            drawX = x + w - textSize.width;
        }

        const drawY = y + (h - textSize.height) / 2;
        
        g.setColor(this.color);
        g.drawText(this.text, drawX, drawY);
    }

    setText(text) {
        this.text = text;
        return this;
    }

    setAlign(align) {
        this.align = align;
        return this;
    }

    setColor(color) {
        this.color = color;
        return this;
    }
}


export class Button extends Widget {
    constructor(text = "Button", onClick = null)
    {
        super();
        this.text = text;
        this.onClick = onClick;
        this.focus = false;
        this.pressed = false;
        this.hovered = false;
        
    }

    handleMouse(type, x, y, button)
    {
        if (!this.enabled) return false;
        
    
            if (type === 2 && this.contains(x, y))
            {
                this.hovered = true;
                this.focus = true;
            
            } else 
            {
                this.hovered = false;
                this.focus = false;
            }
 

        
            if (type === 0 && this.contains(x, y))
            { // Mouse.DOWN
                this.pressed = true;
                return true;
            }
            
            if (type === 1 && this.contains(x, y))
            { // Mouse.UP
               // if (this.pressed && this.onClick)
                 //   this.onClick();
                this.pressed = false;
                
                return true;
           }
        
        
    
        

        return false;
    }
  

   

    render(g)
    {
        if (!this.visible) return;
    
        let color = Theme.buttonBackground;
        if (this.hovered)
        {
            color = Theme.buttonHover;
        }  
        if (this.pressed)
        {
            color = Theme.buttonPress;
        }

       
        // 1. Fundo do botão
        g.setColor(color);
        //g.fillRect(this.x, this.y, this.width, this.height);
        g.drawRoundedRect(this.x, this.y, this.width, this.height, 8);

        const l = Theme.buttonBorderWidth;
    
        // 2. Borda
        g.setColor(Theme.buttonBorder);
        g.drawRoundedLinesRect(this.x, this.y, this.width, this.height,8);
    
        // 3. Texto com padding aplicado
        const len = g.measureText(this.text);
        const w = len.width;
        const h = len.height;
    
        const px = this.x + this.padding.left;
        const py = this.y + this.padding.top;
        const pw = this.width - this.padding.left - this.padding.right;
        const ph = this.height - this.padding.top - this.padding.bottom;
    
        g.setColor(Theme.buttonLabel);
        g.drawText(this.text, px + (pw - w) / 2, py + (ph - h) / 2);
    }
    
}

export class Panel extends Widget {
    constructor(text = "", style = "flat") {
        super();
        this.text = text;
        this.style = style; // "flat", "raised", "lowered"
        this.color = "#e0e0e0";
        this.borderLight = "#ffffff";
        this.borderDark = "#888888";
        this.textColor = "#000000";
    }

    setColor(color) {
        this.color = color;
        return this;
    }

    render(g) {
        if (!this.visible) return;

        // Fundo
        g.setColor(this.color);
        g.fillRect(this.x, this.y, this.width, this.height);

        // Borda 3D
        if (this.style === "raised") {
          
            g.setColor(this.borderLight);
            g.drawLine(this.x, this.y, this.x + this.width, this.y); // top
            g.drawLine(this.x, this.y, this.x, this.y + this.height); // left

            g.setColor(this.borderDark);
            g.drawLine(this.x, this.y + this.height - 1, this.x + this.width, this.y + this.height - 1); // bottom
            g.drawLine(this.x + this.width - 1, this.y, this.x + this.width - 1, this.y + this.height); // right

        } else if (this.style === "lowered") {

            g.setColor(this.borderDark);
            g.drawLine(this.x, this.y, this.x + this.width, this.y); // top
            g.drawLine(this.x, this.y, this.x, this.y + this.height); // left

            g.setColor(this.borderLight);
            g.drawLine(this.x, this.y + this.height - 1, this.x + this.width, this.y + this.height - 1); // bottom
            g.drawLine(this.x + this.width - 1, this.y, this.x + this.width - 1, this.y + this.height); // right
        }

        // Texto central
        if (this.text) {
            const len = g.measureText(this.text);
            const w = len.width;
            const h = len.height;
            
            g.setColor(this.textColor);
            g.drawText(this.text, this.x + (this.width - w) / 2, this.y + (this.height - h) / 2);
        }
    }
}


export class TabItem
{
    constructor(label, closable = false)
    {
        this.label = label;
        this.closable = closable;
        this.content = new Layout();
        this.bounds = new Rectangle(); 
        this.closeBounds = new Rectangle(); // Para detectar o clique no [x]
        this.over = false;
    }
}


export class TabView extends Widget {
    constructor(position = "top") {
        super();
        this.tabs = [];
        this.activeIndex = 0;
        this.position = position;
        this.headerHeight = 30;
        this.tabWidth = 80;
        this.scrollOffset = 0;
        this.scrollStep = 50;
        this.maxScroll = 0;

        this.scale = 0;
        this.tweenOut = new Tween(this, "scale", 0, 1, 0.5, Tween.EASE_OUT_BOUNCE, Tween.MODE_PERSIST, false);
        this.tweenOut.play();
    }

    setTabeWidth(width) {
        this.tabWidth = width;
    }

    setTabHeaderHeight(height) {
        this.headerHeight = height;
    }

    update(dt) {
        if (!this.visible) return;
        this.tweenOut.update(dt);

        const active = this.tabs[this.activeIndex];
        if (active) active.content.update(dt);
    }

    addTab(label, closable = false)
    {
        const tab = new TabItem(label, closable);
        this.tabs.push(tab);
      //  if (this.tabs.length === 1) this.activeIndex = 0;
        return tab.content;
    }

    render(g) {
        if (!this.visible) return;
    
        const headerY = this.position === "top" ? this.y : (this.y + this.height- this.headerHeight);
        const visibleWidth = this.width - 40;
        const totalTabWidth = this.tabs.length * this.tabWidth;
        this.maxScroll = Math.max(0, totalTabWidth - visibleWidth);
        this.scrollStep = this.tabWidth;
    
        // Fundo geral
        g.setColor(Theme.tabBackground);
        g.fillRect(this.x, this.y, this.width, this.height);
    
        for (let i = 0; i < this.tabs.length; i++) {
            const tab = this.tabs[i];
            const tx = this.x + 20 + i * this.tabWidth - this.scrollOffset;
            tab.bounds.set(tx, headerY, this.tabWidth, this.headerHeight);
    
            if (tx + this.tabWidth < this.x + 20 || tx > this.x + this.width - 20) continue;
    
            g.save();
            g.clip(this.x, headerY, this.width, this.headerHeight);
    
            // Cor da aba
            g.setColor(i === this.activeIndex ? Theme.tabActive : Theme.tabInactive);
            g.fillRect(tx, headerY, this.tabWidth, this.headerHeight);
    
            // Texto da aba
            g.setColor(Theme.tabLabel);
            g.drawText(tab.label, tx + 10, headerY + 8);
    
            // Botão fechar (se aplicável)
            if (tab.closable) {
                tab.closeBounds.set(tab.bounds.x + tab.bounds.width - 18, tab.bounds.y + 6, 12, 12);
                g.setColor(Theme.tabCloseIcon);
                g.drawText("×", tab.closeBounds.x, tab.closeBounds.y);
            }
    
            // Hover
            if (tab.over) {
                g.setColor(Theme.tabHoverOutline);
                g.drawRect(tx, headerY, this.tabWidth, this.headerHeight);
            }
    
            g.restore();
        }
    
        // Setas de scroll
        if (this.maxScroll > 0) {
            g.setColor(Theme.tabScrollButton);
            g.fillRect(this.x, headerY, 20, this.headerHeight);
            g.setColor(Theme.tabScrollIcon);
            g.drawText("\u2039", this.x + 6, headerY + 8);
    
            g.setColor(Theme.tabScrollButton);
            g.fillRect(this.x + this.width - 20, headerY, 20, this.headerHeight);
            g.setColor(Theme.tabScrollIcon);
            g.drawText("\u203A", this.x + this.width - 14, headerY + 8);
        }
    
        // Conteúdo ativo
        const active = this.tabs[this.activeIndex];
        if (active) {
            const Y = this.position === "top" ? this.headerHeight : 0;
            g.save();
            g.clip(this.x, this.y, this.width, this.height);
            g.ctx.translate(this.x + 5, Y + this.y + 5);
            g.ctx.scale(this.scale, this.scale);
            active.content.x = 0;
            active.content.y = 0;
            active.content.width = this.width;
            active.content.height = this.height;
            active.content.render(g);
            g.restore();
        }
    }
    

    handleMouseOut(x, y)
    {
     

        const localX = x - this.x;
        const localY = y - this.y;
        const Y = this.position === "top" ? this.headerHeight : 0;
        const active = this.tabs[this.activeIndex];
        // if (active && active.content)
        // {
        //     active.content.handleMouseOut(localX - active.content.x, localY - active.content.y - Y);
        // }

        for (let i = 0; i < this.tabs.length; i++)
        {
            if (!this.tabs[i].bounds.contains(x, y)) this.tabs[i].over = false;
        }
    }

    handleMouse(type, x, y, button)
    {
        if (!this.visible) return false;
        const headerY = this.position === "top" ? this.y : (this.y + this.height - this.headerHeight);
        const localX = x - this.x;
        const localY = y - this.y;
        const Y = this.position === "top" ? this.headerHeight : 0;

        if (type === 0)
        { // Mouse Down
            if (this.maxScroll > 0)
            {
                if (x >= this.x && x <= this.x + 20)
                {
                    this.scrollOffset = Math.max(0, this.scrollOffset - this.scrollStep);
                    return true;
                }
                if (x >= this.x + this.width - 20 && x <= this.x + this.width)
                {
                    this.scrollOffset = Math.min(this.maxScroll, this.scrollOffset + this.scrollStep);
                    return true;
                }
            }

            for (let i = 0; i < this.tabs.length; i++)
            {
                const tab = this.tabs[i];
                if (tab.closable && tab.closeBounds.contains(x, y))
                {
                    this.tabs.splice(i, 1);
                    if (this.activeIndex >= this.tabs.length)
                    {
                        this.activeIndex = this.tabs.length - 1;
                    }
                    return true;
                }
                
                if (this.tabs[i].bounds.contains(x, y) && i !== this.activeIndex)
                {
                    if (!this.tweenOut.playing)
                    {
                        this.tweenOut.reset();
                        this.tweenOut.play();
                        this.activeIndex = i;
                    }
                    return true;
                }
            }
        }

        if (type === 1)
        { // Mouse Up
            this.handleMouseOut(x, y);
        }

        if (type === 2)
        { // Mouse Move
            for (let i = 0; i < this.tabs.length; i++)
            {
                this.tabs[i].over = false;
                if (this.tabs[i].bounds.contains(x, y) && i !== this.activeIndex)
                {
                    this.tabs[i].over = true;
                    return true;
                }
            }
        }

        const active = this.tabs[this.activeIndex];
        if (active && active.content)
        {
            return active.content.handleMouse(type, localX - active.content.x, localY - active.content.y - Y, button);
        }
        return false;
    }

    setActiveIndex(index) {
        if (index >= 0 && index < this.tabs.length) {
            this.activeIndex = index -1;
        }
    }
}

export class Window extends Widget
{
    constructor(title = "Janela") {
        super(100, 100, 300, 200);
        this.title = title;
        this.dragging = false;
        this.resizing = false;
        this.minimized = false;
        this.barHeight = 30;
        this.resizeZone = 15;
        this.dragOffset = { x: 0, y: 0 };
        this.bound = new Rectangle(0, 0, 0, 0);
        this.closeBound = new Rectangle(this.width - 30, 0, 30, 30);
        this.dragBound = new Rectangle(0, 0, this.width, this.barHeight);
        this.resizeBound = new Rectangle(this.width - this.resizeZone, this.height - this.resizeZone, this.resizeZone, this.resizeZone);
        this.minimizeBound = new Rectangle(this.width - this.resizeZone * 2, this.height - this.resizeZone, this.resizeZone, this.resizeZone);
        this.layout = new Layout();
        this.scale = 0;
        this.tweenOut = new Tween(this, "scale", 0, 1, 1, Tween.EASE_OUT_BOUNCE, Tween.MODE_PERSIST, false);
        this.tweenOut.play();

        // this.layout.add(new Button("Hello world!")).setPosition(0, 0);
        // this.layout.add(new Button("Hello world!")).setPosition(100, 100);
        // this.layout.add(new Button("Hello world!")).setPosition(200, 200);
        
        

    }




    handleMouse(type, x, y, button)
    {
        if (!this.enabled) return false;

        // const inside = this.contains(x, y);
        // if (!inside && type !== 1) return false;

        const localX = x - this.x;
        const localY = y - this.y;

        if (type === 0)
        { // Mouse down
            
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

            if (this.layout.handleMouse(type, localX - this.layout.x, localY - this.layout.y - this.barHeight, button))
            {
                return true;
            }
            if (this.bound.contains(x, y))
            {
                return true;
            }
        }

  

        if (type === 1 && this.contains(x, y))
        { // Mouse up
            this.dragging = false;
            this.resizing = false;
            if (this.closeBound.contains(x, y))
                {
                    this.visible = false;
                    return true;
                }
                if (this.minimizeBound.contains(x, y))
                {
                    if (!this.tweenOut.playing)
                    {
                        this.tweenOut.reset();
                        this.tweenOut.play();
                        this.minimized = !this.minimized;
                    }
                    return true;
                }
            if (this.layout.handleMouse(type, localX - this.layout.x, localY - this.layout.y - this.barHeight, button))
            {
                return true;
            }
            if (this.bound.contains(x, y))
                {
                    return true;
                }
        }

        if (type === 2)
        { // Mouse move
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
        }

        return this.layout.handleMouse(type, localX - this.layout.x,localY - this.layout.y -this.barHeight, button);
    }

    update(dt)
    {
        if (!this.visible) return;
        this.layout.update(dt);
        this.tweenOut.update(dt);

        if (this.tweenOut.finished)
        {
          
            if (this.tweenOut.value === 0)
            {
                this.tweenOut.to = 1;
                this.tweenOut.from = 0;
                this.tweenOut.ease = Tween.EASE_IN_ELASTIC;
            } else 
            {
                this.tweenOut.to = 0;
                this.tweenOut.from = 1;
                this.tweenOut.ease = Tween.EASE_OUT_ELASTIC;
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
    
        // Top bar
        g.setColor(onDrag ? Theme.windowBarHover : Theme.windowBar);
        g.fillRect(this.x, this.y, this.width, this.barHeight);
    
        // Título
        g.setColor(Theme.windowTitle);
        g.drawText(this.title, this.x + 10, this.y + 8);
    
        // Botões
        g.setColor(Theme.windowButtonClose);
        g.fillRect(this.x + this.width - 25, this.y + 5, 15, 15); // [×]
        g.setColor(Theme.windowButtonMinimize);
        g.fillRect(this.x + this.width - 45, this.y + 5, 15, 15); // [–]
    
        // Símbolos
        g.setColor(onClose ? Theme.windowButtonSymbolHover : Theme.windowButtonSymbol);
        g.drawText("×", this.x + this.width - 22, this.y + 7);
    
        g.setColor(onMinimize ? Theme.windowButtonSymbolHover : Theme.windowButtonSymbol);
        g.drawText("–", this.x + this.width - 42, this.y + 6);
    
        // Conteúdo
        if (this.visible) {
            g.save();
            g.clip(this.x, this.y + this.barHeight, this.width, this.height - this.barHeight);
            g.ctx.translate(this.x, this.y + this.barHeight);
            g.ctx.scale(1, this.scale);
    
            g.setColor(Theme.windowBackground);
            g.fillRect(0, 0, this.width, this.height - this.barHeight);
    
            if (onResize) {
                g.setColor(Theme.windowResizeLines);
                g.drawLine(this.width - 20, this.height - this.barHeight, this.width - 1, this.height - this.barHeight - 20);
                g.drawLine(this.width - 10, this.height - this.barHeight, this.width - 1, this.height - this.barHeight - 10);
            }
    
            this.layout.width = this.width;
            this.layout.height = this.height - this.barHeight;
            this.layout.render(g);
            g.restore();
        }

                // g.setColor("#888");
        // g.drawLine(this.x + this.width - 10, this.y + this.height - 1, this.x + this.width - 1, this.y + this.height - 10);
        // // Indicador de redimensionamento
        // if (!this.minimized)
        // {
        // }
        // g.setColor("rgb(255,0,0)");
        // g.drawRect(this.closeBound.x, this.closeBound.y, this.closeBound.width, this.closeBound.height);
        // g.drawRect(this.minimizeBound.x, this.minimizeBound.y, this.minimizeBound.width, this.minimizeBound.height);
        // g.drawRect(this.dragBound.x, this.dragBound.y, this.dragBound.width, this.dragBound.height);
        // g.drawRect(this.resizeBound.x, this.resizeBound.y, this.resizeBound.width, this.resizeBound.height);

    }
    
}


export class DragValueField extends Widget {
    constructor(label = "X", value = 0.0, min = -Infinity, max = Infinity, step = 0.01) {
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
    }

    setValue(v)
    {
        this.value = Math.min(this.max, Math.max(this.min, v));
        if (this.onChange) this.onChange(this.value);
    }

 

    handleMouse(type, x, y, button)
    {
        if (!this.visible) return false;
        //if (!this.contains(x, y))  return false;
      

        if (type === 0 && this.contains(x, y))
        {
            this.dragging = true;
            this.startX =  x;
            this.startValue = this.value;
            return true;
        }

        if (type === 1)
        {
            this.dragging = false;
            this.hovered = false;
           // return true;
        }
 
        if (type === 2 && this.dragging)
        {

            const delta = x - this.startX;
            const newVal = this.startValue + delta * this.step;
            this.setValue(newVal);
            this.hovered = true;
            return true;
        }

        return false;
    }

    render(g) {
        if (!this.visible) return;
    
        // Fundo
        g.setColor(Theme.dragFieldBackground);
        g.fillRect(this.x, this.y, this.width, this.height);
    
        // Borda
        g.setColor(Theme.dragFieldBorder);
        g.drawRect(this.x, this.y, this.width, this.height);
    
        // Label
        const labelW = 20;
        g.setColor(Theme.dragFieldLabel);
        g.drawText(this.label, this.x + 4, this.y + this.height / 2 - 6);
    
        // Valor
        g.setColor(Theme.dragFieldText);
        const valStr = this.value.toFixed(3);
        g.drawText(valStr, this.x + labelW + 4, this.y + this.height / 2 - 6);
    
        // Hover
        if (this.hovered) {
            g.setColor(Theme.dragFieldHoverOutline);
            g.drawRect(this.x, this.y, this.width, this.height);
        }
    }
    
}


export class Checkbox extends Widget {
    constructor(label = "", checked = false, onChange = null) {
        super();
        this.label = label;
        this.checked = checked;
        this.onChange = onChange;
        this.size = 20;
        this.padding = 5;
        this.hovered = false;
        
    }

    handleMouse(type, x, y, button) {
        if (!this.enabled || !this.visible) return false;
      
        this.MouseX = x;
        this.MouseY = y;

        this.hovered = false;

      

        if (type === 0 && this.contains(x, y))
        { // Mouse Down
            this.checked = !this.checked;
            if (this.onChange) this.onChange(this.checked);
            return true;
        }

       

        if (type === 2 && this.contains(x, y))
        { // Mouse Move
            this.hovered = true;
            return true;
        }

        return false;
    }

    

    render(g) {
        if (!this.visible) return;
    
        const boxX = this.x + this.padding;
        const boxY = this.y + (this.height - this.size) / 2;
        this.width  = this.size;
        this.height = this.size;
    
        // Caixa
        g.setColor(this.hovered ? Theme.checkboxHover : Theme.checkboxBackground);
        //g.setColor(Theme.checkboxBackground);
        g.fillRect(boxX, boxY, this.size, this.size);
    
        // Borda
        g.setColor(Theme.checkboxBorder);
        g.drawRect(boxX, boxY, this.size, this.size);
    
        // Check
        if (this.checked)
        {
            g.setColor(Theme.checkboxMark);
            g.drawLine(boxX + 4, boxY + 10, boxX + 9, boxY + 15);
            g.drawLine(boxX + 9, boxY + 15, boxX + 16, boxY + 5);
        }
    
        // Label
        g.setColor(Theme.checkboxText);
        g.drawText(this.label, boxX + this.size + this.padding, this.y + (this.height - 14) / 2);
    
        if (this.hovered)
        {
            g.setColor(Theme.checkboxOutline);
            g.drawRect(boxX, boxY, this.size, this.size);
        }
    }
    
}

export class CheckboxGroup extends Widget
{
    constructor(columns = 2) {
        super();
        this.columns = columns;
        this.checkboxes = [];
        this.values = new Map(); // label -> boolean
        this.spacing = 10;
        this.checkboxSize = 20;
        this.colWidth = 100;
    }

    add(label, defaultValue = false)
    {
        const checkbox = new Checkbox(label, defaultValue, (val) =>
        {
            this.values.set(label, val);
            if (this.onChange) this.onChange(label, val);
        });

        this.checkboxes.push(checkbox);
        this.values.set(label, defaultValue);
        return this;
    }

    setOnChange(callback)
    {
        this.onChange = callback;
        return this;
    }

    get(label)
    {
        return this.values.get(label);
    }

    getValues() {
        return Object.fromEntries(this.values);
    }

    update(dt) {
        for (const cb of this.checkboxes)
        {
            cb.update(dt);
        }
    }

    handleMouse(type, x, y, button)
    {


        for (const cb of this.checkboxes)
        {
            if (cb.handleMouse(type, x- this.x , y - this.y , button))
            {
                return true;
            }
        }
        return false;
    }

  

    render(g) {
       
        const rowHeight = this.checkboxSize + this.spacing;
        g.save();
        g.ctx.translate(this.x, this.y);

        for (let i = 0; i < this.checkboxes.length; i++)
        {
            const cb = this.checkboxes[i];
            const col = i % this.columns;
            const row = Math.floor(i / this.columns);

            cb.setPosition(col * this.colWidth, row * rowHeight);
            cb.render(g);
        }

        g.restore();
    }
}


export class ToggleButton extends Widget
{
    constructor(checked = false, onChange = null) {
        super();
        this.checked = checked;
        this.onChange = onChange;
        this.width = 50;
        this.height = 25;
        this.knobRadius = 10;
        this.padding = 3;
        this.hovered = false;

        this.labelOn = "ON";
        this.labelOff = "OFF";
        this.textColor = "#fff";
        this.fontSize = 12;
    }

   

    handleMouse(type, x, y, button) {
        if (!this.enabled || !this.visible) return false;
        this.hovered = false;
        
        if (type === 0 && this.contains(x, y))
        { // Mouse Down
            this.checked = !this.checked;
            if (this.onChange) this.onChange(this.checked);
            return true;
        }

            
        
       
        if (type === 2 && this.contains(x, y))
        { // Mouse Move
            this.hovered = true;
            return true;
        }


        return false;
    }

    render(g) {
        if (!this.visible) return;
    
        const knobX = this.x + (this.checked ? this.width - this.height : 0) + this.padding;
        const knobY = this.y + this.padding;
        const knobSize = this.height - 2 * this.padding;
      
    
        // Fundo (base do botão)
        g.setColor(this.checked ? Theme.toggleBackgroundChecked : Theme.toggleBackground);
        g.drawRoundedRect(this.x, this.y, this.width, this.height, this.height / 2);
    
        // Texto (ON/OFF)
        const label = this.checked ? this.labelOn : this.labelOff;
        g.setColor(Theme.toggleText);
        const textSize = g.measureText(label);
        g.drawText(label, this.x + (this.width - textSize.width) / 2, this.y + (this.height - textSize.height) / 2);
    
        // Knob
        g.setColor(Theme.toggleKnob);
        g.fillCircle(knobX + knobSize / 2, knobY + knobSize / 2, knobSize / 2);
    
        // Hover outline
        if (this.hovered) {
            g.setColor(Theme.toggleHoverOutline);
            g.drawRect(this.x, this.y, this.width, this.height);
        }
    }
    
}



export class RadioButton extends Widget
{
    constructor(label = "",   value = null)
    {
        super();
        this.label = label;
 
        this.value = value;
        this.selected = false;
        this.radius = 8;
        this.padding = 5;
        this.height = 20;
        this.width = 20;
        this.hovered = false;

        
    }
 
    handleMouse(type, x, y, button)
    {
        this.MouseX = x;
        this.MouseY = y;

        this.hovered = false;

        if (!this.enabled || !this.visible) return false;
        if (!this.contains(x, y)) return false;

        if (type === 0)
        { // Mouse Down
            this.selected = ! this.selected;
            return true;
        }

       

        if (type === 2)
        { // Mouse Move
            this.hovered = true;
            return true;
        }

       

        return false;
    }

    render(g) {
        if (!this.visible) return;
    
        const cx = this.x + this.radius + this.padding;
        const cy = this.y + this.height / 2;
        this.radius = Math.min(this.width-this.padding, this.height) *0.5 ;
        g.setColor(Theme.radioOuter);
        g.drawCircle(cx, cy, this.radius);
    
        if (this.selected)
        {
            g.setColor(Theme.radioInner);
            g.fillCircle(cx, cy, this.radius - 3);
        }
    
        g.setColor(Theme.radioText);
        g.drawText(this.label, cx + this.radius + this.padding, this.y + 5);
    
        if (this.hovered)
        {
            g.setColor(Theme.radioHoverOutline);
            g.drawCircle(cx, cy, this.radius);
        }
       // g.drawRect(this.x, this.y, this.width, this.height);
    }
    
}


export class RadioGroup extends Widget
{
    constructor(onChange = null, columns = 1, spacing = 50)
    {
        super();
        this.buttons = [];
        this.selected = null;
        this.onChange = onChange;
        this.columns = columns;
        this.spacing = spacing;
        this.x = 0;
        this.y = 0;
        this.colWidth = 100;  
        this.rowHeight = 30;
        this.outline = true;
    }

    setCollumWidth(w) {
        this.colWidth = w;
    }

    setRowHeight(h) {
        this.rowHeight = h;
    }

    add(text)
    {
        const b = new RadioButton(text);
        this.buttons.push(b);
        this._calculateSize();
        return b;
    }

    update(dt) {
        for (const cb of this.buttons)
        {
            cb.update(dt);
        }
    }

    handleMouse(type, x, y, button)
    {
        if (!this.enabled || !this.visible) return false;
        if (!this.contains(x, y)) return false;

        let index = -1;

        for (let i = 0; i < this.buttons.length; i++)
        {
            const cb = this.buttons[i];
            if (cb.handleMouse(type, x- this.x , y - this.y , button))
            {
                if (type === 0) {
                    index = i;
                    break;
                }
            }
        }
        if (index >= 0)
        {
            for (let i = 0; i < this.buttons.length; i++)
            {
                const cb = this.buttons[i];
                if (i === index)
                {
                    cb.selected = true;
                    this.selected = cb;
                }
                else
                {
                    cb.selected = false;
                }
            }
            if (this.onChange)
            {
                this.onChange(this.selected);
            }
            return true;
        }
        return false;
    }



    render(g) {
       
         
        g.save();
        g.ctx.translate(this.x, this.y);
      

        for (let i = 0; i < this.buttons.length; i++)
        {
            const cb = this.buttons[i];
            const col = i % this.columns;
            const row = Math.floor(i / this.columns);
 
           

            cb.setPosition(col * this.colWidth, row * this.rowHeight);
            cb.render(g);
        }
  

        g.restore();
        if (this.outline)
        {
            g.setColor(Theme.radioGroupBorder);
            g.drawRect(this.x - 2, this.y - 2, this.width, this.height);
        }
    }

    _calculateSize() {
        this.maxWidth = 0;
        this.maxHeight = 0;

        for (let i = 0; i < this.buttons.length; i++)
        {
            const cb = this.buttons[i];
            const col = i % this.columns;
            const row = Math.floor(i / this.columns);
 
            const width  = col * this.colWidth + this.spacing + cb.width;
            const height = row *this.rowHeight+ this.spacing + cb.height;

            this.maxWidth = Math.max(this.maxWidth,   width );
            this.maxHeight = Math.max(this.maxHeight,  height );

        }
        this.width = this.maxWidth;
        this.height = this.maxHeight;
   
    }

    

    select(button)
    {
        this.buttons.forEach(b => b.selected = false);
        button.selected = true;
        this.selected = button;
        if (this.onChange) this.onChange(button.value);
    }

    getValue()
    {
        return this.selected ? this.selected.value : null;
    }

    setValue(index)
    {
            if (index >= 0)
            {
                for (let i = 0; i < this.buttons.length; i++)
                {
                    const cb = this.buttons[i];
                    if (i === index)
                    {
                        cb.selected = true;
                        this.selected = cb;
                    }
                    else
                    {
                        cb.selected = false;
                    }
                }
                if (this.onChange)
                {
                    this.onChange(this.selected);
                }
                return true;
            }
            return false;
    }
}


export class Slider extends Widget {
    constructor(min = 0, max = 1, step = 0.01, value = 0, orientation = "horizontal")
    {
        super();
        this.min = min;
        this.max = max;
        this.step = step;
        this.value = value;
        this.orientation = orientation;
        this.dragging = false;
        this.onChange = null;
    }

    setValue(val) {
        this.value = Math.min(this.max, Math.max(this.min, val));
        if (this.onChange) this.onChange(this.value);
    }

    getPercent() {
        return (this.value - this.min) / (this.max - this.min);
    }

    handleMouse(type, x, y, button) {
        if (!this.enabled) return false;
       

        const localX = x - this.x;
        const localY = y - this.y;

        if (type === 0 && this.contains(x, y))
        { // Mouse down
            this.dragging = true;
            return true;
        }

        if (type === 1) { // Mouse up
            this.dragging = false;
            
        }

        if (type === 2 && this.dragging) { // Mouse move
            const percent = this.orientation === "horizontal"
                ? localX / this.width
                : 1 - (localY / this.height);
            const rawValue = this.min + percent * (this.max - this.min);
            const stepped = Math.round(rawValue / this.step) * this.step;
            this.setValue(stepped);
            return true;
        }

        return false;
    }

   

    render(g) {
        if (!this.visible) return;
    
        // Track externo
        g.setColor(Theme.sliderBorder);
        if (this.orientation === "horizontal")
            g.drawRoundedRect(this.x - 3, this.y, this.width + 8, this.height, 4);
        else
            g.drawRoundedRect(this.x, this.y - 4, this.width, this.height + 8, 4);
    
        // Track interior
        g.setColor(Theme.sliderTrack);
        if (this.orientation === "horizontal")
            g.fillRect(this.x, this.y + this.height / 2 - 3, this.width, 6);
        else
            g.fillRect(this.x + this.width / 2 - 3, this.y, 6, this.height);
    
        // Fill
        const percent = this.getPercent();
        g.setColor(Theme.sliderFill);
        if (this.orientation === "horizontal")
            g.fillRect(this.x, this.y + this.height / 2 - 3, this.width * percent, 6);
        else
            g.fillRect(this.x + this.width / 2 - 3, this.y + this.height * (1 - percent), 6, this.height * percent);
    
        // Thumb
        if (this.orientation === "horizontal") {
            const tx = this.x + this.width * percent - 5;
            g.setColor(Theme.sliderThumb);
            g.fillCircle(tx + 5, this.y + this.height / 2, 8);
        } else {
            const ty = this.y + this.height * (1 - percent) - 5;
            g.setColor(Theme.sliderThumb);
            g.fillCircle(this.x + this.width / 2, ty + 5, 8);
        }
    
        // Valor
        g.setColor(Theme.sliderText);
        const txt = this.value.toFixed(2);
        g.drawText(txt, this.x + this.width + 10, this.y + this.height / 2 - 10);
    }
    
}


export class ProgressBar extends Widget {
    constructor(orientation = "horizontal") {
        super();
        this.value = 0;
        this.max = 1;
        this.orientation = orientation;
    }

    setValue(val) {
        this.value = Math.max(0, Math.min(this.max, val));
    }
    render(g) {
        if (!this.visible) return;
    
        const percent = this.value / this.max;
    
        // Fundo
        g.setColor(Theme.progressBackground);
        g.fillRect(this.x, this.y, this.width, this.height);
    
        // Barra de progresso
        if (this.orientation === "horizontal")
            {
            const pos = this.width * percent;
            
            g.setColor(Theme.progressFill);
            g.fillRect(this.x, this.y, pos, this.height);
            g.setColor(Theme.progressBorder);
            
            g.drawLine(this.x + pos, this.y , this.x +pos, this.y + this.height);
 
            const txt = this.value.toFixed(2);
            const size = g.measureText(txt);
            const w = size.width;
            const h = size.height;
            g.setColor(Theme.progressText);
            g.drawText(txt, this.x + (this.width*0.5) - (w * 0.5) , this.y + (this.height *0.5) - (h * 0.5));
        } else
        {
            const pos = this.y + this.height * (1 - percent);
            g.setColor(Theme.progressFill);
            g.fillRect(this.x, pos, this.width, this.height * percent);
            g.setColor(Theme.progressBorder);
            g.drawLine(this.x, pos, this.x + this.width, pos);
        }
    }
    
}



export class Knob extends Widget {
    constructor(min = 0, max = 1, step = 0.01, value = 0.5, onChange = null) {
        super();
        this.min = min;
        this.max = max;
        this.step = step;
        this.value = value;
        this.onChange = onChange;

        this.dragging = false;
        this.radius = 30;
        this.sensitivity = 0.005;
        this.hovered = false;
    }

 

    isPointInside(x, y)
    {
        const dx = x - (this.x + this.width / 2);
        const dy = y - (this.y + this.height / 2);
        const dist = Math.sqrt(dx * dx + dy * dy);
        return dist <= this.radius;
    }

    _clamp(val) {
        val = Math.max(this.min, Math.min(this.max, val));
        return Math.round(val / this.step) * this.step;
    }

  

    getValueRatio() {
        return (this.value - this.min) / (this.max - this.min);
    }

    setValueFromRatio(ratio) {
        const v = this.min + (this.max - this.min) * ratio;
        this.value = Math.max(this.min, Math.min(this.max, v));
        if (this.onChange) this.onChange(this.value);
    }
    handleMouse(type, x, y, button) {
        if (!this.enabled || !this.visible) return false;
        
        if (type === 0 && this.isPointInside(x, y))
        { // DOWN
            const dx = x - (this.x + this.width / 2);
            const dy = y - (this.y + this.height / 2);
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist <= this.radius) {
                this.dragging = true;
                return true;
            }
        }

        if (type === 1) { // UP
            this.dragging = false;
        }

       

        if (type === 2 && this.dragging)
        { // MOVE
            const delta = Input.mouseDY + -Input.mouseDX; // Usa movimento vertical
            this.value += delta * this.sensitivity * (this.max - this.min);
            this.value = this._clamp(this.value);
            if (this.onChange) this.onChange(this.value);
            return true;
        }

    

        return false;
    }

    render(g) {
        if (!this.visible) return;
    
        const cx = this.x + this.width / 2;
        const cy = this.y + this.height / 2;
        const radius = Math.min(this.width, this.height) / 2 - 10;
    
        const valueRatio = (this.value - this.min) / (this.max - this.min);
        const angle = Math.PI - valueRatio * Math.PI * 2;
    
        const pointerX = cx + radius * Math.cos(angle);
        const pointerY = cy + radius * Math.sin(angle);

        this.hovered = this.isPointInside(Input.mouseX, Input.mouseY);
    
        // Base
        g.setColor(Theme.knobBackground);
        g.fillCircle(cx, cy, this.radius);
    
        // Ponteiro
        g.setColor(Theme.knobPointer);
        g.setLineWidth(3);
        if (this.dragging)
            g.setLineWidth(5);
        g.drawLine(cx, cy, pointerX, pointerY);
        // Texto
        g.setColor(Theme.knobText);
        const valText = this.value.toFixed(2);
        const text = g.measureText(valText);
        g.drawText(valText, cx - text.width / 2, cy + text.height / 2);
        g.setLineWidth(1);
        
        if (this.hovered || this.dragging)
        {
            g.setColor(Theme.knobHoverOutline);
          //  g.setLineWidth(4);
            g.drawCircle(cx, cy, this.radius);
        }
        
        // Marcadores (0°, 90°, 180°, 270°)
        g.setColor(Theme.knobMarkers);
        for (let a = 0; a < 360; a += 90) {
            const rad = Math.PI - (a / 360) * Math.PI * 2;
            const tx = cx + Math.cos(rad) * (radius + 10);
            const ty = cy + Math.sin(rad) * (radius + 10);
            const lbl = a.toString();
            const l = g.measureText(lbl);
            g.drawText(lbl, tx - l.width / 2, ty - l.height / 2);
        }
    }
    
}


export class SliderCircular extends Widget
{
    constructor( onChange)
    {
        
        super();


      this.radius = 0;
      this.value = 0.5; // 0 to 1
      this.isDragging = false;
      this.startAngle = -0.75 * Math.PI;
      this.endAngle = 0.75 * Math.PI;
      this.onChange = onChange || function() {};
    }

 

    handleMouse(type, x, y, button)
    {
        if (!this.enabled || !this.visible) return false;
        
        if (type === 0 && this.isPointInside(x, y))
        { // DOWN
            this.isDragging = true;
            return true;
        }
  
        
        if (type === 1)
        { // UP
 
            this.isDragging = false;
        }

       

        if (type === 2 )
        { // MOVE

                if (this.isDragging)
                {
                    const oldValue = this.value;
                    this.value = this._calculateValue(x, y);
                
                    if (oldValue !== this.value)
                    {
                      this.onChange(this.value);
                    }
                return true;
              }
            
        }

        
        return false;
    }
    
    render(g)
    {
        const ctx = g.ctx;
        
        const cx = this.x + this.width / 2;
        const cy = this.y + this.height / 2;
        this.radius = Math.min(this.width, this.height) / 2;
        
      // Fundo do knob
      ctx.fillStyle = '#ecf0f1';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
      
      // Borda
      ctx.strokeStyle = '#bdc3c7';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.stroke();
      
      // Trilho
      ctx.strokeStyle = '#95a5a6';
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius - 15, this.startAngle, this.endAngle);
      ctx.stroke();
      
      // Valor atual
      const valueAngle = this.startAngle + (this.endAngle - this.startAngle) * this.value;
      ctx.strokeStyle = '#3498db';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius - 15, this.startAngle, valueAngle);
      ctx.stroke();
      
      // Marcador
      ctx.fillStyle = '#2c3e50';
      ctx.beginPath();
      const markerX = this.x + Math.cos(valueAngle) * (this.radius - 15);
      const markerY = this.y + Math.sin(valueAngle) * (this.radius - 15);
      ctx.arc(markerX, markerY, 8, 0, Math.PI * 2);
      ctx.fill();
      
      // Valor como texto
      ctx.fillStyle = '#2c3e50';
      ctx.font = 'bold 16px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(Math.round(this.value * 100) + '%', this.x, this.y);
      ctx.lineWidth = 1;
    }
    
    isPointInside(x, y)
    {
      const dx = x - this.x;
      const dy = y - this.y;
      return Math.sqrt(dx * dx + dy * dy) <= this.radius;
    }
    
    _calculateValue(x, y)
    {
      const dx = x - this.x;
      const dy = y - this.y;
      let angle = Math.atan2(dy, dx);
    
 
        if (angle < this.startAngle)
        {
        // angle += Math.PI * 2;
        }
      
        //max 2.3608456194434537
      angle = Math.max(this.startAngle, Math.min(this.endAngle, angle));
      
 
      return (angle - this.startAngle) / (this.endAngle - this.startAngle);
    }
    
 
    
    
    
   
}
  
export class TextView extends Widget
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
      this._drawScrollBar(ctx);
    }
    
    _renderContent(ctx)
    {
      ctx.fillStyle = '#34495e';
      ctx.font = '14px Arial';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
      
      const maxWidth = this.width - this.scrollBarWidth - 10;
      const words = this.content.split(' ');
      
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
    
    _drawScrollBar(ctx)
    {
        if (this.maxScroll > 0)
        {
        const contentHeight = this.scrollPosition + this.height + this.maxScroll;
        const scrollHeight = Math.max(30, this.height * (this.height / contentHeight));
        const scrollPosition = (this.scrollPosition / this.maxScroll) * (this.height - scrollHeight);
        
        // Trilho da barra de rolagem
        ctx.fillStyle = '#bdc3c7';
        ctx.fillRect(this.x + this.width - this.scrollBarWidth, this.y, this.scrollBarWidth, this.height);
        
        // Barra de rolagem
        ctx.fillStyle = this.isDraggingScroll ? '#7f8c8d' : '#95a5a6';
        ctx.fillRect(
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



    handleMouse(type, x, y, button)
    {
        if (!this.enabled || !this.visible) return false;
        
        if (type === 0 && this.contains(x, y))
        { // DOWN
            if (this.handleMouseDown(x, y)) {
                return true;
            }
        }

        if (type === 1) { // UP
            this.isDraggingScroll = false;
        }

       

        if (type === 2 )
        { // MOVE

            if (this.handleMouseMove(x, y)) {
                return true;
            }
            
        }

        
        return false;
    }
    
    handleMouseMove(x, y)
    {
        if (this.isDraggingScroll)
        {
        const scrollableHeight = this.height - (this.height * (this.height / (this.maxScroll + this.height)));
        const scrollRatio = (y - this.y) / this.height;
        this.scrollPosition = Math.max(0, Math.min(this.maxScroll, this.maxScroll * scrollRatio));
        return true;
      }
      return this.contains(x, y);
    }
    
    handleMouseDown(x, y)
    {
        if (this._isPointInScrollBar(x, y))
        {
        this.isDraggingScroll = true;
        return true;
      }
      return this.contains(x, y);
    }
    
 
    
    handleWheel(deltaY)
    {
        if (this.contains(this.lastMouseX, this.lastMouseY))
        {
        this.scrollPosition += deltaY * 0.5;
        this.scrollPosition = Math.max(0, Math.min(this.maxScroll, this.scrollPosition));
        return true;
      }
      return false;
    }
  }


export class WidgetListBox extends Widget {
    constructor(itemHeight = 30) {
        super();
        this.items = [];
        this.selected = -1;
        this.scrollY = 0;
        this.itemHeight = itemHeight;
        this.scrollbarWidth = 16;
        this.draggingScrollbar = false;
        this.dragStartY = 0;
        this.scrollStart = 0;
    }

    addItem(widget) {
        this.items.push(widget);
    }

    _calculateContentHeight()
    {
        return this.items.length * this.itemHeight;
    }

    handleMouse(type, x, y, button) {
        if (!this.visible || !this.enabled) return false;

        const localX = x - this.x;
        const localY = y - this.y;

        if (type === 0)
        { // Mouse Down
            if (this._isOnScrollbar(x, y))
            {
                this.draggingScrollbar = true;
                this.dragStartY = y;
                this.scrollStart = this.scrollY;
                return true;
            }
        }

        if (type === 2 && this.draggingScrollbar)
        { // Mouse Move
            const contentHeight = this._getContentHeight();
            const scrollRatio = (y - this.dragStartY) / this.height;
            const maxScroll = contentHeight - this.height;
            this.scrollY = Math.max(0, Math.min(this.scrollStart + scrollRatio * contentHeight, maxScroll));
            return true;
        }

        if (type === 1)
        {
            this.draggingScrollbar = false;
        }

        // Propagar eventos para os widgets visíveis
        for (const item of this.items)
        {
          //  const rx = x - (this.x + item.x);
          //  const ry = y - (this.y + item.y - this.scrollY);
            if (item.handleMouse(type, x, y, button)) return true;
        }

        return false;
    }


    scrollBy(dy) {
        const contentHeight = this._getContentHeight();
        const maxScroll = Math.max(0, contentHeight - this.height);
        this.scrollY = Math.min(maxScroll, Math.max(0, this.scrollY + dy));
    }

    _isOnScrollbar(x, y) {
        return x > this.x + this.width - this.scrollbarWidth;
    }

    _getContentHeight() {
        return this.items.length * this.itemHeight;
    }

    render(g) {
        if (!this.visible) return;

        // Fundo
        g.setColor("#f0f0f0");
        g.fillRect(this.x, this.y, this.width, this.height);

        // Clipping
        g.save();
        g.clip(this.x, this.y, this.width - this.scrollbarWidth, this.height);

        let yOffset = -this.scrollY;

        for (let i = 0; i < this.items.length; i++)
        {
            const item = this.items[i];
            item.x = this.x + 1;
            item.y = this.y +  i * this.itemHeight + yOffset;
            item.width  = (this.width-1) - this.scrollbarWidth;
            item.height = this.itemHeight;
            item.resize(item.width, item.height);
            item.render(g);
        }

        g.restore();

        // Scrollbar
        const contentHeight = this._getContentHeight();
        if (contentHeight > this.height)
        {
            const ratio = this.height / contentHeight;
            const scrollbarHeight = this.height * ratio;
            const scrollbarY = this.y + (this.scrollY / contentHeight) * this.height;

            g.setColor("#999");
            g.fillRect(this.x + this.width - this.scrollbarWidth, scrollbarY, this.scrollbarWidth, scrollbarHeight);
        }

        // Borda
        g.setColor("#000");
        g.drawRect(this.x, this.y, this.width, this.height);
    }
}


export class WidgetComboBox extends Widget
{
    constructor() {
        super();
        this.selectedIndex = -1;
        this.expanded = false;

        this.label = new Label("Select");
        this.label.color="black";
        this.listBox = new ListBox();
        this.listBox.visible = false;
        this.listBox.setSize(this.width, 150); // altura máxima do menu

        this.listBox.onItemClick = (item, index) => {
            this.selectedIndex = index;
            this.label.text = item.getLabel ? item.getLabel() : "Item " + index;
            this.expanded = false;
            this.listBox.visible = false;
        };
    }

    toggle() {
        this.expanded = !this.expanded;
        this.listBox.visible = this.expanded;
    }

    addItem(widget) {
        this.listBox.addItem(widget);
    }

    render(g)
    {
        // render do botão com a label atual
        g.setColor("#444");
        g.fillRect(this.x, this.y, this.width, this.height);

        this.label.setPosition(this.x, this.y);
        this.label.setSize(this.width, 30);
        this.label.render(g);
        g.drawText("▼", this.x + this.width - 20, this.y + 8);

        // se estiver expandido, renderiza a lista
        if (this.expanded)
        {
            this.listBox.setPosition(this.x, this.y + 30);
            this.listBox.render(g);
        }
    }

    handleMouse(type, x, y, button)
    {
        if (this.label.contains(x, y) && type === 0)
        {
            this.toggle();
            return true;
        }

        if (this.expanded)
        {
            return this.listBox.handleMouse(type, x, y, button);
        }

        return false;
    }
}


export class ListBox extends Widget
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
        this.dragTimer = 0;
        this.bound = new Rectangle(0, 0, 0, 0);
    }

    addItem(text)
    {
        this.items.push(text);
    }

    handleMouse(type, x, y, button) {
        if (!this.enabled || !this.visible) return false;
        
        const localY = y - this.y;
        const localX = x - this.x;
      //  if (!this.contains(localX, localY)) return false;
        
        if (type === 0 && this.contains(x, y))
        { // Mouse down
            this.dragStartY = y;
            this.scrollStart = this.scroll;
            this.dragTimer = 0;
            this.dragging = false;
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
            //return true;
        }

        if (type === 1)
        { // Mouse up
            this.dragging = false;
            this.hoverIndex = -1;
            this.dragTimer = 0;
            this.itemSelected = false;
        }

        if (type === 2)
        { // Mouse move

            this.itemSelected = false;
            if (this.dragging)
            {
                this.hoverIndex = -1;
                const dy = y - this.dragStartY;
                this.scroll = this.scrollStart - dy;
                this.clampScroll();
            }  else  if (this.bound.contains(x, y))
            {
                const index = Math.floor((localY + this.scroll) / this.itemHeight);
                this.hoverIndex = index;
            }
        }

        return false;
    }

 

    clampScroll() {
        const maxScroll = Math.max(0, this.items.length * this.itemHeight - this.maxVisibleItems * this.itemHeight);
        this.scroll = Math.max(0, Math.min(this.scroll, maxScroll));
    }

    render(g) {
        if (!this.visible) return;
    
        const visibleCount = Math.min(this.maxVisibleItems, this.items.length);
        const height = visibleCount * this.itemHeight;
        this.height = height;
        g.setColor(Theme.listBackground);
        g.fillRect(this.x, this.y, this.width, height);
        this.bound.set(this.x, this.y, this.width, height);
    
    
        g.save();
        g.clip(this.x, this.y, this.width, height);
        g.ctx.translate(0, -this.scroll);
    
        for (let i = 0; i < this.items.length; i++) {
            const itemY = this.y + i * this.itemHeight;
    
            if (i === this.selectedIndex)
            {
                g.setColor(this.dragging ? Theme.listSelectedDragging : Theme.listSelected);
                g.fillRect(this.x, itemY, this.width, this.itemHeight);
            } else if (i === this.hoverIndex)
            {
                g.setColor(Theme.listHover);
                g.fillRect(this.x, itemY, this.width, this.itemHeight);
            }
    
            g.setColor(Theme.listText);
            g.drawText(this.items[i], this.x + 10, itemY + 8);
        }
    
        g.ctx.translate(0, this.scroll);
        g.restore();
    
        g.setColor(Theme.listBorder);
        g.drawRect(this.x, this.y, this.width, height);
    }
    

    update(dt) {
        if (this.itemSelected)
        {
            this.dragTimer += dt;
            if (this.dragTimer > 0.5)
            {
                this.dragging = true;
            }
        }
    }
}
 
export class ComboBox extends Widget
{
    constructor(items = [], onSelect = null) {
        super();
        this.items = items;
        this.selectedIndex = -1;
        this.hoverIndex = -1;
        this.open = false;
        this.scroll = 0;
        this.itemHeight = 30;
        this.maxVisibleItems = 4;
        this.onSelect = onSelect;
        this.dragging = false;
        this.dragTimer = 0;
        this.dragStartY = 0;
        this.scrollStart = 0;
        this.focus = false;
        this.hovered = false;
        this.pressed = false;
        this.bound = new Rectangle(0, 0, 0, 0);
        this.clicks = 0;
        this.lastItem = -1;
    }

    toggleOpen() {
        this.open = !this.open;
    }

    handleMouse(type, x, y, button)
    {
        if (!this.enabled || !this.visible) return false;
      

        const localY = y - this.y;

     
        if (type === 0 && this.contains(x, y))
        {
            this.toggleOpen();
            return true;
        }
       

        // Se estiver aberto, verificar clique/scroll
        if (type === 0)
        {
            if (!this.bound.contains(x, y))
            {
                this.open = false;
                return false;
            }
            this.dragStartY = y;
            this.scrollStart = this.scroll;
            
            const index = Math.floor((localY + this.scroll - this.height) / this.itemHeight);
            if (index >= 0 && index < this.items.length)
            {
                if (this.lastItem === index)
                    this.clicks++;
                else 
                    this.lastItem = index;
                this.pressed = true;
                this.dragTimer = 0;
                this.selectedIndex = index;
                if (this.onSelect) this.onSelect(index, this.items[index]);

            }
            return true;
        }

        if (type === 1 && this.bound.contains(x, y))
        {
            if (this.clicks >= 1)
            {
                if (this.open)
                    this.open = false;
                this.clicks = 0;
            }
            this.dragging = false;
            this.dragTimer = 0;
            this.pressed = false;
            this.hoverIndex = -1;
        }

        if (type === 2)
        {


            this.hovered = this.contains(x, y);
            if (this.dragging)
            {
                const dy = y - this.dragStartY;
                this.scroll = this.scrollStart - dy;
                this.clampScroll();
                return true;
            } else
            {
                const index = Math.floor((localY + this.scroll - this.height) / this.itemHeight);
                this.hoverIndex = index;
            }

                if (!this.bound.contains(x, y) && !this.dragging)
                {
                    this.open = false;
                    
                }

        }

        return false;
    }

   

    clampScroll() {
        const totalHeight = this.items.length * this.itemHeight;
        const visibleHeight = this.maxVisibleItems * this.itemHeight;
        const maxScroll = Math.max(0, totalHeight - visibleHeight);
        this.scroll = Math.max(0, Math.min(this.scroll, maxScroll));
    }
    
    update(dt)
    {
        if (this.open && this.pressed)
        {
            this.dragTimer += dt;
            if (this.dragTimer > 0.5)
            {
                this.dragging = true;
            }
        }
    }

    render(g) {
        if (!this.visible) return;
    
        // Caixa principal
        g.setColor(Theme.comboBackground);
        g.fillRect(this.x, this.y, this.width, this.height);
    
        g.setColor(Theme.comboText);
        const label = this.selectedIndex >= 0 ? this.items[this.selectedIndex] : "Selecionar...";
        g.drawText(label, this.x + 10, this.y + 8);
    
        g.setColor(Theme.comboArrow);
        g.drawText(this.open ? "▲" : "▼", this.x + this.width - 20, this.y + 8);
    
        g.setColor(Theme.comboBorder);
        g.drawRect(this.x, this.y, this.width, this.height);
    
        this.bound.set(this.x, this.y, this.width, this.height);
    
        if (this.open) {
            const visibleCount = Math.min(this.maxVisibleItems, this.items.length);
            const listHeight = visibleCount * this.itemHeight;
    
            g.setColor(Theme.comboListBackground);
            g.fillRect(this.x, this.y + this.height, this.width, listHeight);
    
            g.save();
            g.ctx.translate(0, -this.scroll);
    
            for (let i = 0; i < this.items.length; i++) {
                const itemY = this.y + this.height + i * this.itemHeight;
    
                if (itemY + this.itemHeight - this.scroll > this.y + this.height + listHeight) break;
                if (itemY - this.scroll < this.y + this.height) continue;
                if (i === this.selectedIndex) {
                    g.setColor(this.dragging ? Theme.comboSelectedDragging : Theme.comboListSelect);
                    g.fillRect(this.x, itemY, this.width, this.itemHeight);
                } else if (i === this.hoverIndex) {
                    g.setColor(Theme.comboListHover);
                    g.fillRect(this.x, itemY, this.width, this.itemHeight);
                }
    
                g.setColor(Theme.comboText);
                g.drawText(this.items[i], this.x + 10, itemY + 8);
            }
    
            g.ctx.translate(0, this.scroll);
            g.restore();
    
            g.setColor(Theme.comboBorder);
            g.drawRect(this.x, this.y + this.height, this.width, listHeight);
            this.bound.set(this.x, this.y, this.width, this.height + listHeight);
        }
    }
    
    
}
