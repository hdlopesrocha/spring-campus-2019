import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sound-pass-filter',
  templateUrl: './sound-pass-filter.component.html',
  styleUrls: ['./sound-pass-filter.component.scss']
})
export class SoundPassFilterComponent implements OnInit {

  context :AudioContext;
  private source: AudioBufferSourceNode;
  private analyser: AnalyserNode;
  private freqArray: Uint8Array;

  private freqNormalized = [];

  private isPlaying = false;
  private lastRender = 0;
  private time: number = 0;
  private maxFreq: number = 22050;

  public lowPass: number = 22050;
  public highPass: number = 0;
  private lowPassFilter: BiquadFilterNode;
  private highPassFilter: BiquadFilterNode;



  constructor() {
    this.context = new AudioContext();
  }

  ngOnInit() {
    window.requestAnimationFrame(this.loop.bind(this));
  }



  updateSoundData(){
    if(this.isPlaying) {
      this.analyser.getByteFrequencyData(this.freqArray);

      this.freqNormalized = [];
      for(let i=0; i < this.freqArray.length; ++i) {
        const perc = i / this.freqArray.length;
        this.freqNormalized.push({ x: perc*this.maxFreq, y: this.freqArray[i]/255});
      }
    }
  }

  setLowPass() {
    if(this.isPlaying) {
      this.lowPassFilter.type = "lowpass";
      this.lowPassFilter.frequency.value = this.lowPass;
    }
  }

  setHighPass() {
    if(this.isPlaying) {
      this.highPassFilter.type = "highpass";
      this.highPassFilter.frequency.value = this.highPass;
    }
  }


  playSound(data) {
    const that: SoundPassFilterComponent = this;
    this.source = this.context.createBufferSource();
    this.analyser = this.context.createAnalyser();

    this.lowPassFilter = this.context.createBiquadFilter();
    this.highPassFilter = this.context.createBiquadFilter();
    const gainNode = this.context.createGain();

    this.source.connect(this.lowPassFilter);
    this.lowPassFilter.connect(this.highPassFilter);
    this.highPassFilter.connect(gainNode);
    gainNode.connect(this.analyser);
    this.analyser.connect(this.context.destination);

    this.freqArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.source.onended = function(event) {
      that.isPlaying = false;
    };

    this.context.decodeAudioData(data, function(buffer) {
      that.isPlaying = true;
      that.setLowPass();
      that.setHighPass();
      that.source.buffer = buffer;
      that.source.loop = true;
      that.source.start(0);
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
    if(!this.isPlaying) {
      data.click();
    } else {
      this.isPlaying = false;
      this.source.stop();
      this.source = null;
    }
  }
}
