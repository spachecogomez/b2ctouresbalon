import { Injectable } from '@angular/core';
import { Product } from '../entities/product';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class ProductsService {

  constructor(private http: Http) { }

  getProducts(){
     var url = environment.url;
     var port = environment.port;
      return this.http.get('http://'+url+':'+port+'/products').map(
        (res) => res.json()
      );
  }

}
