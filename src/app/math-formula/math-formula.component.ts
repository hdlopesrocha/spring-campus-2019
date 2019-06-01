import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-math-formula',
  templateUrl: './math-formula.component.html',
  styleUrls: ['./math-formula.component.scss']
})
export class MathFormulaComponent implements OnInit {

  formula: string;
  private processing = false;
  private timer: number = 0;

  @Input('formula')
  set setFormula(val: string) {
    this.processing = true;
    this.formula = val;
    if(this.timer) {
      clearTimeout(this.timer);
      this.timer = 0;
    }
    this.timer = setTimeout(() => {
      this.processing = false;
    }, 100);
  }



  constructor() { }

  ngOnInit() {
  }

}
