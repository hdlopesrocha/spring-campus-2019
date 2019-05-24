import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sound-player',
  templateUrl: './sound-player.component.html',
  styleUrls: ['./sound-player.component.scss']
})
export class SoundPlayerComponent implements OnInit {

  context :AudioContext;
  private source: AudioBufferSourceNode;
  private analyser: AnalyserNode;
  private freqArray: Uint8Array;
  private dataArray: Uint8Array;

  private  freqNormalized = [];
  private  dataNormalized = [];

  private isPlaying = false;
  private lastRender = 0;
  private time: number = 0;
  private maxFreq: number = 22050;

  constructor() { }

  ngOnInit() {
    this.initWebAudio();
    window.requestAnimationFrame(this.loop.bind(this));
  }


  initWebAudio() {
    try {
      const that: SoundPlayerComponent = this;

      // Fix up for prefixing
      this.context = new AudioContext();
      this.source = this.context.createBufferSource();
      this.analyser = this.context.createAnalyser();
      this.source.connect(this.analyser);
      this.analyser.connect(this.context.destination);
      this.freqArray = new Uint8Array(this.analyser.frequencyBinCount);
      this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
      this.source.onended = function(event) {
        that.isPlaying = false;
      }
    }
    catch(e) {
      alert('Web Audio API is not supported in this browser');
    }
  }

  updateSoundData(){
    if(this.isPlaying) {
      this.analyser.getByteFrequencyData(this.freqArray);
      this.analyser.getByteTimeDomainData(this.dataArray);

      this.freqNormalized = [];
      this.dataNormalized = [];
      for(let i=0; i < 1024; ++i) {
        const perc = i / 1024.0;
        this.freqNormalized.push({ x: perc*this.maxFreq, y: this.freqArray[i]/255});
        this.dataNormalized.push({ x: perc, y: (2.0 * this.dataArray[i]/255.0) -1});

      }
    }
  }

  playSound(data) {
    const that: SoundPlayerComponent = this;

    this.context.decodeAudioData(data, function(buffer) {
      that.source.buffer = buffer;
      that.source.loop = true;
      that.source.start(0);
      that.isPlaying = true;
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

}
