import { Input } from "./Input.js";
import { Navigator } from "./Fragment.js";

export class Activity
{
    constructor(canvas, virtualWidth = 800, virtualHeight = 900, fitMode = "fit") 
    {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.g = null;
        this.fragment = null;
        this.virtualWidth = virtualWidth;
        this.virtualHeight = virtualHeight;
        this.width = virtualWidth;
        this.height = virtualHeight;
        this.fitMode = fitMode; // "fit", "stretch", "fill"
        Navigator.Instance();
        this.scaleX = 1;
        this.scaleY = 1;
        this.offsetX = 0;
        this.offsetY = 0;
        this.pointX = 0;
        this.pointY = 0;

        this.resizeCanvas();
        window.addEventListener("resize", () => this.resizeCanvas());


        window.addEventListener("keydown", e => Input.onKeyDown(e.code));
        window.addEventListener("keyup", e => Input.onKeyUp(e.code));

        canvas.addEventListener("mousedown", e => this._onMouseDown(e));
        canvas.addEventListener("mouseup", e => this._onMouseUp(e));
        canvas.addEventListener("mousemove", e => this._onMouseMove(e));
        this._setupTouchAsMouse(canvas);

 

        Input.init();

        this.firstRender = true;

        // FPS
        this.fps = 0;
        this._frames = 0;
        this._fpsTime = 0;
    }

    _setupTouchAsMouse(canvas) {
        const getTouchPos = (e) => {
            const rect = canvas.getBoundingClientRect();
            const touch = e.touches[0] || e.changedTouches[0];
            return {
                clientX: touch.clientX - rect.left,
                clientY: touch.clientY - rect.top
            };
        };
    
        canvas.addEventListener("touchstart", e => {
            const { clientX, clientY } = getTouchPos(e);
            const fakeMouseEvent = {
                button: 0,
                clientX,
                clientY
            };
            this._onMouseDown(fakeMouseEvent);
            e.preventDefault();
        });
    
        canvas.addEventListener("touchmove", e => {
            const { clientX, clientY } = getTouchPos(e);
            const fakeMouseEvent = {
                clientX,
                clientY
            };
            this._onMouseMove(fakeMouseEvent);
            e.preventDefault();
        });
    
        canvas.addEventListener("touchend", e => {
            const { clientX, clientY } = getTouchPos(e);
            const fakeMouseEvent = {
                button: 0,
                clientX,
                clientY
            };
            this._onMouseUp(fakeMouseEvent);
            e.preventDefault();
        });
    
        canvas.addEventListener("touchcancel", e => {
            const { clientX, clientY } = getTouchPos(e);
            const fakeMouseEvent = {
                button: 0,
                clientX,
                clientY
            };
            this._onMouseUp(fakeMouseEvent);
            e.preventDefault();
        });
    }
    

    _onMouseDown(e) {
        Input.onMouseDown(e.button);
        const { x, y } = this._getMouseCoords(e);
        Input.onMouseMove(x, y); // atualiza também a posição
        this.pointX = x;
        this.pointY = y;
        this._handleMouse(Input.Mouse.DOWN, x, y, e.button);
        console.log("down");
    }

    _onMouseUp(e) {
        Input.onMouseUp(e.button);
        const { x, y } = this._getMouseCoords(e);
        Input.onMouseMove(x, y);
        this._handleMouse(Input.Mouse.UP, x, y, e.button);
    }

    _onMouseMove(e) {
        const { x, y } = this._getMouseCoords(e);
        Input.onMouseMove(x, y);
        this._handleMouse(Input.Mouse.MOVE, x, y, -1);
    }

    _handleMouse(type, x, y, button)
    {
        Navigator.Instance().handleMouse(type, x, y, button);
    }

    resizeCanvas() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        this.width = w;
        this.height = h;
        this.canvas.width = w;
        this.canvas.height = h;

        const aspectCanvas = w / h;
        const aspectVirtual = this.virtualWidth / this.virtualHeight;

        if (this.fitMode === "fit")
        {
            if (aspectCanvas > aspectVirtual)
            {
                this.scaleY = h / this.virtualHeight;
                this.scaleX = this.scaleY;
            } else
            {
                this.scaleX = w / this.virtualWidth;
                this.scaleY = this.scaleX;
        
        
            }
            this.offsetX = (w - this.virtualWidth * this.scaleX) / 2;
            this.offsetY = (h - this.virtualHeight * this.scaleY) / 2;
        } else if (this.fitMode === "stretch")
        {
            this.scaleX = w / this.virtualWidth;
            this.scaleY = h / this.virtualHeight;

            this.offsetX = 0;// (w - this.virtualWidth * this.scaleX) / 2;
            this.offsetY = 0;// (h - this.virtualHeight * this.scaleY) / 2;
        } else if (this.fitMode === "fill")
        {
            //this.scaleX = this.scaleY = Math.max(w / this.virtualWidth, h / this.virtualHeight);
            this.scaleX = this.canvas.width / this.virtualWidth;
            this.scaleY = this.canvas.height / this.virtualHeight;
            this.offsetX = 0;
            this.offsetY = 0;
        } else if (this.fitMode === "none")
        {
            this.scaleX = this.scaleY = 1;
            this.offsetX = 0;
            this.offsetY = 0;
            this.virtualWidth = w;
            this.virtualHeight = h;
        }

        Navigator.Instance().resize(w,h,this.virtualWidth, this.virtualHeight);

        
    }
    // resizeCanvas()
    // {
    //     this.canvas.width = window.innerWidth;
    //     this.canvas.height = window.innerHeight;
    //     if (this.fragment)
    //     {
    //         this.fragment.onResize(this.canvas.width, this.canvas.height);
    //     }
    // }

    _getMouseCoords(e) {
        const rect = this.canvas.getBoundingClientRect();
        const realX = e.clientX - rect.left;
        const realY = e.clientY - rect.top;

        const x = (realX - this.offsetX) / this.scaleX;
        const y = (realY - this.offsetY) / this.scaleY;

        return { x, y };
    }

 

    setGraphics(g) {
        this.g = g;
    }

    setFragment(fragment)
    {
        Navigator.Instance().setFragment(fragment);
    }

    addFragment(name, fragment)
    {
        fragment.activity = this;
        Navigator.Instance().addFragment(name, fragment);    
    }

    switchFragment(name, outTransition = null, inTransition = null)
    {
        Navigator.Instance().switchFragment(name, outTransition, inTransition);
    }

    start() {
        const loop = (now) =>
        {
            const dt = (now - this.lastTime) / 1000;
            this.lastTime = now;

            this._frames++;
            this._fpsTime += dt;
            if (this._fpsTime >= 1.0)
            {
                this.fps = this._frames;
                this._frames = 0;
                this._fpsTime = 0;
            }
            if (this.firstRender)
            {
                this.firstRender = false;
                this.resizeCanvas();
            }
            this.g.clear(Theme.colors[]);
            this.ctx.save();
   
            this.ctx.translate(this.offsetX, this.offsetY);
            this.ctx.scale(this.scaleX, this.scaleY);

            
    
            Navigator.Instance().update(this.g, dt);
            this.g.fillCircle(this.pointX, this.pointY, 4);
            this.ctx.restore();

            this.g.setColor("#rgb(45,45,45");
            this.g.drawText(`FPS: ${this.fps} (${this.width}/${this.height}) `, 10, this.height - 16, 14);

            
            Input.update();
            requestAnimationFrame(loop);
        };

        this.lastTime = performance.now();
        requestAnimationFrame(loop);
    }
}
