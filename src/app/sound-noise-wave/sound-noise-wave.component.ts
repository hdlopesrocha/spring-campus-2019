import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sound-noise-wave',
  templateUrl: './sound-noise-wave.component.html',
  styleUrls: ['./sound-noise-wave.component.scss']
})
export class SoundNoiseWaveComponent implements OnInit {
private audioContext: AudioContext;
private soundEnabled = false;
private source: AudioBufferSourceNode;

  samples = [];
  minX = 0;
  maxX = 2;
  constructor() {
    this.audioContext = new AudioContext();
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
      this.source.stop();
      this.source = null;
    }
  }

  updateSound() {
    this.source.buffer = this.getSound();
  }

  getSound() {
    var myArrayBuffer = this.audioContext.createBuffer(2, this.audioContext.sampleRate, this.audioContext.sampleRate);

    for (let channel = 0; channel < myArrayBuffer.numberOfChannels; channel++) {
      const nowBuffering = myArrayBuffer.getChannelData(channel);
      for (let i = 0; i < myArrayBuffer.length; i++) {
        nowBuffering[i] = Math.random()*2-1;
      }
    }
    return myArrayBuffer;
  }

  ngOnInit() {
    this.setIterations();
  }

  setIterations() {
    if(this.soundEnabled) {
      this.updateSound();
    }
    this.updateChart();
  }

  updateChart() {
    this.samples = [];
    for (let t = this.minX; t < this.maxX; t += 0.005 ) {
      let y = Math.random()*2-1;
      this.samples.push({x:t, y:y});
    }
  }
}
