import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-add-line',
    templateUrl: './add-line.component.html',
    styleUrls: ['./add-line.component.sass']
})
export class AddLineComponent implements OnInit {

    routeNumber;
    routeTitle;
    viaPoint;
    color: string = '#ffffff';

    constructor() {
    }

    addLine(form: NgForm) {
        console.log(form.value);
        console.log(this.color);
        form.reset();
    }

    ngOnInit() {
    }

}
