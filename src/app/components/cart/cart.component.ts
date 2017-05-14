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
     cartProducts: IProduct[];

  constructor(private _productsService : ProductsService) { }

  getProductsForCart():void{
    this.cartProducts = this._productsService.getSelectedProducts();
  }

  ngOnInit() :void {
    this.getProductsForCart();
  }
  

}
