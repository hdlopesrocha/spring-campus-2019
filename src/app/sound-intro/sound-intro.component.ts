import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sound-intro',
  templateUrl: './sound-intro.component.html',
  styleUrls: ['./sound-intro.component.scss']
})
export class SoundIntroComponent implements OnInit {


  samples = [];


  maxX = 2 * Math.PI;
  minX = 0;
  frequency = 1;
  amplitude = 1;
  phase = 0;


  constructor() {

  }

  ngOnInit() {
    this.sinWave();
  }

  sinWave() {
    this.samples = [];

    for (let i = 0; i < 2 * Math.PI; i += 0.05 ) {
      this.samples.push([i, this.amplitude * Math.sin(i * this.frequency + this.phase)]);
    }
  }

  randomWave() {
    this.samples = [];

    for (let i = 0; i < this.maxX; ++i) {
      this.samples.push([i, Math.random() * 128]);
    }
  }

  startWave() {
    setInterval(() => {
      this.randomWave();
    }, 1000);
  }




}
