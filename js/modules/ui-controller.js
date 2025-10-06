import { stateConfig } from '../data/app-state.js';

export class UIController {
    constructor() {
        this.elements = {
            html: document.querySelector('html'),
            image: document.querySelector('.app__image'),
            title: document.querySelector('.app__title'),
            timer: document.querySelector('#timer'),
            startPauseButton: document.querySelector('#start-pause'),
            musicToggle: document.querySelector('#alternar-musica'),
            contextButtons: document.querySelectorAll('.app__card-button')
        };
    }

    updateContext(context) {
        this.setHTMLAttribute('data-contexto', context);
        this.updateImage(context);
        this.updateMessage(context);
    }

    updateImage(context) {
        const imagePath = `/imagens/${context}.png`;
        this.elements.image.setAttribute('src', imagePath);
    }

    updateMessage(context) {
        const config = stateConfig[context];

        if (config) {
            this.elements.title.innerHTML = `
                ${config.title}<br>
                <strong class="app__title-strong">${config.strong}</strong>
            `;
        }
    }

    updateTimerDisplay(time) {
        this.elements.timer.textContent = time;
    }

    setHTMLAttribute(attribute, value) {
        this.elements.html.setAttribute(attribute, value);
    }

    toggleActiveButton(currentButton, newButton) {
        currentButton?.classList.remove('active');
        newButton?.classList.add('active');
    }

    getActiveButton() {
        return document.querySelector('.app__card-button.active');
    }

    getButtonContext(button) {
        return button?.getAttribute('data-contexto');
    }

    updateStartPauseButton(isRunning) {
        const button = this.elements.startPauseButton;
        const icon = button.querySelector('.app__card-primary-butto-icon');
        const text = button.querySelector('span');

        if (isRunning) {
            icon.setAttribute('src', '/imagens/pause.png');
            text.textContent = 'Pausar';
        } else {
            icon.setAttribute('src', '/imagens/play_arrow.png');
            text.textContent = 'Começar';
        }
    }

    onContextButtonClick(callback) {
        this.elements.contextButtons.forEach(button => {
            button.addEventListener('click', () => {
                const context = this.getButtonContext(button);
                const activeButton = this.getActiveButton();
                callback(context, activeButton, button);
            });
        });
    }

    onStartPauseClick(callback) {
        this.elements.startPauseButton.addEventListener('click', callback);
    }

    onMusicToggleClick(callback) {
        this.elements.musicToggle.addEventListener('click', callback);
    }

    getMusicToggleState() {
        return this.elements.musicToggle.checked;
    }

    setMusicToggleState(checked) {
        this.elements.musicToggle.checked = checked;
    }
}