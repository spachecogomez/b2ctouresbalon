import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../entities/product';
import { Observable } from 'rxjs/Observable';
import { OrdersService } from '../../services/orders.service';
import { ProductsService } from '../../services/products.service';
import { IProductDetail } from '../../entities/product_detail';
import { HttpModule, Http,Response } from '@angular/http';
import { IOrderRequest,IOrderStatus,ICustomerDetails,IOrderDetail } from '../../entities/order_request'
import { environment } from '../../../environments/environment';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [ProductsService,OrdersService]
})
export class CartComponent implements OnInit {
     cartProducts= new Array;
     totalPrice: number;
     totalQuantity: number;

  constructor(private _productsService : ProductsService , private _orderService: OrdersService) { }

  getProductsForCart():void{

    this.cartProducts = this._productsService.getSelectedProducts();
    if (this.cartProducts != null)
    {
       this.getTotalPrice();
    }

  }

  getTotalPrice() {
    let totalCost: Array<number> = []
    let quantity: Array<number> = []
    let intPrice: number
    let intQuantity: number
    this.cartProducts.forEach((item, i) => {
      intPrice = parseInt(item.price)
      intQuantity = parseInt(item.quantity)
      totalCost.push(intPrice)
      quantity.push(intQuantity)
    })

    this.totalPrice = totalCost.reduce((acc, item) => {
      return acc += item
    }, 0)
    this.totalQuantity = quantity.reduce((acc, item) => {
      return acc += item
    }, 0)
  }
  removeProduct(id){
    let actualCart = this._productsService.getSessionStorage();
    actualCart.splice(id,1);
    this._productsService.updateSessionStorage(actualCart);
    //sessionStorage.removeItem(id);
    this.getProductsForCart();

  }

  ngOnInit() :void {

  
       this.getProductsForCart();
   
  }


  checkout():void{
    let orderStatus: IOrderStatus;
    let request: IOrderRequest;
    let ordersList: Array<IOrderRequest> = []
    let orderDetail: IOrderDetail = new IOrderDetail();
    for(let i of this.cartProducts){
      request = new IOrderRequest();
      orderStatus = new IOrderStatus();
      orderStatus.status_id = 1;
      orderStatus.status_name = "CREATED";
      request.order_price = i.estadia.precio + i.espectaculo.precio + i.transporte.precio;
      request.order_status = orderStatus;
      //request.order_date = Date.now() | date:'yyyy-MM-dd';
      request.customer_details = new ICustomerDetails();
      request.customer_details.cust_firstname = "Test";
      request.customer_details.cust_lastname = "Test";
      request.customer_details.cust_phone = "123456789";
      request.customer_details.cust_address = "Fake street 1234";
      request.customer_details.cust_email = "fake@tst.com";
      request.customer_details.cust_password = "**********";
      request.customer_details.cust_credit_card_number = "123456789";
      request.customer_details.cust_credit_card_type = "VISA";
      request.customer_details.cust_status = "active";
      orderDetail.item_id = i.espectaculo.idEspectaculo;
      orderDetail.product_id = i.prodID;
      orderDetail.spectacle_name = i.espectaculo.nombre;
      orderDetail.total_price = i.espectaculo.precio;
      request.order_details = new Array<IOrderDetail>();
      request.order_details.push(orderDetail);
      orderDetail = new IOrderDetail();
      orderDetail.item_id = i.transporte.idTransporte;
      orderDetail.product_id = i.prodID;
      orderDetail.spectacle_name = i.transporte.nombre;
      orderDetail.total_price = i.transporte.precio;
      request.order_details.push(orderDetail);
      orderDetail = new IOrderDetail();
      orderDetail.item_id = i.estadia.idEstadia;
      orderDetail.product_id = i.prodID;
      orderDetail.spectacle_name = i.estadia.descripcion;
      orderDetail.total_price = i.estadia.precio;
      request.order_details.push(orderDetail);
      ordersList.push(request);
    }
    
    console.log(JSON.stringify(ordersList));

    this._orderService.createOrders(ordersList);

  }
  

}