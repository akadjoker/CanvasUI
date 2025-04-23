# CanvasUI Framework

A lightweight and modular UI framework built in pure JavaScript using Canvas 2D.  
Inspired by Qt, Unity and Android — fully custom and optimized for real-time Canvas rendering.

## ✨ Features

- Widget-based architecture (Button, Slider, Toggle, ComboBox, etc.)
- **Activity/Fragment** system to manage screens and transitions
- TabView with animated transitions and scrollable headers
- Layout system with auto-sizing and flexible positioning
- Custom themes: Light, Dark, Pastel, Terminal
- Smooth transitions with easing curves (Bounce, Elastic, etc.)
- Scrollable ListBoxes and ComboBoxes
- Knobs and draggable value fields (like Unity/DAW sliders)
- Pure canvas rendering — no DOM, no CSS
- Single dependency-free JS file

---

## 🔁 Activity & Fragment System

Just like in Android, your UI logic is separated into **Activities** and **Fragments**.

- `Activity` handles the root canvas, input, and transition logic.
- `Fragment` represents a screen or view section (like a menu, scene, panel).
- Easy transitions between fragments: `addFragment(name,fragment)` or `switchFragment(name, outTransition, inTransition)`

### Example

```js
class MainMenu extends Fragment {
    create() {
        const btn = new Button("Start Game", () => {
            activity.switchFragment("game", new FadeOut(), new FadeIn());
        });
        this.layout.add(btn);
    }
}



## 🧱 Widgets Implemented

- `Button`
- `Checkbox` / `RadioButton` / `RadioGroup`
- `ToggleButton` (like mobile switches)
- `Slider` (horizontal / vertical)
- `ProgressBar` (horizontal / vertical)
- `Knob` (circular input, like audio synths)
- `DragValueField`
- `TextComboBox` (dropdown)
- `ListBoxText` (scrollable list)
- `TabView` with closable and scrollable tabs
- `Window` (draggable, minimizable, resizable)

## 🎨 Themes

You can dynamically switch between themes:

```js
Theme.setDarkPastelWindow();
Theme.setLight();
Theme.setTerminalDark();
```

## 🧠 Philosophy

This UI framework was built from scratch to be canvas-first, animation-friendly, and widget-driven — no DOM or CSS.
Perfect for games, tools, editors, or embedded UIs in canvas-based apps.

License

- MIT License — free for personal or commercial use.
