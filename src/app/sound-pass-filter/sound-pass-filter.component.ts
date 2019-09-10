import {Component, OnDestroy, OnInit} from '@angular/core';
import {AudioComponent} from "../audio.component";

@Component({
  selector: 'app-sound-pass-filter',
  templateUrl: './sound-pass-filter.component.html',
  styleUrls: ['./sound-pass-filter.component.scss']
})
export class SoundPassFilterComponent extends AudioComponent implements OnInit, OnDestroy {
  private lastRender = 0;
  private time: number = 0;
  public lowPass: number = 22050;
  public highPass: number = 0;
  private lowPassFilter: BiquadFilterNode;
  private highPassFilter: BiquadFilterNode;
  private source: AudioBufferSourceNode;
  private animationFrame: number;
  private PI: number = Math.PI;

  protected readonly frequencyResponseArray: Float32Array;
  protected readonly lowPassAmplitudeResponseArray: Float32Array;
  protected readonly highPassAmplitudeResponseArray: Float32Array;
  protected readonly lowPassPhaseResponseArray: Float32Array;
  protected readonly highPassPhaseResponseArray: Float32Array;


  protected lpARA = [];
  protected hpARA = [];
  protected lpPRA = [];
  protected hpPRA = [];

  updateFrequencyResponseArray() {
    if(this.analyser) {
      this.analyser.getFloatFrequencyData(this.freqArray);
    }
    const l = this.frequencyResponseArray.length;

    this.lowPassFilter.getFrequencyResponse(
      this.frequencyResponseArray,
      this.lowPassAmplitudeResponseArray,
      this.lowPassPhaseResponseArray
    );

    this.highPassFilter.getFrequencyResponse(
      this.frequencyResponseArray,
      this.highPassAmplitudeResponseArray,
      this.highPassPhaseResponseArray
    );


    this.lpARA = this.createArray(l,
      (i) => this.frequencyResponseArray[i],
      (i) => this.gainToDecibel(this.lowPassAmplitudeResponseArray[i])
    );
    this.hpARA = this.createArray(l,
      (i) => this.frequencyResponseArray[i],
      (i) => this.gainToDecibel(this.highPassAmplitudeResponseArray[i])
    );
    this.lpPRA = this.createArray(l, (i) => this.frequencyResponseArray[i], (i) => this.lowPassPhaseResponseArray[i]);
    this.hpPRA = this.createArray(l, (i) => this.frequencyResponseArray[i], (i) => this.highPassPhaseResponseArray[i]);

  }


  constructor() {
    super();
    this.lowPassFilter = this.audioContext.createBiquadFilter();
    this.highPassFilter = this.audioContext.createBiquadFilter();
    this.lowPassFilter.connect(this.highPassFilter).connect(this.master);

    this.frequencyResponseArray = new Float32Array(this.analyser.frequencyBinCount);
    for(let i = 0; i < this.frequencyResponseArray.length; ++i) {
      this.frequencyResponseArray[i] = (i/this.frequencyResponseArray.length)*this.maxFreq;
    }


    this.lowPassAmplitudeResponseArray = new Float32Array(this.analyser.frequencyBinCount);
    this.highPassAmplitudeResponseArray = new Float32Array(this.analyser.frequencyBinCount);
    this.lowPassPhaseResponseArray = new Float32Array(this.analyser.frequencyBinCount);
    this.highPassPhaseResponseArray = new Float32Array(this.analyser.frequencyBinCount);

    this.setLowPass();
    this.setHighPass();
    this.updateFrequencyResponseArray();
  }

  ngOnInit() {
    this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
  }

  setLowPass() {
    this.lowPassFilter.type = "lowpass";
    this.lowPassFilter.frequency.value = this.lowPass;
    //this.highPassFilter.Q.value = 20;
    //this.highPassFilter.gain.value = 0;
    this.updateFrequencyResponseArray();
  }

  setHighPass() {
    this.highPassFilter.type = "highpass";
    this.highPassFilter.frequency.value = this.highPass;
    //this.highPassFilter.Q.value = 20;
    //this.highPassFilter.gain.value = 0;
    this.updateFrequencyResponseArray();
  }


  decodeSound(data) {
    const that: SoundPassFilterComponent = this;

    this.audioContext.decodeAudioData(data, function(buffer) {
      that.source = that.audioContext.createBufferSource();
      that.source.onended = function(event) {
        that.soundEnabled = false;
        that.source.disconnect();
      };

      that.source.connect(that.lowPassFilter);
      that.soundEnabled = true;
      that.source.buffer = buffer;
      that.source.loop = true;
      that.source.start(0);
      that.startSound();
    });
  }

  processFile(data: HTMLInputElement) {
    const that: SoundPassFilterComponent = this;

    const file = data.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = function(e: ProgressEvent) {
        const arrayBuffer = e.target['result'];
        that.decodeSound(arrayBuffer);
      };
    }
  }



  loop(timestamp) {
    let progress = timestamp - this.lastRender;
    this.update(progress);
    this.draw();
    this.lastRender = timestamp;
    this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
  }

  private update(progress: number) {
    this.time += progress;
  }

  private draw() {
    this.updateFrequencyArray();
  }

  toggleSound(value: boolean, data: HTMLInputElement) {
    if(!this.soundEnabled) {
      data.click();
    } else if(this.source){
      this.stopSound();
      this.source.stop();
    }
  }

  ngOnDestroy(): void {
    this.stopSound();
    window.cancelAnimationFrame(this.animationFrame);
  }
}
