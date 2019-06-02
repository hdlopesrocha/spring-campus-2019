import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-video-home',
  templateUrl: './video-home.component.html',
  styleUrls: ['./video-home.component.scss']
})
export class VideoHomeComponent implements OnInit {

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


    const url = this.router.createUrlTree(['/video'],  {
      queryParams : {
        slide: this.slideNumber
      }
    });
    this.router.navigateByUrl(url.toString());

  }

}
