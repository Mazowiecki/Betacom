import {Component, OnInit} from '@angular/core';
import {NgForm, ValidatorFn} from "@angular/forms";
import {globalService} from "../globalService.service";

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

    constructor(
        private globalService: globalService,
    ) {
    }

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
            .subscribe(response => response);
    }

    ngOnInit() {
    }

}
