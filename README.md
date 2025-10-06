# Fokus - Pomodoro Timer

Aplicação web de timer Pomodoro para melhorar sua produtividade através da técnica Pomodoro, alternando períodos de foco intenso com pausas regulares.

## 🎯 Sobre o Projeto

Fokus é um timer Pomodoro moderno e minimalista que ajuda você a manter o foco nas suas tarefas. A aplicação oferece três modos de timer:

- **Foco**: 25 minutos de trabalho concentrado
- **Descanso Curto**: 5 minutos de pausa rápida
- **Descanso Longo**: 15 minutos de pausa prolongada

## ✨ Funcionalidades

- ⏱️ Timer com três modos configuráveis (foco, descanso curto, descanso longo)
- 🎵 Música de fundo opcional para auxiliar na concentração
- 🎨 Interface dinâmica que muda de acordo com o modo selecionado
- 🔔 Sinais sonoros para início, pausa e término do timer
- 📱 Design responsivo para desktop, tablet e mobile

## 🚀 Como Usar
Você pode executar a aplicação localmente ou pelo GitHub pages:

https://pabllodantas.github.io/fokus-pomodo/

### Pré-requisitos

Como o projeto utiliza ES6 modules, é necessário servir os arquivos através de um servidor HTTP. Não é possível abrir diretamente o arquivo `index.html` no navegador (protocolo `file://`).

### Instalação e Execução

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/fokus-pomodo.git
cd fokus-pomodo
```

2. Inicie um servidor HTTP local. Algumas opções:

**Usando Python 3:**
```bash
python -m http.server 8000
```

**Usando Node.js (http-server):**
```bash
npx http-server -p 8000
```

**Usando extensão do VS Code:**
- Instale a extensão "Live Server"
- Clique com o botão direito no `index.html`
- Selecione "Open with Live Server"

3. Acesse no navegador:
```
http://localhost:8000
```

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura da aplicação
- **CSS3** - Estilização e layout responsivo
- **JavaScript (ES6+)** - Lógica da aplicação com módulos ES6
- **Web Audio API** - Reprodução de sons e música de fundo

## 📁 Estrutura do Projeto

```
fokus-pomodo/
├── index.html                 # Página principal
├── js/
│   ├── main.js               # Orquestrador principal da aplicação
│   ├── data/
│   │   └── app-state.js      # Configurações de estado e contextos
│   └── modules/
│       ├── timer.js          # Lógica do timer
│       ├── audio-player.js   # Controle de áudio
│       └── ui-controller.js  # Manipulação do DOM
├── style/
│   └── styles.css            # Estilos da aplicação
└── assets/
    ├── img/                  # Imagens e ícones
    └── audio/                # Arquivos de áudio
```

## 🎨 Arquitetura

A aplicação segue uma arquitetura modular com separação de responsabilidades:

- **FokusApp**: Coordena todos os módulos e gerencia o fluxo de dados
- **Timer**: Gerencia a lógica do temporizador
- **AudioPlayer**: Controla a reprodução de áudio
- **UIController**: Centraliza todas as manipulações do DOM

Cada módulo é uma classe ES6 independente, facilitando manutenção e testes.

## 📝 Licença

Projeto fictício desenvolvido para fins educacionais.

## 👥 Créditos

Desenvolvido por Pabllo Dantas e Alura.