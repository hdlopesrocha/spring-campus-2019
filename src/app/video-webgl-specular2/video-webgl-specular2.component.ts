import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-webgl-specular2',
  templateUrl: './video-webgl-specular2.component.html',
  styleUrls: ['./video-webgl-specular2.component.scss']
})
export class VideoWebglSpecular2Component implements OnInit {

  initialFormula = 'R=L-2(L \\cdotp N)N \\\\ \\text{SpecularFactor}=(-R \\cdotp E)^{\\text{SpecularPower}} \\\\ \\text{SpecularPower} = ? \\\\ \\text{SpecularColor} = \\text{LightColor}\\times\\text{SpecularFactor}  \\\\ \\text{Color}=\\text{MaterialColor}\\times \\text{DiffuseColor}+\\text{SpecularColor}';


  constructor() { }

  ngOnInit() {
  }

}
