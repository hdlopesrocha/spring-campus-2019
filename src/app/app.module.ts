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
import {MathJaxModule} from 'ngx-mathjax';
import {SoundSquareFourierComponent} from './sound-square-fourier/sound-square-fourier.component';
import {D3chartComponent} from './d3chart/d3chart.component';
import {SoundPlayerComponent} from './sound-player/sound-player.component';
import {SoundPassFilterComponent} from './sound-pass-filter/sound-pass-filter.component';
import {SoundKickWaveComponent} from './sound-kick-wave/sound-kick-wave.component';
import {SoundSnareWaveComponent} from './sound-snare-wave/sound-snare-wave.component';
import {SoundPianoComponent} from './sound-piano/sound-piano.component';
import {SoundHarmonicsComponent} from './sound-harmonics/sound-harmonics.component';
import {SoundTitleComponent} from './sound-title/sound-title.component';
import {SoundWapiIntroComponent} from './sound-wapi-intro/sound-wapi-intro.component';
import {SoundWapiOscillatorComponent} from './sound-wapi-oscillator/sound-wapi-oscillator.component';


import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import {HighlightModule} from 'ngx-highlightjs';
import { WaveBackgroundComponent } from './wave-background/wave-background.component';
import { SoundDemoChainComponent } from './sound-demo-chain/sound-demo-chain.component';
import { SoundQuestionsComponent } from './sound-questions/sound-questions.component';
import { SoundDemoLinkComponent } from './sound-demo-link/sound-demo-link.component';
import { SoundContactComponent } from './sound-contact/sound-contact.component';
import { SoundCompareWavesComponent } from './sound-compare-waves/sound-compare-waves.component';
import { SoundHarmonicsGeneratorComponent } from './sound-harmonics-generator/sound-harmonics-generator.component';
import { MathFormulaComponent } from './math-formula/math-formula.component';
import {HttpClientModule} from '@angular/common/http';
import { SoundCode01Component } from './sound-code01/sound-code01.component';
import { SoundCode02Component } from './sound-code02/sound-code02.component';
import { SoundCode03Component } from './sound-code03/sound-code03.component';
import { SoundCode04Component } from './sound-code04/sound-code04.component';
import { SoundCode05Component } from './sound-code05/sound-code05.component';
import { SoundCode06Component } from './sound-code06/sound-code06.component';
import {VideoHomeComponent} from './video-home/video-home.component';
import {VideoTitleComponent} from './video-title/video-title.component';
import { VideoCanvasIntroComponent } from './video-canvas-intro/video-canvas-intro.component';
import { VideoCanvasNoiseComponent } from './video-canvas-noise/video-canvas-noise.component';
import {VideoCanvasCloudsComponent} from './video-canvas-clouds/video-canvas-clouds.component';
import {VideoCanvasMovingCloudsComponent} from './video-canvas-moving-clouds/video-canvas-moving-clouds.component';
import {VideoCanvasDemoLinkComponent} from './video-canvas-demo-link/video-canvas-demo-link.component';
import {VideoWebglDemoLinkComponent} from './video-webgl-demo-link/video-webgl-demo-link.component';

import {QRCodeModule} from 'angular2-qrcode';
import { VideoWebglPipeplineComponent } from './video-webgl-pipepline/video-webgl-pipepline.component';
import { VideoWebglLightComponent } from './video-webgl-light/video-webgl-light.component';
import { VideoQuestionsComponent } from './video-questions/video-questions.component';
import { VideoWebglIntroComponent } from './video-webgl-intro/video-webgl-intro.component';
import {VideoWebglDiffuse1Component} from './video-webgl-diffuse1/video-webgl-diffuse1.component';
import {VideoWebglDiffuse2Component} from './video-webgl-diffuse2/video-webgl-diffuse2.component';
import {VideoWebglSpecular1Component} from './video-webgl-specular1/video-webgl-specular1.component';
import {VideoWebglSpecular2Component} from './video-webgl-specular2/video-webgl-specular2.component';
import { SoundSawtoothExampleComponent } from './sound-sawtooth-example/sound-sawtooth-example.component';
import { SoundSineExampleComponent } from './sound-sine-example/sound-sine-example.component';
import { SoundSquareExampleComponent } from './sound-square-example/sound-square-example.component';
import { SoundReferencesComponent } from './sound-references/sound-references.component';
import { SoundArtistsComponent } from './sound-artists/sound-artists.component';
import { SoundTestComponent } from './sound-test/sound-test.component';
import { VideoTestComponent } from './video-test/video-test.component';
import { VideoArtistsComponent } from './video-artists/video-artists.component';
import { SoundEnvelopeComponent } from './sound-envelope/sound-envelope.component';
import { VideoExtra01Component } from './video-extra01/video-extra01.component';
import { HomeComponent } from './home/home.component';
import { SoundPassFilter2Component } from './sound-pass-filter2/sound-pass-filter2.component';
import { VideoIboComponent } from './video-ibo/video-ibo.component';

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
    VideoCanvasDemoLinkComponent,
    VideoWebglDemoLinkComponent,
    VideoWebglPipeplineComponent,
    VideoWebglLightComponent,
    VideoQuestionsComponent,
    VideoWebglIntroComponent,
    VideoWebglDiffuse1Component,
    VideoWebglDiffuse2Component,
    VideoWebglSpecular1Component,
    VideoWebglSpecular2Component,
    SoundSawtoothExampleComponent,
    SoundSineExampleComponent,
    SoundSquareExampleComponent,
    SoundReferencesComponent,
    SoundArtistsComponent,
    SoundTestComponent,
    VideoTestComponent,
    VideoArtistsComponent,
    SoundEnvelopeComponent,
    VideoExtra01Component,
    HomeComponent,
    SoundPassFilter2Component,
    VideoIboComponent
  ],
  entryComponents: [
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
    VideoCanvasDemoLinkComponent,
    VideoWebglDemoLinkComponent,
    VideoWebglPipeplineComponent,
    VideoWebglLightComponent,
    VideoQuestionsComponent,
    VideoWebglIntroComponent,
    VideoWebglDiffuse1Component,
    VideoWebglDiffuse2Component,
    VideoWebglSpecular1Component,
    VideoWebglSpecular2Component,
    SoundSawtoothExampleComponent,
    SoundSineExampleComponent,
    SoundSquareExampleComponent,
    SoundReferencesComponent,
    SoundArtistsComponent,
    SoundTestComponent,
    VideoTestComponent,
    VideoArtistsComponent,
    SoundEnvelopeComponent,
    VideoExtra01Component,
    SoundPassFilter2Component,
    VideoIboComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    AngularFontAwesomeModule,
    BrowserModule,
    QRCodeModule,
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
