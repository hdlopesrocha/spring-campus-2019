import {Component, OnDestroy, OnInit} from '@angular/core';
import {AudioComponent} from "../audio.component";

@Component({
  selector: 'app-sound-player',
  templateUrl: './sound-player.component.html',
  styleUrls: ['./sound-player.component.scss']
})
export class SoundPlayerComponent extends AudioComponent implements OnInit, OnDestroy {



  private lastRender = 0;
  private time: number = 0;
  private source: AudioBufferSourceNode;

  constructor()  {
    super();
  }

  ngOnInit() {
    window.requestAnimationFrame(this.loop.bind(this));
  }

  updateSoundData(){
    this.updateDataArray();
    this.updateFrequencyArray();
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
      that.source.connect(that.gainNode);
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
      this.source.stop(0);
    }
  }

  ngOnDestroy(): void {
    this.stopSound();
  }
}
