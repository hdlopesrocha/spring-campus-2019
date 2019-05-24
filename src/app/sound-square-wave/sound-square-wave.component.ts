import {AfterContentInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sound-square-wave',
  templateUrl: './sound-square-wave.component.html',
  styleUrls: ['./sound-square-wave.component.scss']
})
export class SoundSquareWaveComponent implements OnInit, AfterContentInit {
  private audioContext: AudioContext;
  private soundEnabled = false;
  private source: AudioBufferSourceNode;

  samples = [];
  iterations = 1;
  initialFormula = 'f(t) = \\frac{4A}{\\pi}\\sum_{k=1}^{\\infty} \\frac{\\sin((2k-1) \\times 2\\pi ft)}{2k-1}, f=1, A=1';
  private sums = '';
  private processing = false;

  constructor() {
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

    const A = 1/2;
    const f = 220;

    for (let channel = 0; channel < myArrayBuffer.numberOfChannels; channel++) {
      const nowBuffering = myArrayBuffer.getChannelData(channel);
      for (let i = 0; i < myArrayBuffer.length; i++) {

        let t = (i/this.audioContext.sampleRate);
        let x = 0;
        for (let k = 1; k <= this.iterations ; ++k) {
          x += Math.sin(2.0 * Math.PI * ( 2 * k - 1) * (f * t)) / ( 2 * k - 1 );
        }
        x = A * (4 / Math.PI) * x;
        nowBuffering[i] = x;
      }
    }
    return myArrayBuffer;
  }

  ngOnInit() {
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

    for (let t = 0; t < 3; t += 0.005 ) {
      let x = 0;
      for (let k = 1; k <= this.iterations ; ++k) {
        const n = 2 * k - 1;
        x += Math.sin(2.0 * Math.PI * (n) * (f * t)) / (n);
      }
      x = A * (4 / Math.PI) * x;
      this.samples.push({x:t, y:x});
    }
  }

  ngAfterContentInit(): void {
    this.setIterations();
  }


}
