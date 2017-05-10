import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [DataService]
})
export class HomeComponent implements OnInit {

  plans = [];
  constructor (private dataService : DataService){}

  ngOnInit() {
      this.dataService.CampaignsData().subscribe(
        (data) => this.plans = data
      );
  }

}
