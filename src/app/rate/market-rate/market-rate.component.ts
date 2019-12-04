import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-market-rate',
  templateUrl: './market-rate.component.html',
  styleUrls: ['./market-rate.component.css']
})
export class MarketRateComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $({ Counter: 0 }).animate({
      Counter: $('.Single1').text()
    }, {
      duration: 1000,
      easing: 'swing',
      step: function() {
        $('.Single1').text(Math.ceil(this.Counter));
      }
    });

    $({ Counter: 0 }).animate({
      Counter: $('.Single2').text()
    }, {
      duration: 1000,
      easing: 'swing',
      step: function() {
        $('.Single2').text(Math.ceil(this.Counter));
      }
    });

    $({ Counter: 0 }).animate({
      Counter: $('.Single3').text()
    }, {
      duration: 1000,
      easing: 'swing',
      step: function() {
        $('.Single3').text(Math.ceil(this.Counter));
      }
    });
  }

}
