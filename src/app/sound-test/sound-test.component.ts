import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sound-test',
  templateUrl: './sound-test.component.html',
  styleUrls: ['./sound-test.component.scss']
})
export class SoundTestComponent implements OnInit {


  formula: string = "f(t)=\\frac{4\\sin(7\\times 2\\pi t)}{7 \\pi}+\\frac{4\\sin(3\\times 2\\pi t)}{3 \\pi}+\\frac{4\\sin(5\\times 2\\pi t)}{5 \\pi}";
  showAnswer: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  checkAnswer() {
    this.showAnswer = true;
  }
}
