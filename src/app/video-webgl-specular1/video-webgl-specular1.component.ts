import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-webgl-specular1',
  templateUrl: './video-webgl-specular1.component.html',
  styleUrls: ['./video-webgl-specular1.component.scss']
})
export class VideoWebglSpecular1Component implements OnInit {

  initialFormula = 'U=B-A\\\\V=C-A \\\\ N= U \\times V';


  constructor() { }

  ngOnInit() {
  }

}
