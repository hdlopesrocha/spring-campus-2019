import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {VideoTitleComponent} from "../video-title/video-title.component";
import {VideoCanvasIntroComponent} from "../video-canvas-intro/video-canvas-intro.component";
import {VideoCanvasDemoLinkComponent} from "../video-canvas-demo-link/video-canvas-demo-link.component";
import {VideoCanvasNoiseComponent} from "../video-canvas-noise/video-canvas-noise.component";
import {VideoCanvasCloudsComponent} from "../video-canvas-clouds/video-canvas-clouds.component";
import {VideoCanvasMovingCloudsComponent} from "../video-canvas-moving-clouds/video-canvas-moving-clouds.component";
import {VideoWebglIntroComponent} from "../video-webgl-intro/video-webgl-intro.component";
import {VideoWebglPipeplineComponent} from "../video-webgl-pipepline/video-webgl-pipepline.component";
import {VideoWebglDemoLinkComponent} from "../video-webgl-demo-link/video-webgl-demo-link.component";
import {VideoWebglLightComponent} from "../video-webgl-light/video-webgl-light.component";
import {VideoWebglDiffuse1Component} from "../video-webgl-diffuse1/video-webgl-diffuse1.component";
import {VideoWebglDiffuse2Component} from "../video-webgl-diffuse2/video-webgl-diffuse2.component";
import {VideoWebglSpecular1Component} from "../video-webgl-specular1/video-webgl-specular1.component";
import {VideoWebglSpecular2Component} from "../video-webgl-specular2/video-webgl-specular2.component";
import {VideoTestComponent} from "../video-test/video-test.component";
import {VideoQuestionsComponent} from "../video-questions/video-questions.component";
import {SoundContactComponent} from "../sound-contact/sound-contact.component";
import {VideoArtistsComponent} from "../video-artists/video-artists.component";
import {VideoExtra01Component} from "../video-extra01/video-extra01.component";
import {VideoIboComponent} from "../video-ibo/video-ibo.component";

@Component({
  selector: 'app-video-home',
  templateUrl: './video-home.component.html',
  styleUrls: ['./video-home.component.scss']
})
export class VideoHomeComponent implements OnInit {

  slideNumber: number = 0;
  showAll: boolean = false;

  slides = [
    VideoTitleComponent,
    VideoCanvasIntroComponent,
    VideoCanvasDemoLinkComponent,
    VideoCanvasNoiseComponent,
    VideoCanvasCloudsComponent,
    VideoCanvasMovingCloudsComponent,
    VideoWebglIntroComponent,
    VideoWebglPipeplineComponent,
    VideoWebglDemoLinkComponent,
    VideoIboComponent,
    VideoWebglLightComponent,
    VideoWebglDiffuse1Component,
    VideoWebglDiffuse2Component,
    VideoWebglSpecular1Component,
    VideoWebglSpecular2Component,
    VideoTestComponent,
    VideoExtra01Component,
    VideoQuestionsComponent,
    SoundContactComponent,
    VideoArtistsComponent
  ];

  @ViewChild('slideContainer', { read: ViewContainerRef })
  entry: ViewContainerRef;



  constructor(public router: Router, private route: ActivatedRoute, private resolver: ComponentFactoryResolver) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(p => {
      let sn = p['slide'];
      if(sn) {
        this.slideNumber = Number(sn);
      }
    });
    this.createComponent();
  }

  addSlide(value) {
    this.slideNumber += value;

    if(this.slideNumber< 0){
      this.slideNumber = 0;
    }
    if(this.slideNumber>= this.slides.length){
      this.slideNumber = this.slides.length - 1;
    }


    const url = this.router.createUrlTree(['/video'],  {
      queryParams : {
        slide: this.slideNumber
      }
    });
    this.router.navigateByUrl(url.toString());
    this.createComponent();
  }

  createComponent() {
    this.entry.clear();
    if(this.showAll){
      for(let i = 0; i < this.slides.length ; ++i) {
        this.loadComponent(i);
      }
    }
    else {
      this.loadComponent(this.slideNumber);
    }
  }

  loadComponent(index) {
    const factory = this.resolver.resolveComponentFactory(this.slides[index]);
    this.entry.createComponent(factory);
  }

}
