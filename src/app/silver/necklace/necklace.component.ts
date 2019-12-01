import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-necklace',
  templateUrl: './necklace.component.html',
  styleUrls: ['./necklace.component.css']
})
export class NecklaceComponent implements OnInit {

  public selectedPic: any;

  constructor() { }

  ngOnInit() {
  }

  selectedImage(event) {
    this.selectedPic = event.src;
  }
}
