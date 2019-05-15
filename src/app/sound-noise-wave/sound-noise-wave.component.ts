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
  maxX = 4;
  minX = 0;

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

    for (var channel = 0; channel < myArrayBuffer.numberOfChannels; channel++) {
      var nowBuffering = myArrayBuffer.getChannelData(channel);
      for (var i = 0; i < myArrayBuffer.length; i++) {
        let x = Math.random()*2-1;
        nowBuffering[i] = x;
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
    const A = 1;
    const f = 1;

    this.samples = [];

    for (let t = 0; t < 2 * Math.PI; t += 0.01 ) {
      let x = Math.random()*2-1;
      this.samples.push([t, x]);
    }
  }
}
