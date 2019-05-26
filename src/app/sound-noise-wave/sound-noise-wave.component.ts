import {Component, OnDestroy, OnInit} from '@angular/core';
import {AudioComponent} from "../audio.component";

@Component({
  selector: 'app-sound-noise-wave',
  templateUrl: './sound-noise-wave.component.html',
  styleUrls: ['./sound-noise-wave.component.scss']
})
export class SoundNoiseWaveComponent extends AudioComponent implements OnInit, OnDestroy {

  samples = [];
  minX = 0;
  maxX = 1;
  private source: AudioBufferSourceNode;
  constructor() {
    super();
  }
  ngOnInit() {
    this.setIterations();
  }


  toggleSound(value: boolean) {
    this.soundEnabled = value;
    if(value) {
      this.source = this.audioContext.createBufferSource();
      this.updateSound();
      this.source.loop = true;
      this.source.connect(this.audioContext.destination);
      this.source.start();
    } else {
      this.stopSound();
    }
  }

  updateSound() {
    this.source.buffer = this.getSound();
  }

  getSound() {
    const myArrayBuffer = this.audioContext.createBuffer(2, this.audioContext.sampleRate, this.audioContext.sampleRate);

    for (let channel = 0; channel < myArrayBuffer.numberOfChannels; channel++) {
      const nowBuffering = myArrayBuffer.getChannelData(channel);
      for (let i = 0; i < myArrayBuffer.length; i++) {
        nowBuffering[i] = Math.random()*2-1;
      }
    }
    return myArrayBuffer;
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
