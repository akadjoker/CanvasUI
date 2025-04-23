
import { Fragment } from '../core/Fragment.js';
import { Button } from '../core/Widget.js';
import { VerticalLayout,HorizontalLayout,AnchorLayout ,ConstraintLayout} from '../core/Layout.js';

export class MyAppFragment extends Fragment
{
    
    create()
    {
        
        
        this.angle = 0;
        const root = new ConstraintLayout(0, 0, canvas.width, canvas.height);
        root.setMargins(20, 20, 20, 20);
        
        // Botões
        const btn1 = new Button("btn1");
        const btn2 = new Button("btn2");
        const btn3 = new Button("btn3");
        const btn4 = new Button("btn4");
        const btn5 = new Button("btn5");
        const btn6 = new Button("btn6");
        
        // Ancoragens
        root.setAnchor(btn1, {
            topToTop: root,
            leftToLeft: root,
            marginTop: 10,
            marginLeft: 10
        });
        
        root.setAnchor(btn2, {
            topToBottom: btn1,
            leftToLeft: root,
            marginTop: 10,
            marginLeft: 10
        });
        
        root.setAnchor(btn3, {
            topToBottom: btn2,
            centerX: root,
            marginTop: 10
        });
        
        root.setAnchor(btn4, {
            topToTop: root,
            rightToRight: root,
            marginTop: 10,
            marginRight: 10
        });
        
        root.setAnchor(btn5, {
            topToBottom: btn4,
            rightToRight: root,
            marginTop: 10,
            marginRight: 10
        });
        
        root.setAnchor(btn6, {
            topToTop: btn3,
            bottomToBottom: btn3,
            leftToRight: btn3,
            rightToLeft: btn5,
            marginLeft: 10,
            marginRight: 10
        });
        
        // Adiciona os botões
        root.add(btn1);
        root.add(btn2);
        root.add(btn3);
        root.add(btn4);
        root.add(btn5);
        root.add(btn6);
        
        // Ativar debug para todos
        root.debug = true;
        [btn1, btn2, btn3, btn4, btn5, btn6].forEach(btn => btn.debug = true);
        
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
