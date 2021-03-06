import {AfterContentInit, Component, OnDestroy, OnInit} from '@angular/core';
import {AudioComponent} from "../audio.component";

@Component({
  selector: 'app-sound-harmonics-generator',
  templateUrl: './sound-harmonics-generator.component.html',
  styleUrls: ['./sound-harmonics-generator.component.scss']
})
export class SoundHarmonicsGeneratorComponent extends AudioComponent implements OnInit, OnDestroy, AfterContentInit {
  private source: AudioBufferSourceNode;
  private currentFrequency = 220;

  samples = [];
  iterations = 1;
  initialFormula = 'g(k, a) = a \\times sin(2\\pi \\times kft) \\\\ f(t) = g(1, A) + \\sum_{k=2}^{\\infty} g(k, \\frac{A\\times random(0,1)}{e^{-(k-1)/4}}), f= '+ this.currentFrequency +', A=0.5';
  minX = 0;
  maxX = 4/this.currentFrequency;
  private lastRender = 0;
  private time: number = 0;
  private initialSeed: number = 1;
  seed : number = this.initialSeed;
  private animationFrame: number;

  constructor() {
    super();
    this.source = this.audioContext.createBufferSource();
    this.source.buffer = this.audioContext.createBuffer(2, this.audioContext.sampleRate, this.audioContext.sampleRate);
    this.source.loop = true;
    this.source.connect(this.master);
    this.source.start();
  }

  ngOnInit() {
    this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
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

  updateSoundAnalyserChart(){
    this.updateFrequencyArray();
  }

  updateSound() {
    const myArrayBuffer = this.source.buffer;
    const A = 1/2;
    const f = this.currentFrequency;
    for (let channel = 0; channel < myArrayBuffer.numberOfChannels; channel++) {
      const nowBuffering = myArrayBuffer.getChannelData(channel);
      for (let i = 0; i < myArrayBuffer.length; i++) {
        let t = (i/this.audioContext.sampleRate);
        nowBuffering[i] = this.signal(t, A, f, this.iterations);
      }
    }
  }

  signal(t: number, A: number, f:number, iterations: number) {
    let x = 0;
    this.seed = this.initialSeed;
    for(let i =1; i <= iterations; ++i) {
      let r = this.random() * 2.0- 1;
      r = r < 0 ? 0 : r*0.25;
      let a = i==1 ? A : A*r;
      a *= Math.exp(-(i-1)/4);
      x += a * Math.sin(2 * Math.PI * (f * (i)) * t);
    }
    return x;
  }

  randomize() {
    this.initialSeed = Math.random()*99999;
    this.setIterations();
  }

  random() {
    const x = Math.abs(Math.sin(this.seed++) * 10000);
    return x - Math.floor(x);
  }

  setIterations() {
    this.updateSound();
    this.updateChart();
  }



  updateChart() {
    const A = 1/2;
    const f = this.currentFrequency;
    this.samples = [];
    const inc = (this.maxX - this.minX)/1024;

    for (let t = this.minX; t <= this.maxX; t += inc ) {
      this.samples.push({x:t, y: this.signal(t,A,f, this.iterations)});
    }
  }

  ngAfterContentInit(): void {
    this.setIterations();
  }


  loop(timestamp) {
    let progress = timestamp - this.lastRender;
    this.update(progress);
    this.draw();
    this.lastRender = timestamp;
    this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
  }

  private update(progress: number) {
    this.time += progress;
  }

  private draw() {
    this.updateSoundAnalyserChart();
  }

  ngOnDestroy(): void {
    this.stopSound();
    window.cancelAnimationFrame(this.animationFrame);
  }

}
