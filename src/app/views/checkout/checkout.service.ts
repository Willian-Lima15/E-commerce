import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { House } from '../list-house/house.model';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  public baseUrl: string = 'http://localhost:3001';
  public listHouses: House[] = [];
  public totalPrice: number = 0;

  private _priceHandler: number = 0;

  getPrice(): number {
    return this._priceHandler;
  }

  setPrice(value: number) {
    this._priceHandler = value;
  }

  constructor(private httpClient: HttpClient) {

   }
   getListHouses(): Observable<House[]> {
     return this.httpClient.get<House[]>(this.baseUrl+'/houses')
   }
}
