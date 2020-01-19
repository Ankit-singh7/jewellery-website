import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  public name = '';
  public message = '';
  public email = '';

  constructor(private toastr: ToastrService) {}

  ngOnInit() {
  }

  login() {
    if (this.name === '') {
      this.toastr.warning('Name is required');
    } else if (this.email === '') {
      this.toastr.warning('Email is required');
    } else if (this.message === '') {
      this.toastr.warning('Message is required');
    } else {
      this.toastr.success('We will get back to you soon', 'Thank You');
    }
  }

}
