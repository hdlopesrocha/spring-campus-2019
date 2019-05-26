import { Component, OnInit } from '@angular/core';
import {MusicService} from "../music.service";

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
  initialFormula = '\\frac{2A}{\\pi} \\sum_{k=1}^{\\infty} (-1)^{k} \\frac{\\sin(k \\times 2\\pi f t)}{k}, A=1, f=1 ';
  private sums = '';
  private processing = false;
  minX = 0;
  maxX = 2;
  soundFrequency = 220;

  constructor(public musicService: MusicService) {
    this.audioContext = new AudioContext();
  }

  toggleSound(value: boolean) {
    this.soundEnabled = value;
    if(value) {
      this.source = this.audioContext.createBufferSource();
      this.source.buffer = this.audioContext.createBuffer(2, this.audioContext.sampleRate, this.audioContext.sampleRate);
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
    const myArrayBuffer = this.source.buffer;

    const A = 1;
    const f = this.soundFrequency;

    for (let channel = 0; channel < myArrayBuffer.numberOfChannels; channel++) {
      const nowBuffering = myArrayBuffer.getChannelData(channel);
      for (let i = 0; i < myArrayBuffer.length; i++) {
        let t = (i/this.audioContext.sampleRate);
        nowBuffering[i] = this.musicService.getSawtooth(t, A, f, this.iterations);
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
      if ( !(k % 5)) {
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

    for (let t = this.minX; t <= this.maxX; t += 0.005 ) {
      this.samples.push({x:t, y: this.musicService.getSawtooth(t, A, f, this.iterations)});
    }
  }
}
