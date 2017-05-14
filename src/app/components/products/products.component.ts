import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../entities/product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {

  products: IProduct[];
  errorMessage: string;

  constructor(private productsService : ProductsService) { }

  ngOnInit() {
     this.getProducts();
  }

  getProducts():void {
     this.productsService.getProducts()
          .subscribe(products => this.products = products,
          error => this.errorMessage = <any>error);

  }
  addToCart(product){
    console.log("Agregar a Carrito : "+product.productName);
    //Add one 
    product.quantity = 1;
    this.productsService.addProduct(product);
  }

}
