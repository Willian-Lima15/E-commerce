import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/views/checkout/checkout.service';
import { House } from 'src/app/views/list-house/house.model';

@Component({
  selector: 'app-card-house',
  templateUrl: './card-house.component.html',
  styleUrls: ['./card-house.component.css']
})
export class CardHouseComponent implements OnInit {
  listHouses: House[] = [];

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit() {
  }

}
