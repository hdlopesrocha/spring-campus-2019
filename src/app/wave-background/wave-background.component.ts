import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {PerlinNoiseService} from "../perlin-noise.service";

@Component({
  selector: 'app-wave-background',
  templateUrl: './wave-background.component.html',
  styleUrls: ['./wave-background.component.scss']
})
export class WaveBackgroundComponent implements OnInit, OnDestroy {

  time: number = 0;
  isPlaying = false;
  source = null;
  analyser = null;
  freqArray:Uint8Array = null;
  dataArray:Uint8Array = null;
  private lastRender=0;

  @ViewChild('canvas')
  public canvasRef: ElementRef;
  public canvas: HTMLCanvasElement;
  canvasContext: CanvasRenderingContext2D;
  private audioContext: AudioContext;
  private animationFrame: number;

  constructor(public perlinNoiseService: PerlinNoiseService) { }

  ngOnInit() {
    this.canvas = this.canvasRef.nativeElement;
    this.canvasContext = this.canvas.getContext('2d');

    this.perlinNoiseService.seed(Math.random());

    this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));



    navigator.mediaDevices.getUserMedia({ audio: true, video: false })
      .then(this.playSound);

  }

  updateSoundData(){
    if(this.isPlaying) {
      this.analyser.getByteFrequencyData(this.freqArray);
      this.analyser.getByteTimeDomainData(this.dataArray);
    }
  }

  playSound(stream) {
    this.initWebAudio();
    let source = this.audioContext.createMediaStreamSource(stream);
    source.connect(this.analyser);
    this.isPlaying = true;
  };

  initWebAudio() {
    try {
      // Fix up for prefixing
      this.audioContext = new AudioContext();
      this.source = this.audioContext.createBufferSource();
      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = 32;
      this.source.connect(this.analyser);
      this.analyser.connect(this.audioContext.destination);
      this.freqArray = new Uint8Array(this.analyser.frequencyBinCount);
      this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
      this.source.onended = (event) => {
        this.isPlaying = false;
      }
    }
    catch(e) {
      alert('Web Audio API is not supported in this browser');
    }
  }

  update(progress){
    this.time += progress;
  }

  draw() {
    this.updateSoundData();
    this.clearCanvas(this.canvasContext, this.canvas);

    for(let i=0; i < 256; ++i) {
      this.drawPerlinCircleToCanvas(this.canvasContext, this.canvas, this.time/10000, this.time/10000+i/512,this.dataArray,this.freqArray);
    }
  }

  loop(timestamp) {
    const progress = timestamp - this.lastRender;
    this.update(progress);
    this.draw();
    this.lastRender = timestamp;
    this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
  }

  scale(num, in_min, in_max, out_min, out_max) {
    const v = (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    return v > out_max ? out_max : v < out_min ? out_min : v;
  }

  clearCanvas(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  myNoise3d(x: number,y: number,z: number,l: number) {
    const v = this.perlinNoiseService.simplex3(x/l, y/l, z/l);
    return 0.5*(v+1);
  }

  myNoise3dx(x: number,y: number,z: number,l: number): number {
    let il = l;
    let pe = 0.5;
    let re = 0;
    for(let i=0 ; i < 7; ++i) {
      re += pe*this.myNoise3d(x,y,z,il);
      il*= 0.5;
      pe*= 0.5;
    }
    return re;
  }

  getPoint(canvas: HTMLCanvasElement,cx,cy,cr,perc, t0, time,dataArray,freqArray) {
    const i0 =  freqArray ? this.scale(perc,0,1,0, freqArray.length-1) : 0;
    const i0p = i0 - Math.floor(i0);
    const i0i = parseInt(i0);
    const f0 = freqArray ?  freqArray[i0i]*(1-i0p)+freqArray[(i0i+1)%freqArray.length]*(i0p) : 0;

    let f = f0*0.4;
    if (isNaN(f)) {
      f = 0.0;
    }
    const sx = 0.5*perc+t0;
    const sy = 0.5*perc;
    const sr = this.myNoise3dx(sx, sy, (time+f/256), 1.0)*2.0-1.0;

    return {
      x: perc * canvas.width,
      y: canvas.height/2-sr*cr+f
    };
  }

  drawPerlinCircleToCanvas(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement, t0: number, time: number,dataArray,freqArray) {
    const colorR = parseInt(this.myNoise3dx(time,0,0,1.0)*255+'');
    const colorG = parseInt(this.myNoise3dx(0,time,0,1.0)*255+'');
    const colorB = parseInt(this.myNoise3dx(0,0,time,1.0)*255+'');

    context.strokeStyle = 'rgba('+colorR+','+ colorG +','+colorB+',0.2)';
    context.beginPath();

    const cx = canvas.width/2;
    const cy = canvas.height/2;
    const cr = canvas.height/4;

    let init = true;
    for(let perc = 0 ; perc < 1.000001 ; perc += 0.005) {
      let point = this.getPoint(canvas, cx,cy,cr, perc, t0, time, dataArray,freqArray);
      init ? context.moveTo(point.x, point.y) : context.lineTo(point.x, point.y);
      init = false;
    }

    context.stroke();
  }

  ngOnDestroy(): void {
    window.cancelAnimationFrame(this.animationFrame);
  }

}
