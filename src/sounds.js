// sounds.js - Audio Management for Safety Learning App
// This file provides enhanced audio functionality

class AudioManager {
    constructor() {
        this.audioContext = null;
        this.sounds = {};
        this.isEnabled = true;
        this.volume = 0.7;

        this.initializeAudio();
        this.createSounds();
    }

    initializeAudio() {
        try {
            // Initialize Web Audio API (better for programmatic sounds)
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (error) {
            console.log('Web Audio API not supported, falling back to HTML5 Audio');
            this.audioContext = null;
        }
    }

    // Create simple tones for feedback (works)
    createSounds() {
        // Example: create a beep sound
        this.sounds.beep = () => {
            if (!this.isEnabled || !this.audioContext) return;
            const oscillator = this.audioContext.createOscillator();
            const gain = this.audioContext.createGain();
            oscillator.type = 'sine';
            oscillator.frequency.value = 440;
            gain.gain.value = this.volume;
            oscillator.connect(gain);
            gain.connect(this.audioContext.destination);
            oscillator.start();
            oscillator.stop(this.audioContext.currentTime + 0.2);

            oscillator.onended = () => {
                oscillator.disconnect();
                gain.disconnect();
            };
        };
    }

    play(soundName) {
        if (this.sounds[soundName]) {
            this.sounds[soundName]();
        }
    }
}

export default AudioManager;