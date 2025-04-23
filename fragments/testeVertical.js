
import { Fragment } from '../core/Fragment.js';
import { Button } from '../core/Widget.js';
import { VerticalLayout,HorizontalLayout,AnchorLayout ,ConstraintLayout} from '../core/Layout.js';

export class MyAppFragment extends Fragment
{
    
    create()
    {
        
        
        this.angle = 0;
       
       
        const root = new VerticalLayout(0, 0, canvas.width, canvas.height);
        root.setMargins(20, 20, 20, 20);
        root.spacing = 10;
        
        // Botão do topo
        const btnTop = new Button("Top");
        root.add(btnTop);
        
        // Layout intermédio com 2 botões
        const middle = new VerticalLayout();
        middle.spacing = 5;
        middle.setMargins(0, 0, 0, 0);
        
        const mid1 = new Button("Middle 1");
        const mid2 = new Button("Middle 2");
        
        middle.add(mid1);
        middle.add(mid2);
        
        root.add(middle);
        
        // Botão do fundo
        const btnBottom = new Button("Bottom");
        root.add(btnBottom);
        
        // Ativar debug visual para todos
        root.debug = true;
        btnTop.debug = true;
        btnBottom.debug = true;
        middle.debug = true;
        mid1.debug = true;
        mid2.debug = true;
        
        // Aplicar layout
        this.layout = root;
        
        
        
    

   


    }

    update(dt) {
        this.angle += dt * 2;
    }

    render(g) {
        g.clear("#202020");
        g.setColor("#00ff88");
        g.drawText("Olá do Fragmento!", 100, 100);
        g.fillCircle(300, 200, 50 + Math.sin(this.angle) * 20);
    }

    close() {
        console.log("Fragmento fechado.");
    }
}
