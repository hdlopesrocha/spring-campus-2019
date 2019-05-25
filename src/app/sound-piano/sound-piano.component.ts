import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-sound-piano',
  templateUrl: './sound-piano.component.html',
  styleUrls: ['./sound-piano.component.scss']
})
export class SoundPianoComponent implements OnInit {

  @Input()
  keys: string[] = [];
  @Input()
  onClick: any;

  constructor() { }

  ngOnInit() {
  }



  click(i: number) {
    this.onClick(i);
  }
}
