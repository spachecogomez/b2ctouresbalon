import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class CampaignDetailsService {

  constructor(private http: Http ) { }

   getCampaign(id:string){
    return this.http.get(`http://localhost:3000/campaigns/${id}`).map(
      (res) => res.json()
    );
  }

}

