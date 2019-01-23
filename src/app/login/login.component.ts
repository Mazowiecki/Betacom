import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from "@angular/forms";
import {globalService} from "../globalService.service";
import {AuthenticationService} from "../auth.service";
import {MessageService} from "../message.service";

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
    private globalService: globalService,
    public AuthenticationService: AuthenticationService,
    public MessageService: MessageService,
  ) { }

    loginErrorsTranslation: any = {
        'Authentication failed. Wrong password.': 'Błędne hasło',
        'Authentication failed.': 'Błędny email lub hasło'
    };


    logIn(form: NgForm) {

      this.onSubmit({
          email: form.value.email,
          password: form.value.password
      });
  }

    onSubmit(dataToSend) {
        this.globalService.login(dataToSend)
            .subscribe(response => this.AuthenticationService.saveToken(response));
    }

  ngOnInit() {
  }



}
