import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class OrdersService {

  constructor(private http: Http) { }

  getOrders(){
     var url = environment.url;
     var port = environment.port;
     return this.http.get(`http://'+url+':'+port+'/orders`).map(
      (res) => res.json()
    );
  }

}
