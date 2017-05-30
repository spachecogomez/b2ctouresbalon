import { Injectable } from '@angular/core';
import { IProduct } from '../entities/product';
import { Http,Headers,Response  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { AppComponent } from '../app.component';
import { CounterService } from './counter.service';
import { IGenericResult } from '../entities/product'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';



@Injectable()
export class ProductsService {
  observableProducts: Observable<IProduct[]>;
	allProducts: IProduct[] = [];
  selectedItems: IProduct[] = [];

  

  constructor(private http: Http,private counter: CounterService) {

    //Check count Products shopping cart
    this.counter.sendMessage(this.getCountProducts());

   }

   searchProducts(str:string,start:number){
     var url = environment.url;
     var port = environment.port;
     var searchUrl = 'http://'+url+':'+port+'/products/byespectaclename?nombre='+str+'&start='+start+'&pageSize=10';
     return this.http.get(searchUrl)
            .map(res => res.json())
     
   }

  getProducts(start:number) {
      var url = environment.url;
      var port = environment.port;
      var searchUrl = 'http://'+url+':'+port+'/products/byespectaclename?start='+start+'&pageSize=10';
      return this.http.get(searchUrl)
            .map(res => res.json())
  }

  addProduct(product) : void {
     this.selectedItems.push(product);
     this.setSessionStorage(product);

  }


  setSessionStorage(product): void {

    let local = new Array;
    let temp = JSON.parse(sessionStorage.getItem("ShoppingCart"));
    //Array Session
     if (temp)
     {
       //There are some objects in ShoppingCart
        temp.push(product);
        sessionStorage.setItem("ShoppingCart",JSON.stringify(temp));
     }
     else
     {
        local.push(product);
        sessionStorage.setItem("ShoppingCart",JSON.stringify(local));
     } 
     this.counter.sendMessage(this.getCountProducts());
     
  }

  getCountProducts(){
    let count = 0;
    if (sessionStorage.getItem("ShoppingCart"))
    {
       count = JSON.parse(sessionStorage.getItem("ShoppingCart")).length;
    }
    return count;
   
  }

  getSessionStorage(){

    return JSON.parse(sessionStorage.getItem("ShoppingCart"));
  }

  updateSessionStorage(products){

    sessionStorage.removeItem("ShoppingCart");
    if (products.length > 0)
    {
       sessionStorage.setItem("ShoppingCart",JSON.stringify(products));
    }
   
    this.counter.sendMessage(this.getCountProducts());



  }
  
  getSelectedProducts() {

    return this.getSessionStorage();
    

  }
  private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
