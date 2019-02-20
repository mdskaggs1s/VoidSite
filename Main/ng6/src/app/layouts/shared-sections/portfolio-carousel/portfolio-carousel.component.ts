import { Component, OnInit, Input } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';

@Component({
  selector: 'app-portfolio-carousel',
  templateUrl: './portfolio-carousel.component.html',
  styleUrls: ['./portfolio-carousel.component.scss']
})
export class PortfolioCarouselComponent implements OnInit {
  
  public carouselOptions: NguCarousel;
  public portfolios = [{
    photo: 'assets/images/under-construction.jpg',
    text: `The new News Section is currently in construction`,
    title: 'Under Construction',
  }, {
    photo: 'assets/images/under-construction.jpg',
    text: `The Abigale Cypher details page is currently under construction`,
    title: 'Abigale Page Under Construction',
  }, {
    photo: 'assets/images/VSWEmblem700px.jpg',
    text: `The new Void Softworks Site is now up`,
    title: 'New Void Site!'
  }];
  constructor() { }

  ngOnInit() {
    this.carouselOptions = {
      grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
      slide: 2,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true
    }
  }

}
