import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bus-owner-registration',
  templateUrl: './bus-owner-registration.component.html',
  styleUrls: ['./bus-owner-registration.component.css']
})
export class BusOwnerRegistrationComponent implements OnInit {
  public busOwner : BusOwner;

  constructor() { }

  ngOnInit() {
  }

}

export class BusOwner {
  name: string;
  address: string;
  phone: number;
  username: string;
  password: string;
}
