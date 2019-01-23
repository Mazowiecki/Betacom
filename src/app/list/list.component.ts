import {Component, OnInit} from '@angular/core';
import {globalService} from "../globalService.service";
import {NgForm} from "@angular/forms";
import {catchError} from "rxjs/operators";
import {MessageService} from "../message.service";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

    routes: any;
    searchRouteNumber;

    constructor(
        private globalService: globalService,
        private MessageService: MessageService
    ) {
    }

    addLine(form: NgForm) {
        this.searchRoute(form.value.searchRouteNumber);
    }

    searchRoute(number) {
        let promiseGetRoutes = new Promise(resolve => {
            this.globalService.searchRoutes(number)
                .subscribe(value => {
                    resolve(value)
                });
        });
        promiseGetRoutes.then(response => {
            this.routes = response;
        });
    }

    showAll() {
        let promiseGetRoutes = new Promise(resolve => {
            this.globalService.getRoutes()
                .subscribe(value => {
                    resolve(value)
                });
        });
        promiseGetRoutes.then(response => {
            this.routes = response;
        });
    }

    ngOnInit() {
        this.showAll();

    }

}
