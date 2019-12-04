import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bracelet',
  templateUrl: './bracelet.component.html',
  styleUrls: ['./bracelet.component.css']
})
export class BraceletComponent implements OnInit {

  public selectedPic: any;

  constructor() { }

  ngOnInit() {
  }

  selectedImage(event) {
    this.selectedPic = event.src;
  }
}
