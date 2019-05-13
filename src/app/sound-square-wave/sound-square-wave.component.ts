import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sound-square-wave',
  templateUrl: './sound-square-wave.component.html',
  styleUrls: ['./sound-square-wave.component.scss']
})
export class SoundSquareWaveComponent implements OnInit {

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
        x += Math.sin(2.0 * Math.PI * ( 2 * k - 1) * (f * t)) / ( 2 * k - 1 );
      }
      x = A * (4 / Math.PI) * x;
      this.samples.push([t, x]);
    }
  }
}
