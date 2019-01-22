import { Component, OnInit } from '@angular/core';
import {globalService} from "../globalService.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

    routes: any;

  constructor(
      private globalService: globalService,
  ) { }

  ngOnInit() {

      let promiseGetRoutes = new Promise(resolve => {
          this.globalService.getRoutes()
              .subscribe(value => {resolve(value)});
      });
      promiseGetRoutes.then(response => {
          this.routes = response;
      });


  }

}
