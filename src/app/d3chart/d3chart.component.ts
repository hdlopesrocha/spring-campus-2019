import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Axis from 'd3-axis';

export interface Point {
  x: number;
  y: number;
}


@Component({
  selector: 'app-d3chart',
  templateUrl: './d3chart.component.html',
  styleUrls: ['./d3chart.component.scss']
})
export class D3chartComponent implements OnInit {
  private points: Point[] = [];

  @ViewChild('chart')
  svgElement: ElementRef;
  width: number;
  height: number;

  @Input()
  strokeSize: number = 2;
  @Input()
  labelX: string = "";
  @Input()
  labelY: string = "";
  @Input()
  minX: number;
  @Input()
  maxX: number;
  @Input()
  minY: number;
  @Input()
  maxY: number;
  @Input('width')
  set setWidth(val: number) {
    this.width = val;
    if(this.isInited) {
      this.draw();
    }
  }

  isInited = false;

  @Input('height')
  set setHeight(val: number) {
    this.height = val;
    if(this.isInited) {
      this.draw();
    }
  }

  @Input('points')
  set setPoints(val: Point[]) {
    this.points = val;
    if(this.isInited) {
      this.draw();
    }
  }

  private margin = {top: 20, right: 20, bottom: 30, left: 50};
  private svg: any;
  private padding: number = 10;
  private fontSize = 16;

  constructor() {

  }

  ngOnInit() {
    this.isInited = true;
    this.draw();
  }

  private initSvg() {
    if(this.svg) {
      this.svg.remove();
    }
    this.svg = d3.select(this.svgElement.nativeElement).append('g');
  }


  draw() {
    const w = this.width - this.margin.left - this.margin.right;
    const h = this.height - this.margin.top - this.margin.bottom;
    this.initSvg();

    const xAxis = d3Scale.scaleLinear().range([0, w]);
    const yAxis = d3Scale.scaleLinear().range([h, 0]);

    xAxis.domain([this.minX, this.maxX]);
    yAxis.domain([this.minY, this.maxY]);

    this.svg.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(' + this.margin.left+',' + h + ')')
      .call(d3Axis.axisBottom(xAxis));

    this.svg.append('g')
      .attr('class', 'axis axis--y')
      .attr('transform', 'translate(' + this.margin.left + ',' + 0+ ')')
      .call(d3Axis.axisLeft(yAxis));

    // now add titles to the axes
    this.svg.append("text")
      .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
      .attr("font-size", this.fontSize)
      .attr("transform", "translate("+ (this.fontSize) +","+(this.height/2)+")rotate(-90)")  // text is drawn off the screen top left, move down and out and rotate
      .text(this.labelY);

    this.svg.append("text")
      .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
      .attr("font-size", this.fontSize)
      .attr("transform", "translate("+ (this.width/2) +","+(this.height-(this.padding/3))+")")  // centre below axis
      .text(this.labelX);


    if(this.points && this.points.length) {
      const line = d3Shape.line()
        .x( (d: any) => xAxis(d.x) )
        .y( (d: any) => yAxis(d.y) );
      this.svg.append('path')
        .datum(this.points)
        .attr('class', 'line')
        .attr('transform', 'translate(' + this.margin.left + ',' + 0+ ')')
        .attr('style', 'stroke-width: ' + this.strokeSize + 'px;')
        .attr('d', line);
    }
  }
}
