import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('.carousel.carousel-multi-item.v-2 .carousel-item').each(function() {
      let next = $(this).next();
      if (!next.length) {
        this.next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
     for (let i = 0 ; i < 4 ; i++) {
        next = next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
      }
    });
  }

}
