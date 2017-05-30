import { Component, OnInit , HostListener } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../entities/product';
import { IGenericResult } from '../../entities/product';


@Component({
  selector: 'app-products',
  host: {'(window:scroll)': 'onScroll($event)'},
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {

  products: IGenericResult;
  errorMessage: string;
  cont:number;

  constructor(private productsService : ProductsService) { }

  ngOnInit() {
     this.cont = 0;
     this.getProducts(this.cont);
  }

  getProducts(start:number):void {
     this.productsService.getProducts(start).subscribe(res => 
            {
              if(this.products){
                for(let it of res.results){
                  this.products.results.push(it);
                }
              }else{
                this.products = res;
              }
            });

  }
  addToCart(product:IProduct){
    this.productsService.addProduct(product);
  }

  @HostListener('scroll', ['$event'])
  onScroll(event) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.cont +=1;
      this.getProducts(this.cont);
    }  
  }
  

}
