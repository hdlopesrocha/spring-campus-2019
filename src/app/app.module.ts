import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {HomeComponent} from './home/home.component';
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
    HomeComponent,
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
    WaveBackgroundComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    AngularFontAwesomeModule,
    BrowserModule,
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
