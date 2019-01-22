import {Injectable, EventEmitter} from '@angular/core';

import {Router} from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

import {catchError} from 'rxjs/operators';
import {AuthenticationService} from "./auth.service";
import {HandleError, HttpErrorHandler} from "./http-error-handler.service";


@Injectable()
export class globalService {

    private backendUrl: string = 'https://nodejs-restapi-adz.herokuapp.com';
    private handleError: HandleError;


    constructor(private router: Router,
                private AuthenticationService: AuthenticationService,
                private http: HttpClient,
                private httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('globalService');

    }


// GET

    get(url: string) {
        return this.http.get(this.backendUrl + url)
            .pipe(
                catchError(this.handleError('globalService', []))
            )
    }


// POST

    post(url: string, data) {
        return this.http.post(this.backendUrl + url, data, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
            .pipe(
                catchError(this.handleError('postData', data))
            );
    }

// CREATE ROUTE

    createRoute(url: string, data) {
        console.log(this.AuthenticationService.token)
        return this.http.post(this.backendUrl + url, data, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-access-token': this.AuthenticationService.token
            })
        })
            .pipe(
                catchError(this.handleError('createRoute', data))
            );
    }




    getRoutes() {
        return this.get( '/tracks' );
    }

    searchRoutes(number) {
        return this.get( '/track/number/' + number );
    }

    login(data) {
        return this.post( '/authenticate', data );
    }

    register(data) {
        return this.post( '/user_create', data );
    }

    postRoute(data) {
        return this.createRoute( '/api/track_create', data );
    }

}
