import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {globalService} from "../globalService.service";

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

    constructor(
        private globalService: globalService,
    ) {
    }

    addLine(form: NgForm) {
        this.onSubmit({
            number: form.value.number,
            title: form.value.title,
            viaPoints: form.value.viaPoints,
            trackColor: this.color
        });
        form.reset();
    }

    onSubmit(dataToSend) {
        this.globalService.postRoute(dataToSend)
            .subscribe(response => response);
    }

    ngOnInit() {
    }

}
