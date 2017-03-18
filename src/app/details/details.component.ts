import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit,OnDestroy {
   id: number;
   private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
       this.id = params['id']; 
    });
    //console.log(this.id);
  }

   ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
