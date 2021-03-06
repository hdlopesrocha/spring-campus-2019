import {Component, OnDestroy, OnInit} from '@angular/core';
import {AudioComponent} from "../audio.component";

@Component({
  selector: 'app-sound-player',
  templateUrl: './sound-player.component.html',
  styleUrls: ['./sound-player.component.scss']
})
export class SoundPlayerComponent extends AudioComponent implements OnInit, OnDestroy {


  private isBass = false;
  private lastRender = 0;
  private time: number = 0;
  private source: AudioBufferSourceNode;
  private animationFrame: number;
  private margin: number = 0;

  constructor()  {
    super();
  }

  ngOnInit() {
    this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
  }

  decodeSound(data) {
    const that: SoundPlayerComponent = this;

    this.audioContext.decodeAudioData(data, function(buffer) {
      that.source = that.audioContext.createBufferSource();
      that.source.loop = true;
      that.source.onended = function(event) {
        that.soundEnabled = false;
        that.source.disconnect();
      };
      that.source.buffer = buffer;
      that.source.start(0);
      that.source.connect(that.master);
      that.startSound();
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
        that.decodeSound(arrayBuffer);
      };
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

    let bass = false;
    for(let i = 0; i < 4; ++i) {
      if(this.freqNormalized[i].y > -39) {
        bass = true;
        break;
      }
    }
    this.isBass = bass;
    this.margin = bass ? Math.round((Math.cos(this.time*Math.PI*2*10*0.001)+1)*4) : 0;
    this.updateDataArray();
  }

  toggleSound(value: boolean, data: HTMLInputElement) {
    if(!this.soundEnabled) {
      data.click();
    } else if(this.source) {
      this.source.stop(0);
      this.stopSound();
    }
  }

  ngOnDestroy(): void {
    this.stopSound();
    window.cancelAnimationFrame(this.animationFrame);
  }
}
