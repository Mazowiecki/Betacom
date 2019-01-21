import {Component, OnInit} from '@angular/core';
import {NgForm, ValidatorFn} from "@angular/forms";

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

    constructor() {
    }

    register(form: NgForm) {
        console.log(form.value);

    }

    ngOnInit() {
    }

}
