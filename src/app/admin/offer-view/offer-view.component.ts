import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/helper.service';

@Component({
  selector: 'app-offer-view',
  templateUrl: './offer-view.component.html',
  styleUrls: ['./offer-view.component.css']
})
export class OfferViewComponent implements OnInit {

  constructor(private helperService: HelperService) { }

  ngOnInit() {
  }


  

}
