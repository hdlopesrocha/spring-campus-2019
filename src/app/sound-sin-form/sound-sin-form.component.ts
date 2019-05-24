import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sound-sin-form',
  templateUrl: './sound-sin-form.component.html',
  styleUrls: ['./sound-sin-form.component.scss']
})
export class SoundSinFormComponent implements OnInit {
  samples = [];
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

    for (let t = 0; t <= 2; t += 0.005 ) {
      const x = this.amplitude * Math.sin( 2 * Math.PI * this.frequency*t + this.phase);
      this.samples.push({x:t, y:x});
    }
  }

}
