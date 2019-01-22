import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable()
export class AuthenticationService {

  private loginWrapper;
  public token: string = '';
  loggedIn = false;

  constructor(
    public router: Router,
  ) {
    let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    if (currentUser !== undefined && currentUser !== null) {
      this.token = currentUser.token;
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
      this.token = currentUser.token;
      this.login();
    }else {
      this.logout();
    }
  }

  checkLogin () {
      let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
      if (currentUser !== undefined && currentUser !== null) {
          this.token = currentUser.token;
          this.login();
      }else {
          this.logout();
      }
      return this.loggedIn;
  }

  login () {
    this.loggedIn = true;
    this.router.navigate(['/addLine'])
  }

  logout () {
    this.token = '';
    this.loggedIn = false;
  }


}
