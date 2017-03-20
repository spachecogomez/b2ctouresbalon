import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampaignDetailsService } from '../services/campaign-details.service';
import { ObjectNgforPipe } from '../object-ngfor.pipe';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers : [CampaignDetailsService]
})


export class DetailsComponent implements OnInit,OnDestroy {
  id: string;
  private sub: any;
  campaign= [];

  constructor(private route: ActivatedRoute,private campaignService : CampaignDetailsService) { }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
       this.id = params['id']; 
    });

    this.campaignService.getCampaign(this.id).subscribe(
       (data) => this.campaign = data
    );

  }

   ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
