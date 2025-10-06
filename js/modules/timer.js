export class Timer {
    constructor(initialTime, onTick, onComplete) {
        this.currentTime = initialTime;
        this.initialTime = initialTime;
        this.intervalId = null;
        this.onTick = onTick;
        this.onComplete = onComplete;
        this.startAudio = new Audio('/sons/play.wav');
        this.pauseAudio = new Audio('/sons/pause.mp3');
        this.endTimerAudio = new Audio('/sons/beep.mp3');
    }

    start() {
        if (this.intervalId) return;

        this.intervalId = setInterval(() => {
            this.countdown();
        }, 1000);
        
        this.startAudio.play();
    }

    pause() {
        this.clear();
        this.pauseAudio.play();
    }

    reset(newTime) {
        this.clear();
        this.currentTime = newTime;
        this.initialTime = newTime;
        this.onTick(this.currentTime);
    }

    toggle() {
        if (this.intervalId) {
            this.pause();
        } else {
            this.start();
        }
    }

    countdown() {
        if (this.currentTime <= 0) {
            this.clear();
            this.onComplete();
            this.endTimerAudio.play();
            return;
        }

        this.currentTime -= 1000;
        this.onTick(this.currentTime);
    }

    clear() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    isRunning() {
        return this.intervalId !== null;
    }

    static formatTime(milliseconds) {
        const minutes = Math.floor(milliseconds / 60000);
        const seconds = Math.floor((milliseconds % 60000) / 1000);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
}