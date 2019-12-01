import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bangle',
  templateUrl: './bangle.component.html',
  styleUrls: ['./bangle.component.css']
})
export class BangleComponent implements OnInit {

  public selectedPic: any;

  constructor() { }

  ngOnInit() {
  }

  selectedImage(event) {
    this.selectedPic = event.src;
  }

}
