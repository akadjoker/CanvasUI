
import { Activity } from './core/Activity.js';
import { Graphics } from './core/Graphics.js';
import { Theme,Button ,TextView,SliderCircular,Slider,ListBox,ProgressBar,Knob, ComboBox,Checkbox,RadioGroup,RadioButton,CheckboxGroup,ToggleButton, Panel,TabView,Window,DragValueField, Label} from './core/Widget.js';
import { HorizontalLayout, VerticalLayout,Layout } from './core/Layout.js';
import { FadeInTransition, FadeOutTransition, Fragment,Navigator,SlideLeftTransition,SlideRightTransition } from './core/Fragment.js';
import { MainFragment,SecondFragment } from './fragments/MyAppFragment.js';


class MenuFragment extends Fragment
{
    create() {

        this.layout = new HorizontalLayout();
        this.layout.setMargins(1, 1, 1, 1);
        this.layout.spacing = 0.2;
        this.layout.usePercentage = true;
        //this.layout.debug = true;

        this.layout.add(new Panel("Top 1")).setHeightPercent(0.1);
        const center = this.layout.add(new HorizontalLayout()).setHeightPercent(0.8);
        center.debug = true;
        center.setMargins(1, 1, 1, 1);
        this.layout.add(new Panel("Bottom")).setHeightPercent(0.1);
        

        
        const body = new VerticalLayout();
        body.setMargins(1, 1, 1, 1);
        body.spacing = 1;
        body.usePercentage = true;
        //        body.debug = true;

        {
            const layout = body.add(new Layout()).setWidthPercent(0.25);
            layout.debug = true;

            layout.add(new Panel()).setPosition(5, 70).setSize(190, 450).setColor("#999");
            layout.add(new Label("label")).setPosition(50, 70).setColor("#000");
            const list = layout.add(new ListBox()).setPosition(20, 100).setSize(150, 20);
            for (let i = 1; i <= 20; i++) {
                list.addItem("Item " + i);
            }

            layout.add(new Button("Button")).setPosition(20, 300).setSize(160, 30);
            
            const toggle = new ToggleButton(true, (on) => {
                console.log("Toggle está:", on ? "ON" : "OFF");
            });
            toggle.setPosition(20, 350);
            toggle.setSize(160, 30);
            layout.add(toggle);

            const group = new RadioGroup((value) => {
                const label = value.label;
                if (label == "Default")
                    Theme.setLight();
                else if (label == "Dark")
                    Theme.setDark();
                else if (label == "Pastel")
                    Theme.setPastel();
                else if (label == "Terminal")
                    Theme.setTerminal();
                else if (label == "Neon")
                    Theme.setNeon();
                
            }, 2, 1); // 2 colunas
            const opcoes = ["Default", "Dark", "Pastel", "Terminal", "Neon"];
            for (let i = 0; i < opcoes.length; i++) {
                group.add(opcoes[i]);
            }
            
            group.setPosition(20, 420);
            group.setSize(160, 82);
            group.setCollumWidth(80);
            
            
            group.setValue(0);


            
            layout.add(group);
            
    
        }
        { 
            const layout = body.add(new Layout()).setWidthPercent(0.25);
            layout.debug = true;
            layout.add(new Panel()).setPosition(205, 70).setSize(190, 450).setColor("#999");
            
            const dragX = new DragValueField("X", 0.5, -1, 1, 0.01);
            dragX.setSize(80, 20).setPosition(250, 100);
            
            const dragY = new DragValueField("Y", 0, -180, 180, 1);
            dragY.setSize(80, 20).setPosition(250, 122);
            
            layout.add(dragX);
            layout.add(dragY);

            const combo = new ComboBox(["Banana", "Laranja", "Uva", "Melão", "Kiwi", "Pera", "Manga"]);
            combo.setPosition(220, 150);
            combo.setSize(140, 30);
            
            
            
            const group = new CheckboxGroup(2)
            .add("Notificações")
            .add("Localização")
            .add("Teste", true)
            .add("Som")
            .setOnChange((label, val) => {
                console.log(`${label}: ${val}`);
            });
            group.spacing = 2;
            group.setPosition(200, 250);
            group.setSize(160, 82);
            layout.add(group);
            
            layout.add(combo);

            const tab = new TabView("bottom");
            tab.setTabeWidth(60);
            tab.setSize(180, 190);
            tab.setPosition(210, 320);
            tab.addTab("Tab 1").add(new Label("Tab 1")).setColor("#000").setPosition(25, 25);
            tab.addTab("Tab 2").add(new Label("Tab 2")).setColor("#000").setPosition(25, 55);
            layout.add(tab);
        }
        {
            const layout = body.add(new Layout()).setWidthPercent(0.45);
            layout.debug = true;
            layout.add(new Panel()).setPosition(405, 70).setSize(342, 450).setColor("#999");

            const knob = new Knob(0, 360, 1, 0, (v) => console.log("Knob:", v));
            knob.setSize(80, 80).setPosition(440, 100);
            layout.add(knob);

            const circlular = new SliderCircular((v) => console.log("Circular:", v));
            circlular.setSize(90, 90).setPosition(640, 130);
            layout.add(circlular);

            const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
            const text = new TextView(loremIpsum);
            text.setPosition(420, 200);
            text.setSize(280, 200);
            layout.add(text);


        const progress = new ProgressBar("horizontal");
        const slider = new Slider(0, 1, 0.1,0.5, "horizontal");
        slider.setPosition(480, 440);
        slider.setSize(120, 20);
        slider.onChange = (v) => progress.setValue(v);

        progress.setPosition(480, 480);
        progress.setSize(120, 20);
        progress.setValue(0.5);

        layout.add(progress);
        layout.add(slider);
            
            
        }

        {
            const layout = body.add(new Panel("Right")).setWidthPercent(0.05);
            //SliderCircular
        }



        center.add(body);
        
      
        
      //  this.layout.add(vertical);

     
    }
    render(g)
    {
        
 
    }
}




const canvas = document.getElementById("canvas");
const activity = new Activity(canvas);
const graphics = new Graphics(canvas.getContext("2d"));

activity.setGraphics(graphics);


activity.addFragment("menu", new MenuFragment());

activity.switchFragment("menu",null,new FadeInTransition(0.5));



activity.start();
