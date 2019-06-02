import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SoundHomeComponent} from './sound-home/sound-home.component';
import {VideoHomeComponent} from "./video-home/video-home.component";

const routes: Routes = [
  {
    path: '',
    component: SoundHomeComponent,
  },
  {
    path: 'sound',
    component: SoundHomeComponent,
  },
  {
    path: 'video',
    component: VideoHomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
