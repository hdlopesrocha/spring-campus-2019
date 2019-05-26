import {Component, OnDestroy, OnInit} from '@angular/core';
import {AudioComponent} from "../audio.component";

@Component({
  selector: 'app-sound-player',
  templateUrl: './sound-player.component.html',
  styleUrls: ['./sound-player.component.scss']
})
export class SoundPlayerComponent extends AudioComponent implements OnInit, OnDestroy {

  private analyser: AnalyserNode;
  private freqArray: Uint8Array;
  private dataArray: Uint8Array;

  private freqNormalized = [];
  private dataNormalized = [];

  private lastRender = 0;
  private time: number = 0;
  private maxFreq: number = 22050;
  private source: AudioBufferSourceNode;

  constructor()  {
    super();
  }

  ngOnInit() {
    window.requestAnimationFrame(this.loop.bind(this));
  }

  buildAudioSource () {
    const that: SoundPlayerComponent = this;
    this.source = this.audioContext.createBufferSource();
    this.source.loop = true;
    this.analyser = this.audioContext.createAnalyser();
    this.source.connect(this.analyser);
    this.analyser.connect(this.audioContext.destination);
    this.freqArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.source.onended = function(event) {
      that.soundEnabled = false;
    };
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

  playSound(data) {
    const that: SoundPlayerComponent = this;

    this.audioContext.decodeAudioData(data, function(buffer) {
      that.buildAudioSource();
      that.source.buffer = buffer;
      that.source.start(0);
      that.soundEnabled = true;
    });
  }

  processFile(data: HTMLInputElement) {
    const that: SoundPlayerComponent = this;

    const file = data.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = function(e: ProgressEvent) {
        const arrayBuffer = e.target['result'];
        that.playSound(arrayBuffer);
      };
    }
  }



  loop(timestamp) {
    let progress = timestamp - this.lastRender;
    this.update(progress);
    this.draw();
    this.lastRender = timestamp;
    window.requestAnimationFrame(this.loop.bind(this));
  }

  private update(progress: number) {
    this.time += progress;
  }

  private draw() {
    this.updateSoundData();
  }

  toggleSound(value: boolean, data: HTMLInputElement) {
    if(!this.soundEnabled) {
      data.click();
    } else if(this.source) {
      this.stopSound();
    }
  }

  ngOnDestroy(): void {
    this.stopSound();
  }

  stopSound(): void {
    this.soundEnabled = false;
    if(this.source) {
      this.source.stop();
      this.source = null;
    }
  }
}
