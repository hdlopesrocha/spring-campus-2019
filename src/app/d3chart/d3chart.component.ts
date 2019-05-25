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
  private _points: Point[] = [];

  @ViewChild('chart')
  svgElement: ElementRef;
  private h: number;
  private w: number;

  @Input()
  set points(val: Point[]) {
    this._points = val;
    this.draw();
  }
  @Input()
  minX: number;
  @Input()
  maxX: number;
  @Input()
  minY: number;
  @Input()
  maxY: number;
  @Input()
  width: number;
  @Input()
  height: number;

  private margin = {top: 20, right: 20, bottom: 30, left: 50};
  private svg: any;

  constructor() {

  }

  ngOnInit() {
    this.w = this.width - this.margin.left - this.margin.right;
    this.h = this.height - this.margin.top - this.margin.bottom;
    this.draw();
  }

  private initSvg() {
    if(this.svg) {
      this.svg.remove();
    }
    this.svg = d3.select(this.svgElement.nativeElement)
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }




  draw() {
    this.initSvg();

    const xAxis = d3Scale.scaleLinear().range([0, this.w]);
    const yAxis = d3Scale.scaleLinear().range([this.h, 0]);

    xAxis.domain([this.minX, this.maxX]);
    yAxis.domain([this.minY, this.maxY]);

    this.svg.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + this.h + ')')
      .call(d3Axis.axisBottom(xAxis));

    this.svg.append('g')
      .attr('class', 'axis axis--y')
      .call(d3Axis.axisLeft(yAxis));


    const line = d3Shape.line()
      .x( (d: any) => xAxis(d.x) )
      .y( (d: any) => yAxis(d.y) );

    this.svg.append('path')
      .datum(this._points)
      .attr('class', 'line')
      .attr('d', line);

  }
}
