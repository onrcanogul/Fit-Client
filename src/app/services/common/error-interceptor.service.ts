import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { AuthUserService } from './models/auth-user.service';
import { CustomToastrService, ToastrPosition, ToastrType } from './custom-toastr.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { spinnerType } from '../../base/base.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor{

  constructor(private userAuthService:AuthUserService,private toastr: CustomToastrService,private spinner:NgxSpinnerService) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(error => {
      switch(error.status){
        case HttpStatusCode.Unauthorized:
          this.userAuthService.refreshTokenLogin(localStorage.getItem('refreshToken'),(state) => {
            if(!state){
              this.toastr.message("Bu işlemi yapmak için yetkiniz bulunmamakta","Dikkat",ToastrType.Warning,ToastrPosition.TopRight)
            }
          }).then(data => {});

          break;
        case HttpStatusCode.InternalServerError:
          this.toastr.message("Server error.","Error",
            ToastrType.Error,
            ToastrPosition.TopRight
        );
        break;

        case HttpStatusCode.NotFound:
          this.toastr.message("Content is not found." , "Info",
            ToastrType.Error,
            ToastrPosition.TopRight
          );
        break;

        default:
        this.toastr.message("An unexpected error was encountered","Error",
          ToastrType.Error,
          ToastrPosition.TopRight
          );
        break;
      }
      this.spinner.hide(spinnerType.BallFall);
      return of(error);
    }));
  }
}
