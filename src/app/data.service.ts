import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor(private http: Http ) { }

  fetchData(){
    return this.http.get('https://ng-angular-68038.firebaseio.com/.json').map(
      (res) => res.json()
    );
  }

}
