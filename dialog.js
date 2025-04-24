// Widget Base Class
class Widget {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.isHovered = false;
      this.isPressed = false;
    }
  
    isInside(mouseX, mouseY) {
      return mouseX >= this.x && mouseX <= this.x + this.width &&
             mouseY >= this.y && mouseY <= this.y + this.height;
    }
  
    handleMouseMove(mouseX, mouseY) {
      this.isHovered = this.isInside(mouseX, mouseY);
    }
  
    handleMouseDown(mouseX, mouseY) {
      if (this.isInside(mouseX, mouseY)) {
        this.isPressed = true;
        return true;
      }
      return false;
    }
  
    handleMouseUp(mouseX, mouseY) {
      this.isPressed = false;
    }
  
    draw(ctx) {
      // Implementado nas subclasses
    }
  }
  
  // Botão
  class Button extends Widget {
    constructor(x, y, width, height, label, onClick) {
      super(x, y, width, height);
      this.label = label;
      this.onClick = onClick;
      this.borderRadius = 5;
    }
  
    handleMouseUp(mouseX, mouseY) {
      if (this.isPressed && this.isInside(mouseX, mouseY)) {
        this.onClick();
      }
      super.handleMouseUp(mouseX, mouseY);
    }
  
    draw(ctx) {
      // Desenha o fundo do botão
      ctx.fillStyle = this.isPressed ? '#0056b3' : (this.isHovered ? '#007bff' : '#0069d9');
      
      // Desenha bordas arredondadas
      ctx.beginPath();
      ctx.moveTo(this.x + this.borderRadius, this.y);
      ctx.lineTo(this.x + this.width - this.borderRadius, this.y);
      ctx.arcTo(this.x + this.width, this.y, this.x + this.width, this.y + this.borderRadius, this.borderRadius);
      ctx.lineTo(this.x + this.width, this.y + this.height - this.borderRadius);
      ctx.arcTo(this.x + this.width, this.y + this.height, this.x + this.width - this.borderRadius, this.y + this.height, this.borderRadius);
      ctx.lineTo(this.x + this.borderRadius, this.y + this.height);
      ctx.arcTo(this.x, this.y + this.height, this.x, this.y + this.height - this.borderRadius, this.borderRadius);
      ctx.lineTo(this.x, this.y + this.borderRadius);
      ctx.arcTo(this.x, this.y, this.x + this.borderRadius, this.y, this.borderRadius);
      ctx.closePath();
      ctx.fill();
      
      // Desenha o texto do botão
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = '14px Arial';
      ctx.fillText(this.label, this.x + this.width / 2, this.y + this.height / 2);
    }
  }
  
  // Checkbox
  class Checkbox extends Widget {
    constructor(x, y, size, label, checked = false, onChange) {
      super(x, y, size, size);
      this.label = label;
      this.checked = checked;
      this.onChange = onChange;
    }
  
    handleMouseUp(mouseX, mouseY) {
      if (this.isPressed && this.isInside(mouseX, mouseY)) {
        this.checked = !this.checked;
        if (this.onChange) {
          this.onChange(this.checked);
        }
      }
      super.handleMouseUp(mouseX, mouseY);
    }
  
    draw(ctx) {
      // Desenha a caixa
      ctx.strokeStyle = this.isHovered ? '#007bff' : '#666';
      ctx.lineWidth = 2;
      ctx.strokeRect(this.x, this.y, this.width, this.height);
      
      // Se estiver marcado, desenha o check
      if (this.checked) {
        ctx.beginPath();
        ctx.moveTo(this.x + this.width * 0.2, this.y + this.height * 0.5);
        ctx.lineTo(this.x + this.width * 0.4, this.y + this.height * 0.7);
        ctx.lineTo(this.x + this.width * 0.8, this.y + this.height * 0.3);
        ctx.strokeStyle = '#007bff';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      
      // Desenha o label
      ctx.fillStyle = '#333';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.font = '14px Arial';
      ctx.fillText(this.label, this.x + this.width + 10, this.y + this.height / 2);
    }
  }
  
  // Slider
  class Slider extends Widget {
    constructor(x, y, width, height, min, max, value, onChange) {
      super(x, y, width, height);
      this.min = min;
      this.max = max;
      this.value = value;
      this.onChange = onChange;
      this.knobRadius = height / 2;
      this.isDragging = false;
    }
  
    getKnobX() {
      const percentage = (this.value - this.min) / (this.max - this.min);
      return this.x + percentage * (this.width - 2 * this.knobRadius) + this.knobRadius;
    }
  
    isKnobHovered(mouseX, mouseY) {
      const knobX = this.getKnobX();
      const dist = Math.sqrt((mouseX - knobX) ** 2 + (mouseY - (this.y + this.height / 2)) ** 2);
      return dist <= this.knobRadius;
    }
  
    handleMouseMove(mouseX, mouseY) {
      super.handleMouseMove(mouseX, mouseY);
      
      if (this.isDragging) {
        const percentage = (mouseX - this.x - this.knobRadius) / (this.width - 2 * this.knobRadius);
        const clampedPercentage = Math.max(0, Math.min(1, percentage));
        this.value = this.min + clampedPercentage * (this.max - this.min);
        
        if (this.onChange) {
          this.onChange(this.value);
        }
      } else {
        this.isHovered = this.isKnobHovered(mouseX, mouseY);
      }
    }
  
    handleMouseDown(mouseX, mouseY) {
      if (this.isKnobHovered(mouseX, mouseY)) {
        this.isDragging = true;
        this.isPressed = true;
        return true;
      }
      return false;
    }
  
    handleMouseUp(mouseX, mouseY) {
      this.isDragging = false;
      super.handleMouseUp(mouseX, mouseY);
    }
  
    draw(ctx) {
      // Desenha a linha de fundo
      ctx.strokeStyle = '#ccc';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(this.x + this.knobRadius, this.y + this.height / 2);
      ctx.lineTo(this.x + this.width - this.knobRadius, this.y + this.height / 2);
      ctx.stroke();
      
      // Desenha a linha de progresso
      ctx.strokeStyle = '#007bff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(this.x + this.knobRadius, this.y + this.height / 2);
      ctx.lineTo(this.getKnobX(), this.y + this.height / 2);
      ctx.stroke();
      
      // Desenha o botão do slider
      ctx.fillStyle = this.isPressed ? '#0056b3' : (this.isHovered ? '#007bff' : '#0069d9');
      ctx.beginPath();
      ctx.arc(this.getKnobX(), this.y + this.height / 2, this.knobRadius, 0, Math.PI * 2);
      ctx.fill();
      
      // Desenha o valor atual
      ctx.fillStyle = '#333';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.font = '12px Arial';
      ctx.fillText(Math.round(this.value), this.getKnobX(), this.y + this.height + 5);
    }
  }
  
  // Campo de texto
  class TextField extends Widget {
    constructor(x, y, width, height, placeholder = '', onChange = null) {
      super(x, y, width, height);
      this.placeholder = placeholder;
      this.onChange = onChange;
      this.text = '';
      this.isFocused = false;
      this.cursorPos = 0;
      this.cursorVisible = true;
      this.cursorBlinkTimer = null;
    }
  
    focus() {
      this.isFocused = true;
      this.cursorVisible = true;
      
      // Inicia o piscar do cursor
      clearInterval(this.cursorBlinkTimer);
      this.cursorBlinkTimer = setInterval(() => {
        this.cursorVisible = !this.cursorVisible;
      }, 500);
    }
  
    blur() {
      this.isFocused = false;
      clearInterval(this.cursorBlinkTimer);
    }
  
    handleKeyDown(key) {
      if (!this.isFocused) return;
      
      if (key === 'Backspace' && this.cursorPos > 0) {
        const beforeCursor = this.text.substring(0, this.cursorPos - 1);
        const afterCursor = this.text.substring(this.cursorPos);
        this.text = beforeCursor + afterCursor;
        this.cursorPos--;
        
        if (this.onChange) {
          this.onChange(this.text);
        }
      } else if (key === 'ArrowLeft' && this.cursorPos > 0) {
        this.cursorPos--;
      } else if (key === 'ArrowRight' && this.cursorPos < this.text.length) {
        this.cursorPos++;
      } else if (key.length === 1) {
        const beforeCursor = this.text.substring(0, this.cursorPos);
        const afterCursor = this.text.substring(this.cursorPos);
        this.text = beforeCursor + key + afterCursor;
        this.cursorPos++;
        
        if (this.onChange) {
          this.onChange(this.text);
        }
      }
      
      this.cursorVisible = true;
    }
  
    handleMouseDown(mouseX, mouseY) {
      if (super.handleMouseDown(mouseX, mouseY)) {
        this.focus();
        
        // Calcula posição do cursor baseado no clique
        const ctx = document.createElement('canvas').getContext('2d');
        ctx.font = '14px Arial';
        
        let bestPos = 0;
        let bestDist = Infinity;
        
        for (let i = 0; i <= this.text.length; i++) {
          const textWidth = ctx.measureText(this.text.substring(0, i)).width;
          const clickX = mouseX - (this.x + 10);
          const dist = Math.abs(textWidth - clickX);
          
          if (dist < bestDist) {
            bestDist = dist;
            bestPos = i;
          }
        }
        
        this.cursorPos = bestPos;
        return true;
      } else {
        this.blur();
        return false;
      }
    }
  
    draw(ctx) {
      // Desenha o fundo
      ctx.fillStyle = this.isFocused ? '#f8f8f8' : '#eaeaea';
      ctx.fillRect(this.x, this.y, this.width, this.height);
      
      // Desenha a borda
      ctx.strokeStyle = this.isFocused ? '#007bff' : '#ccc';
      ctx.lineWidth = this.isFocused ? 2 : 1;
      ctx.strokeRect(this.x, this.y, this.width, this.height);
      
      // Configura o texto
      ctx.fillStyle = '#333';
      ctx.font = '14px Arial';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      
      // Calcula as dimensões do texto para clipping
      const padding = 10;
      
      // Se não tem texto, mostra o placeholder
      if (this.text.length === 0) {
        ctx.fillStyle = '#999';
        ctx.fillText(this.placeholder, this.x + padding, this.y + this.height / 2);
      } else {
        // Desenha o texto
        ctx.fillStyle = '#333';
        
        // Configura clipping para não ultrapassar os limites
        ctx.save();
        ctx.beginPath();
        ctx.rect(this.x + padding, this.y, this.width - 2 * padding, this.height);
        ctx.clip();
        
        // Calcula posição do texto e cursor
        const textBeforeCursor = this.text.substring(0, this.cursorPos);
        const textWidth = ctx.measureText(textBeforeCursor).width;
        
        // Desenha o texto
        ctx.fillText(this.text, this.x + padding, this.y + this.height / 2);
        
        // Desenha o cursor se estiver focado
        if (this.isFocused && this.cursorVisible) {
          ctx.fillStyle = '#333';
          ctx.fillRect(this.x + padding + textWidth, this.y + 5, 1, this.height - 10);
        }
        
        ctx.restore();
      }
    }
  }
  
  // Dropdown Menu
  class DropdownMenu extends Widget {
    constructor(x, y, width, height, options, selectedIndex = 0, onChange) {
      super(x, y, width, height);
      this.options = options;
      this.selectedIndex = selectedIndex;
      this.onChange = onChange;
      this.isOpen = false;
      this.maxVisibleOptions = 5;
      this.optionHeight = height;
    }
  
    handleMouseDown(mouseX, mouseY) {
      if (super.handleMouseDown(mouseX, mouseY)) {
        if (!this.isOpen) {
          this.isOpen = true;
          return true;
        } else {
          // Verifica se clicou em alguma opção
          const totalHeight = Math.min(this.options.length, this.maxVisibleOptions) * this.optionHeight;
          
          if (mouseY >= this.y + this.height && mouseY <= this.y + this.height + totalHeight) {
            const clickedOptionIndex = Math.floor((mouseY - (this.y + this.height)) / this.optionHeight);
            
            if (clickedOptionIndex >= 0 && clickedOptionIndex < this.options.length) {
              this.selectedIndex = clickedOptionIndex;
              
              if (this.onChange) {
                this.onChange(this.selectedIndex, this.options[this.selectedIndex]);
              }
            }
          }
          
          this.isOpen = false;
          return true;
        }
      } else {
        this.isOpen = false;
        return false;
      }
    }
  
    draw(ctx) {
      // Desenha o dropdown principal
      ctx.fillStyle = this.isPressed ? '#eaeaea' : (this.isHovered ? '#f8f8f8' : '#ffffff');
      ctx.fillRect(this.x, this.y, this.width, this.height);
      
      // Desenha a borda
      ctx.strokeStyle = '#ccc';
      ctx.lineWidth = 1;
      ctx.strokeRect(this.x, this.y, this.width, this.height);
      
      // Desenha a opção selecionada
      ctx.fillStyle = '#333';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.font = '14px Arial';
      
      const selectedText = this.options[this.selectedIndex];
      ctx.fillText(selectedText, this.x + 10, this.y + this.height / 2, this.width - 40);
      
      // Desenha o triângulo para baixo
      ctx.fillStyle = '#666';
      ctx.beginPath();
      const arrowX = this.x + this.width - 15;
      const arrowY = this.y + this.height / 2;
      ctx.moveTo(arrowX - 5, arrowY - 3);
      ctx.lineTo(arrowX + 5, arrowY - 3);
      ctx.lineTo(arrowX, arrowY + 3);
      ctx.closePath();
      ctx.fill();
      
      // Se estiver aberto, desenha as opções
      if (this.isOpen) {
        const visibleOptions = Math.min(this.options.length, this.maxVisibleOptions);
        const dropdownHeight = visibleOptions * this.optionHeight;
        
        // Fundo da dropdown
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(this.x, this.y + this.height, this.width, dropdownHeight);
        
        // Borda da dropdown
        ctx.strokeStyle = '#ccc';
        ctx.strokeRect(this.x, this.y + this.height, this.width, dropdownHeight);
        
        // Desenha cada opção
        for (let i = 0; i < visibleOptions; i++) {
          const optionY = this.y + this.height + i * this.optionHeight;
          
          // Destaca se for a opção selecionada
          if (i === this.selectedIndex) {
            ctx.fillStyle = '#e6f0ff';
            ctx.fillRect(this.x, optionY, this.width, this.optionHeight);
          }
          
          // Texto da opção
          ctx.fillStyle = '#333';
          ctx.textAlign = 'left';
          ctx.textBaseline = 'middle';
          ctx.font = '14px Arial';
          ctx.fillText(this.options[i], this.x + 10, optionY + this.optionHeight / 2, this.width - 20);
          
          // Linha separadora entre opções
          if (i < visibleOptions - 1) {
            ctx.strokeStyle = '#eee';
            ctx.beginPath();
            ctx.moveTo(this.x, optionY + this.optionHeight);
            ctx.lineTo(this.x + this.width, optionY + this.optionHeight);
            ctx.stroke();
          }
        }
      }
    }
  }
  
  // Barra de Progresso
  class ProgressBar extends Widget {
    constructor(x, y, width, height, progress = 0, maxValue = 100) {
      super(x, y, width, height);
      this.progress = progress;
      this.maxValue = maxValue;
    }
  
    setProgress(value) {
      this.progress = Math.max(0, Math.min(this.maxValue, value));
    }
  
    draw(ctx) {
      const borderRadius = 3;
      const percentage = this.progress / this.maxValue;
      
      // Desenha o fundo
      ctx.fillStyle = '#eaeaea';
      
      // Desenha com cantos arredondados
      ctx.beginPath();
      ctx.moveTo(this.x + borderRadius, this.y);
      ctx.lineTo(this.x + this.width - borderRadius, this.y);
      ctx.arcTo(this.x + this.width, this.y, this.x + this.width, this.y + borderRadius, borderRadius);
      ctx.lineTo(this.x + this.width, this.y + this.height - borderRadius);
      ctx.arcTo(this.x + this.width, this.y + this.height, this.x + this.width - borderRadius, this.y + this.height, borderRadius);
      ctx.lineTo(this.x + borderRadius, this.y + this.height);
      ctx.arcTo(this.x, this.y + this.height, this.x, this.y + this.height - borderRadius, borderRadius);
      ctx.lineTo(this.x, this.y + borderRadius);
      ctx.arcTo(this.x, this.y, this.x + borderRadius, this.y, borderRadius);
      ctx.closePath();
      ctx.fill();
      
      // Desenha a barra de progresso
      if (percentage > 0) {
        ctx.fillStyle = '#007bff';
        
        const progressWidth = Math.max(borderRadius * 2, this.width * percentage);
        
        ctx.beginPath();
        ctx.moveTo(this.x + borderRadius, this.y);
        
        if (percentage === 1) {
          // Se estiver 100%, arredonda todo o retângulo
          ctx.lineTo(this.x + this.width - borderRadius, this.y);
          ctx.arcTo(this.x + this.width, this.y, this.x + this.width, this.y + borderRadius, borderRadius);
          ctx.lineTo(this.x + this.width, this.y + this.height - borderRadius);
          ctx.arcTo(this.x + this.width, this.y + this.height, this.x + this.width - borderRadius, this.y + this.height, borderRadius);
        } else {
          // Se não estiver 100%, só arredonda o canto esquerdo
          ctx.lineTo(this.x + progressWidth, this.y);
          ctx.lineTo(this.x + progressWidth, this.y + this.height);
        }
        
        ctx.lineTo(this.x + borderRadius, this.y + this.height);
        ctx.arcTo(this.x, this.y + this.height, this.x, this.y + this.height - borderRadius, borderRadius);
        ctx.lineTo(this.x, this.y + borderRadius);
        ctx.arcTo(this.x, this.y, this.x + borderRadius, this.y, borderRadius);
        ctx.closePath();
        ctx.fill();
      }
      
      // Desenha o texto com a porcentagem
      const text = Math.round(percentage * 100) + '%';
      ctx.fillStyle = percentage > 0.5 ? '#ffffff' : '#333333';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = '12px Arial';
      ctx.fillText(text, this.x + this.width / 2, this.y + this.height / 2);
    }
  }
  
  // Exemplo de uso dos widgets
  class WidgetDemo {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      this.ctx = this.canvas.getContext('2d');
      this.widgets = [];
      this.mouseX = 0;
      this.mouseY = 0;
      this.activeWidget = null;
      
      // Adiciona widgets de demonstração
      this.setupWidgets();
      
      // Configura event listeners
      this.setupEventListeners();
      
      // Inicia o loop de renderização
      this.renderLoop();
    }
  
    setupWidgets() {
      // Botão
      this.widgets.push(new Button(50, 50, 120, 40, "Clique Aqui", () => {
        console.log("Botão clicado!");
      }));
      
      // Checkbox
      this.widgets.push(new Checkbox(50, 120, 20, "Ativar opção", false, (checked) => {
        console.log("Checkbox: " + checked);
      }));
      
      // Slider
      this.widgets.push(new Slider(50, 170, 200, 20, 0, 100, 50, (value) => {
        console.log("Slider: " + value);
      }));
      
      // Campo de texto
      this.widgets.push(new TextField(50, 220, 200, 30, "Digite algo aqui", (text) => {
        console.log("Texto: " + text);
      }));
      
      // Dropdown
      this.widgets.push(new DropdownMenu(50, 280, 200, 30, ["Opção 1", "Opção 2", "Opção 3", "Opção 4", "Opção 5"], 0, (index, value) => {
        console.log(`Selecionado: ${index} - ${value}`);
      }));
      
      // Barra de progresso
      const progressBar = new ProgressBar(50, 340, 200, 20, 75);
      this.widgets.push(progressBar);
    }
  
    setupEventListeners() {
      this.canvas.addEventListener('mousemove', (e) => {
        const rect = this.canvas.getBoundingClientRect();
        this.mouseX = e.clientX - rect.left;
        this.mouseY = e.clientY - rect.top;
        
        for (const widget of this.widgets) {
          widget.handleMouseMove(this.mouseX, this.mouseY);
        }
      });
      
      this.canvas.addEventListener('mousedown', (e) => {
        const rect = this.canvas.getBoundingClientRect();
        this.mouseX = e.clientX - rect.left;
        this.mouseY = e.clientY - rect.top;
        
        this.activeWidget = null;
        
        for (let i = this.widgets.length - 1; i >= 0; i--) {
          if (this.widgets[i].handleMouseDown(this.mouseX, this.mouseY)) {
            this.activeWidget = this.widgets[i];
            break;
          }
        }
      });
      
      this.canvas.addEventListener('mouseup', (e) => {
        const rect = this.canvas.getBoundingClientRect();
        this.mouseX = e.clientX - rect.left;
        this.mouseY = e.clientY - rect.top;
        
        for (const widget of this.widgets) {
          widget.handleMouseUp(this.mouseX, this.mouseY);
        }
        
        this.activeWidget = null;
      });
      
      window.addEventListener('keydown', (e) => {
        for (const widget of this.widgets) {
          if (widget instanceof TextField && widget.isFocused) {
            widget.handleKeyDown(e.key);
            e.preventDefault();
          }
        }
      });
    }
  
    renderLoop() {
      // Limpa o canvas
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      
      // Desenha os widgets
      for (const widget of this.widgets) {
        widget.draw(this.ctx);
      }
      
      // Continua o loop
      requestAnimationFrame(() => this.renderLoop());
    }
  }
  
 
  // HTML mínimo para usar:
// <canvas id="widgetCanvas" width="600" height="400" style="border: 1px solid #ccc;"></canvas>
  
// Tab Widget
class TabGroup extends Widget {
    constructor(x, y, width, height, tabTitles, onTabChange = null) {
      super(x, y, width, height);
      this.tabTitles = tabTitles;
      this.activeTabIndex = 0;
      this.onTabChange = onTabChange;
      this.tabHeight = 30; // Altura da barra de abas
      this.contentHeight = height - this.tabHeight;
      this.tabContents = []; // Conteúdo para cada aba
      
      // Inicializa o conteúdo vazio para cada aba
      for (let i = 0; i < tabTitles.length; i++) {
        this.tabContents.push("");
      }
    }
  
    // Define o conteúdo para uma aba específica
    setTabContent(tabIndex, content) {
      if (tabIndex >= 0 && tabIndex < this.tabContents.length) {
        this.tabContents[tabIndex] = content;
      }
    }
  
    // Adiciona um widget a uma aba específica
    addWidgetToTab(tabIndex, widget) {
      if (!this.tabWidgets) {
        this.tabWidgets = [];
        for (let i = 0; i < this.tabTitles.length; i++) {
          this.tabWidgets.push([]);
        }
      }
  
      if (tabIndex >= 0 && tabIndex < this.tabWidgets.length) {
        this.tabWidgets[tabIndex].push(widget);
      }
    }
  
    // Calcula a largura de cada aba
    getTabWidth() {
      return this.width / this.tabTitles.length;
    }
  
    // Retorna qual aba está sob o cursor do mouse
    getTabIndexUnderMouse(mouseX, mouseY) {
      if (mouseY >= this.y && mouseY <= this.y + this.tabHeight) {
        const tabWidth = this.getTabWidth();
        for (let i = 0; i < this.tabTitles.length; i++) {
          const tabX = this.x + i * tabWidth;
          if (mouseX >= tabX && mouseX <= tabX + tabWidth) {
            return i;
          }
        }
      }
      return -1;
    }
  
    handleMouseDown(mouseX, mouseY) {
      const tabIndex = this.getTabIndexUnderMouse(mouseX, mouseY);
      if (tabIndex !== -1) {
        this.activeTabIndex = tabIndex;
        if (this.onTabChange) {
          this.onTabChange(this.activeTabIndex, this.tabTitles[this.activeTabIndex]);
        }
        return true;
      }
      
      // Se tiver widgets na aba atual, verifique se algum deles foi clicado
      if (this.tabWidgets && this.tabWidgets[this.activeTabIndex]) {
        for (const widget of this.tabWidgets[this.activeTabIndex]) {
          if (widget.handleMouseDown(mouseX, mouseY)) {
            return true;
          }
        }
      }
      
      return false;
    }
  
    handleMouseMove(mouseX, mouseY) {
      super.handleMouseMove(mouseX, mouseY);
      
      // Se tiver widgets na aba atual, propague o evento de movimento do mouse
      if (this.tabWidgets && this.tabWidgets[this.activeTabIndex]) {
        for (const widget of this.tabWidgets[this.activeTabIndex]) {
          widget.handleMouseMove(mouseX, mouseY);
        }
      }
    }
  
    handleMouseUp(mouseX, mouseY) {
      super.handleMouseUp(mouseX, mouseY);
      
      // Propague o evento para os widgets na aba atual
      if (this.tabWidgets && this.tabWidgets[this.activeTabIndex]) {
        for (const widget of this.tabWidgets[this.activeTabIndex]) {
          widget.handleMouseUp(mouseX, mouseY);
        }
      }
    }
  
    draw(ctx) {
      const tabWidth = this.getTabWidth();
      
      // Desenha o fundo das abas
      ctx.fillStyle = '#e6e6e6';
      ctx.fillRect(this.x, this.y, this.width, this.tabHeight);
      
      // Desenha cada aba
      for (let i = 0; i < this.tabTitles.length; i++) {
        const tabX = this.x + i * tabWidth;
        
        // Aba ativa tem fundo e estilo diferentes
        if (i === this.activeTabIndex) {
          // Fundo da aba ativa
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(tabX, this.y, tabWidth, this.tabHeight);
          
          // Linha inferior da aba ativa (para conectar com o conteúdo)
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(tabX, this.y + this.tabHeight);
          ctx.lineTo(tabX + tabWidth, this.y + this.tabHeight);
          ctx.stroke();
        } else {
          // Abas inativas
          ctx.fillStyle = '#d9d9d9';
          ctx.fillRect(tabX, this.y, tabWidth, this.tabHeight);
        }
        
        // Borda da aba
        ctx.strokeStyle = '#b3b3b3';
        ctx.lineWidth = 1;
        ctx.strokeRect(tabX, this.y, tabWidth, this.tabHeight);
        
        // Texto da aba
        ctx.fillStyle = i === this.activeTabIndex ? '#333333' : '#666666';
        ctx.font = (i === this.activeTabIndex ? 'bold ' : '') + '12px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.tabTitles[i], tabX + tabWidth / 2, this.y + this.tabHeight / 2, tabWidth - 10);
      }
      
      // Desenha a área de conteúdo
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(this.x, this.y + this.tabHeight, this.width, this.contentHeight);
      
      // Borda da área de conteúdo
      ctx.strokeStyle = '#b3b3b3';
      ctx.lineWidth = 1;
      ctx.strokeRect(this.x, this.y + this.tabHeight, this.width, this.contentHeight);
      
      // Se tiver conteúdo de texto, desenha-o
      if (this.tabContents[this.activeTabIndex]) {
        ctx.fillStyle = '#333333';
        ctx.font = '12px Arial';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        
        // Quebra de linha simples (pode ser melhorado)
        const lines = this.tabContents[this.activeTabIndex].split('\n');
        const lineHeight = 16;
        for (let i = 0; i < lines.length; i++) {
          ctx.fillText(
            lines[i], 
            this.x + 10, 
            this.y + this.tabHeight + 10 + i * lineHeight,
            this.width - 20
          );
        }
      }
      
      // Desenha widgets da aba atual, se houver
      if (this.tabWidgets && this.tabWidgets[this.activeTabIndex]) {
        for (const widget of this.tabWidgets[this.activeTabIndex]) {
          widget.draw(ctx);
        }
      }
    }
  }
  
  // RadioButton Group Widget
  class RadioButtonGroup extends Widget {
    constructor(x, y, buttonRadius, labels, selectedIndex = 0, onChange = null) {
      // Calcula altura baseada no número de opções e espaçamento
      const spacing = 25; // Espaçamento vertical entre botões
      const totalHeight = labels.length * spacing;
      
      super(x, y, 150, totalHeight);
      this.buttonRadius = buttonRadius;
      this.labels = labels;
      this.selectedIndex = selectedIndex;
      this.onChange = onChange;
      this.spacing = spacing;
    }
  
    handleMouseDown(mouseX, mouseY) {
      if (mouseX >= this.x && mouseX <= this.x + this.width) {
        for (let i = 0; i < this.labels.length; i++) {
          const buttonY = this.y + i * this.spacing;
          if (mouseY >= buttonY - this.buttonRadius && mouseY <= buttonY + this.buttonRadius) {
            this.selectedIndex = i;
            if (this.onChange) {
              this.onChange(this.selectedIndex, this.labels[this.selectedIndex]);
            }
            return true;
          }
        }
      }
      return false;
    }
  
    draw(ctx) {
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.font = '12px Arial';
  
      for (let i = 0; i < this.labels.length; i++) {
        const buttonY = this.y + i * this.spacing;
        
        // Círculo externo
        ctx.strokeStyle = '#666666';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(this.x + this.buttonRadius, buttonY, this.buttonRadius, 0, Math.PI * 2);
        ctx.stroke();
        
        // Se selecionado, desenha o círculo interno
        if (i === this.selectedIndex) {
          ctx.fillStyle = '#3366cc';
          ctx.beginPath();
          ctx.arc(this.x + this.buttonRadius, buttonY, this.buttonRadius * 0.6, 0, Math.PI * 2);
          ctx.fill();
        }
        
        // Texto do label
        ctx.fillStyle = '#333333';
        ctx.fillText(this.labels[i], this.x + this.buttonRadius * 2 + 5, buttonY);
      }
    }
  }
  
  // Toggle Switch Widget
  class ToggleSwitch extends Widget {
    constructor(x, y, width, height, isOn = false, label = '', onChange = null) {
      super(x, y, width, height);
      this.isOn = isOn;
      this.label = label;
      this.onChange = onChange;
      this.knobPosition = this.isOn ? 1 : 0; // Posição normalizada do botão (0-1)
      this.animationSpeed = 0.2; // Velocidade da animação (0-1)
      this.lastUpdateTime = 0;
    }
  
    toggle() {
      this.isOn = !this.isOn;
      if (this.onChange) {
        this.onChange(this.isOn);
      }
    }
  
    handleMouseDown(mouseX, mouseY) {
      if (super.handleMouseDown(mouseX, mouseY)) {
        this.toggle();
        return true;
      }
      return false;
    }
  
    update(timestamp) {
      // Animação suave do knob
      const targetPosition = this.isOn ? 1 : 0;
      
      if (this.knobPosition !== targetPosition) {
        // Calcula o delta de tempo desde a última atualização
        const deltaTime = (timestamp - this.lastUpdateTime) / 1000; // Converte para segundos
        this.lastUpdateTime = timestamp;
        
        // Move o botão em direção à posição alvo
        if (this.knobPosition < targetPosition) {
          this.knobPosition = Math.min(targetPosition, this.knobPosition + this.animationSpeed * deltaTime * 5);
        } else {
          this.knobPosition = Math.max(targetPosition, this.knobPosition - this.animationSpeed * deltaTime * 5);
        }
      }
    }
  
    draw(ctx, timestamp = performance.now()) {
      // Atualiza a animação
      this.update(timestamp);
      
      const switchWidth = this.width * 0.6;
      const switchHeight = this.height * 0.6;
      const switchX = this.x;
      const switchY = this.y + (this.height - switchHeight) / 2;
      const knobRadius = switchHeight / 2;
      const knobPadding = 2;
      
      // Desenha o fundo do switch
      const gradient = ctx.createLinearGradient(switchX, switchY, switchX + switchWidth, switchY);
      if (this.isOn) {
        gradient.addColorStop(0, '#4CAF50');
        gradient.addColorStop(1, '#45a049');
      } else {
        gradient.addColorStop(0, '#ccc');
        gradient.addColorStop(1, '#bbb');
      }
      
      // Desenha retângulo com cantos arredondados para o fundo
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(switchX + knobRadius, switchY);
      ctx.lineTo(switchX + switchWidth - knobRadius, switchY);
      ctx.arc(switchX + switchWidth - knobRadius, switchY + knobRadius, knobRadius, Math.PI * 1.5, Math.PI * 0.5, false);
      ctx.lineTo(switchX + knobRadius, switchY + switchHeight);
      ctx.arc(switchX + knobRadius, switchY + knobRadius, knobRadius, Math.PI * 0.5, Math.PI * 1.5, false);
      ctx.closePath();
      ctx.fill();
      
      // Calcula a posição atual do botão baseada na animação
      const knobPosition = switchX + knobRadius + knobPadding + 
                          (switchWidth - 2 * knobRadius - 2 * knobPadding) * this.knobPosition;
      
      // Desenha o botão do switch
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(knobPosition, switchY + switchHeight / 2, knobRadius - knobPadding, 0, Math.PI * 2);
      ctx.fill();
      
      // Adiciona sombra ao botão
      ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
      ctx.shadowBlur = 3;
      ctx.shadowOffsetX = 1;
      ctx.shadowOffsetY = 1;
      ctx.fill();
      
      // Reset da sombra
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      
      // Desenha o label se existir
      if (this.label) {
        ctx.fillStyle = '#333';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.font = '12px Arial';
        ctx.fillText(this.label, switchX + switchWidth + 10, switchY + switchHeight / 2);
      }
    }
  }
  
  // Card Widget
  class Card extends Widget {
    constructor(x, y, width, height, title, content = '', icon = null) {
      super(x, y, width, height);
      this.title = title;
      this.content = content;
      this.icon = icon;
      this.borderRadius = 5;
      this.widgets = []; // Widgets dentro do card
    }
  
    addWidget(widget) {
      // Ajusta a posição do widget para ser relativa ao card
      widget.x += this.x + 10;
      widget.y += this.y + 50; // Abaixo do título
      this.widgets.push(widget);
    }
  
    handleMouseMove(mouseX, mouseY) {
      super.handleMouseMove(mouseX, mouseY);
      // Propaga evento para widgets internos
      for (const widget of this.widgets) {
        widget.handleMouseMove(mouseX, mouseY);
      }
    }
  
    handleMouseDown(mouseX, mouseY) {
      if (super.handleMouseDown(mouseX, mouseY)) {
        // Propaga evento para widgets internos
        for (const widget of this.widgets) {
          if (widget.handleMouseDown(mouseX, mouseY)) {
            return true;
          }
        }
        return true;
      }
      return false;
    }
  
    handleMouseUp(mouseX, mouseY) {
      super.handleMouseUp(mouseX, mouseY);
      // Propaga evento para widgets internos
      for (const widget of this.widgets) {
        widget.handleMouseUp(mouseX, mouseY);
      }
    }
  
    draw(ctx) {
      // Sombra do card
      ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
      ctx.shadowBlur = 5;
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
      
      // Fundo do card
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.moveTo(this.x + this.borderRadius, this.y);
      ctx.lineTo(this.x + this.width - this.borderRadius, this.y);
      ctx.arcTo(this.x + this.width, this.y, this.x + this.width, this.y + this.borderRadius, this.borderRadius);
      ctx.lineTo(this.x + this.width, this.y + this.height - this.borderRadius);
      ctx.arcTo(this.x + this.width, this.y + this.height, this.x + this.width - this.borderRadius, this.y + this.height, this.borderRadius);
      ctx.lineTo(this.x + this.borderRadius, this.y + this.height);
      ctx.arcTo(this.x, this.y + this.height, this.x, this.y + this.height - this.borderRadius, this.borderRadius);
      ctx.lineTo(this.x, this.y + this.borderRadius);
      ctx.arcTo(this.x, this.y, this.x + this.borderRadius, this.y, this.borderRadius);
      ctx.closePath();
      ctx.fill();
      
      // Reset da sombra
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      
      // Título do card
      ctx.fillStyle = '#333';
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
      ctx.fillText(this.title, this.x + 15, this.y + 15);
      
      // Linha separadora
      ctx.strokeStyle = '#eee';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(this.x, this.y + 40);
      ctx.lineTo(this.x + this.width, this.y + 40);
      ctx.stroke();
      
      // Conteúdo do card
      if (this.content) {
        ctx.fillStyle = '#666';
        ctx.font = '12px Arial';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        
        // Quebra de texto simples
        const words = this.content.split(' ');
        let line = '';
        let y = this.y + 50;
        const lineHeight = 16;
        const maxWidth = this.width - 30;
        
        for (const word of words) {
          const testLine = line + word + ' ';
          const metrics = ctx.measureText(testLine);
          
          if (metrics.width > maxWidth && line !== '') {
            ctx.fillText(line, this.x + 15, y);
            line = word + ' ';
            y += lineHeight;
          } else {
            line = testLine;
          }
        }
        
        ctx.fillText(line, this.x + 15, y);
      }
      
      // Desenha widgets internos
      for (const widget of this.widgets) {
        widget.draw(ctx);
      }
    }
  }
   
 
  
class Dialog extends Widget {
    constructor(x, y, width, height, title, content = '', buttons = [{label: 'OK', primary: true}]) {
      super(x, y, width, height);
      this.title = title;
      this.content = content;
      this.buttons = buttons;
      this.isVisible = false;
      this.isDragging = false;
      this.dragOffsetX = 0;
      this.dragOffsetY = 0;
      this.borderRadius = 8;
      this.headerHeight = 40;
      this.footerHeight = 50;
      this.contentPadding = 15;
      
      // Widgets dentro do dialog
      this.widgets = [];
      
      // Calcular posições dos botões
      this.calculateButtonPositions();
    }
  
    calculateButtonPositions() {
      const buttonStartX = this.x + this.width - 20;
      const buttonY = this.y + this.height - this.footerHeight / 2;
      const buttonSpacing = 10;
      
      // Começando da direita para a esquerda
      let currentX = buttonStartX;
      
      for (let i = 0; i < this.buttons.length; i++) {
        const button = this.buttons[i];
        // Estima a largura do botão baseado no texto + padding
        const buttonWidth = Math.max(button.label.length * 8 + 20, 80);
        currentX -= buttonWidth;
        
        button.x = currentX;
        button.y = buttonY - 15; // -15 para centralizar
        button.width = buttonWidth;
        button.height = 30;
        button.isHovered = false;
        button.isPressed = false;
        
        currentX -= buttonSpacing;
      }
    }
  
    show() {
      this.isVisible = true;
    }
  
    hide() {
      this.isVisible = false;
    }
  
    toggle() {
      this.isVisible = !this.isVisible;
    }
  
    addWidget(widget) {
      // Ajusta a posição do widget para ser relativa ao conteúdo do dialog
      widget.x += this.x + this.contentPadding;
      widget.y += this.y + this.headerHeight + this.contentPadding;
      this.widgets.push(widget);
    }
  
    isInHeader(mouseX, mouseY) {
      return mouseX >= this.x && mouseX <= this.x + this.width &&
             mouseY >= this.y && mouseY <= this.y + this.headerHeight;
    }
  
    isInButton(mouseX, mouseY, button) {
      return mouseX >= button.x && mouseX <= button.x + button.width &&
             mouseY >= button.y && mouseY <= button.y + button.height;
    }
  
    handleMouseMove(mouseX, mouseY) {
      if (!this.isVisible) return;
      
      // Verifica se está arrastando o dialog
      if (this.isDragging) {
        this.x = mouseX - this.dragOffsetX;
        this.y = mouseY - this.dragOffsetY;
        
        // Recalcula posições dos botões
        this.calculateButtonPositions();
        return;
      }
      
      // Atualiza estado hover dos botões
      for (const button of this.buttons) {
        button.isHovered = this.isInButton(mouseX, mouseY, button);
      }
      
      // Propaga evento para widgets internos
      for (const widget of this.widgets) {
        widget.handleMouseMove(mouseX, mouseY);
      }
    }
  
    handleMouseDown(mouseX, mouseY) {
      if (!this.isVisible) return false;
      
      // Verifica se clicou no cabeçalho (para arrastar)
      if (this.isInHeader(mouseX, mouseY)) {
        this.isDragging = true;
        this.dragOffsetX = mouseX - this.x;
        this.dragOffsetY = mouseY - this.y;
        return true;
      }
      
      // Verifica se clicou em algum botão
      for (const button of this.buttons) {
        if (this.isInButton(mouseX, mouseY, button)) {
          button.isPressed = true;
          return true;
        }
      }
      
      // Propaga evento para widgets internos
      for (const widget of this.widgets) {
        if (widget.handleMouseDown(mouseX, mouseY)) {
          return true;
        }
      }
      
      // Se clicou dentro do dialog, consome o evento
      if (this.isInside(mouseX, mouseY)) {
        return true;
      }
      
      return false;
    }
  
    handleMouseUp(mouseX, mouseY) {
      if (!this.isVisible) return;
      
      // Finaliza o arrasto
      this.isDragging = false;
      
      // Verifica se soltou em algum botão
      for (let i = 0; i < this.buttons.length; i++) {
        const button = this.buttons[i];
        if (button.isPressed && this.isInButton(mouseX, mouseY, button)) {
          // Executa a ação do botão
          if (button.onClick) {
            button.onClick();
          } else if (button.action === 'close' || !button.action) {
            this.hide();
          }
        }
        button.isPressed = false;
      }
      
      // Propaga evento para widgets internos
      for (const widget of this.widgets) {
        widget.handleMouseUp(mouseX, mouseY);
      }
    }
  
    draw(ctx) {
      if (!this.isVisible) return;
      
      // Desenha overlay semi-transparente
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      
      // Sombra do dialog
      ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
      ctx.shadowBlur = 10;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 5;
      
      // Fundo do dialog
      ctx.fillStyle = '#ffffff';
      this.drawRoundedRect(ctx, this.x, this.y, this.width, this.height, this.borderRadius);
      
      // Reset sombra
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      
      // Cabeçalho do dialog
      ctx.fillStyle = '#f5f5f5';
      this.drawRoundedRectTop(ctx, this.x, this.y, this.width, this.headerHeight, this.borderRadius);
      
      // Linha separadora do cabeçalho
      ctx.strokeStyle = '#e5e5e5';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(this.x, this.y + this.headerHeight);
      ctx.lineTo(this.x + this.width, this.y + this.headerHeight);
      ctx.stroke();
      
      // Título do dialog
      ctx.fillStyle = '#333333';
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText(this.title, this.x + 15, this.y + this.headerHeight / 2);
      
      // Botão de fechar (X)
      const closeX = this.x + this.width - 25;
      const closeY = this.y + this.headerHeight / 2;
      ctx.fillStyle = '#999999';
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('×', closeX, closeY);
      
      // Conteúdo do dialog
      if (this.content) {
        ctx.fillStyle = '#333333';
        ctx.font = '14px Arial';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        
        // Quebra de texto simples
        const contentX = this.x + this.contentPadding;
        const contentY = this.y + this.headerHeight + this.contentPadding;
        const contentWidth = this.width - 2 * this.contentPadding;
        
        this.wrapText(ctx, this.content, contentX, contentY, contentWidth, 18);
      }
      
      // Rodapé do dialog
      ctx.fillStyle = '#f5f5f5';
      ctx.fillRect(this.x, this.y + this.height - this.footerHeight, this.width, this.footerHeight);
      
      // Linha separadora do rodapé
      ctx.strokeStyle = '#e5e5e5';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(this.x, this.y + this.height - this.footerHeight);
      ctx.lineTo(this.x + this.width, this.y + this.height - this.footerHeight);
      ctx.stroke();
      
      // Desenha os botões
      for (const button of this.buttons) {
        // Fundo do botão
        if (button.primary) {
          ctx.fillStyle = button.isPressed ? '#0056b3' : (button.isHovered ? '#007bff' : '#0069d9');
        } else {
          ctx.fillStyle = button.isPressed ? '#d4d4d4' : (button.isHovered ? '#e9e9e9' : '#f8f9fa');
        }
        
        this.drawRoundedRect(ctx, button.x, button.y, button.width, button.height, 4);
        
        // Texto do botão
        ctx.fillStyle = button.primary ? '#ffffff' : '#333333';
        ctx.font = '13px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(button.label, button.x + button.width / 2, button.y + button.height / 2);
      }
      
      // Desenha widgets internos
      for (const widget of this.widgets) {
        widget.draw(ctx);
      }
    }
  
    // Auxiliar para desenhar retângulo com cantos arredondados
    drawRoundedRect(ctx, x, y, width, height, radius) {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
      ctx.fill();
    }
  
    // Auxiliar para desenhar retângulo com cantos arredondados só no topo
    drawRoundedRectTop(ctx, x, y, width, height, radius) {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height);
      ctx.lineTo(x, y + height);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
      ctx.fill();
    }
  
    // Auxiliar para quebra de texto automática
    wrapText(ctx, text, x, y, maxWidth, lineHeight) {
      const words = text.split(' ');
      let line = '';
      let testLine = '';
      let lineY = y;
      
      for (let i = 0; i < words.length; i++) {
        testLine = line + words[i] + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        
        if (testWidth > maxWidth && i > 0) {
          ctx.fillText(line, x, lineY);
          line = words[i] + ' ';
          lineY += lineHeight;
        } else {
          line = testLine;
        }
      }
      
      ctx.fillText(line, x, lineY);
    }
  }
  
  // AlertDialog - Um tipo especial de Dialog para mensagens de alerta
  class AlertDialog extends Dialog {
    constructor(x, y, width, height, title, message, type = 'info', onConfirm = null) {
      const buttons = [{
        label: 'OK',
        primary: true,
        onClick: onConfirm || (() => {})
      }];
      
      super(x, y, width, height, title, message, buttons);
      this.type = type; // 'info', 'success', 'warning', 'error'
    }
  
    draw(ctx) {
      if (!this.isVisible) return;
      
      // Chama o método draw do Dialog pai
      super.draw(ctx);
      
      // Adiciona ícone baseado no tipo
      const iconX = this.x + this.contentPadding + 5;
      const iconY = this.y + this.headerHeight + this.contentPadding + 5;
      const iconSize = 24;
      
      ctx.lineWidth = 2;
      
      switch (this.type) {
        case 'info':
          // Círculo azul com "i"
          ctx.fillStyle = '#17a2b8';
          ctx.beginPath();
          ctx.arc(iconX + iconSize/2, iconY + iconSize/2, iconSize/2, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.fillStyle = 'white';
          ctx.font = 'bold 16px Arial';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('i', iconX + iconSize/2, iconY + iconSize/2);
          break;
          
        case 'success':
          // Círculo verde com check
          ctx.fillStyle = '#28a745';
          ctx.beginPath();
          ctx.arc(iconX + iconSize/2, iconY + iconSize/2, iconSize/2, 0, Math.PI * 2);
          ctx.fill();
          
          // Check mark
          ctx.strokeStyle = 'white';
          ctx.beginPath();
          ctx.moveTo(iconX + iconSize * 0.3, iconY + iconSize * 0.5);
          ctx.lineTo(iconX + iconSize * 0.45, iconY + iconSize * 0.7);
          ctx.lineTo(iconX + iconSize * 0.7, iconY + iconSize * 0.3);
          ctx.stroke();
          break;
          
        case 'warning':
          // Triângulo amarelo com ponto de exclamação
          ctx.fillStyle = '#ffc107';
          ctx.beginPath();
          ctx.moveTo(iconX + iconSize/2, iconY);
          ctx.lineTo(iconX + iconSize, iconY + iconSize);
          ctx.lineTo(iconX, iconY + iconSize);
          ctx.closePath();
          ctx.fill();
          
          ctx.fillStyle = 'black';
          ctx.font = 'bold 16px Arial';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('!', iconX + iconSize/2, iconY + iconSize/2 + 2);
          break;
          
        case 'error':
          // Círculo vermelho com X
          ctx.fillStyle = '#dc3545';
          ctx.beginPath();
          ctx.arc(iconX + iconSize/2, iconY + iconSize/2, iconSize/2, 0, Math.PI * 2);
          ctx.fill();
          
          // X mark
          ctx.strokeStyle = 'white';
          ctx.beginPath();
          ctx.moveTo(iconX + iconSize * 0.3, iconY + iconSize * 0.3);
          ctx.lineTo(iconX + iconSize * 0.7, iconY + iconSize * 0.7);
          ctx.moveTo(iconX + iconSize * 0.3, iconY + iconSize * 0.7);
          ctx.lineTo(iconX + iconSize * 0.7, iconY + iconSize * 0.3);
          ctx.stroke();
          break;
      }
    }
  }
  
  // ConfirmDialog - Um tipo de Dialog para confirmar ações
  class ConfirmDialog extends Dialog {
    constructor(x, y, width, height, title, message, onConfirm = null, onCancel = null) {
      const buttons = [
        {
          label: 'Cancelar',
          primary: false,
          onClick: onCancel || (() => {})
        },
        {
          label: 'OK',
          primary: true,
          onClick: onConfirm || (() => {})
        }
      ];
      
      super(x, y, width, height, title, message, buttons);
    }
  }
  
  // PromptDialog - Um tipo de Dialog para entrada de texto
  class PromptDialog extends Dialog {
    constructor(x, y, width, height, title, message, defaultValue = '', onConfirm = null, onCancel = null) {
      super(x, y, width, height, title, message, [
        {
          label: 'Cancelar',
          primary: false,
          onClick: () => {
            if (onCancel) onCancel();
            this.hide();
          }
        },
        {
          label: 'OK',
          primary: true,
          onClick: () => {
            if (onConfirm) onConfirm(this.inputField.text);
            this.hide();
          }
        }
      ]);
      
      // Adiciona campo de texto
      this.inputField = new TextField(
        this.contentPadding,
        this.headerHeight + this.contentPadding + 50, // Abaixo da mensagem
        this.width - 2 * this.contentPadding,
        30,
        'Digite aqui...',
        null
      );
      this.inputField.text = defaultValue;
      this.addWidget(this.inputField);
    }
  
    show() {
      super.show();
      // Foca automaticamente no campo de texto
      setTimeout(() => {
        this.inputField.focus();
      }, 100);
    }
  }
  
  // Exemplo de uso dos Dialogs
  function dialogDemo(canvas) {
    const ctx = canvas.getContext('2d');
    const widgets = [];
    let activeDialog = null;
    
    // Botões para demonstração
    const alertButton = new Button(50, 50, 150, 40, "Alerta", () => {
      const alertDialog = new AlertDialog(
        canvas.width / 2 - 200,
        canvas.height / 2 - 150,
        400,
        250,
        "Informação",
        "Esta é uma mensagem de informação. Clique em OK para fechar.",
        "info",
        () => console.log("Alerta fechado!")
      );
      activeDialog = alertDialog;
      alertDialog.show();
    });
    widgets.push(alertButton);
    
    const warningButton = new Button(50, 100, 150, 40, "Aviso", () => {
      const warningDialog = new AlertDialog(
        canvas.width / 2 - 200,
        canvas.height / 2 - 150,
        400,
        250,
        "Aviso",
        "Cuidado! Esta operação pode ter consequências. Verifique antes de prosseguir.",
        "warning",
        () => console.log("Aviso aceito!")
      );
      activeDialog = warningDialog;
      warningDialog.show();
    });
    widgets.push(warningButton);
    
    const confirmButton = new Button(50, 150, 150, 40, "Confirmar", () => {
      const confirmDialog = new ConfirmDialog(
        canvas.width / 2 - 200,
        canvas.height / 2 - 150,
        400,
        250,
        "Confirmação",
        "Tem certeza que deseja prosseguir com esta ação?",
        () => console.log("Ação confirmada!"),
        () => console.log("Ação cancelada!")
      );
      activeDialog = confirmDialog;
      confirmDialog.show();
    });
    widgets.push(confirmButton);
    
    const promptButton = new Button(50, 200, 150, 40, "Prompt", () => {
      const promptDialog = new PromptDialog(
        canvas.width / 2 - 200,
        canvas.height / 2 - 150,
        400,
        250,
        "Entrada de Texto",
        "Por favor, insira seu nome:",
        "",
        (text) => console.log("Nome inserido: " + text),
        () => console.log("Entrada cancelada!")
      );
      activeDialog = promptDialog;
      promptDialog.show();
    });
    widgets.push(promptButton);
    
    const customButton = new Button(50, 250, 150, 40, "Dialog Customizado", () => {
      const customDialog = new Dialog(
        canvas.width / 2 - 250,
        canvas.height / 2 - 200,
        500,
        400,
        "Formulário",
        "Preencha os dados abaixo:",
        [
          {
            label: "Cancelar",
            primary: false,
            onClick: () => console.log("Formulário cancelado")
          },
          {
            label: "Salvar",
            primary: true,
            onClick: () => {
              console.log("Dados salvos!");
              console.log("Nome:", nameField.text);
              console.log("Email:", emailField.text);
              console.log("Opção:", radioGroup.selectedIndex);
              console.log("Notificações:", checkbox.checked);
            }
          }
        ]
      );
      
      // Adiciona widgets dentro do dialog
      const nameField = new TextField(10, 30, 300, 30, "Nome completo");
      customDialog.addWidget(nameField);
      
      const emailField = new TextField(10, 80, 300, 30, "Email");
      customDialog.addWidget(emailField);
      
      const radioGroup = new RadioButtonGroup(10, 130, 8, ["Opção A", "Opção B", "Opção C"]);
      customDialog.addWidget(radioGroup);
      
      const checkbox = new Checkbox(10, 220, 20, "Aceito receber notificações");
      customDialog.addWidget(checkbox);
      
      activeDialog = customDialog;
      customDialog.show();
    });
    widgets.push(customButton);
    
    // Manipulação de eventos do mouse
    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      if (activeDialog) {
        activeDialog.handleMouseMove(mouseX, mouseY);
      } else {
        for (const widget of widgets) {
          widget.handleMouseMove(mouseX, mouseY);
        }
      }
    }
    
    function handleMouseDown(e) {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      if (activeDialog) {
        activeDialog.handleMouseDown(mouseX, mouseY);
      } else {
        for (let i = widgets.length - 1; i >= 0; i--) {
          if (widgets[i].handleMouseDown(mouseX, mouseY)) {
            break;
          }
        }
      }
    }
    
    function handleMouseUp(e) {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      if (activeDialog) {
        activeDialog.handleMouseUp(mouseX, mouseY);
      } else {
        for (const widget of widgets) {
          widget.handleMouseUp(mouseX, mouseY);
        }
      }
    }
    
    function handleKeyDown(e) {
      if (activeDialog) {
        // Propaga evento de teclado para widgets do dialog
        const dialogWidgets = activeDialog.widgets || [];
        for (const widget of dialogWidgets) {
          if (widget instanceof TextField && widget.isFocused) {
            widget.handleKeyDown(e.key);
            e.preventDefault();
          }
        }
        
        // Fecha dialog com Escape
        if (e.key === 'Escape') {
          activeDialog.hide();
          activeDialog = null;
        }
      }
    }
    
    // Configuração de event listeners
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('keydown', handleKeyDown);
    
    // Loop de renderização
    function render() {
      // Limpa o canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Desenha o fundo
      ctx.fillStyle = '#f5f5f5';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Desenha os widgets
      for (const widget of widgets) {
        widget.draw(ctx);
      }
      
      // Desenha o dialog ativo, se houver
      if (activeDialog) {
        activeDialog.draw(ctx);
      }
      
      // Continua o loop
      requestAnimationFrame(render);
    }
    
    // Inicia a renderização
    render();
  }
  
 
  
  window.onload = function() {
    const canvas = document.getElementById('widgetCanvas') || document.createElement('canvas');
    if (!canvas.id) {
      canvas.id = 'widgetCanvas';
      canvas.width = 800;
      canvas.height = 600;
      canvas.style.border = '1px solid #ccc';
      document.body.appendChild(canvas);
    }
    
    // Verifica se as classes Widget e Button existem
    if (typeof Widget === 'undefined' || typeof Button === 'undefined') {
      // Código das classes Widget e Button aqui...
      // ...
    }
    
    dialogDemo(canvas);
  };