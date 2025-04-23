
import { Fragment } from '../core/Fragment.js';
import { Button } from '../core/Widget.js';
import { VerticalLayout,HorizontalLayout,AnchorLayout } from '../core/Layout.js';

export class MyAppFragment extends Fragment
{
    
    create()
    {
        
        
        this.angle = 0;
        const layout = new AnchorLayout();
        layout.setMargins(10, 10, 10, 10);

        // Topo esquerdo
        const btn1 = new Button("TL");
        layout.setAnchor(btn1, { top: 10, left: 10 });

        // Centro
        const btn2 = new Button("Center");
        layout.setAnchor(btn2, { centerX: 0, centerY: 0 });

        // Fundo esquerdo
        const btn4 = new Button("BL");
        layout.setAnchor(btn4, { bottom: 10, left: 10 });

        // Centro
        const btn5 = new Button("Center");
        layout.setAnchor(btn5, { centerX: 0, centerY: 40 });

        // Centro
        const btn6 = new Button("Center");
        layout.setAnchor(btn6, { centerX: 0, centerY: 80 });

        // Centro
        const btn7 = new Button("Center");
        layout.setAnchor(btn7, { centerX: 0, centerY: 120 });

        // Fundo à direita
        const btn3 = new Button("BR");
        layout.setAnchor(btn3, { bottom: 10, right: 10 });

        // Topo à direita
        const btn8 = new Button("TR");
        layout.setAnchor(btn8, { top: 10, right: 10 });

        const btn9 = new Button("Center");
        layout.setAnchor(btn9, { top: 10, centerX: -50 });

    

        this.layout = layout;


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
