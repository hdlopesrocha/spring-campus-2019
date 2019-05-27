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

  constructor(public noteService: MusicService) {
    super();
    this.source = this.audioContext.createOscillator();
    this.source.connect(this.gainNode);
    this.source.start(0);
  }


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
      this.oscillatorFrequency = 0;
      this.updateOscillatorFrequency();
    } else if(this.source) {
      this.stopSound();
    }
  }

  updateOscillatorFrequency() {
    this.currentNoteName = null;
    this.source.frequency.value = this.oscillatorFrequency;
    if (this.soundEnabled) {
      const time = this.audioContext.currentTime;
      this.gainNode.gain.setValueAtTime(1.0, time);
      this.gainNode.gain.setTargetAtTime(0.0, time, 0.5);
    }
  }

  ngOnDestroy(): void {
    this.stopSound();
  }
}
