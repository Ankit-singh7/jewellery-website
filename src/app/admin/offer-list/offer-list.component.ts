import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/helper.service';
import { isNgTemplate } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {

  public data = [];

  constructor(private helperService: HelperService, private router: Router) { }

  ngOnInit() {
    this.offers();
  }

  public offers = () => {
    this.helperService.getAllOffers().subscribe(apiResponse => {
      this.data = apiResponse.data.map(item => ({
        ...item,
        offerImg: `http://localhost:3000/${item.offerImg}`
      }
      ));
    });
  }

  public navigate = (id) => {
      this.router.navigate([`/admin/offer-view/${id}`]);
      console.log(id);
  }



}
