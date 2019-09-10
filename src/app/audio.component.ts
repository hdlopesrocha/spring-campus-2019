export abstract class AudioComponent {

  protected readonly audioContext: AudioContext;
  protected readonly master: GainNode;
  protected analyser: AnalyserNode;
  protected readonly freqArray: Float32Array;
  protected readonly dataArray: Uint8Array;
  protected readonly maxFreq: number = 22050;
  protected freqNormalized = [];
  protected dataNormalized = [];
  protected soundEnabled = false;

  protected constructor() {
    this.audioContext = new AudioContext();
    this.master = this.audioContext.createGain();
    this.analyser = this.audioContext.createAnalyser();
    this.freqArray = new Float32Array(this.analyser.frequencyBinCount);
    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.initializeArray(this.freqArray);
    this.initializeArray(this.dataArray);
    this.master.connect(this.analyser).connect(this.audioContext.destination);
    this.updateDataArray();
    this.updateFrequencyArray();
    this.stopSound();
  }

  private initializeArray(array) {
    for(let i=0; i < array.length; ++i) {
      array[i] = 0;
    }
  }

  createArray(len, xFunc, yFunc) {
    const array = new Array(len);
    for(let i=0; i < len; ++i) {
      array[i] = { x: xFunc(i), y: yFunc(i)};
    }
    return array;
  }

  updateDataArray() {
    if(this.analyser) {
      this.analyser.getByteTimeDomainData(this.dataArray);
    }
    this.dataNormalized = this.createArray(
      this.dataArray.length,
      (i) => (i / this.dataArray.length),
      (i) => 2.0*this.dataArray[i]/255.0-1);
  }

  decibelToGain(db: number) {
    return Math.pow(10, db/20);
  }

  gainToDecibel(gain: number) {
    // see https://www.w3.org/TR/webaudio/#filters-characteristics
    //return 40*(Math.log10(gain));
    return gain;
  }

  clamp(x, min, max) {
    return x < min ? min : x > max ? max : x
  }

  updateFrequencyArray() {
    if(this.analyser) {
      this.analyser.getFloatFrequencyData(this.freqArray);
    }
    this.freqNormalized = this.createArray(
      this.freqArray.length,
      (i) => (i / this.freqArray.length)*this.maxFreq,
      (i) => this.clamp(this.freqArray[i], this.analyser.minDecibels, this.analyser.maxDecibels));
  }

  startSound(): void {
    this.soundEnabled = true;
    this.master.gain.value = 1.0;
  }

  stopSound(): void {
    this.soundEnabled = false;
    this.master.gain.value = 0.0;
  }

}
