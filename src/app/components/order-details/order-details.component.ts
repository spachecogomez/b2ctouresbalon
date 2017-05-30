import { Component, OnInit } from '@angular/core';
import { IOrders } from '../../entities/orders';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
  providers : [OrdersService]
})
export class OrderDetailsComponent implements OnInit {

  id: string;
  private sub: any;
  order:IOrders;

  constructor(private route: ActivatedRoute,private _orders : OrdersService) { }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
       this.id = params['id']; 
    });
    
      this._orders.getOrderbyId(this.id).subscribe(
       res => this.order = res
    );

    //console.log(this.order);


  }

}
