import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-test',
  templateUrl: './video-test.component.html',
  styleUrls: ['./video-test.component.scss']
})
export class VideoTestComponent implements OnInit {

  showAnswer: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  checkAnswer() {
    this.showAnswer = true;
  }
}
