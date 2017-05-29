import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampaignDetailsService } from '../../services/campaign-details.service';
import { ObjectNgforPipe } from '../../object-ngfor.pipe';
import { IProductDetail,IEspectaculoDetail,IEstadiaDetail,ITransporteDetail } from '../../entities/product_detail';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers : [CampaignDetailsService]
})


export class DetailsComponent implements OnInit,OnDestroy {
  id: string;
  private sub: any;
  campaign: IProductDetail;

  constructor(private route: ActivatedRoute,private campaignService : CampaignDetailsService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
       this.id = params['id']; 
    });

    console.log("Campaigns service id "+this.id);

    this.campaignService.getCampaign(this.id).subscribe(
       (data) => this.campaign = data
    );
    

  }

   ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
