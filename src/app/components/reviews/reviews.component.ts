import { Component, signal } from '@angular/core';
import { ReviewDto } from '../../../types';
import { Reviews } from '../../../data';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'nwmedsurg-reviews',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
})
export class ReviewsComponent {
  sliderConfig = {
    dots: true,
    draggable: true,
    infinite: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  reviews = signal<ReviewDto[]>(Reviews);
}
