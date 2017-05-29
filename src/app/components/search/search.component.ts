import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../entities/product';
import { IGenericResult } from '../../entities/product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ProductsService]

})
export class SearchComponent implements OnInit {

  constructor(private productService : ProductsService) { }

  searchStr:string;
  searchRes: IGenericResult;

  searchProduct(start:number){
       this.productService.searchProducts(this.searchStr,start).subscribe(res => 
            {this.searchRes = res});
    
  }

  ngOnInit() {
  }

}
