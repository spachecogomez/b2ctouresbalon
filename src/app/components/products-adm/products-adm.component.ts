import { Component, OnInit } from '@angular/core';
import { ProductsAdmService } from '../../services/products-adm.service';
import { IGenericResult,ListProduct } from '../../entities/product';

@Component({
  selector: 'app-products-adm',
  templateUrl: './products-adm.component.html',
  styleUrls: ['./products-adm.component.css'],
  providers: [ProductsAdmService]
})
export class ProductsAdmComponent implements OnInit {

  products: IGenericResult;
  searchStrProd: String;
  searchResProd: ListProduct;
  errorMsg: string;
  totalItem :number;
  p: number = 1;

  constructor(private productAdmService : ProductsAdmService) { }

  ngOnInit() {
    this.getProducts(1);

  }

  getProducts(event){
 
		this.productAdmService.getProductsbyPage(event).subscribe(
			response =>{
				if(response.error) { 
					alert('Server Error');
				} else {
          console.log(response.results);
					this.products = response.results;
					this.totalItem = response.size;
				}
			},
			error =>{
				alert('Server error');
			}
		);
		return event;
	}
  searchNumProd(){
    this.productAdmService.getProductbyId(this.searchStrProd).subscribe(res => this.searchResProd = res,
    err =>this.errorMsg = <any>err);

  }

}
