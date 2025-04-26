
import { Activity } from './core/Activity.js';
import { Graphics } from './core/Graphics.js';
import { Theme,Button ,Spinner,Slider,DatePicker,ImageBox,NotificationBox,ListBox,ProgressBar,Knob, ComboBox,Checkbox,RadioGroup,RadioButton,CheckboxGroup,ToggleButton, Panel,TabView,Window,DragValueField, Label} from './core/Widget.js';
import { VerticalLayout,HorizontalLayout } from './core/Layout.js';
import { FadeInTransition, FadeOutTransition, Fragment,Navigator,SlideLeftTransition,SlideRightTransition } from './core/Fragment.js';
 


class MenuFragment extends Fragment {
    create()
    {

       
    
       
            const window = new Window();
            window.setPosition(10, 100);
            window.setSize(600, 450);
    
            const group = new RadioGroup((value) => {
                console.log("Escolhido:", value.label);
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
                
            }, 2); // 2 colunas
            
      //  group.setPosition(10, 10);
        //group.setSize(200, 100);
            
            const opcoes = ["Default", "Dark", "Pastel", "Terminal","Neon"];
            for (let i = 0; i < opcoes.length; i++)
            {
                group.add(opcoes[i]);
            }
        group.setValue(0);
        
        let layout = window.layout.add(new VerticalLayout(0,0,400,200))
        layout.add(group);
        layout.resize(200, 100);
        
        window.onResize = () => {
        
         //   layout.resize(window.width, window.height);
        }

        const spinner = new Spinner(32);
        spinner.setPosition(150, 100);
        window.layout.add(spinner);
        

        const imgBox = new ImageBox();
    imgBox.setPosition(50, 200);
    imgBox.setSize(200, 150);
    imgBox.setImage("android.png");
    imgBox.setFitMode("contain");
        window.layout.add(imgBox);  
        

        const dp = new DatePicker((date) => {
            console.log("Data selecionada:", date.toDateString());
        });
        dp.setPosition(100, 100);
        dp.setSize(224, 220); // 7 * 32 = 224 de largura para 7 dias
        window.layout.add(dp);
        



        //window.layout.add(group);      
        //window.layout.add(body.add(new HorizontalLayout()));    
     
 
        this.layout.add(window);
        
        const toast = new NotificationBox();
        toast.show("Guardado com sucesso!", 2);
        this.layout.add(toast);
        
       
    }
    render(g)
    {
        
        
    }
}



const canvas = document.getElementById("canvas");
const activity = new Activity(canvas);
const graphics = new Graphics(canvas.getContext("2d"));

activity.setGraphics(graphics);
// activity.addFragment("main", new MainFragment());
// activity.addFragment("second", new SecondFragment());

// activity.switchFragment("main");

activity.addFragment("menu", new MenuFragment());

activity.switchFragment("menu",null,new FadeInTransition(0.5));
//activity.switchFragment("menu",null,null);


activity.start();
