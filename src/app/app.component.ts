import { Component } from '@angular/core';
import { DataService } from './data.service';
import { CounterService } from './services/counter.service';
import { Subscription } from 'rxjs/Subscription';

import { routes } from './app.router';

import 'rxjs/add/observable/of';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [DataService,CounterService]
})
export class AppComponent {
  title = 'app works!';
  plans = [];


  countProducts = 0;
  message: any;
  subscription: Subscription;

  public selected:string;
  public products:string[] = ['El Clasico de España R.Madrid vs FCBarcelona',
                              'FA Cup Final : Manchester United vs Chelsea',
                              'Community Shield Final : Manchester City vs Everton',
                              'Final Copa Colombia : Atletico Bucaramanga vs DIM',
                              'Final ATP 500 Buenos Aires',
                              'Final USA Open'];

  constructor (private dataService : DataService,private _counter : CounterService){
    //Ask num products in Shopping cart
    this.subscription = this._counter.getMessage().subscribe(message => { this.message = message; });
  }

  ngOnInit(){
    
  
  }

}
