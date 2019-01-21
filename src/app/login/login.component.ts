import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  showSpinner: boolean = false;

  constructor(
    private router: Router,
  ) { }

  logIn(form: NgForm) {
    console.log(form.value);
    if(this.email == 'admin' && this.password == 'admin') {
      this.router.navigate(["addLine"]);
    }else {
      alert("Invalid credentials");
    }

  }

  ngOnInit() {
  }



}
