import {AfterContentInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sound-square-fourier',
  templateUrl: './sound-square-fourier.component.html',
  styleUrls: ['./sound-square-fourier.component.scss']
})
export class SoundSquareFourierComponent implements OnInit, AfterContentInit {
  samples = [];
  samplesFFT = [];

  iterations = 1;
  maxX = 400;
  minX = 0;
  initialFormula = 'f(t) = \\frac{4A}{\\pi}\\sum_{k=1}^{\\infty} \\frac{\\sin((2k-1) \\times 2\\pi ft)}{2k-1}, f=1, A=1';
  private sums = '';
  private processing = false;

  constructor() {
  }


  ngOnInit() {
  }

  setIterations() {
    this.updateFormulas();
    this.updateChart();
    this.updateChartFFT();
  }


  updateChartFFT() {
    this.samplesFFT = [];

    this.samplesFFT.push([0, 0]);

    for (let k = 1; k <= this.iterations ; ++k) {
      const a = 1/(2 * k - 1);

      const n = 2 * k - 1;
      const f = n * 2.0 * Math.PI;

      this.samplesFFT.push([f-.1, 0]);
      this.samplesFFT.push([f, a]);
      this.samplesFFT.push([f+.1, 0]);

    }

  }

  updateFormulas() {
    let sums = '';
    this.processing = true;
    for (let k = 1; k <= this.iterations ; ++k) {
      const n = 2 * k - 1;
      if (k !== 1) {
        sums += '+';
      }
      sums += '\\frac{4\\sin(' + n + '\\times 2\\pi t)}{' + n + ' \\pi}';
      if ( !(k % 6)) {
        sums += '\\\\';
      }
    }

    if(this.iterations == 0) {
      sums += '0';
    }

    setTimeout(() => {
      this.sums = sums;
      this.processing = false;
    }, 10);
  }


  updateChart() {
    const A = 1;
    const f = 1;
    this.samples = [];

    for (let t = 0; t < 2 * Math.PI; t += 0.01 ) {
      let x = 0;
      for (let k = 1; k <= this.iterations ; ++k) {
        const n = 2 * k - 1;
        x += Math.sin(2.0 * Math.PI * (n) * (f * t)) / (n);
      }
      x = A * (4 / Math.PI) * x;
      this.samples.push([t, x]);
    }
  }

  ngAfterContentInit(): void {
    this.setIterations();
  }


}
