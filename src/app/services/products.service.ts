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

@Injectable()
export class ProductsService {

  constructor(private http: Http) { }

  /*getProducts(){
     var url = environment.url;
     var port = environment.port;
      return this.http.get('http://'+url+':'+port+'/products').map(
        (res) => res.json()
      );
  }*/
  getProducts(): Observable<IProduct[]> {
      var url = environment.url;
      var port = environment.port;
      return this.http.get('http://'+url+':'+port+'/products')
                      .map((response: Response) => <IProduct[]> response.json())
                      .do(data => console.log('All: ' +  JSON.stringify(data)))
                      .catch(this.handleError);
            

  }
  private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
