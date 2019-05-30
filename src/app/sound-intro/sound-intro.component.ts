import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-sound-intro',
  templateUrl: './sound-intro.component.html',
  styleUrls: ['./sound-intro.component.scss']
})
export class SoundIntroComponent implements OnInit, OnDestroy {

  canvas = null;
  points = [];
  pointSize = 3;
  hDistance = 10;
  vDistance = this.hDistance*Math.sqrt(3)/2.0;
  amplitude = 10;
  time = 0;
  lastRender = 0;
  private animationFrame: number;

  constructor() {

  }

  ngOnInit() {
    this.canvas = document.getElementById("canvas");


    for(var y= 0; y*this.vDistance < this.canvas.height; ++y ) {
      for(var x= 0; x*this.hDistance < this.canvas.width; ++x) {
        this.points.push({
          x:this.hDistance*(y%2 ? x : x+0.5),
          y:this.vDistance*y
        });
      }
    }

    this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
  }

  ngOnDestroy(): void {
    window.cancelAnimationFrame(this.animationFrame);
  }


  draw() {
    const ctx = this.canvas.getContext("2d");
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.fillStyle = "#000000";

    for(var i=0 ; i < this.points.length ; ++i) {
      const cx = this.canvas.width/2;
      const cy = this.canvas.height/2;
      const px = this.points[i].x;
      const py = this.points[i].y;
      const dx = cx-px;
      const dy = cy-py;

      const r = Math.sqrt(dx*dx+dy*dy);
      const a = Math.atan2(dy,dx);
      const t = r*0.05-this.time*0.003;

      const displacement = this.amplitude*(2+Math.sin(t)/(r*r*0.00001+0.5));

      const x= cx + (r+displacement)*Math.cos(a);
      const y= cy + (r+displacement)*Math.sin(a);

      ctx.beginPath(); //Start path
      ctx.arc(x, y, this.pointSize, 0, Math.PI * 2, true);
      ctx.fill();
    }
  }

  update(progress){
    this.time += progress;
  }

  loop(timestamp) {
    const progress = timestamp - this.lastRender;
    this.update(progress);
    this.draw();
    this.lastRender = timestamp;
    this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
  }


}
