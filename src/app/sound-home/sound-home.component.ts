import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-sound-home',
  templateUrl: './sound-home.component.html',
  styleUrls: ['./sound-home.component.scss']
})
export class SoundHomeComponent implements OnInit {

  slideNumber: number = 0;

  constructor(public router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(p => {
      let sn = p['slide'];
      if(sn) {
        this.slideNumber = Number(sn);
      }
    });
  }

  addSlide(value) {
    this.slideNumber += value;

    if(this.slideNumber< 0){
      this.slideNumber = 0;
    }


    const url = this.router.createUrlTree(['/sound'],  {
      queryParams : {
        slide: this.slideNumber
      }
    });
    this.router.navigateByUrl(url.toString());

  }

}
