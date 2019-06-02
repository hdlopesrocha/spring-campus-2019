import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sound-demo-link',
  templateUrl: './sound-demo-link.component.html',
  styleUrls: ['./sound-demo-link.component.scss']
})
export class SoundDemoLinkComponent implements OnInit {
  link: string = 'https://github.com/hdlopesrocha/spring-piano';

  constructor() { }

  ngOnInit() {
  }

}
