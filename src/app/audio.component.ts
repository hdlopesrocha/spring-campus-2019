export abstract class AudioComponent {

  protected readonly audioContext: AudioContext;
  protected readonly gainNode: GainNode;
  private analyser: AnalyserNode;
  private readonly freqArray: Uint8Array;
  private readonly dataArray: Uint8Array;
  protected readonly maxFreq: number = 22050;
  protected freqNormalized = [];
  protected dataNormalized = [];
  protected soundEnabled = false;

  protected constructor() {
    this.audioContext = new AudioContext();
    this.gainNode = this.audioContext.createGain();
    this.analyser = this.audioContext.createAnalyser();
    this.freqArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.gainNode.connect(this.analyser).connect(this.audioContext.destination);
    this.stopSound();
  }

  updateDataArray() {
    this.analyser.getByteTimeDomainData(this.dataArray);
    this.dataNormalized = [];
    for(let i=0; i < this.dataArray.length; ++i) {
      const perc = i / this.dataArray.length;
      this.dataNormalized.push({ x: perc, y: (2.0 * this.dataArray[i]/255.0) -1});
    }
  }

  updateFrequencyArray() {
    this.analyser.getByteFrequencyData(this.freqArray);
    this.freqNormalized = [];
    for(let i=0; i < this.freqArray.length; ++i) {
      const perc = i / this.freqArray.length;
      this.freqNormalized.push({ x: perc*this.maxFreq, y: this.freqArray[i]/255});
    }
  }

  startSound(): void {
    this.soundEnabled = true;
    this.gainNode.gain.value = 1.0;
  }

  stopSound(): void {
    this.soundEnabled = false;
    this.gainNode.gain.value = 0.0;
  }

}
