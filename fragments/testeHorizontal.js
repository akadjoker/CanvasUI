const root = new HorizontalLayout(0, 0, canvas.width, canvas.height);
root.setMargins(20, 20, 20, 20);
root.spacing = 10;

// Botão da esquerda
const btnLeft = new Button("Left");
root.add(btnLeft);

// Layout intermédio com 2 botões
const middle = new HorizontalLayout();
middle.spacing = 5;
middle.usePercentage = true;
middle.setMargins(0, 0, 0, 0);

const mid1 = new Button("Mid 1");
const mid2 = new Button("Mid 2");

mid1.widthPercent = 0.5;
mid2.widthPercent = 0.5;

middle.add(mid1);
middle.add(mid2);

root.add(middle);

// Botão da direita
const btnRight = new Button("Right");
root.add(btnRight);

// Ativar debug visual para todos
root.debug = true;
btnLeft.debug = true;
btnRight.debug = true;
middle.debug = true;
mid1.debug = true;
mid2.debug = true;

// Aplicar layout
this.layout = root;
