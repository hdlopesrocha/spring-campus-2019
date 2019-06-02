import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-canvas-demo-link',
  templateUrl: './video-canvas-demo-link.component.html',
  styleUrls: ['./video-canvas-demo-link.component.scss']
})
export class VideoCanvasDemoLinkComponent implements OnInit {

  link: string = 'https://github.com/hdlopesrocha/spring-canvas';
  constructor() { }

  ngOnInit() {
  }

}
