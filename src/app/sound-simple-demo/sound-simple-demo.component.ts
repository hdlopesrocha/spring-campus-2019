import {Component, OnDestroy, OnInit} from '@angular/core';
import {MusicService} from "../music.service";
import {AudioComponent} from "../audio.component";

@Component({
  selector: 'app-sound-simple-demo',
  templateUrl: './sound-simple-demo.component.html',
  styleUrls: ['./sound-simple-demo.component.scss']
})
export class SoundSimpleDemoComponent extends AudioComponent implements OnInit, OnDestroy {
  private currentNoteName = '';

  oscillatorFrequency = 0;
  keys = [];
  private source: OscillatorNode;

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
    super();
  }

  ngOnInit() {
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

  toggleSound(value: boolean) {
    this.soundEnabled = value;
    if (value) {
      this.source = this.audioContext.createOscillator();
      this.source.connect(this.audioContext.destination);
      this.source.start(0);
      this.updateOscillatorFrequency();
    } else if(this.source) {
      this.source.stop(0);
      this.source = null;
    }
  }

  updateOscillatorFrequency() {
    this.currentNoteName = null;
    if (this.source) {
      this.source.frequency.value = this.oscillatorFrequency;
    }
  }

  ngOnDestroy(): void {
    this.toggleSound(false);
  }

  stopSound(): void {
    this.soundEnabled = false;
    if(this.source) {
      this.source.stop();
      this.source = null;
    }
  }
}
