import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-webgl-light',
  templateUrl: './video-webgl-light.component.html',
  styleUrls: ['./video-webgl-light.component.scss']
})
export class VideoWebglLightComponent implements OnInit {

  initialFormula = 'U=B-A\\\\V=C-A \\\\ N= U \\times V';


  constructor() { }

  ngOnInit() {
  }

}
