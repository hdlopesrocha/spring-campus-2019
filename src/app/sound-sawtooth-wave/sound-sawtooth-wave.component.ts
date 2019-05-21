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
  //Math.sin(2.0 * Math.PI *  k * f * t) / k;
  initialFormula = '\\frac{2A}{\\pi} \\sum_{k=1}^{\\infty} (-1)^{k} \\frac{\\sin(k \\times 2\\pi f t)}{k}, A=1, f=1 ';
  private sums = '';
  private processing = false;

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
    this.updateFormulas();
    this.updateChart();
  }

  updateFormulas() {
    let sums = '';
    this.processing = true;
    for (let k = 1; k <= this.iterations ; ++k) {
      const sig = Math.pow(-1, k);

      sums += sig > 0 ? '+' : '-';

      sums += '\\frac{2\\sin('+ k +'\\times 2\\pi t)}{' + k + '\\pi}';
      if ( !(k % 6)) {
        sums += '\\\\';
      }
    }

    if(this.iterations == 0) {
      sums += '0';
    }

    setTimeout(() => {
      this.sums = sums;
      this.processing = false;
    }, 10);
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
