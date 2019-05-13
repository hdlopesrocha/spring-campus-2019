import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sound-simple-demo',
  templateUrl: './sound-simple-demo.component.html',
  styleUrls: ['./sound-simple-demo.component.scss']
})
export class SoundSimpleDemoComponent implements OnInit {
  private audioContext: AudioContext;
  private oscilator: OscillatorNode;
  oscillatorFrequency = 0;

  constructor() {
    this.audioContext = new AudioContext();
    this.oscilator = this.audioContext.createOscillator();
    this.oscilator.start(0);
    this.oscilator.connect(this.audioContext.destination);
    this.setOscillatorFrequency(0); }

  ngOnInit() {
  }


  setOscillatorFrequency(value) {
    this.oscillatorFrequency = value;
    this.oscilator.frequency.value = this.oscillatorFrequency;
  }

}
