import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { HomeComponent } from './home/home.component';
import { CanvasChartComponent } from './canvas-chart/canvas-chart.component';
import { SoundIntroComponent } from './sound-intro/sound-intro.component';
import { SoundSquareWaveComponent } from './sound-square-wave/sound-square-wave.component';
import { SoundSawtoothWaveComponent } from './sound-sawtooth-wave/sound-sawtooth-wave.component';
import { SoundSimpleDemoComponent } from './sound-simple-demo/sound-simple-demo.component';
import { SoundSinFormComponent } from './sound-sin-form/sound-sin-form.component';
import { SoundNoiseWaveComponent } from './sound-noise-wave/sound-noise-wave.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import {MathJaxModule} from "ngx-mathjax";
import {SoundSquareFourierComponent} from "./sound-square-fourier/sound-square-fourier.component";
import { D3chartComponent } from './d3chart/d3chart.component';
import { SoundPlayerComponent } from './sound-player/sound-player.component';
import {SoundPassFilterComponent} from "./sound-pass-filter/sound-pass-filter.component";
import {SoundKickWaveComponent} from "./sound-kick-wave/sound-kick-wave.component";
import {SoundSnareWaveComponent} from "./sound-snare-wave/sound-snare-wave.component";
import { SoundPianoComponent } from './sound-piano/sound-piano.component';
import {SoundHarmonicsComponent} from "./sound-harmonics/sound-harmonics.component";

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
    SoundHarmonicsComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    AngularFontAwesomeModule,
    BrowserModule,
    MathJaxModule.config(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
