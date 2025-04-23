export class Input {
    static Mouse = {
        DOWN: 0,
        UP: 1,
        MOVE: 2
    };

    static Button = {
        LEFT: 0,
        MIDDLE: 1,
        RIGHT: 2
    };

    static Key = {
        DOWN: 0,
        UP: 1,
        PRESS: 2
    };

    static keys = new Set();
    static mouseButtons = new Set();
    static mouseX = 0;
    static mouseY = 0;
    static mouseDX = 0;
    static mouseDY = 0;

    static prevX = 0;
    static prevY = 0;
    
  
  static MAX_KEYBOARD_KEYS = 256;
  static previousKeyState=[Input.MAX_KEYBOARD_KEYS];
  static currentKeyState=[Input.MAX_KEYBOARD_KEYS];

  static MAX_TOUCH_POINTS = 10;
  
  static currentButtonState =[Input.MAX_TOUCH_POINTS]; 
    static previousButtonState = [Input.MAX_TOUCH_POINTS]; 
    


  static init()
  {
    for (let i = 0; i < Input.MAX_TOUCH_POINTS; i++)
    {
      Input.currentButtonState[i] = 0;
      Input.previousButtonState[i] = 0;
    }
    for (let i = 0; i < Input.MAX_KEYBOARD_KEYS; i++)
    {
      Input.currentKeyState[i] = 0;
      Input.previousKeyState[i] = 0;
    }
  }

    static onKeyDown(code) {
        Input.keys.add(code);

    }

    static onKeyUp(code) {
        Input.keys.delete(code);
    }

    static onMouseDown(button) {
        Input.mouseButtons.add(button);
        Input.currentButtonState[button] = 1;
    }

    static onMouseUp(button) {
        Input.mouseButtons.delete(button);
        Input.currentButtonState[button] = 0;
    }

    static onMouseMove(x, y) {
        Input.mouseX = x;
      Input.mouseY = y;
      Input.mouseDX = x - Input.prevX;
      Input.mouseDY = y - Input.prevY;

      Input.mouseX = x;
      Input.mouseY = y;

      Input.prevX = x;
      Input.prevY = y;
    }

    static isKeyDown(code) {
        return Input.keys.has(code);
    }

    static isMouseDown(button) {
        return Input.mouseButtons.has(button);
    }

    static getMousePosition() {
        return { x: Input.mouseX, y: Input.mouseY };
    }
    static isMouseDown(button)
    {
      let downd = false;
      if ((Input.currentButtonState[button] === 1) && (Input.currentButtonState[button] === 1)) downd = true;
      return downd;
      }
    
    static isMousePressed(button)
    {
       let pressed = false;
        if ((Input.currentButtonState[button] === 1) && (Input.previousButtonState[button]) === 0) pressed = true;
        return pressed;
    }
    
    static isMouseReleased(button)
    {
      let released = false;
  
      if ((Input.currentButtonState[button] === 0) && (Input.previousButtonState[button] === 1)) released = true;
  
      return released;
      
    }
  
    static isMouseUp(button)
    {
      let up = false;
      
      if (Input.currentButtonState[button] === 0) up = true;
  
      return up;
    }
    
    static isKeyDown(key)
    {
      return false;
      }
    
    static isKeyPressed(key)
    {
      return false;
      }
    
    static isKeyReleased(key)
    {
        return false;
      }
    
  
    static update()
    {
        Input.mouseDX = 0;
        Input.mouseDY = 0;
  
      for (let i = 0; i < Input.MAX_TOUCH_POINTS; i++)
      {
        Input.previousButtonState[i] = Input.currentButtonState[i];
      }
      for (let i = 0; i < Input.MAX_KEYBOARD_KEYS; i++)
      {
        Input.previousKeyState[i] = Input.currentKeyState[i];
      }
    }
}
