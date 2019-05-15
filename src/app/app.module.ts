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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CanvasChartComponent,
    SoundIntroComponent,
    SoundSquareWaveComponent,
    SoundSawtoothWaveComponent,
    SoundSimpleDemoComponent,
    SoundSinFormComponent,
    SoundNoiseWaveComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    AngularFontAwesomeModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
