import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AddLineComponent } from './add-line/add-line.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import {AppComponent} from "./app.component";
import {CheckPasswordDirective} from "./register/check-password.directive";
import {ColorPickerModule} from "ngx-color-picker";
import {globalService} from "./globalService.service";
import {AuthenticationService} from "./auth.service";
import {HttpErrorHandler} from "./http-error-handler.service";
import {MessageService} from "./message.service";
import {AuthGuard} from "./auth-guard.service";


@NgModule({
  declarations: [
    AppComponent,
    AddLineComponent,
    RegisterComponent,
    LoginComponent,
    ListComponent,
    CheckPasswordDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ColorPickerModule
  ],
  providers: [
      HttpErrorHandler,
      MessageService,
      AuthenticationService,
      AuthGuard,
      globalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
