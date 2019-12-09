import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HelperService } from 'src/app/helper.service';
declare var $;

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit, AfterViewInit {
  public img: any;
  constructor(private helperService: HelperService) { }

  ngOnInit() {
    this.offers();
}


  ngAfterViewInit() {
    $(function() {
      $('.material-card > .mc-btn-action').click(function () {
          const card = $(this).parent('.material-card');
          const icon = $(this).children('i');
          icon.addClass('fa-spin-fast');

          if (card.hasClass('mc-active')) {
              card.removeClass('mc-active');

              window.setTimeout(function() {
                  icon
                      .removeClass('fa-arrow-left')
                      .removeClass('fa-spin-fast')
                      .addClass('fa-bars');

              }, 800);
          } else {
              card.addClass('mc-active');

              window.setTimeout(function() {
                  icon
                      .removeClass('fa-bars')
                      .removeClass('fa-spin-fast')
                      .addClass('fa-arrow-left');

              }, 800);
          }
      });
  });

  // dummy
$('#blogCarousel').carousel({
    interval: 4000
});

  }

  public offers = () => {
    this.helperService.getAllOffers().subscribe(apiResponse => {
      console.log(apiResponse);
      this.img = `http://localhost:3000/${apiResponse.data[0].offerImg}`;
    });
  }
}
