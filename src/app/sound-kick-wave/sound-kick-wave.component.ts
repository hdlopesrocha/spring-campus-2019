import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sound-kick-wave',
  templateUrl: './sound-kick-wave.component.html',
  styleUrls: ['./sound-kick-wave.component.scss']
})
export class SoundKickWaveComponent implements OnInit {
private audioContext: AudioContext;
private soundEnabled = false;
private source: AudioBufferSourceNode;

  multiplier = [];
  result = [];
  base = [];

  multiplierFormula = 'g(t) = e^{-5t}';
  baseFormula = 'f(t) = sin(60 \\times 2\\pi t)';
  resultFormula = 'h(t) = f(t) \\times g(t)';

  minX = 0;
  maxX = 1;
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


  getMultiplier(t: number) {
    return Math.exp(-5*t);
  }


  getValue(t: number) {
    return Math.sin(t*Math.PI*2*60);
  }

  getSound() {
    const myArrayBuffer = this.audioContext.createBuffer(2, this.audioContext.sampleRate, this.audioContext.sampleRate);

    for (let channel = 0; channel < myArrayBuffer.numberOfChannels; channel++) {
      const nowBuffering = myArrayBuffer.getChannelData(channel);
      for (let i = 0; i < myArrayBuffer.length; i++) {
        const perc = i / myArrayBuffer.length;
        nowBuffering[i] = this.getValue(perc)* this.getMultiplier(perc);
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
    this.base = [];
    this.multiplier = [];
    this.result = [];

    for (let t = this.minX; t < this.maxX; t += 0.001 ) {
      let y = this.getValue(t);
      let m = this.getMultiplier(t);


      this.multiplier.push({x:t, y:m});
      this.base.push({x:t, y:y});
      this.result.push({x:t, y:y*m});
    }
  }
}
