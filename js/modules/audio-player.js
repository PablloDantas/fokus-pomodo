export class AudioPlayer {
    constructor(audioPath, loop = true) {
        this.audio = new Audio(audioPath);
        this.audio.loop = loop;
    }

    play() {
        this.audio.play();
    }

    pause() {
        this.audio.pause();
    }

    toggle() {
        if (this.audio.paused) {
            this.play();
        } else {
            this.pause();
        }
    }

    isPlaying() {
        return !this.audio.paused;
    }

    setVolume(volume) {
        this.audio.volume = Math.max(0, Math.min(1, volume));
    }
}