import {Component, OnDestroy, OnInit} from '@angular/core';
import {AudioComponent} from "../audio.component";

@Component({
  selector: 'app-sound-noise-wave',
  templateUrl: './sound-noise-wave.component.html',
  styleUrls: ['./sound-noise-wave.component.scss']
})
export class SoundNoiseWaveComponent extends AudioComponent implements OnInit, OnDestroy {
  private lastRender = 0;
  private time: number = 0;
  samples = [];
  minX = 0;
  maxX = 1;
  private source: AudioBufferSourceNode;
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
    this.setIterations();
    this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
  }


  toggleSound(value: boolean) {
    this.soundEnabled = value;
    if(value) {
      this.updateSound();
      this.startSound();
    } else {
      this.stopSound();
    }
  }

  updateSound() {
    const myArrayBuffer = this.source.buffer;

    for (let channel = 0; channel < myArrayBuffer.numberOfChannels; channel++) {
      const nowBuffering = myArrayBuffer.getChannelData(channel);
      for (let i = 0; i < myArrayBuffer.length; i++) {
        nowBuffering[i] = Math.random()*2-1;
      }
    }
  }

  setIterations() {
    if(this.soundEnabled) {
      this.updateSound();
    }
    this.updateChart();
  }

  updateChart() {
    this.samples = [];
    for (let t = this.minX; t <= this.maxX; t += 0.001 ) {
      let y = Math.random()*2-1;
      this.samples.push({x:t, y:y});
    }
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
    this.updateFrequencyArray();
  }

  ngOnDestroy(): void {
    this.stopSound();
    window.cancelAnimationFrame(this.animationFrame);
  }

}
