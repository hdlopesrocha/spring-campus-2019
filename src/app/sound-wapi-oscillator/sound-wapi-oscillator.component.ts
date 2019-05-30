import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-sound-wapi-oscillator',
  templateUrl: './sound-wapi-oscillator.component.html',
  styleUrls: ['./sound-wapi-oscillator.component.scss']
})
export class SoundWapiOscillatorComponent implements OnInit, OnDestroy {
  private audioContext: AudioContext;
  private oscillatorNode: OscillatorNode;

  private analyser: AnalyserNode;
  private freqArray: Uint8Array;
  private dataArray: Uint8Array;

  private freqNormalized = [];
  private dataNormalized = [];

  private lastRender = 0;
  private time: number = 0;
  private maxFreq: number = 22050;
  private soundEnabled = true;


  private code = '';
  @ViewChild('element')
  element: ElementRef;
  private animationFrame: number;


  constructor() { }

  ngOnInit() {
    this.audioContext = new AudioContext();
    this.oscillatorNode = this.audioContext.createOscillator();
    this.analyser = this.audioContext.createAnalyser();
    this.freqArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);

    this.oscillatorNode.frequency.value = 110;
    this.oscillatorNode.connect(this.analyser)
      .connect(this.audioContext.destination);

    this.start();
    this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
    this.updateHtml();
  }

  start(){
    this.oscillatorNode.start(0);
  }

  stop(){
    this.oscillatorNode.stop();
  }

  ngOnDestroy(): void {
    this.stop();
    window.cancelAnimationFrame(this.animationFrame);
  }


  updateSoundData(){
    if(this.soundEnabled) {
      this.analyser.getByteFrequencyData(this.freqArray);
      this.analyser.getByteTimeDomainData(this.dataArray);

      this.freqNormalized = [];
      this.dataNormalized = [];
      for(let i=0; i < this.freqArray.length; ++i) {
        const perc = i / this.freqArray.length;
        this.freqNormalized.push({ x: perc*this.maxFreq, y: this.freqArray[i]/255});
      }

      for(let i=0; i < this.dataArray.length; ++i) {
        const perc = i / this.dataArray.length;
        this.dataNormalized.push({ x: perc, y: (2.0 * this.dataArray[i]/255.0) -1});
      }

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
    this.updateSoundData();
  }

  updateHtml(){
    setTimeout(() => {
      this.code = this.element.nativeElement['innerHTML'];
      console.log(this.code);
    },100);
  }

}
