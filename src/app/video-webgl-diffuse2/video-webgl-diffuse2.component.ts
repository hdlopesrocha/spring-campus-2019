import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-webgl-diffuse2',
  templateUrl: './video-webgl-diffuse2.component.html',
  styleUrls: ['./video-webgl-diffuse2.component.scss']
})
export class VideoWebglDiffuse2Component implements OnInit {

  initialFormula = '\\text{DiffuseFactor}=L \\cdotp N \\\\ \\text{DiffuseColor} = \\text{LightColor}\\times\\text{DiffuseFactor} \\\\ \\text{Color}=\\text{MaterialColor}\\times \\text{DiffuseColor}';


  constructor() { }

  ngOnInit() {
  }

}
