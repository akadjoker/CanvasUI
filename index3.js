
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
        center.setMargins(1, 1, 1, 1);
        this.layout.add(new Panel("Bottom")).setHeightPercent(0.1);
        

        
        const body = new VerticalLayout();
        body.setMargins(1, 1, 1, 1);
        body.spacing = 1;
        body.usePercentage = true;
        body.opaque = true;
        //        body.debug = true;

        {
            const layout = body.add(new HorizontalLayout()).setWidthPercent(0.25);
            layout.usePercentage = true;

            layout.setMargins(1, 1, 1, 1);

            layout.add(new Label("label")).setPosition(50, 70).setColor("#fff").setHeightPercent(0.1);

            layout.add(new Button("Button")).setHeightPercent(0.05);
            
            const toggle = new ToggleButton(true, (on) => {
            
            });
            toggle.setHeightPercent(0.05);
            layout.add(toggle);
            const list = layout.add(new ListBox()).setHeightPercent(0.4);
            for (let i = 1; i <= 20; i++)
            {
                list.addItem("Item " + i);
            }

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
            group.setHeightPercent(0.3);
            layout.add(group);
          


      

          
          
            
    
        }
        { 
            const layout = body.add(new HorizontalLayout()).setWidthPercent(0.25);
            layout.usePercentage = true;

            const dragX = new DragValueField("X", 0.5, -1, 1, 0.01);
     
            dragX.setHeightPercent(0.05);
            
            const dragY = new DragValueField("Y", 0, -180, 180, 1);
     
            dragY.setHeightPercent(0.05);
            
            layout.add(dragX);
            layout.add(dragY);


            const group = new CheckboxGroup(2)
            .add("Notificações")
            .add("Localização")
            .add("Teste", true)
            .add("Som")
            .setOnChange((label, val) => {
                console.log(`${label}: ${val}`);
            });
            group.spacing = 2;
            group.setHeightPercent(0.1);
            layout.add(group);


            const progress = new ProgressBar("horizontal");
            const slider = new Slider(0, 1, 0.1,0.5, "horizontal");
            slider.setHeightPercent(0.05);
            slider.onChange = (v) => progress.setValue(v);
            
            progress.setValue(0.5);
            progress.setHeightPercent(0.05);
            

            layout.add(progress);
            layout.add(slider);
           
            const combo = new ComboBox(["Banana", "Laranja", "Uva", "Melão", "Kiwi", "Pera", "Manga"]);
            combo.setHeightPercent(0.5);
            layout.add(combo);


        }
        {
            const layout = body.add(new HorizontalLayout()).setWidthPercent(0.45);

        
            layout.debug = true;
           
            const knob = new Knob(0, 360, 1, 0, (v) => console.log("Knob:", v));
            knob.setHeightPercent(0.15);
            layout.add(knob);

            const circlular = new SliderCircular();//(v) => console.log("Circular:", v));
            circlular.setHeightPercent(0.15);
            layout.add(circlular);

            const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
            const text = new TextView(loremIpsum);
            text.setHeightPercent(0.8);
            layout.add(text);
           
            
        }

        {
            const layout = body.add(new Panel()).setWidthPercent(0.05);
      
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
