import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-all-clients',
  templateUrl: './all-clients.component.html',
  styleUrls: ['./all-clients.component.scss']
})
export class AllClientsComponent implements OnInit {
  public config: SwiperConfigInterface = { };
  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true
  };
  public clients = [
    'assets/img/clients/dream.png',  
    'assets/img/clients/congrats.png',
    'assets/img/clients/best.png',
    'assets/img/clients/original.png',
    'assets/img/clients/king.png',
    'assets/img/clients/love.png',
    'assets/img/clients/the.png',
    'assets/img/clients/easter.png',
    'assets/img/clients/with.png',
    'assets/img/clients/special.png',
    'assets/img/clients/bravo.png'
  ];
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.config = {
      slidesPerView: 1,
      spaceBetween: 29,         
      keyboard: true,
      navigation: true,
      pagination: this.pagination,
      grabCursor: true,        
      loop: true,    
      autoplay: {
        delay: 6000,
        disableOnInteraction: false
      },
      speed: 500,
      effect: "slide",
      breakpoints: {
        320: {
          slidesPerView: 2
        },
        480: {
          slidesPerView: 3
        },
        600: {
          slidesPerView: 4
        },
        960: {
          slidesPerView: 5
        },
        1280: {
          slidesPerView: 6
        }
      }
    }
  
  }

}
