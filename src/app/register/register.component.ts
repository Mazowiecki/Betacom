import {Component, OnInit} from '@angular/core';
import {NgForm, ValidatorFn} from "@angular/forms";
import {globalService} from "../globalService.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

    showSpinner: boolean = false;
    password1;
    password2;
    name;
    surname;
    email;
    registerError: any;

    constructor(
        private globalService: globalService,
        public router: Router
    ) {
    }

    registerErrorsTranslation: any = {
        'User already exists, try different email.': 'Użytkownik z takim mailem już istnieje. Proszę spróbować użyć innego adresu email'
    };

    register(form: NgForm) {
        console.log(form.value);

        this.onSubmit({
            firstName: form.value.name,
            lastName: form.value.surname,
            email: form.value.email,
            password: form.value.passwords.passwordA
        });
    }

    onSubmit(dataToSend) {
        this.globalService.register(dataToSend)
            .subscribe(response =>{
                    if (!response.success) {
                        this.registerError = response.message;
                    } else {
                        this.registerError = null;
                        this.router.navigate(['/login'])
                    }
                }
            )

    }

    ngOnInit() {
    }

}
