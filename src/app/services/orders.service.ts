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
export class OrdersService {

  constructor(private http: Http) { }

  getOrders(){
     //var url = '192.168.0.2';
    var url = 'localhost';
    var port = '8080';
    var searchUrl = 'http://'+url+':'+port+'/orders?start=0&pageSize=10';
    return this.http.get(searchUrl)
            .map(res => res.json())
     //var url = environment.url;
     //var port = environment.port;
     /*return this.http.get('http://'+url+':'+port+'/orders?start=0&pageSize=10')
      .map((response: Response) => response.json())
      .do(value => console.log(value));*/
  }

   /*getOrders(): Observable<IOrders[]> {
      //var url = '192.168.0.2';
      var url = 'localhost';
      var port = '8080';
      return this.http.get('http://'+url+':'+port+'/orders?start=0&pageSize=10')
                      .map((response: Response) => <IOrders[]> response.json())
                      .do(data => console.log('All: ' +  JSON.stringify(data)))
                      .catch(this.handleError);
      return this.http.get('http://'+url+':'+port+'/orders?start=0&pageSize=10')
                       .map((response: Response) => <IOrders[]> response.json())
                       .catch(this.handleError);
            

  }*/

  /*getOrderbyId(id:String):Observable<IOrders[]>{
     var url = 'localhost';
      var port = '8080';
      return this.http.get('http://'+url+':'+port+'/orders/'+id)
                       .map((response: Response) => <IOrders[]> response.json())
                       .do(data => console.log('All: ' +  JSON.stringify(data)))
                       .catch(this.handleError);

  }*/

  getOrderbyId(id:String){
    var url = 'localhost';
    var port = '8080';
    var searchUrl = 'http://'+url+':'+port+'/orders/'+id;
    return this.http.get(searchUrl)
           .map(res => res.json())

  }
  private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
