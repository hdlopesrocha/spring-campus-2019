import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {PerlinNoiseService} from "../perlin-noise.service";

@Component({
  selector: 'app-video-canvas-moving-clouds',
  templateUrl: './video-canvas-moving-clouds.component.html',
  styleUrls: ['./video-canvas-moving-clouds.component.scss']
})
export class VideoCanvasMovingCloudsComponent implements OnInit, OnDestroy {

  time = 0;
  lastRender = 0;
  noiseLength = 1.0;
  private animationFrame: number;
  @ViewChild('canvas') public canvas: ElementRef;
  iterations: number = 1;
  initialFormula = 'f(x,y,z,l) = perlin3D(\\frac{x}{l}, \\frac{y}{l}, \\frac{z}{l})  \\\\ g(x,y,t,l) = \\sum_{i=1}^{\\infty} \\frac{f(x,y,t,l/2^{i})}{2^{i}}';

  constructor(private perlinNoiseService: PerlinNoiseService) {

  }

  ngOnInit() {
    this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
  }

  ngOnDestroy(): void {
    window.cancelAnimationFrame(this.animationFrame);
  }


  draw(time: number) {
    const ctx: CanvasRenderingContext2D = this.canvas.nativeElement.getContext("2d");
    ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    this.drawPerlinToCanvas(ctx, this.canvas.nativeElement, time)
  }

  update(progress) {
    this.time += progress;
  }

  loop(timestamp) {
    const progress = timestamp - this.lastRender;
    this.update(progress);
    this.draw(this.time*0.001);
    this.lastRender = timestamp;
    this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
  }

  drawPerlinToCanvas(context: CanvasRenderingContext2D, canvas, time) {
    const imgData = context.createImageData(canvas.width, canvas.height);
    const frequency = 1.0/this.noiseLength;

    for (let x = 0; x < canvas.width; x++) {
      for (let y = 0; y < canvas.height; y++) {
        let value = this.perlinNoiseService.myNoise3dx(x, y, time*10, frequency, this.iterations);
        const index = (x*canvas.width+y)*4;
        imgData.data[index+0] = imgData.data[index+1] = imgData.data[index+2] = parseInt(value*255+'');
        imgData.data[index+3] = 255;
      }
    }
    context.putImageData( imgData, 0, 0 );
  }


}
