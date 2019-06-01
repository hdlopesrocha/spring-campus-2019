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

  updateDataArray() {
    if(this.analyser) {
      this.analyser.getByteTimeDomainData(this.dataArray);
    }
    const array = new Array(this.dataArray.length);
    for(let i=0; i < this.dataArray.length; ++i) {
      const perc = i / this.dataArray.length;
      array[i] = { x: perc, y: (2.0 * this.dataArray[i]/255.0) -1};
    }
    this.dataNormalized = array;
  }

  decibelToGain(db: number) {
    return Math.pow(10, db/20);
  }

  updateFrequencyArray() {
    if(this.analyser) {
      this.analyser.getFloatFrequencyData(this.freqArray);
    }
    const array = new Array(this.freqArray.length);
    for(let i=0; i < this.freqArray.length; ++i) {
      const perc = i / this.freqArray.length;
      let a = this.freqArray[i];
      if (a < this.analyser.minDecibels) {
        a = this.analyser.minDecibels;
      } else if (a > this.analyser.maxDecibels) {
        a = this.analyser.maxDecibels;
      }
      array[i] = { x: perc*this.maxFreq, y: a};
    }
    this.freqNormalized = array;
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
