import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { IOrders } from '../entities/orders';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';


@Injectable()
export class CustomersService {

  constructor(private http: Http) { }

  getCustomers(){
    var url = '192.168.0.2';
    //var url = 'localhost';
    var port = '8080';
    var searchUrl = 'http://'+url+':'+port+'/customers?start=0&pageSize=10';
    return this.http.get(searchUrl)
            .map(res => res.json())
     //var url = environment.url;
     //var port = environment.port;
     /*return this.http.get('http://'+url+':'+port+'/orders?start=0&pageSize=10')
      .map((response: Response) => response.json())
      .do(value => console.log(value));*/
  }

   getCustomerbyId(id:String){
      var url = '192.168.0.2';
    //var url = 'localhost';
    var port = '8080';
    var searchUrl = 'http://'+url+':'+port+'/customers/'+id;
    return this.http.get(searchUrl)
            .map((response: Response) => response.json())

  }

}
