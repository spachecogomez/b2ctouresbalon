import { Component, OnInit,Input } from '@angular/core';
import { Customer }    from '../entities/customer';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers : [UsersService]
})
export class RegisterComponent implements OnInit {

  constructor(private usersService : UsersService) { }

  @Input() customer :Customer;
  responseStatus:Object= [];
  status:boolean ;
  number : number;

  ngOnInit() {
     this.customer = new Customer();
     this.number = this.getRandomInt(1, 9999);
     this.customer.id = this.number.toString();
     this.customer.cust_status = 1;

  }

   getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

  createCustomer(){
    console.log("submit customer name : " + this.customer.cust_firstname);
      this.usersService.createUser(this.customer).subscribe(
           data => console.log(this.responseStatus = data),
           err => console.log(err),
           () => console.log('Request Completed')
        ); 
      this.status = true;       

  }

}
