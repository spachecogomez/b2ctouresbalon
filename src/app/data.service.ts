import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';

@Injectable()
export class DataService {

  constructor(private http: Http ) { }

  CampaignsData(){
    console.log(environment.url);
    console.log(environment.port);
    return this.http.get('http://localhost:3000/campaigns').map(
      (res) => res.json()
    );
  }

 /*
   createAuthorizationHeader(headers:Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('973aaca7-cca5-45c9-8cec-939951f2ac52:446bd234-5ec9-471a-aaad-661958c79ef5')); 
  }

  getTuristic_plans() {
    var headers = new Headers();
    this.createAuthorizationHeader(headers);

    return this.http.get('https://touresbalon.restlet.net/v1/touristic_plans/', {
      headers: headers
    }).map(res => res.json());
  }

  
  getCompany(companyId:string) {
    var headers = new Headers();
    this.createAuthorizationHeader(headers);

    return this.http.get(`https://angular2.apispark.net/v1/companies/${companyId}`, {
      headers: headers
    }).map(res => res.json());
  }  */

}
