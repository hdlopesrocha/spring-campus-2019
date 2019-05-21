import {AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';

@Component({
  selector: 'app-canvas-chart',
  templateUrl: './canvas-chart.component.html',
  styleUrls: ['./canvas-chart.component.scss']
})
export class CanvasChartComponent implements OnInit, AfterViewInit, OnChanges {

  @Input()
  array = [];
  @Input()
  public width;
  @Input()
  public height;
  @Input()
  public minX;
  @Input()
  public maxX;
  @Input()
  public minY;
  @Input()
  public maxY;

  @Input()
  public stroke = 3;

  @ViewChild('canvas') public canvas: ElementRef;
  context: CanvasRenderingContext2D;
  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.draw();
  }

  draw() {
    this.context = this.canvas.nativeElement.getContext('2d');
    this.clearCanvas();
    this.context.beginPath();
    this.context.lineWidth = this.stroke;
    this.context.strokeStyle = '#000';

    let first = true;

    for (const point of this.array) {
      const x = Math.floor((point[0] - this.minX) / (this.maxX - this.minX) * this.width);
      const y = this.height - Math.floor((point[1] - this.minY) / (this.maxY - this.minY) * this.height);

      if (first) {
        first = false;
        this.context.moveTo(x, y);
      } else {
        this.context.lineTo(x, y);
      }
   //   console.log(x, y);
    }
    this.context.stroke();
  }

  clearCanvas() {
    const context = this.canvas.nativeElement.getContext('2d');
    context.clearRect(0, 0, this.width, this.height);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.draw();
  }

}
