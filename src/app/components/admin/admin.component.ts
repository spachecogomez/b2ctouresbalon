import { Component, OnInit } from '@angular/core';
import { AutenticationService } from '../../services/autentication.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers : [AutenticationService,UsersService]
})
export class AdminComponent implements OnInit {

userArray =[];

 constructor(
        private _service:AutenticationService,private _user : UsersService){}
 
    ngOnInit(){
        this._service.checkCredentials();
        //user properties
         var id = localStorage.getItem("id");
         this._user.getUserdata(id).subscribe(
        (data) => this.userArray = data
      );

         
    }
 
    logout() {
        this._service.logout();
    }

    

}
