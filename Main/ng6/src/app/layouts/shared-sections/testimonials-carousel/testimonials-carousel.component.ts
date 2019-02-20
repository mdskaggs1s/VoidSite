import { Component, OnInit, Input } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';

@Component({
  selector: 'app-testimonials-carousel',
  templateUrl: './testimonials-carousel.component.html',
  styleUrls: ['./testimonials-carousel.component.scss']
})
export class TestimonialsCarouselComponent implements OnInit {
  public carouselOptions: NguCarousel;
  public testimonials = [{
    photo: 'assets/images/matt-thumb.jpg',
    text: `“Growing up I played a lot of video games. 
    I feel like they shaped me into the person I am today and I love that they had such a huge impact on my life. 
    When we started this company that was our main goal, 
    to give back to others through our games and hopefully impact someones life in the process. 
    Despite whatever else we get from this, 
    I just hope that someone our there loves our games like I loved the games I played in my youth.”`,
    title: 'Matthew Skaggs',
    subtitle: 'Engineering Lead'
  }, {
    photo: 'assets/images/mike-thumb.jpg',
    text: `"Video games had a large impact in my life. 
    When I was younger I was socially awkward and didn't have a lot of friends. 
    The games allowed me to escape into different worlds and gave me confidence that I could do things beyond myself. 
    I see them as a vehicle for change in the furture. I just want to make something that can be that vehicle for change."`,
    title: 'Mike Skaggs',
    subtitle: 'Design Lead'
  }]
  constructor() { }

  ngOnInit() {
    this.carouselOptions = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
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
