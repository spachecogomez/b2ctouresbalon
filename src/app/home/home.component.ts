import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [DataService]
})
export class HomeComponent implements OnInit {

  plans = [];
  env = '';
  constructor (private dataService : DataService){}

  ngOnInit() {
      this.dataService.CampaignsData().subscribe(
        (data) => this.plans = data
      );
      this.env = environment.url;
  }

}
