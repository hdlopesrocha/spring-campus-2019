import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AudioComponent} from "../audio.component";

@Component({
  selector: 'app-sound-wapi-oscillator',
  templateUrl: './sound-wapi-oscillator.component.html',
  styleUrls: ['./sound-wapi-oscillator.component.scss']
})
export class SoundWapiOscillatorComponent extends AudioComponent implements OnInit, OnDestroy {
  private oscillatorNode: OscillatorNode;

  private lastRender = 0;
  private time: number = 0;

  private code = '';
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
    this.updateHtml();
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
    this.updateFrequencyArray();
    this.updateDataArray();
  }

  updateHtml(){
    setTimeout(() => {
      this.code = this.element.nativeElement['innerHTML'];
      console.log(this.code);
    },100);
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
