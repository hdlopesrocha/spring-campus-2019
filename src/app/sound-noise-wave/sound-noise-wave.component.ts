import {Component, OnDestroy, OnInit} from '@angular/core';
import {AudioComponent} from "../audio.component";

@Component({
  selector: 'app-sound-noise-wave',
  templateUrl: './sound-noise-wave.component.html',
  styleUrls: ['./sound-noise-wave.component.scss']
})
export class SoundNoiseWaveComponent extends AudioComponent implements OnInit, OnDestroy {
  private analyser: AnalyserNode;
  private freqArray: Uint8Array;
  private freqNormalized = [];
  private maxFreq: number = 22050;
  private lastRender = 0;
  private time: number = 0;
  samples = [];
  minX = 0;
  maxX = 1;
  private source: AudioBufferSourceNode;
  constructor() {
    super();
  }
  ngOnInit() {
    this.setIterations();
    window.requestAnimationFrame(this.loop.bind(this));
  }


  buildAudioSource () {
    this.source = this.audioContext.createBufferSource();
    this.source.buffer = this.audioContext.createBuffer(2, this.audioContext.sampleRate, this.audioContext.sampleRate);
    this.source.loop = true;

    this.analyser = this.audioContext.createAnalyser();
    this.source.connect(this.analyser);
    this.analyser.connect(this.audioContext.destination);
    this.freqArray = new Uint8Array(this.analyser.frequencyBinCount);
  }


  toggleSound(value: boolean) {
    this.soundEnabled = value;
    if(value) {
      this.buildAudioSource();
      this.updateSound();
      this.source.start();
    } else {
      this.stopSound();
    }
  }

  updateSound() {
    const myArrayBuffer = this.source.buffer;

    for (let channel = 0; channel < myArrayBuffer.numberOfChannels; channel++) {
      const nowBuffering = myArrayBuffer.getChannelData(channel);
      for (let i = 0; i < myArrayBuffer.length; i++) {
        nowBuffering[i] = Math.random()*2-1;
      }
    }
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

  setIterations() {
    if(this.soundEnabled) {
      this.updateSound();
    }
    this.updateChart();
  }

  updateChart() {
    this.samples = [];
    for (let t = this.minX; t <= this.maxX; t += 0.001 ) {
      let y = Math.random()*2-1;
      this.samples.push({x:t, y:y});
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
