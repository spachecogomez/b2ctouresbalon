import { Component } from '@angular/core';
import { DataService } from './data.service';

import { routes } from './app.router';

import 'rxjs/add/observable/of';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [DataService]
})
export class AppComponent {
  title = 'app works!';
  plans = [];

  public selected:string;
  public products:string[] = ['El Clasico de España R.Madrid vs FCBarcelona',
                              'FA Cup Final : Manchester United vs Chelsea',
                              'Community Shield Final : Manchester City vs Everton',
                              'Final Copa Colombia : Atletico Bucaramanga vs DIM',
                              'Final ATP 500 Buenos Aires',
                              'Final USA Open'];

  constructor (private dataService : DataService){}

  ngOnInit(){
  
  }

}
