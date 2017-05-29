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
  totalItem :number;
  p: number = 1;

  constructor(private _orders : OrdersService) { }

  ngOnInit() {
      //Primer paginado
      this.getOrders(1);
  }
   searchNumOrd(){
    this._orders.getOrderbyId(this.searchStrOrd).subscribe(res => this.searchResOrd = res,
    err =>this.errorMsg = <any>err);

  }
  cancelOrder(event){

    alert("Empeza un proceso modelado en el BPEL Cancelar Orden #"+event.target.id);
  }


public getOrders(event){
 
		this._orders.getOrdersbyPage(event).subscribe(
			response =>{
				if(response.error) { 
					alert('Server Error');
				} else {
          //console.log(response.details);
					this.orders = response.details;
					this.totalItem = response.size;
				}
			},
			error =>{
				alert('Server error');
			}
		);
		return event;
	}

}
