import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AudioComponent} from "../audio.component";

@Component({
  selector: 'app-sound-compare-waves',
  templateUrl: './sound-compare-waves.component.html',
  styleUrls: ['./sound-compare-waves.component.scss']
})
export class SoundCompareWavesComponent extends AudioComponent implements OnInit, OnDestroy {
  private oscillatorNode: OscillatorNode;
  private lastRender = 0;
  private time: number = 0;

  @ViewChild('element')
  element: ElementRef;
  private animationFrame: number;


  constructor() {
    super();
  }

  ngOnInit() {
    this.oscillatorNode = this.audioContext.createOscillator();
    this.oscillatorNode.frequency.value = 110;
    this.oscillatorNode.connect(this.master);
    this.oscillatorNode.start(0);
    this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
  }

  ngOnDestroy(): void {
    this.stopSound();
    window.cancelAnimationFrame(this.animationFrame);
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
    this.updateDataArray();
    this.updateFrequencyArray();
  }

  toggleSound(value: boolean) {
    this.soundEnabled = value;
    if(value) {
      this.startSound();
    } else {
      this.stopSound();
    }
  }
}
