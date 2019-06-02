import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {PerlinNoiseService} from "../perlin-noise.service";

@Component({
  selector: 'app-video-canvas-clouds',
  templateUrl: './video-canvas-clouds.component.html',
  styleUrls: ['./video-canvas-clouds.component.scss']
})
export class VideoCanvasCloudsComponent implements OnInit, OnDestroy {

  noiseLength = 1.0;
  @ViewChild('canvas') public canvas: ElementRef;
  iterations: number = 1;
  initialFormula = 'f(x,y,l) = perlin2D(\\frac{x}{l}, \\frac{y}{l})  \\\\ g(x,y,l) = \\sum_{i=1}^{\\infty} \\frac{f(x,y,l/2^{i})}{2^{i}}';

  constructor(private perlinNoiseService: PerlinNoiseService) {

  }

  ngOnInit() {
    this.draw();
  }

  ngOnDestroy(): void {

  }


  draw() {
    const ctx: CanvasRenderingContext2D = this.canvas.nativeElement.getContext("2d");
    ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    this.drawPerlinToCanvas(ctx, this.canvas.nativeElement)
  }

  drawPerlinToCanvas(context: CanvasRenderingContext2D, canvas) {
    const imgData = context.createImageData(canvas.width, canvas.height);
    const frequency = 1.0/this.noiseLength;

    for (let x = 0; x < canvas.width; x++) {
      for (let y = 0; y < canvas.height; y++) {
        let value = this.perlinNoiseService.myNoise3dx(x, y, 0.0, frequency, this.iterations);
        const index = (x*canvas.width+y)*4;
        imgData.data[index+0] = imgData.data[index+1] = imgData.data[index+2] = parseInt(value*255+'');
        imgData.data[index+3] = 255;
      }
    }
    context.putImageData( imgData, 0, 0 );
  }


}
