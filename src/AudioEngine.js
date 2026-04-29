class AudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.nextNoteTime = 0;
    this.currentNote = 0;
    this.meltHz = [392,392,440,392,523,466,392,349,392,330,294];
    this.intervalId = null;
  }

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  play() {
    this.init();
    if (this.ctx.state === 'suspended') this.ctx.resume();
    if (this.isPlaying) return;
    
    this.isPlaying = true;
    this.nextNoteTime = this.ctx.currentTime + 0.1;
    this.scheduler();
  }

  pause() {
    this.isPlaying = false;
    if (this.intervalId) clearTimeout(this.intervalId);
  }

  scheduler() {
    if (!this.isPlaying) return;
    while (this.nextNoteTime < this.ctx.currentTime + 0.1) {
      this.playNote(this.nextNoteTime);
      this.nextNoteTime += 0.17; // 150ms length + 20ms silence
      this.currentNote = (this.currentNote + 1) % this.meltHz.length;
    }
    this.intervalId = setTimeout(() => this.scheduler(), 25);
  }

  playNote(time) {
    const hz = this.meltHz[this.currentNote];
    
    // Primary melody square
    const osc = this.ctx.createOscillator();
    osc.type = 'square';
    osc.frequency.setValueAtTime(hz, time);
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.04, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.15);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(time);
    osc.stop(time + 0.15);
    
    // Bass octave square
    const bassOsc = this.ctx.createOscillator();
    bassOsc.type = 'square';
    bassOsc.frequency.setValueAtTime(hz / 2, time);
    const bassGain = this.ctx.createGain();
    bassGain.gain.setValueAtTime(0.06, time);
    bassGain.gain.exponentialRampToValueAtTime(0.001, time + 0.15);
    
    bassOsc.connect(bassGain);
    bassGain.connect(this.ctx.destination);
    bassOsc.start(time);
    bassOsc.stop(time + 0.15);

    // Percussion every 4th step (approx 600ms)
    if (this.currentNote % 4 === 0) {
       this.playKick(time);
    }
  }

  playKick(time) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.frequency.setValueAtTime(150, time);
    osc.frequency.exponentialRampToValueAtTime(0.01, time + 0.1);
    gain.gain.setValueAtTime(0.3, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.1);
    osc.start(time);
    osc.stop(time + 0.1);
  }

  playJingle() {
    this.init();
    if (this.ctx.state === 'suspended') this.ctx.resume();
    const t = this.ctx.currentTime;
    [523, 659, 783].forEach((hz, i) => { // C E G major arpeggio
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(hz, t + i * 0.15);
      gain.gain.setValueAtTime(0.1, t + i * 0.15);
      gain.gain.exponentialRampToValueAtTime(0.01, t + i * 0.15 + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t + i * 0.15);
      osc.stop(t + i * 0.15 + 0.2);
    });
  }
}

const engine = new AudioEngine();
export default engine;
