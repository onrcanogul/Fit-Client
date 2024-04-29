import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';
import { UiModule } from './ui/ui.module';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import {BrowserAnimationsModule}from "@angular/platform-browser/animations"
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { JwtModule } from '@auth0/angular-jwt';
import { ErrorInterceptorService } from './services/common/error-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    BrowserAnimationsModule,
    UiModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule.forRoot(),
    JwtModule.forRoot({
      config:{
        tokenGetter:() => localStorage.getItem('accessToken'),
        allowedDomains : ["localhost:44388"]
      }
    })
  ],
  providers: [
    provideClientHydration(),
    {provide: "baseUrl", useValue: "https://localhost:44388/api"},
    {provide:HTTP_INTERCEPTORS , useClass : ErrorInterceptorService , multi:true},
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
