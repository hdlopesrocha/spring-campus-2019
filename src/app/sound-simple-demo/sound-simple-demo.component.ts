import {Component, OnInit} from '@angular/core';
import {MusicService} from "../music.service";

@Component({
  selector: 'app-sound-simple-demo',
  templateUrl: './sound-simple-demo.component.html',
  styleUrls: ['./sound-simple-demo.component.scss']
})
export class SoundSimpleDemoComponent implements OnInit {
  private audioContext: AudioContext;
  private soundEnabled = false;
  private currentNoteName = '';

  private oscilator: OscillatorNode;
  oscillatorFrequency = 0;
  keys = [];

  buildNote(name: string) {
    this.notes.push({frequency: this.noteService.getNoteFrequency(name), name: name});
    let hash = name.indexOf('#') >= 0;
    let clazz =  hash? 'black' : 'white';
    clazz += ' ' + name.charAt(0).toLowerCase() + (hash? 's':'') ;
    this.keys.push(clazz);
  }

  notes = [ ];

  pianoClick(i) {
    this.oscillatorFrequency = this.notes[i].frequency;
    this.updateOscillatorFrequency();
    this.currentNoteName = this.notes[i].name;
  };

  constructor(public noteService: MusicService) {
    this.audioContext = new AudioContext();
    this.buildNote('F3');
    this.buildNote('F#3');
    this.buildNote('G3');
    this.buildNote('G#3');
    this.buildNote('A3');
    this.buildNote('A#3');
    this.buildNote('B3');
    this.buildNote('C4');
    this.buildNote('C#4');
    this.buildNote('D4');
    this.buildNote('D#4');
    this.buildNote('E4');
    this.buildNote('F4');
    this.buildNote('F#4');
    this.buildNote('G4');
    this.buildNote('G#4');
    this.buildNote('A4');
    this.buildNote('A#4');
    this.buildNote('B4');
  }

  ngOnInit() {
  }

  toggleSound(value: boolean) {
    this.soundEnabled = value;
    if (value) {
      this.oscilator = this.audioContext.createOscillator();
      this.oscilator.connect(this.audioContext.destination);
      this.oscilator.start(0);
      this.updateOscillatorFrequency();
    } else {
      this.oscilator.stop(0);
      this.oscilator = null;
    }
  }

  updateOscillatorFrequency() {
    this.currentNoteName = null;
    if (this.oscilator) {
      this.oscilator.frequency.value = this.oscillatorFrequency;
    }
  }


}
