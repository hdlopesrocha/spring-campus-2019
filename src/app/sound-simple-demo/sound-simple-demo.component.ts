import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sound-simple-demo',
  templateUrl: './sound-simple-demo.component.html',
  styleUrls: ['./sound-simple-demo.component.scss']
})
export class SoundSimpleDemoComponent implements OnInit {
  private audioContext: AudioContext;
  private soundEnabled = false;

  private oscilator: OscillatorNode;
  oscillatorFrequency = 0;

  constructor() {
    this.audioContext = new AudioContext();
  }

  ngOnInit() {
  }

  toggleSound(value: boolean) {
    this.soundEnabled = value;
    if(value) {
      this.oscilator = this.audioContext.createOscillator();
      this.oscilator.connect(this.audioContext.destination);
      this.oscilator.start(0);
      this.updateOscillatorFrequency();
    } else {
      this.oscilator.stop(0);
      this.oscilator = null;
    }
  }

  setOscillatorFrequency(value) {
    this.oscillatorFrequency = value;
    this.updateOscillatorFrequency();
  }

  updateOscillatorFrequency() {
    if(this.oscilator) {
      this.oscilator.frequency.value = this.oscillatorFrequency;
    }
  }

}
