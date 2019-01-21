import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import {Router} from "@angular/router";

@Injectable()
export class AuthenticationService {

  private loginWrapper;
  public token: string;
  loggedIn = false;

  constructor(
    public router: Router,
  ) {
    let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    console.log(currentUser);
    if (currentUser !== undefined && currentUser !== null) {
      this.token = currentUser.access_token;
      this.login();
    }else {
      this.logout();
    }
  }



  public saveToken (data: any) {
    sessionStorage.setItem('currentUser', JSON.stringify(data));
    let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    console.log(currentUser);
    if (currentUser !== undefined && currentUser !== null) {
      this.token = currentUser.access_token;
      this.login();
    }else {
      this.logout();
    }
  }

  login () {
    this.loggedIn = true;
    this.router.navigate(['/dashboard'])
  }

  logout () {
    this.token = '';
    this.loggedIn = false;
  }


}
