// import { Injectable, EventEmitter } from '@angular/core';
// // import { Http, Response, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';
// import { Observable } from 'rxjs';
//
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import { Router } from '@angular/router';
// import {HttpHeaders, HttpParams} from "@angular/common/http";
// import {AuthenticationService} from "./auth.service";
//
//
//
// @Injectable()
// export class globalService {
//
//   private backendUrl: string = 'http://exofin-orders-test.exofin.hostingasp.pl/api';
//
//   private headers;
//   private options;
//
//
//   public res: Response;
//
//
//
//   constructor ( private router: Router,
//                 private AuthenticationService: AuthenticationService,
//   ) {
//
//   }
//
//
//
//
// // GET
//
//
//
//   public get(url: string) {
//
//     this.requestoptions = new HttpParams({
//       method: RequestMethod.Get,
//       url: this.backendUrl + url,
//       headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.AuthenticationService.token }),
//     });
//     return this.http.request( new Request(this.requestoptions) )
//       .catch(error => this.handleError(error))
//       .map((response: Response) => {
//         return response;
//       });
//   }
//
//
// // GETTOKEN
//
//
//   public getToken(data: any) {
//     this.requestoptions = new RequestOptions({
//       method: RequestMethod.Post,
//       url: 'http://exofin-orders-test.exofin.hostingasp.pl/token',
//       headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded'
//       }),
//       body: 'grant_type=password' + '&password=' + data.password + '&username=' + data.name
//     });
//     return this.http.request( new Request(this.requestoptions) )
//       .catch(error => this.handleError(error))
//       .map((response: Response) => {
//         const result = response.json();
//         return response;
//       });
//   }
//
//
//   // POST
//
//   public post(url: string, data: any) {
//     this.requestoptions = new RequestOptions({
//       method: RequestMethod.Post,
//       url: this.backendUrl + url,
//       headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.AuthenticationService.token }),
//       body: JSON.stringify(data),
//     });
//     return this.http.request( new Request(this.requestoptions) )
//       .catch(error => this.handleError(error))
//       .map((response: Response) => {
//         const result = response.json();
//         return response;
//       });
//   }
//
//   // PUT
//
//   public put(url: string, data: any) {
//     this.requestoptions = new RequestOptions({
//       method: RequestMethod.Put,
//       url: this.backendUrl + url,
//       headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.AuthenticationService.token }),
//       body: JSON.stringify(data),
//     });
//     return this.http.request( new Request(this.requestoptions) )
//       .catch(error => this.handleError(error))
//       .map((response: Response) => {
//         const result = response.json();
//         return response;
//       });
//   }
//
//   // DELETE
//
//   public delete(url: string) {
//     console.log(url);
//     this.requestoptions = new RequestOptions({
//       method: RequestMethod.Delete,
//       url: this.backendUrl + url,
//       headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.AuthenticationService.token }),
//     });
//     return this.http.request( new Request(this.requestoptions) )
//       .catch(error => this.handleError(error))
//       .map((response: Response) => {
//         return response;
//       });
//   }
//
//   // REGISTER
//
//   public register(data: any) {
//     this.requestoptions = new RequestOptions({
//       method: RequestMethod.Post,
//       url: this.backendUrl + '/Account/Register',
//       headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.AuthenticationService.token }),
//       body: JSON.stringify(data),
//     });
//     return this.http.request( new Request(this.requestoptions) )
//       .catch(error => this.handleError(error))
//       .map((response: Response) => {
//         const result = response.json();
//         return response;
//       });
//   }
//
//   // ENADAWCA
//
//   public eNadawca(data) {
//     console.log(Array.isArray(data));
//     console.log(data)
//     console.log(typeof(data))
//     var token = this.AuthenticationService.token;
//     var req = new XMLHttpRequest();
//     req.open('POST', this.backendUrl + '/order/generate-enadawca-xml', true);
//     req.responseType = 'blob';
//     req.setRequestHeader('Authorization', 'Bearer ' + token);
//     req.setRequestHeader('Content-Type', 'application/json');
//     req.onload = event => {
//       var blob = req.response;
//       var link = document.createElement('a');
//       link.href = window.URL.createObjectURL(blob);
//       var fileName = 'data.xml'; //req.getResponseHeader('Content-Disposition').match(/\sfilename="([^"]+)"(\s|$)/)[1];
//       link.download = fileName;
//       link.click();
//     };
//     data = { OrderIds: data };
//     req.send(JSON.stringify(data));
//   }
//
//
//   addProduct(product) {
//     return this.post( '/product/create-product', product )
//       .map((response: Response) => response.json());
//   }
//
//   addProductCategory(productLabel) {
//     return this.post( '/labels/create-product-label', productLabel )
//       .map((response: Response) => response.json());
//   }
//
//   addOrderCategory(orderLabel) {
//     return this.post( '/labels/create-order-label', orderLabel )
//       .map((response: Response) => response.json());
//   }
//
//   addOrder(order) {
//     return this.post( '/order/create-order', order )
//       .map((response: Response) => response.json());
//   }
//
//   editOrder(order) {
//     return this.post( '/order/update-order', order )
//       .map((response: Response) => response.json());
//   }
//
//   sendSMS(data) {
//     return this.post( '/user/send-sms', data )
//       .map((response: Response) => response.json());
//   }
//
//   deleteOrder(id) {
//     return this.delete( '/order/delete-order?orderId=' + id )
//       .map((response: Response) => response.json());
//   }
//
//   deleteProduct(id) {
//     return this.delete('/product/delete-product?productId=' + id)
//       .map((response: Response) => response.json());
//   }
//
//   deleteOrderCategories(id) {
//     return this.delete('/labels/delete-order-label?labelId=' + id)
//       .map((response: Response) => response.json());
//   }
//
//   deleteProductCategories(id) {
//     return this.delete('/labels/delete-product-label?labelId=' + id)
//       .map((response: Response) => response.json());
//   }
//
//   getOrderCategories() {
//     return this.get( '/labels/get-order-labels' )
//       .map((response: Response) => response.json());
//   }
//
//   getProductCategories() {
//     return this.get( '/labels/get-product-labels' )
//       .map((response: Response) => response.json());
//   }
//
//   getProducts() {
//     return this.get( '/product/get-products' )
//       .map((response: Response) => response.json());
//   }
//
//   getOrders() {
//     return this.get( '/order/get-orders' )
//       .map((response: Response) => response.json());
//   }
//
//   getUsers() {
//     return this.get( '/user/get-users' )
//       .map((response: Response) => response.json());
//   }
//
//   filter(url) {
//     return this.get( url )
//       .map((response: Response) => response.json());
//   }
//
//
//
//
//
//   private handleError(error: any): Promise<any> {
//     if (error.status === 500) {
//       console.log('Błąd: ' + error.status)
//     }
//     else if (error.status === 400) {
//       console.log('Błąd: ' + error.status)
//     }
//     else if (error.status === 401) {
//       console.log('Błąd: ' + error.status)
//       this.AuthenticationService.logout();
//     }
//     else if (error.status === 403) {
//       console.log('Błąd: ' + error.status)
//     }
//     else if (error.status === 404) {
//       console.log('Błąd: ' + error.status)
//     }
//     else if (error.status === 404) {
//       console.log('Błąd: ' + error.status)
//     }
//     else if (error.status === 406) {
//       console.log('Błąd: ' + error.status)
//     }
//
//     return Promise.reject(error.message || error);
//
//   }
// }
