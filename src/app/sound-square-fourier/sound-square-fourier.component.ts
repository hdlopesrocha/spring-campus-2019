import {AfterContentInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sound-square-fourier',
  templateUrl: './sound-square-fourier.component.html',
  styleUrls: ['./sound-square-fourier.component.scss']
})
export class SoundSquareFourierComponent implements OnInit, AfterContentInit {
  samplesFFT = [];
  iterations = 1;
  initialFormula = 'f(t) = \\frac{4A}{\\pi}\\sum_{k=1}^{\\infty} \\frac{\\sin((2k-1) \\times 2\\pi ft)}{2k-1}, f=1, A=1';
  private sums = '';
  private processing = false;

  constructor() {
  }

  ngOnInit() {
  }

  setIterations() {
    this.updateFormulas();
    this.updateChartFFT();
  }


  updateChartFFT() {
    const A = 1;

    const samplesFFT = [];
    samplesFFT.push({ x:0, y:0 });
    for (let k = 1; k <= this.iterations ; ++k) {
      const a = (4*A)/(Math.PI* (2 * k - 1));
      const f = (2*k-1);
      samplesFFT.push({ x:f-.1, y: 0 });
      samplesFFT.push({ x:f, y: a });
      samplesFFT.push({ x:f+.1, y: 0 });
    }
    samplesFFT.push({ x:64, y:0 });
    this.samplesFFT = samplesFFT;
  }

  updateFormulas() {
    let sums = '';
    this.processing = true;
    for (let k = 1; k <= this.iterations ; ++k) {
      const n = 2 * k - 1;
      if (k !== 1) {
        sums += '+';
      }
      sums += '\\frac{4}{' + n + ' \\pi} \\sin(' + n + '\\times 2\\pi t)';
      if ( !(k % 5)) {
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

  ngAfterContentInit(): void {
    this.setIterations();
  }


}
