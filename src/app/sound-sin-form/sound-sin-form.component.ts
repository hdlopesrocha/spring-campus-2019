import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sound-sin-form',
  templateUrl: './sound-sin-form.component.html',
  styleUrls: ['./sound-sin-form.component.scss']
})
export class SoundSinFormComponent implements OnInit {
  samples = [];
  maxX = 2 * Math.PI;
  minX = 0;
  frequency = 1;
  amplitude = 1;
  phase = 0;
  initialFormula = 'f(t) = A\\sin(\\omega t +\\phi), \\omega = 2\\pi f';

  constructor() { }

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
