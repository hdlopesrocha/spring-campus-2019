import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SoundTitleComponent} from "../sound-title/sound-title.component";
import {SoundIntroComponent} from "../sound-intro/sound-intro.component";
import {SoundSinFormComponent} from "../sound-sin-form/sound-sin-form.component";
import {SoundSineExampleComponent} from "../sound-sine-example/sound-sine-example.component";
import {SoundSimpleDemoComponent} from "../sound-simple-demo/sound-simple-demo.component";
import {SoundSquareWaveComponent} from "../sound-square-wave/sound-square-wave.component";
import {SoundSquareExampleComponent} from "../sound-square-example/sound-square-example.component";
import {SoundSawtoothWaveComponent} from "../sound-sawtooth-wave/sound-sawtooth-wave.component";
import {SoundSawtoothExampleComponent} from "../sound-sawtooth-example/sound-sawtooth-example.component";
import {SoundSquareFourierComponent} from "../sound-square-fourier/sound-square-fourier.component";
import {SoundCompareWavesComponent} from "../sound-compare-waves/sound-compare-waves.component";
import {SoundPlayerComponent} from "../sound-player/sound-player.component";
import {SoundPassFilterComponent} from "../sound-pass-filter/sound-pass-filter.component";
import {SoundNoiseWaveComponent} from "../sound-noise-wave/sound-noise-wave.component";
import {SoundSnareWaveComponent} from "../sound-snare-wave/sound-snare-wave.component";
import {SoundKickWaveComponent} from "../sound-kick-wave/sound-kick-wave.component";
import {SoundHarmonicsGeneratorComponent} from "../sound-harmonics-generator/sound-harmonics-generator.component";
import {SoundHarmonicsComponent} from "../sound-harmonics/sound-harmonics.component";
import {SoundTestComponent} from "../sound-test/sound-test.component";
import {SoundWapiIntroComponent} from "../sound-wapi-intro/sound-wapi-intro.component";
import {SoundWapiOscillatorComponent} from "../sound-wapi-oscillator/sound-wapi-oscillator.component";
import {SoundDemoLinkComponent} from "../sound-demo-link/sound-demo-link.component";
import {SoundCode01Component} from "../sound-code01/sound-code01.component";
import {SoundCode02Component} from "../sound-code02/sound-code02.component";
import {SoundCode03Component} from "../sound-code03/sound-code03.component";
import {SoundCode04Component} from "../sound-code04/sound-code04.component";
import {SoundCode05Component} from "../sound-code05/sound-code05.component";
import {SoundCode06Component} from "../sound-code06/sound-code06.component";
import {SoundReferencesComponent} from "../sound-references/sound-references.component";
import {SoundQuestionsComponent} from "../sound-questions/sound-questions.component";
import {SoundContactComponent} from "../sound-contact/sound-contact.component";
import {SoundArtistsComponent} from "../sound-artists/sound-artists.component";
import {SoundEnvelopeComponent} from "../sound-envelope/sound-envelope.component";
import {SoundPassFilter2Component} from "../sound-pass-filter2/sound-pass-filter2.component";

@Component({
  selector: 'app-sound-home',
  templateUrl: './sound-home.component.html',
  styleUrls: ['./sound-home.component.scss']
})
export class SoundHomeComponent implements OnInit {

  slideNumber: number = 0;
  showAll: boolean = false;

  slides = [
    SoundTitleComponent,
    SoundIntroComponent,
    SoundSinFormComponent,
    SoundSineExampleComponent,
    SoundSimpleDemoComponent,
    SoundSquareWaveComponent,
    SoundSquareExampleComponent,
    SoundSawtoothWaveComponent,
    SoundSawtoothExampleComponent,
    SoundSquareFourierComponent,
    SoundCompareWavesComponent,
    SoundPlayerComponent,
    SoundPassFilterComponent,
    SoundPassFilter2Component,
    SoundNoiseWaveComponent,
    SoundHarmonicsComponent,
    SoundEnvelopeComponent,
    SoundSnareWaveComponent,
    SoundKickWaveComponent,
    SoundHarmonicsGeneratorComponent,
    SoundTestComponent,
    SoundWapiIntroComponent,
    SoundWapiOscillatorComponent,
    SoundDemoLinkComponent,
    SoundCode01Component,
    SoundCode02Component,
    SoundCode03Component,
    SoundCode04Component,
    SoundCode05Component,
    SoundCode06Component,
    SoundReferencesComponent,
    SoundQuestionsComponent,
    SoundContactComponent,
    SoundArtistsComponent
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


    const url = this.router.createUrlTree(['/sound'],  {
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
