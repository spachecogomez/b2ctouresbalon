import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../entities/product';
import { IGenericResult } from '../../entities/product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {

  products: IGenericResult;
  errorMessage: string;

  constructor(private productsService : ProductsService) { }

  ngOnInit() {
     this.getProducts(0);
  }

  getProducts(start:number):void {
     this.productsService.getProducts(start).subscribe(res => 
            {this.products = res});

  }
  addToCart(product:IProduct){
    console.log("Agregar a Carrito : "+product.espectaculo.nombre);
    //product.quantity = 1;
    this.productsService.addProduct(product);
  }

}
