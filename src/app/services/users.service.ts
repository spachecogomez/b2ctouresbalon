import { Injectable } from '@angular/core';
import {HttpModule, Http,Response} from '@angular/http';
import { Customer }    from '../entities/customer';
import 'rxjs/add/operator/map'

@Injectable()
export class UsersService {

 http: Http;
 returnCommentStatus:Object = [];
 posts_Url: string = 'http://localhost:3000/customer/';

  constructor(public _http: Http) { 
    this.http = _http;
  }

  createUser(customer : Customer){
     return this.http.post(this.posts_Url, customer, { 
        })
       .map(res =>  res.json());
   
  }

   getUserdata(id : string){
     //console.log(id);
    return this.http.get(`http://localhost:3000/customer/${id}`).map(
      (res) => res.json()
    );
  }



}
