import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-earring',
  templateUrl: './earring.component.html',
  styleUrls: ['./earring.component.css']
})
export class EarringComponent implements OnInit {

  public selectedPic: any;

  constructor() { }

  ngOnInit() {
  }

  selectedImage(event) {
    this.selectedPic = event.src;
  }

}
