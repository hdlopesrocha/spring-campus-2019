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

  @ViewChild('svg')
  svgElement: ElementRef;

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
  private x: any;
  private y: any;
  private svg: any;
  private line: d3Shape.Line<[number, number]>;


  constructor() {
    this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
  }

  ngOnInit() {
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



  private initAxis() {
    this.x = d3Scale.scaleLinear().range([0, this.width]);
    this.y = d3Scale.scaleLinear().range([this.height, 0]);
    this.x.domain([this.minX, this.maxX]);
    this.y.domain([this.minY, this.maxY]);
  }

  private drawAxis() {

    this.svg.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3Axis.axisBottom(this.x));

    this.svg.append('g')
      .attr('class', 'axis axis--y')
      .call(d3Axis.axisLeft(this.y))
      .append('text')
      .attr('class', 'axis-title')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('Price ($)');
  }

  private drawLine() {
    this.line = d3Shape.line()
      .x( (d: any) => this.x(d.x) )
      .y( (d: any) => this.y(d.y) );
    this.svg.append('path')
      .datum(this._points)
      .attr('class', 'line')
      .attr('d', this.line);
  }

  draw() {
    this.initSvg();
    this.initAxis();
    this.drawAxis();
    this.drawLine();
  }
}
