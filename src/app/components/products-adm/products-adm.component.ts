import { Component, OnInit } from '@angular/core';
import { ProductsAdmService } from '../../services/products-adm.service';
import { IProduct } from '../../entities/product';

@Component({
  selector: 'app-products-adm',
  templateUrl: './products-adm.component.html',
  styleUrls: ['./products-adm.component.css'],
  providers: [ProductsAdmService]
})
export class ProductsAdmComponent implements OnInit {

  products: IProduct;
  errorMsg: string;
  totalItem :number;
  p: number = 1;

  constructor(private productsService : ProductsAdmService) { }

  ngOnInit() {
  }

  getProducts(event){
 
		this.productsService.getProductsbyPage(event).subscribe(
			response =>{
				if(response.error) { 
					alert('Server Error');
				} else {
					this.products = response.details;
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
