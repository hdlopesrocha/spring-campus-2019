import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {SoundHomeComponent} from './sound-home/sound-home.component';
import {CanvasChartComponent} from './canvas-chart/canvas-chart.component';
import {SoundIntroComponent} from './sound-intro/sound-intro.component';
import {SoundSquareWaveComponent} from './sound-square-wave/sound-square-wave.component';
import {SoundSawtoothWaveComponent} from './sound-sawtooth-wave/sound-sawtooth-wave.component';
import {SoundSimpleDemoComponent} from './sound-simple-demo/sound-simple-demo.component';
import {SoundSinFormComponent} from './sound-sin-form/sound-sin-form.component';
import {SoundNoiseWaveComponent} from './sound-noise-wave/sound-noise-wave.component';
import {ToggleButtonComponent} from './toggle-button/toggle-button.component';
import {MathJaxModule} from "ngx-mathjax";
import {SoundSquareFourierComponent} from "./sound-square-fourier/sound-square-fourier.component";
import {D3chartComponent} from './d3chart/d3chart.component';
import {SoundPlayerComponent} from './sound-player/sound-player.component';
import {SoundPassFilterComponent} from "./sound-pass-filter/sound-pass-filter.component";
import {SoundKickWaveComponent} from "./sound-kick-wave/sound-kick-wave.component";
import {SoundSnareWaveComponent} from "./sound-snare-wave/sound-snare-wave.component";
import {SoundPianoComponent} from './sound-piano/sound-piano.component';
import {SoundHarmonicsComponent} from "./sound-harmonics/sound-harmonics.component";
import {SoundTitleComponent} from './sound-title/sound-title.component';
import {SoundWapiIntroComponent} from './sound-wapi-intro/sound-wapi-intro.component';
import {SoundWapiOscillatorComponent} from './sound-wapi-oscillator/sound-wapi-oscillator.component';


import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import {HighlightModule} from "ngx-highlightjs";
import { WaveBackgroundComponent } from './wave-background/wave-background.component';
import { SoundDemoChainComponent } from './sound-demo-chain/sound-demo-chain.component';
import { SoundQuestionsComponent } from './sound-questions/sound-questions.component';
import { SoundDemoLinkComponent } from './sound-demo-link/sound-demo-link.component';
import { SoundContactComponent } from './sound-contact/sound-contact.component';
import { SoundCompareWavesComponent } from './sound-compare-waves/sound-compare-waves.component';
import { SoundHarmonicsGeneratorComponent } from './sound-harmonics-generator/sound-harmonics-generator.component';
import { MathFormulaComponent } from './math-formula/math-formula.component';
import {HttpClientModule} from "@angular/common/http";
import { SoundCode01Component } from './sound-code01/sound-code01.component';
import { SoundCode02Component } from './sound-code02/sound-code02.component';
import { SoundCode03Component } from './sound-code03/sound-code03.component';
import { SoundCode04Component } from './sound-code04/sound-code04.component';
import { SoundCode05Component } from './sound-code05/sound-code05.component';
import { SoundCode06Component } from './sound-code06/sound-code06.component';
import {VideoHomeComponent} from "./video-home/video-home.component";
import {VideoTitleComponent} from "./video-title/video-title.component";
import { VideoCanvasIntroComponent } from './video-canvas-intro/video-canvas-intro.component';
import { VideoCanvasNoiseComponent } from './video-canvas-noise/video-canvas-noise.component';
import {VideoCanvasCloudsComponent} from "./video-canvas-clouds/video-canvas-clouds.component";
import {VideoCanvasMovingCloudsComponent} from "./video-canvas-moving-clouds/video-canvas-moving-clouds.component";
import {VideoCanvasDemoLinkComponent} from "./video-canvas-demo-link/video-canvas-demo-link.component";

export function hljsLanguages() {
  return [
    {name: 'typescript', func: typescript},
    {name: 'scss', func: scss},
    {name: 'xml', func: xml}
  ];
}

@NgModule({
  declarations: [
    AppComponent,
    SoundHomeComponent,
    CanvasChartComponent,
    SoundIntroComponent,
    SoundSquareWaveComponent,
    SoundSquareFourierComponent,
    SoundSawtoothWaveComponent,
    SoundSimpleDemoComponent,
    SoundSinFormComponent,
    SoundNoiseWaveComponent,
    ToggleButtonComponent,
    D3chartComponent,
    SoundPlayerComponent,
    SoundPassFilterComponent,
    SoundKickWaveComponent,
    SoundSnareWaveComponent,
    SoundPianoComponent,
    SoundHarmonicsComponent,
    SoundTitleComponent,
    SoundWapiIntroComponent,
    SoundWapiOscillatorComponent,
    WaveBackgroundComponent,
    SoundDemoChainComponent,
    SoundQuestionsComponent,
    SoundDemoLinkComponent,
    SoundContactComponent,
    SoundCompareWavesComponent,
    SoundHarmonicsGeneratorComponent,
    MathFormulaComponent,
    SoundCode01Component,
    SoundCode02Component,
    SoundCode03Component,
    SoundCode04Component,
    SoundCode05Component,
    SoundCode06Component,
    VideoHomeComponent,
    VideoTitleComponent,
    VideoCanvasIntroComponent,
    VideoCanvasNoiseComponent,
    VideoCanvasCloudsComponent,
    VideoCanvasMovingCloudsComponent,
    VideoCanvasDemoLinkComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    AngularFontAwesomeModule,
    BrowserModule,
    HttpClientModule,
    MathJaxModule.config(),
    HighlightModule.forRoot({
      languages: hljsLanguages
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
