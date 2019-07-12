import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-webgl-diffuse1',
  templateUrl: './video-webgl-diffuse1.component.html',
  styleUrls: ['./video-webgl-diffuse1.component.scss']
})
export class VideoWebglDiffuse1Component implements OnInit {

  initialFormula = 'U=B-A\\\\V=C-A \\\\ N= U \\times V';


  constructor() { }

  ngOnInit() {
  }

}
