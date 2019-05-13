import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sound-sawtooth-wave',
  templateUrl: './sound-sawtooth-wave.component.html',
  styleUrls: ['./sound-sawtooth-wave.component.scss']
})
export class SoundSawtoothWaveComponent implements OnInit {

  samples = [];
  iterations = 1;
  maxX = 2 * Math.PI;
  minX = 0;

  constructor() { }

  ngOnInit() {
    this.setIterations();
  }

  setIterations() {
    const A = 1;
    const f = 1;
    this.samples = [];

    for (let t = 0; t < 2 * Math.PI; t += 0.01 ) {
      let x = 0;
      for (let k = 1; k <= this.iterations ; ++k) {
        x += Math.pow(-1, k) * Math.sin(2.0 * Math.PI *  k * f * t) / k;
      }
      x = (2 * A / Math.PI) * x;
      this.samples.push([t, x]);
    }
  }
}
