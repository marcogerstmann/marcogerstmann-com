import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  public config: SwiperConfigInterface = {};
  public testimonials = [
    {
      text: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus. Etiam orci lacus, volutpat at egestas sit amet, vestibulum sit amet eros. Vivamus id odio sit amet leo fringilla.',
      author: 'Mr. Adam Sandler',
      company: 'General Electric',
      image: 'assets/img/profile/adam.jpg',
    },
    {
      text: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus. Etiam orci lacus, volutpat at egestas sit amet, vestibulum sit amet eros. Vivamus id odio sit amet leo fringilla.',
      author: 'Mrs. Ashley Ahlberg',
      company: 'Dell EMC',
      image: 'assets/img/profile/ashley.jpg',
    },
    {
      text: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus. Etiam orci lacus, volutpat at egestas sit amet, vestibulum sit amet eros. Vivamus id odio sit amet leo fringilla.',
      author: 'Mr. Bruno Vespa',
      company: 'Southwest Airlines',
      image: 'assets/img/profile/bruno.jpg',
    },
    {
      text: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus. Etiam orci lacus, volutpat at egestas sit amet, vestibulum sit amet eros. Vivamus id odio sit amet leo fringilla.',
      author: 'Mrs. Julia Aniston',
      company: 'Apple Co',
      image: 'assets/img/profile/julia.jpg',
    },
  ];

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.config = {
      slidesPerView: 1,
      spaceBetween: 49,
      keyboard: true,
      navigation: true,
      pagination: false,
      grabCursor: true,
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
      breakpoints: {
        960: {
          slidesPerView: 2,
        },
      },
    };
  }
}
