// Sistema de áudio para feedback sonoro
const AudioFeedback = {
    // Sons usando Web Audio API (não precisa de arquivos externos)
    context: null,
    
    init() {
        // Cria contexto de áudio apenas quando necessário
        if (!this.context) {
            this.context = new (window.AudioContext || window.webkitAudioContext)();
        }
    },
    
    // Som de clique suave
    playClick() {
        this.init();
        const oscillator = this.context.createOscillator();
        const gainNode = this.context.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.context.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, this.context.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.context.currentTime + 0.1);
        
        oscillator.start(this.context.currentTime);
        oscillator.stop(this.context.currentTime + 0.1);
    },
    
    // Som de sucesso
    playSuccess() {
        this.init();
        const oscillator = this.context.createOscillator();
        const gainNode = this.context.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.context.destination);
        
        oscillator.frequency.setValueAtTime(523.25, this.context.currentTime);
        oscillator.frequency.setValueAtTime(659.25, this.context.currentTime + 0.1);
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.2, this.context.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.context.currentTime + 0.2);
        
        oscillator.start(this.context.currentTime);
        oscillator.stop(this.context.currentTime + 0.2);
    }
};

// Exporta para uso global
window.AudioFeedback = AudioFeedback;
