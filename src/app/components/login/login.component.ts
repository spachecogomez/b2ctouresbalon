import { Component, OnInit } from '@angular/core';
import { User }    from '../entities/users';
import { AutenticationService } from '../../services/autentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [AutenticationService]
})
export class LoginComponent implements OnInit {

  
  public user = new User('','',"");
  public errorMsg = '';  

  constructor( private _service:AutenticationService) { }

  ngOnInit() {
  }

  login() {
        if(!this._service.login(this.user)){
            this.errorMsg = 'Failed to login';
            console.log(this.errorMsg);
        }
    }

}
