import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ring',
  templateUrl: './ring.component.html',
  styleUrls: ['./ring.component.css']
})
export class RingComponent implements OnInit {

  public selectedPic: any;

  constructor() { }

  ngOnInit() {
  }

  selectedImage(event) {
    this.selectedPic = event.src;
  }
}
