import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../entities/product';
import { Observable } from 'rxjs/Observable';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [ProductsService]
})
export class CartComponent implements OnInit {
     cartProducts= new Array;
     public totalPrice: number;
     public totalQuantity: number;

  constructor(private _productsService : ProductsService) { }

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

  ngOnInit() :void {

  
       this.getProductsForCart();
   
  }
  

}
