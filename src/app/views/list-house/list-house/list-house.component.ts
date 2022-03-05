import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../checkout/checkout.service';
import { House } from '../house.model';

@Component({
  selector: 'app-list-house',
  templateUrl: './list-house.component.html',
  styleUrls: ['./list-house.component.css']
})
export class ListHouseComponent implements OnInit {
  listHouses: House[] = [];

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit(): void {
    this.checkoutService.getListHouses().subscribe((house) => {
      this.listHouses = house;
    })
  }

}
