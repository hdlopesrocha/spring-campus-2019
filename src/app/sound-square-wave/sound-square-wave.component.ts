import {AfterContentInit, Component, OnDestroy, OnInit} from '@angular/core';
import {MusicService} from "../music.service";
import {AudioComponent} from "../audio.component";

@Component({
  selector: 'app-sound-square-wave',
  templateUrl: './sound-square-wave.component.html',
  styleUrls: ['./sound-square-wave.component.scss']
})
export class SoundSquareWaveComponent extends AudioComponent implements OnInit, AfterContentInit, OnDestroy {
  private source: AudioBufferSourceNode;

  samples = [];
  iterations = 1;
  initialFormula = 'f(t) = \\frac{4A}{\\pi}\\sum_{k=1}^{\\infty} \\frac{\\sin((2k-1) \\times 2\\pi ft)}{2k-1}, f=1, A=1';
  minX = 0;
  maxX = 2;
  soundFrequency = 220;
  private sums = '';
  private processing = false;

  constructor(public musicService: MusicService) {
    super();
    this.source = this.audioContext.createBufferSource();
    this.source.buffer = this.audioContext.createBuffer(2, this.audioContext.sampleRate, this.audioContext.sampleRate);
    this.source.loop = true;
    this.source.connect(this.gainNode);
    this.source.start();
  }

  ngOnInit() {

  }

  toggleSound(value: boolean) {
    this.soundEnabled = value;
    if(value) {
      this.updateSound();
      this.startSound();
    } else if(this.source) {
      this.stopSound();
    }
  }

  updateSound() {
    const myArrayBuffer = this.source.buffer;
    const A = 1/2;
    const f = this.soundFrequency;
    for (let channel = 0; channel < myArrayBuffer.numberOfChannels; channel++) {
      const nowBuffering = myArrayBuffer.getChannelData(channel);
      for (let i = 0; i < myArrayBuffer.length; i++) {
        let t = (i/this.audioContext.sampleRate);
        nowBuffering[i] = this.musicService.getSquare(t, A, f, this.iterations);
      }
    }
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
      const n = 2 * k - 1;
      if (k !== 1) {
        sums += '+';
      }
      sums += '\\frac{4\\sin(' + n + '\\times 2\\pi t)}{' + n + ' \\pi}';
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
      this.samples.push({x:t, y: this.musicService.getSquare(t, A, f, this.iterations)});
    }
  }

  ngAfterContentInit(): void {
    this.setIterations();
  }

  ngOnDestroy(): void {
    this.stopSound();
  }
}
