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
import { IOrderRequest,IOrderStatus,ICustomerDetails,IOrderDetail } from '../entities/order_request'

@Injectable()
export class OrdersService {

  constructor(private http: Http) { }

  getOrders(){
     var url = '192.168.0.2';
    //var url = 'localhost';
    var port = '8080';
    var searchUrl = 'http://'+url+':'+port+'/orders?start=0&pageSize=10';
    return this.http.get(searchUrl)
            .map(res => res.json())
            .do(value => console.log(value));
  }
   getOrdersbyPage(page:number){
     var url = '192.168.0.2';
    //var url = 'localhost';
    var port = '8080';
    var searchUrl = 'http://'+url+':'+port+'/orders?start='+page+'&pageSize=10';
    return this.http.get(searchUrl)
            .map(res => res.json())
            .do(value => console.log(value));
  }


  getOrderbyId(id:String) {
    var url = '192.168.0.2';
    var port = '8080';
    var searchUrl = 'http://'+url+':'+port+'/orders/'+id;
    return this.http.get(searchUrl)
                .map((response: Response) => response.json())
                .do(value => console.log(value));
   
  

  }

  createOrders(orders:Array<IOrderRequest>){
    //var host = environment.url;
    //var port = environment.port;
    var serviceLocation = 'http://localhost:8080/orders/'
    return this.http.post(serviceLocation , orders , {}).map((response: Response) => response.json()).subscribe();
  }

  private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
