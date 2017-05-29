import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
@Injectable()
export class CampaignDetailsService {

  constructor(private http: Http ) { }

   getCampaign(id:string){
   	 var url = environment.url;
     var port = environment.port;
    return this.http.get('http://'+url+':'+port+'/products?productCode='+id).map(
      (res) => res.json()
    );
  }

}

