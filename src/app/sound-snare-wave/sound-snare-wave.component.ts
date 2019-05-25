import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sound-snare-wave',
  templateUrl: './sound-snare-wave.component.html',
  styleUrls: ['./sound-snare-wave.component.scss']
})
export class SoundSnareWaveComponent implements OnInit {
private audioContext: AudioContext;
private soundEnabled = false;
private source: AudioBufferSourceNode;

  multiplier = [];
  result = [];
  base = [];

  multiplierFormula = 'f(t) = e^{-10t}';
  baseFormula = 'f(t) = random(t)';
  resultFormula = 'f(t) = random(t) \\times e^{-10t}';

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
    return Math.exp(-10*t);
  }


  getValue(t: number) {
    return (Math.random()*2-1);
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
