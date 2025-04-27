
const BACKGROUND = 0;
const LABEL = 1;
const BUTTON = 2;
const BUTTON_HOVER = 3;
const BUTTON_PRESS = 4;

const PANEL = 5
const PANEL_BORDERLIGHT = 6;
const PANEL_BORDERDARK = 7;


const TOGGLE = 8;
const TOGGLE_CHECKED = 10;
const TOGGLE_TEXT = 11;
const TOGGLE_KNOB = 12;
const TOGGLE_HOVER = 13;

const CHECKBOX = 14;
const CHECKBOX_HOVER = 15;
const CHECKBOX_CHECKED = 16;
const CHECKBOX_TEXT = 17;


const RADIO_OUTER = 20;
const RADIO_INNER = 21;
const RADIO_TEXT = 22;
const RADIO_HOVER= 23;

const RADIO_GROUP = 25;
const RADIO_GROUP_BORDER = 26;
const RADIO_GROUP_TEXT = 27;
const RADIO_GROUP_OUTLINE = 28;

const FIELD = 28;
const FIELD_BORDER = 29;
const FIELD_TEXT = 30;
const FIELD_HOVER = 31;
const FIELD_LABEL = 32;
    

const PROGRESS_BAR = 33;
const PROGRESS_BAR_TEXT = 34;
const PROGRESS_BAR_FILL = 35;
const PROGRESS_BAR_BORDER = 36;

const SLIDER = 37;
const SLIDER_TRACK = 38;
const SLIDER_FILL = 39;
const SLIDER_THUMB = 40;
const SLIDER_BORDER = 41;
const SLIDER_TEXT = 42;                                                                                                         
 

const STEPPER = 43;
const STEPPER_BUTTON = 44;
const STEPPER_HOVER = 45;
const STEPPER_PRESS = 46;
const STEPPER_BORDER = 47;
const STEPPER_TEXT = 48;



const LISTBOX = 50;
const LISTBOX_SELECTED = 51;
const LISTBOX_TEXT = 52;
const LISTBOX_BAR = 53;
const LISTBOX_THUMB = 54;
const LISTBOX_HOVER = 55;
const LISTBOX_BORDER = 56;


const COMBOBOX = 57;
const COMBOBOX_ARROW = 58;
const COMBOBOX_BORDER = 59;
const COMBOBOX_LIST_BACKGROUND = 60;
const COMBOBOX_LIST_HOVER = 61;
const COMBOBOX_LIST_SELECT = 62;
const COMBOBOX_TEXT = 63;


const WINDOW_BAR = 64;
const WINDOW_BAR_HOVER = 65;
const WINDOW_TITLE = 66;
const WINDOW_BACKGROUND = 67;
const WINDOW_RESIZE_LINES = 68;

const WINDOW_BUTTON_CLOSE = 69;
const WINDOW_BUTTON_MINIMIZE = 70;
const WINDOW_BUTTON_SYMBOL = 71;
const WINDOW_BUTTON_SYMBOL_HOVER = 72;
const WINDOW_BORDER = 73;

const SCROLL_BAR = 74;
const SCROLL_BAR_THUMB = 75;
const SCROLL_BAR_THUMB_MOVE = 76;

class Theme 
{
    static colors = [];
   static setDefault()
{
        Theme.colors = [];
        Theme.colors[LABEL] = "#ffffff";
        Theme.colors[BACKGROUND] = "#000";
        Theme.colors[BUTTON] = "rgb(192,192,192)";
        Theme.colors[BUTTON_HOVER] =  "rgb(210,210,210)";
        Theme.colors[BUTTON_PRESS] = "rgb(128,128,128)";
       
       Theme.colors[PANEL] = "rgb(160, 150, 150)";
       Theme.colors[PANEL_BORDERLIGHT] = "#ffffff";
       Theme.colors[PANEL_BORDERDARK] = "#888888";

       Theme.colors[TOGGLE] = "#222";
       Theme.colors[TOGGLE_CHECKED] = "#777";
       Theme.colors[TOGGLE_TEXT] = "#fff";
       Theme.colors[TOGGLE_KNOB] = "#fff";
       Theme.colors[TOGGLE_HOVER] = "rgba(54, 49, 49, 0.4)";

       Theme.colors[CHECKBOX] = "#555";
       Theme.colors[CHECKBOX_HOVER] = "rgba(40,40,40,1.0)";
       Theme.colors[CHECKBOX_CHECKED] = "#000";
       Theme.colors[CHECKBOX_TEXT] = "#000";


       Theme.colors[RADIO_OUTER] = "#555";
       Theme.colors[RADIO_INNER] = "#444";
       Theme.colors[RADIO_TEXT] = "#000";
       Theme.colors[RADIO_HOVER] = "rgba(0,0,0,0.4)";

       Theme.colors[RADIO_GROUP] = "#ccc";
       Theme.colors[RADIO_GROUP_BORDER] = "#000";
       Theme.colors[RADIO_GROUP_TEXT] = "#000";
       Theme.colors[RADIO_GROUP_OUTLINE] = "rgba(40,40,40,0.6)";

       Theme.colors[FIELD] = "#ccc";
       Theme.colors[FIELD_BORDER] = "#000";
       Theme.colors[FIELD_TEXT] = "#000";
       Theme.colors[FIELD_HOVER] = "rgba(0,0,0,0.4)";
       Theme.colors[FIELD_LABEL] = "#000";

       Theme.colors[PROGRESS_BAR] = "#555";
       Theme.colors[PROGRESS_BAR_TEXT] = "#ccc";
       Theme.colors[PROGRESS_BAR_FILL] = "#444";
       Theme.colors[PROGRESS_BAR_BORDER] = "#000";

       Theme.colors[SLIDER] = "#888";
       Theme.colors[SLIDER_TRACK] = "#878";
       Theme.colors[SLIDER_FILL] = "#666";
       Theme.colors[SLIDER_THUMB] = "#222";
       Theme.colors[SLIDER_BORDER] = "#aaa";
       Theme.colors[SLIDER_TEXT] = "#444";

       Theme.colors[STEPPER] = "#ccc";
       Theme.colors[STEPPER_BUTTON] = "rgb(192,192,192)";
       Theme.colors[STEPPER_HOVER] =  "rgb(216, 201, 201)";
       Theme.colors[STEPPER_PRESS] = "rgb(128,128,128)";
       Theme.colors[STEPPER_BORDER] = "rgba(0,0,0,0.2)";
       Theme.colors[STEPPER_TEXT] = "#000";
  


       Theme.colors[LISTBOX] = "#ccc";
       Theme.colors[LISTBOX_SELECTED] = "rgba(100,100,100,0.3)";
       Theme.colors[LISTBOX_HOVER] = "rgba(100,100,100,0.3)";
       Theme.colors[LISTBOX_BORDER] = "rgba(0,0,0,0.2)";
       Theme.colors[LISTBOX_TEXT] = "#000";
       Theme.colors[LISTBOX_BAR] = "rgba(156, 140, 140, 0.5)";
       Theme.colors[LISTBOX_THUMB] = "rgba(41, 40, 40, 0.4)";


       Theme.colors[COMBOBOX] = "#eee";
       Theme.colors[COMBOBOX_TEXT] = "#000";
       Theme.colors[COMBOBOX_ARROW] = "#000";
       Theme.colors[COMBOBOX_BORDER] = "rgba(0,0,0,0.2)";
       Theme.colors[COMBOBOX_LIST_BACKGROUND] = "#ccc";
       Theme.colors[COMBOBOX_LIST_HOVER] = "rgba(100,100,100,0.1)";
       Theme.colors[COMBOBOX_LIST_SELECT] = "rgba(100,100,100,0.3)";

       Theme.colors[WINDOW_BAR] = "#333";
       Theme.colors[WINDOW_BAR_HOVER] = "#444";
       Theme.colors[WINDOW_TITLE] = "#fff";
       Theme.colors[WINDOW_BACKGROUND] = "#f0f0f0";
       Theme.colors[WINDOW_RESIZE_LINES] = "#888";

       Theme.colors[WINDOW_BUTTON_CLOSE]     = "#aaa";
       Theme.colors[WINDOW_BUTTON_MINIMIZE]  = "#aaa";
       Theme.colors[WINDOW_BUTTON_SYMBOL]    = "#000";
       Theme.colors[WINDOW_BUTTON_SYMBOL_HOVER] = "#f00";

       Theme.colors[WINDOW_BORDER] = "#000";
       
       Theme.colors[SCROLL_BAR] = "#bdc3c7";
       Theme.colors[SCROLL_BAR_THUMB] = "#7f8c8d";
       Theme.colors[SCROLL_BAR_THUMB_MOVE] = "#95a5a6";



 
       
    }
}

//  // Buttons
 

 

//  // Knob
//  static knobBackground = "#777";
//  static knobPointer = "#aaa";
//  static knobText = "#000";
//  static knobHoverOutline = "rgba(40,40,40,0.8)";
//  static knobMarkers = "#ccc";
 

 
  

//  // Tabs
//  static tabBackground = "#ccc";
//  static tabActive = "#ddd";
//  static tabInactive = "#aaa";
//  static tabLabel = "#000";
//  static tabHoverOutline = "#999";
//  static tabCloseIcon = "#000";
//  static tabScrollButton = "#888";
//  static tabScrollIcon = "#fff";

//  // Window (janela)
//  static windowBar         = "#333";
//  static windowBarHover    = "#444";
//  static windowTitle       = "#fff";
//  static windowBackground  = "#f0f0f0";
//  static windowResizeLines = "#888";

//  static windowButtonClose     = "#aaa";
//  static windowButtonMinimize  = "#aaa";
//  static windowButtonSymbol    = "#000";
//  static windowButtonSymbolHover = "#f00";

//  static windowBorder          = "#000";

//  static scrollbarTrack = "rgba(255,255,255,0.1)";
//  static scrollbarThumb = "rgba(255,255,255,0.4)";


//  //spinner
//  static spinnerTrack = "#ccc";
//  static spinnerHead = "#3498db";

//  static toastBackground = "#333";
//  static toastBorder = "#555";
//  static toastText = "#fff";


//  static imageBorder = "#888";


//  static datepickerBackground = "#ecf0f1";
//  static datepickerBorder = "#bdc3c7";
//  static datepickerHeader = "#2c3e50";
//  static datepickerWeekday = "#7f8c8d";
//  static datepickerSelected = "#3498db";
//  static datepickerText = "#2c3e50";



//  // Shared
//  static highlight = "#4caf50";
//  static textDefault = "#000";
//  static background = "#f0f0f0";