import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { IOrders } from '../../entities/orders';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers : [OrdersService]
})
export class OrdersComponent implements OnInit {

  //orders = [];
  orders: IOrders;
  errorMessage: String;
  searchStrOrd: String;
  searchResOrd: IOrders;
  errorMsg: string;

  constructor(private _orders : OrdersService) { }

  ngOnInit() {
    /*this._orders.getOrders().subscribe(
      (data) => this.orders = data);*/
      this.getOrders();
  }
  getOrders():void {
     this._orders.getOrders()
          .subscribe(orders => this.orders = orders,
          error => this.errorMessage = <any>error);

  }
   searchNumOrd(){
    this._orders.getOrderbyId(this.searchStrOrd).subscribe(res => this.searchResOrd = res,
    err =>this.errorMsg = <any>err);

  }
  cancelOrder(event){

    alert("Empeza un proceso modelado en el BPEL Cancelar Orden #"+event.target.id);
  }

}
