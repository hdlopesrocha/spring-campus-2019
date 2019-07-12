import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-webgl-demo-link',
  templateUrl: './video-webgl-demo-link.component.html',
  styleUrls: ['./video-webgl-demo-link.component.scss']
})
export class VideoWebglDemoLinkComponent implements OnInit {

  link: string = 'https://github.com/hdlopesrocha/spring-webgl';
  constructor() { }

  ngOnInit() {
  }

}
