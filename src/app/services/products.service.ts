import { Injectable } from '@angular/core';
import { IProduct } from '../entities/product';
import { Http,Headers,Response  } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { environment } from '../../environments/environment';
import { AppComponent } from '../app.component';

@Injectable()
export class ProductsService {
  observableProducts: Observable<IProduct[]>;
	allProducts: IProduct[] = [];
  selectedItems: IProduct[] = [];

  constructor(private http: Http) { }

  getProducts(): Observable<IProduct[]> {
      var url = environment.url;
      var port = environment.port;
      return this.http.get('http://'+url+':'+port+'/products')
                      .map((response: Response) => <IProduct[]> response.json())
                      .catch(this.handleError);
      /*return this.http.get('http://'+url+':'+port+'/products')
                      .map((response: Response) => <IProduct[]> response.json())
                      .do(data => console.log('All: ' +  JSON.stringify(data)))
                      .catch(this.handleError);*/
            

  }

  addProduct(product) : void {
     this.selectedItems.push(product);
     this.setSessionStorage(product);
     //console.log(this.selectedItems);

  }


  setSessionStorage(product): void {

    let local = new Array;
    let temp = JSON.parse(sessionStorage.getItem("ShoppingCart"));
    //Array Session
     if (temp)
     {
        temp.push(product);
        sessionStorage.setItem("ShoppingCart",JSON.stringify(temp));
     }
     else
     {
        local.push(product);
        sessionStorage.setItem("ShoppingCart",JSON.stringify(local));
     }   
    
  }

  getSessionStorage():void{

    let cart = sessionStorage.getItem("ShoppingCart");
    console.log(JSON.parse(cart));
    
  }
  
  getSelectedProducts() : IProduct[] {

    this.getSessionStorage();
    //console.log(this.selectedItems);

    return this.selectedItems;

  }
  private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
