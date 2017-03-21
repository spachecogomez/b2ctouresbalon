import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { User }    from '../entities/users';


var users = [
  new User('admin@admin.com','adm9'),
  new User('user1@gmail.com','a23')
];

@Injectable()
export class AutenticationService {

  constructor(private _router :Router) { }

  login(user){
    var authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem("user", JSON.stringify(authenticatedUser));
      localStorage.setItem("email", JSON.stringify(user.email));
      this._router.navigate(['admin']);      
      return true;
    }
    return false;
 
  }
   checkCredentials(){
    if (localStorage.getItem("user") === null){
        this._router.navigate(['login']);
    }
  } 

   logout() {
    localStorage.removeItem("user");
    this._router.navigate(['login']);
  }

}
