import { stateConfig } from './data/app-state.js';
import { Timer } from './modules/timer.js';
import { AudioPlayer } from './modules/audio-player.js';
import { UIController } from './modules/ui-controller.js';

class FokusApp {
    constructor() {
        this.ui = new UIController();
        this.audioPlayer = new AudioPlayer('/sons/luna-rise-part-one.mp3');
        this.currentContext = this.ui.getButtonContext(this.ui.getActiveButton());

        this.initializeTimer();
        this.setupEventListeners();
    }

    initializeTimer() {
        const initialTime = stateConfig[this.currentContext].totalTime;

        this.timer = new Timer(
            initialTime,
            (currentTime) => this.handleTimerTick(currentTime),
            () => this.handleTimerComplete()
        );

        this.ui.updateTimerDisplay(Timer.formatTime(initialTime));
    }

    setupEventListeners() {
        this.ui.onContextButtonClick((context, activeButton, newButton) => {
            this.handleContextChange(context, activeButton, newButton);
        });

        this.ui.onStartPauseClick(() => {
            this.handleStartPause();
        });

        this.ui.onMusicToggleClick(() => {
            this.handleMusicToggle();
        });
    }

    handleContextChange(context, activeButton, newButton) {
        this.currentContext = context;

        this.ui.updateContext(context);
        this.ui.toggleActiveButton(activeButton, newButton);

        const newTime = stateConfig[context].totalTime;
        this.timer.reset(newTime);
        this.ui.updateTimerDisplay(Timer.formatTime(newTime));
        this.ui.updateStartPauseButton(false);
    }

    handleStartPause() {
        this.timer.toggle();
        this.ui.updateStartPauseButton(this.timer.isRunning());
    }

    handleMusicToggle() {
        this.audioPlayer.toggle();
        this.ui.setMusicToggleState(this.audioPlayer.isPlaying());
    }

    handleTimerTick(currentTime) {
        this.ui.updateTimerDisplay(Timer.formatTime(currentTime));
    }

    handleTimerComplete() {
        this.ui.updateStartPauseButton(false);
    }
}

// Inicializa a aplicação quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new FokusApp();
});