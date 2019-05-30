import {Component, OnDestroy, OnInit} from '@angular/core';
import {AudioComponent} from "../audio.component";

@Component({
  selector: 'app-sound-pass-filter',
  templateUrl: './sound-pass-filter.component.html',
  styleUrls: ['./sound-pass-filter.component.scss']
})
export class SoundPassFilterComponent extends AudioComponent implements OnInit, OnDestroy {
  private lastRender = 0;
  private time: number = 0;
  public lowPass: number = 22050;
  public highPass: number = 0;
  private lowPassFilter: BiquadFilterNode;
  private highPassFilter: BiquadFilterNode;
  private source: AudioBufferSourceNode;
  private animationFrame: number;



  constructor() {
    super();
    this.lowPassFilter = this.audioContext.createBiquadFilter();
    this.highPassFilter = this.audioContext.createBiquadFilter();
    this.lowPassFilter.connect(this.highPassFilter).connect(this.gainNode);

    this.setLowPass();
    this.setHighPass();
  }

  ngOnInit() {
    this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
  }

  updateSoundData(){
    this.updateFrequencyArray();
  }

  setLowPass() {
    this.lowPassFilter.type = "lowpass";
    this.lowPassFilter.frequency.value = this.lowPass;
    this.highPassFilter.Q.value = 12;
    this.highPassFilter.gain.value = 0;
  }

  setHighPass() {
    this.highPassFilter.type = "highpass";
    this.highPassFilter.frequency.value = this.highPass;
    this.highPassFilter.Q.value = 12;
    this.highPassFilter.gain.value = 0;
  }


  decodeSound(data) {
    const that: SoundPassFilterComponent = this;

    this.audioContext.decodeAudioData(data, function(buffer) {
      that.source = that.audioContext.createBufferSource();
      that.source.onended = function(event) {
        that.soundEnabled = false;
        that.source.disconnect();
      };

      that.source.connect(that.lowPassFilter);
      that.soundEnabled = true;
      that.source.buffer = buffer;
      that.source.loop = true;
      that.source.start(0);
      that.startSound();
    });
  }

  processFile(data: HTMLInputElement) {
    const that: SoundPassFilterComponent = this;

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
    this.updateSoundData();
  }

  toggleSound(value: boolean, data: HTMLInputElement) {
    if(!this.soundEnabled) {
      data.click();
    } else if(this.source){
      this.stopSound();
      this.source.stop();
    }
  }

  ngOnDestroy(): void {
    this.stopSound();
    window.cancelAnimationFrame(this.animationFrame);
  }
}
