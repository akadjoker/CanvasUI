
import { Fragment } from '../core/Fragment.js';
import { Button } from '../core/Widget.js';
import { VerticalLayout,HorizontalLayout } from '../core/Layout.js';

export class MyAppFragment extends Fragment
{
    constructor() {
        super();
        this.angle = 0;

        // const layout = new VerticalLayout();
        // layout.setFillParent();
        // layout.setMargins(20, 20, 20, 20);
        // this.layout = layout;
        
        // for (let i = 1; i <= 6; i++)
        // {
        //     const btn = new Button(`Botão ${i}`, () => console.log(`Botão ${i} clicado`));
        //     btn.setFillParent(true, true);
        //     btn.height = 30;
        //     btn.setMargins(5, 5, 5, 5);
        //     layout.add(btn);
        // }
        
// const layout = new HorizontalLayout();
// layout.setFillParent();
// layout.setMargins(20, 20, 20, 20);
// this.layout = layout;

// for (let i = 0; i < 3; i++) {
//     const btn = new Button(`Botão ${i+1}`);
//     btn.setFillParent(true, true); // fillWidth + fillHeight
//     btn.setMargins(10, 10, 10, 10);
//     layout.add(btn);
        // }


        // const root = new VerticalLayout(0,0,1,1,VerticalLayout.Direction.BottomToTop);
        // root.setFillParent();
        // root.setMargins(20, 20, 20, 20);
        // root.spacing = 10;
        // this.layout = root;

        // // Simular um título com um botão
        // const titulo = new Button("Título ");
        // titulo.setFillParent(true, false);
        // titulo.setMargins(5, 5, 5, 5);
        // titulo.height = 40;
        // root.add(titulo);

        

        // // Horizontal layout no meio
        // const linha = new HorizontalLayout();
        // linha.setFillParent(true, false);
        // linha.height = 40;
        // linha.spacing = 5;
        // linha.setMargins(50, 80, 10, 50);
        // root.add(linha);

        // for (let i = 1; i <= 3; i++) {
        //     const btn = new Button(`Item ${i}`, () => console.log(`Item ${i} clicado`));
        //     btn.setFillParent(true, true); // cada um ocupa igual
        //     btn.setMargins(20, 5, 20, 5);
        //     linha.add(btn);
        // }

        
        // const root = new VerticalLayout(0, 0, 1, 1);
        // root.setFillParent();
        // root.spacing = 10;
        // this.layout = root;
        
        // // Cabeçalho
        // const header = new Button("Cabeçalho");
        // header.height = 50;
        // header.setFillParent(true, false);
        // root.add(header);
        
        // // // Linha com 2 colunas (layout horizontal)
        // const linha = new HorizontalLayout();
        // linha.setFillParent(true, true);
        // linha.spacing = 10;
        // root.add(linha);
        

        //      // // Adicionar botões ao painel 1
        // for (let i = 0; i < 3; i++)
        // {
        //     const btn = new Button(`Painel 1 - Botão ${i+1}`);
        //     btn.setFillParent(true, true);
        //     linha.add(btn);
        // }

        // // Painel da esquerda
        // const painel1 = new VerticalLayout();
        // painel1.setFillParent(true, true);
        // painel1.margin.top = 5;
        // linha.add(painel1);
        
        // // Painel da direita
        // const painel2 = new VerticalLayout();
        // painel2.setFillParent(true, true);
        // painel2.margin.top = 5;
        // linha.add(painel2);
        
        // // Adicionar botões ao painel 1
        // for (let i = 0; i < 3; i++) {
        //     const btn = new Button(`Painel 1 - Botão ${i+1}`);
        //     btn.setFillParent(true, true);
        //     painel1.add(btn);
        // }
        
        // // Adicionar botões ao painel 2
        // for (let i = 0; i < 2; i++) {
        //     const btn = new Button(`Painel 2 - Botão ${i+1}`);
        //     btn.setFillParent(true, true);
        //     painel2.add(btn);
        // }
        
        // // Rodapé
        // const footer = new Button("Rodapé");
        // footer.height = 40;
        // footer.setFillParent(true, false);
        // root.add(footer);

        //  const root = new VerticalLayout( );

        // // root.spacing = 5;

        //  let total = 1;
        // // for (let i = 0; i < 4; i++)
        // // {
            
        // //     const layout = new VerticalLayout( );

        // // root.add(new Button("Botão "+total++)).setWidthPercent(0.1);
        // // root.add(new Button("Percent " + total++)).setWidthPercent(0.1);
        // // root.add(new Button("Botão " + total++)).setWidthPercent(0.1);
        // // root.add(new Button("Botão " + total++)).setWidthPercent(0.1);
        // // root.add(new Button("Botão " + total++)).setWidthPercent(0.1);
        // // root.add(new Button("Botão " + total++)).setWidthPercent(0.1);
        // // root.add(new Button("Botão " + total++)).setWidthPercent(0.1);
        // // root.add(new Button("Botão " + total++)).setWidthPercent(0.1);
        // // root.add(new Button("Botão " + total++)).setWidthPercent(0.1);
        // // root.add(new Button("Botão " + total++)).setWidthPercent(0.1);
        // root.add(new Button("Botão "+total++)).setWidthPercent(0.1);
        // root.add(new Button("Percent " + total++)).setWidthPercent(0.1);
        // root.add(new Button("Botão " + total++)).setWidthPercent(0.1);
        // root.add(new Button("Botão " + total++)).setWidthPercent(0.1);
        // root.add(new Button("Botão " + total++)).setWidthPercent(0.1);
        // root.add(new Button("Botão " + total++)).setWidthPercent(0.1);
        // root.add(new Button("Botão " + total++)).setWidthPercent(0.1);
        // root.add(new Button("Botão " + total++)).setWidthPercent(0.1);
        // root.add(new Button("Botão " + total++)).setWidthPercent(0.1);
        // root.add(new Button("Botão " + total++)).setWidthPercent(0.1);

        // //     root.add(layout);
        // // }
        
        //  this.layout = root;
   
        // const root = new HorizontalLayout();
 
        //  let total = 0;
        // for (let i = 0; i < 5; i++)
        // {
            

        //     const layout = new VerticalLayout( );

        //     layout.add(new Button("Botão "+total++));
        //     layout.add(new Button("Botão "+total++));
        //     layout.add(new Button("Botão "+total++));
        //     root.add(layout);

            
        // }
        
        // this.layout = root;

        // this.layout.add(new Button("Botão 1", () => console.log("Botão 1 clicado"))).setPosition(100, 190).setSize(100, 30);
        // this.layout.add(new Button("Botão 2", () => console.log("Botão 2 clicado"))).setPosition(150, 190).setSize(100, 30);

        const root = new VerticalLayout(0, 0, canvas.width, canvas.height);
 
root.spacing = 10;

// Header
const header = new Button("Header");
header.heightPercent = 0.2;
 
root.add(header);

// Middle layout (horizontal)
const middle = new HorizontalLayout();
 
middle.spacing = 10;
middle.usePercentage = true;
middle.heightPercent = 0.6;        
root.add(middle);

// Coluna da esquerda (vertical layout com 2 botões)
const leftColumn = new VerticalLayout();

leftColumn.usePercentage = true;
leftColumn.spacing = 20;
leftColumn.widthPercent = 0.5;

const btn1 = new Button("Left Top");
        const btn2 = new Button("Left Bottom");
        btn1.heightPercent = 0.5;
        btn2.heightPercent = 0.5;

        
leftColumn.add(btn1);
leftColumn.add(btn2);

// Coluna da direita (botão grande)
const rightButton = new Button("Right Big");

rightButton.widthPercent = 0.5;

// Adicionar colunas ao middle
middle.add(leftColumn);
middle.add(rightButton);

// Footer
const footer = new Button("Footer");
footer.heightPercent = 0.2;

root.add(footer);

// Definir root como layout principal
this.layout = root;

    }

    create() {
         
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
