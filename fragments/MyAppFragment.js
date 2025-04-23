
import { Fragment } from '../core/Fragment.js';
import { Button,Theme } from '../core/Widget.js';
import { VerticalLayout,HorizontalLayout,AnchorLayout ,ConstraintLayout} from '../core/Layout.js';

export class MainFragment extends Fragment
{
    
    create()
    {
        
        Theme.setLight();
        this.angle = 0;
    
        
    

   


    }

    update(dt) {
        this.angle += dt * 2;
    }

    render(g) {
        g.clear("#202020");
        g.setColor("#00ff88");
        g.drawText("Main Fragmento!", 100, 100);
        g.fillCircle(300, 200, 50 + Math.sin(this.angle) * 20);
    }

    close() {
        console.log("Fragmento fechado.");
    }
}


export class SecondFragment extends Fragment
{
    create()
    {
        this.angle = 0;
    }

    update(dt) {
        this.angle += dt * 2;   
    }

    render(g) {
        g.clear("#202020");
        g.setColor("#00ff88");  
        g.drawText("Second  Fragmento!", 100, 100);
        g.fillCircle(300, 200, 50 + Math.sin(this.angle) * 20);
    }
}