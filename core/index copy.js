
import { Activity } from './Activity.js';
import { Graphics } from './Graphics.js';
import { Theme,Button ,Slider,ListBox,ProgressBar,Knob, ComboBox,Checkbox,RadioGroup,RadioButton,CheckboxGroup,ToggleButton, Panel,TabView,Window,DragValueField, Label} from './Widget.js';
import { VerticalLayout } from './Layout.js';
import { FadeInTransition, FadeOutTransition, Fragment,Navigator,SlideLeftTransition,SlideRightTransition } from './Fragment.js';
import { MainFragment,SecondFragment } from './fragments/MyAppFragment.js';


class MenuFragment extends Fragment {
    create()
    {

        //this.layout = new VerticalLayout(0, 0, 100, 100);
        const btn = new Button("Go to Game", () =>
        {
            //Navigator.Instance().switchFragment("game", new FadeOutTransition(1), new FadeInTransition(1));
            Navigator.Instance().switchFragment("game", null, new SlideLeftTransition(1));

        });
        btn.setSize(100, 30);
        btn.setPosition(100, 200);
        this.layout.add(btn);

    
        

        // const panel1 = new Panel("Painel normal", "flat");
        // const panel2 = new Panel("Elevado", "raised");
        // const panel3 = new Panel("Rebaixado", "lowered");
        
        // panel1.setSize(200, 60);
        // panel2.setSize(200, 60);
        // panel3.setSize(200, 60);

        // panel1.setPosition(100, 100);
        // panel2.setPosition(100, 250);
        // panel3.setPosition(100, 400);

        // this.layout.add(panel1);
        // this.layout.add(panel2);
        // this.layout.add(panel3);

        const tab = new TabView();
        tab.setSize(500, 500);
        const ln0 = tab.addTab("Tab 1");
        const group = new CheckboxGroup(2)
        .add("Notificações")
        .add("Localização")
        .add("Modo escuro", true)
        .add("Som")
        .setOnChange((label, val) => {
            console.log(`${label}: ${val}`);
        });

        group.setPosition(20, 50);
        ln0.add(group);

  
        
 
        

        const ln1 = tab.addTab("Tab 2");
        const rgroup = new RadioGroup((value) => {
            console.log("Escolhido:", value);
        }, 2); // 2 colunas
        
        rgroup.setPosition(50, 50);
        
        const opcoes = ["Python", "JavaScript", "C++", "Rust", "Go", "Swift"];
        for (let i = 0; i < opcoes.length; i++) {
            rgroup.add(opcoes[i]);
        }
        
        ln1.add(rgroup);         
       


        const ln2 = tab.addTab("Tab 3");
       
        
        const progress = new ProgressBar("horizontal");
        const slider = new Slider(0, 1, 0.1,0.5, "vertical");
        slider.setPosition(250, 10);
        slider.setSize(20, 80);
        slider.onChange = (v) => progress.setValue(v);

        progress.setPosition(220, 120);
        progress.setSize(100, 20);
        progress.setValue(0.5);

        ln2.add(slider);
        ln2.add(progress);

        const knob = new Knob(0, 360, 1, 0, (v) => console.log("Knob:", v));
        knob.setSize(80, 80).setPosition(20, 20);
        ln2.add(knob);

        
        const ln3 = tab.addTab("Tab 4");
        ln3.add(new Button("Hello world!")).setPosition(0, 0);

        const combo = new ComboBox(["Banana", "Laranja", "Uva", "Melão", "Kiwi", "Pera", "Manga"]);
        combo.setPosition(10, 40);
        combo.setSize(100, 30);
        
        ln3.add(combo);
        
        const lbl = new Label("Hello world", "center");
        lbl.setPosition(100, 10).setSize(200, 30).setColor("red");
        ln3.add(lbl);           
    
        {
 
            const list = new ListBox();
            list.setPosition(120, 40);
            list.setSize(200, 180);
            
            
            for (let i = 1; i <= 20; i++) {
                list.addItem("Item " + i);
            }

            list.onSelect = (i, txt) => console.log("Selecionado:", i, txt);
            
            ln3.add(list);
        }


        const ln4 = tab.addTab("Tab 5",true);
        ln4.add(new Button("Hello world!")).setPosition(0, 0);
        ln4.add(new Button("Hello world!")).setPosition(10, 50);
        ln4.add(new Button("Hello world!")).setPosition(20, 100);
        const ln5 = tab.addTab("Tab 6");
        ln5.add(new Button("Hello world!")).setPosition(0, 0);
        ln5.add(new Button("Hello world!")).setPosition(10, 50);
        ln5.add(new Button("Hello world!")).setPosition(20, 100);
        const ln6 = tab.addTab("Tab 7");
        ln6.add(new Button("Hello world!")).setPosition(0, 0);
        ln6.add(new Button("Hello world!")).setPosition(10, 50);
        ln6.add(new Button("Hello world!")).setPosition(20, 100);
        const ln7 = tab.addTab("Tab 8");
        ln7.add(new Button("Hello world!")).setPosition(0, 0);
        ln7.add(new Button("Hello world!")).setPosition(10, 50);
        ln7.add(new Button("Hello world!")).setPosition(20, 100);
        const ln8 = tab.addTab("Tab 9");
        ln8.add(new Button("Hello world!")).setPosition(0, 0);
        ln8.add(new Button("Hello world!")).setPosition(10, 50);

        tab.setPosition(400, 20);
        tab.setActiveIndex(1);
        tab.setSize(350, 300);
        this.layout.add(tab);


        const window = new Window();
        window.setPosition(1, 300);
        window.setSize(200, 200);

      

      
        
        const dragX = new DragValueField("X", 0.5, -1, 1, 0.01);
        dragX.setSize(80, 20).setPosition(20, 40);
        
        const dragY = new DragValueField("Y", 0, -180, 180, 1);
        dragY.setSize(80, 20).setPosition(20, 10);
        
        window.layout.add(dragX);
        window.layout.add(dragY);

      
        

        const toggle = new ToggleButton(true, (on) => {
            console.log("Toggle está:", on ? "ON" : "OFF");
        });
        toggle.setPosition(50, 120);
        toggle.setSize(80, 30);
        window.layout.add(toggle);
       

        this.layout.add(window);

        {
            const window = new Window();
            window.setPosition(250, 400);
            window.setSize(222, 150);
    
          
    
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
            
            group.setPosition(10, 10);
            
            const opcoes = ["Default", "Dark", "Pastel", "Terminal","Neon"];
            for (let i = 0; i < opcoes.length; i++)
            {
                group.add(opcoes[i]);
            }
            
            window.layout.add(group);      
            group.setValue(0);
            this.layout.add(window);
        }

        // const scroll = new ScrollPanel();
        // scroll.setPosition(400, 20);
        // scroll.setSize(200, 400);
        // this.layout.add(scroll);

        console.log("Fragmento criado");
    }
    render(g)
    {
        
        g.setColor("#00ff88");
        g.drawText("Menu Fragmento!", 100, 100);
        g.fillCircle(300, 200, 50 + Math.sin(this.angle) * 20);
    }
}

class GameFragment extends Fragment {
    create()
    {
        
        this.layout.clear();//this.layout = new VerticalLayout(0, 0, 100, 100);
        const btn = new Button("Back to Menu", () => {
            //Navigator.Instance().switchFragment("menu", new FadeOutTransition(1), new FadeInTransition(1));
            Navigator.Instance().switchFragment("menu", null,new SlideRightTransition(1));
        });
        btn.setSize(100, 30);
        btn.setPosition(100, 200);
        this.layout.add(btn);

        const window = new Window();
        window.setPosition(300, 100);
        window.setSize(222, 150);

      

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
        
        group.setPosition(10, 10);
        
        const opcoes = ["Default", "Dark", "Pastel", "Terminal","Neon"];
        for (let i = 0; i < opcoes.length; i++)
        {
            group.add(opcoes[i]);
        }
        group.setValue(0);
        window.layout.add(group);      
 

      
        

  
       

        this.layout.add(window);
    }
    render(g)
    {
      
        g.setColor("#00ff88");
        g.drawText("Game Fragmento!", 100, 100);
        g.fillCircle(300, 200, 50 + Math.sin(this.angle) * 20);
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
activity.addFragment("game", new GameFragment());
activity.switchFragment("menu",null,new FadeInTransition(0.5));
//activity.switchFragment("menu",null,null);


activity.start();
