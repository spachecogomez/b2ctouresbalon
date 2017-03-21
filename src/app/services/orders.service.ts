import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OrdersService {

  constructor(private http: Http) { }

  getOrders(){
     return this.http.get(`http://localhost:3000/orders`).map(
      (res) => res.json()
    );
  }

}
