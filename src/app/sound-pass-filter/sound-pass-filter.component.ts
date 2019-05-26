import {Component, OnDestroy, OnInit} from '@angular/core';
import {AudioComponent} from "../audio.component";

@Component({
  selector: 'app-sound-pass-filter',
  templateUrl: './sound-pass-filter.component.html',
  styleUrls: ['./sound-pass-filter.component.scss']
})
export class SoundPassFilterComponent extends AudioComponent implements OnInit, OnDestroy {

  private analyser: AnalyserNode;
  private freqArray: Uint8Array;

  private freqNormalized = [];

  private lastRender = 0;
  private time: number = 0;
  private maxFreq: number = 22050;

  public lowPass: number = 22050;
  public highPass: number = 0;
  private lowPassFilter: BiquadFilterNode;
  private highPassFilter: BiquadFilterNode;
  private source: AudioBufferSourceNode;



  constructor() {
    super();
  }

  ngOnInit() {
    window.requestAnimationFrame(this.loop.bind(this));
  }



  updateSoundData(){
    if(this.soundEnabled) {
      this.analyser.getByteFrequencyData(this.freqArray);

      this.freqNormalized = [];
      for(let i=0; i < this.freqArray.length; ++i) {
        const perc = i / this.freqArray.length;
        this.freqNormalized.push({ x: perc*this.maxFreq, y: this.freqArray[i]/255});
      }
    }
  }

  setLowPass() {
    if(this.soundEnabled) {
      this.lowPassFilter.type = "lowpass";
      this.lowPassFilter.frequency.value = this.lowPass;
      this.highPassFilter.Q.value = 12;
      this.highPassFilter.gain.value = 0;
    }
  }

  setHighPass() {
    if(this.soundEnabled) {
      this.highPassFilter.type = "highpass";
      this.highPassFilter.frequency.value = this.highPass;
      this.highPassFilter.Q.value = 12;
      this.highPassFilter.gain.value = 0;
    }
  }


  playSound(data) {
    const that: SoundPassFilterComponent = this;
    this.source = this.audioContext.createBufferSource();
    this.analyser = this.audioContext.createAnalyser();

    this.lowPassFilter = this.audioContext.createBiquadFilter();
    this.highPassFilter = this.audioContext.createBiquadFilter();
    const gainNode = this.audioContext.createGain();

    this.source.connect(this.lowPassFilter);
    this.lowPassFilter.connect(this.highPassFilter);
    this.highPassFilter.connect(gainNode);
    gainNode.connect(this.analyser);
    this.analyser.connect(this.audioContext.destination);

    this.freqArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.source.onended = function(event) {
      that.soundEnabled = false;
    };

    this.audioContext.decodeAudioData(data, function(buffer) {
      that.soundEnabled = true;
      that.setLowPass();
      that.setHighPass();
      that.source.buffer = buffer;
      that.source.loop = true;
      that.source.start(0);
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
        that.playSound(arrayBuffer);
      };
    }
  }



  loop(timestamp) {
    let progress = timestamp - this.lastRender;
    this.update(progress);
    this.draw();
    this.lastRender = timestamp;
    window.requestAnimationFrame(this.loop.bind(this));
  }

  private update(progress: number) {
    this.time += progress;
  }

  private draw() {
    this.updateSoundData();
  }

  toggleSound(value: boolean, data: HTMLInputElement) {
    if(!this.soundEnabled) {
      data.click();
    } else {
      this.stopSound();
    }
  }

  ngOnDestroy(): void {
    this.stopSound();
  }

  stopSound(): void {
    this.soundEnabled = false;
    if(this.source) {
      this.source.stop();
      this.source = null;
    }
  }
}
