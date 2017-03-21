import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { ObjectNgforPipe } from '../object-ngfor.pipe';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers : [OrdersService]
})
export class OrdersComponent implements OnInit {

  orders = [];
  constructor(private _orders : OrdersService) { }

  ngOnInit() {
    this._orders.getOrders().subscribe(
      (data) => this.orders = data);
  }
  cancelOrder(event){

    alert("Empeza un proceso modelado en el BPEL Cancelar Orden #"+event.target.id);
  }

}
