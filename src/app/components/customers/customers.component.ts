import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { ICustomer } from '../../entities/customer';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers : [CustomersService]
})
export class CustomersComponent implements OnInit {

  customers: ICustomer;
  errorMsg: string;
  searchStrCust: String;
  searchResCust: ICustomer[];

  constructor(private _customer : CustomersService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers():void {
     this._customer.getCustomers()
          .subscribe(orders => this.customers = orders,
          error => this.errorMsg = <any>error);

  }
   searchCustNumId(){
    this._customer.getCustomerbyId(this.searchStrCust).subscribe(res => this.searchResCust = res,
    err =>this.errorMsg = <any>err);

  }

}
