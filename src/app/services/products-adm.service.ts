import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { IProduct } from '../entities/product';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class ProductsAdmService {

  constructor(private http: Http) { }

   getProductsbyPage(page:number){
     var url = '192.168.0.25';
    //var url = 'localhost';
    var port = '8090';
    var searchUrl = 'http://'+url+':'+port+'/products/byespectaclename?start='+page+'&pageSize=10';
    return this.http.get(searchUrl)
            .map(res => res.json())
            .do(value => console.log(value));
  }

   getProductbyId(id:String) {
     var url = '192.168.0.25';
    var port = '8090';
    var searchUrl = 'http://'+url+':'+port+'/products?productCode='+id;
    return this.http.get(searchUrl)
                .map((response: Response) => response.json())
   
  

  }

}
