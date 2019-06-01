import {Component, OnDestroy, OnInit} from '@angular/core';
import {AudioComponent} from "../audio.component";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-sound-harmonics',
  templateUrl: './sound-harmonics.component.html',
  styleUrls: ['./sound-harmonics.component.scss']
})
export class SoundHarmonicsComponent extends AudioComponent implements OnInit, OnDestroy {

  private lastRender = 0;
  private time: number = 0;
  private animationFrame: number;
  private piano: MediaElementAudioSourceNode;
  private xylophone: MediaElementAudioSourceNode;
  private guitar: MediaElementAudioSourceNode;
  private electric: MediaElementAudioSourceNode;
  private pianoArray = [];
  private xylophoneArray = [];
  private guitarArray = [];
  private electricArray = [];
  private selectedChart = 0;

  private options = {
    responseType: 'arraybuffer',
    headers: {}
  };


  constructor(private httpClient: HttpClient) {
    super();

    this.loadAudio("assets/guitar.mp3", (source, buffer) => {
      this.guitarArray = this.bufferToArray(buffer);
      this.guitar = source;
      source.connect(this.master);
    });
    this.loadAudio("assets/piano.mp3", (source, buffer) => {
      this.pianoArray = this.bufferToArray(buffer);
      this.piano = source;
      source.connect(this.master);
    });
    this.loadAudio("assets/xylophone.mp3", (source, buffer) => {
      this.xylophoneArray = this.bufferToArray(buffer);
      this.xylophone = source;
      source.connect(this.master);
    });
    this.loadAudio("assets/electric.mp3", (source, buffer) => {
      this.electricArray = this.bufferToArray(buffer);
      this.electric = source;
      source.connect(this.master);
    });

  }

  play(node: MediaElementAudioSourceNode){
    this.startSound();
    node.mediaElement.currentTime = 0;
    node.mediaElement.play();
  }

  loadAudio(src: string, callback) {
    const that: SoundHarmonicsComponent = this;
    this.httpClient.get<ArrayBuffer>(src, this.options as {}).subscribe((data: ArrayBuffer) => {
      this.audioContext.decodeAudioData( data, function(buffer) {
        const audio = new Audio(src);
        const source = that.audioContext.createMediaElementSource(audio);
        callback(source, buffer);
      });
    });
  }

  bufferToArray(buffer: AudioBuffer) {
    const array = new Array(buffer.length);
    const data = buffer.getChannelData(0);
    for(let i=0; i < data.length; ++i) {
      array[i]= {x: i/buffer.sampleRate, y:data[i]};
    }
    return array;
  }

  ngOnInit() {
    this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
  }

  toggleSound(value: boolean) {
    this.soundEnabled = value;
    if(value) {
      this.startSound();
    } else if(this.master) {
      this.stopSound();
    }
  }

  updateSoundAnalyserChart(){
    this.updateFrequencyArray();
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
    this.updateSoundAnalyserChart();
  }

  ngOnDestroy(): void {
    this.stopSound();
    window.cancelAnimationFrame(this.animationFrame);
  }

  toggleZoom(number: number) {
    this.selectedChart = this.selectedChart ? 0 : number;
  }
}
