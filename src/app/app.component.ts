import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [DataService]
})
export class AppComponent {
  title = 'app works!';
  plans = [];

  constructor (private dataService : DataService){}

  ngOnInit(){
    /*this.dataService.fetchData().subscribe(
      (data) => this.ninjas = data);*/

      this.dataService.getTuristic_plans().subscribe(
        (data) => this.plans = data);
  }

}
