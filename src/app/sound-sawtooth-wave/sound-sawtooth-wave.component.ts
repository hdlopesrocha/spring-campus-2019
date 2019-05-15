import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sound-sawtooth-wave',
  templateUrl: './sound-sawtooth-wave.component.html',
  styleUrls: ['./sound-sawtooth-wave.component.scss']
})
export class SoundSawtoothWaveComponent implements OnInit {
  private audioContext: AudioContext;
  private soundEnabled = false;
  private source: AudioBufferSourceNode;

  samples = [];
  iterations = 1;
  maxX = 4;
  minX = 0;

  constructor() {
    this.audioContext = new AudioContext();
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    if(this.soundEnabled) {
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

    const A = 1;
    const f = 220;

    for (var channel = 0; channel < myArrayBuffer.numberOfChannels; channel++) {
      var nowBuffering = myArrayBuffer.getChannelData(channel);
      for (var i = 0; i < myArrayBuffer.length; i++) {

        let t = (i/this.audioContext.sampleRate);
        let x = 0;
        for (let k = 1; k <= this.iterations ; ++k) {
          x += Math.pow(-1, k) * Math.sin(2.0 * Math.PI *  k * f * t) / k;
        }
        x = (2 * A / Math.PI) * x;
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
      let x = 0;
      for (let k = 1; k <= this.iterations ; ++k) {
        x += Math.pow(-1, k) * Math.sin(2.0 * Math.PI *  k * f * t) / k;
      }
      x = (2 * A / Math.PI) * x;
      this.samples.push([t, x]);
    }
  }
}
