import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/common/auth.service';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { spinnerType } from '../base/base.component';
import { CustomToastrService, ToastrPosition, ToastrType } from '../services/common/custom-toastr.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService:AuthService = inject(AuthService);
  const router:Router = inject(Router)
  const spinner:NgxSpinnerService = inject(NgxSpinnerService)
  const toastr:CustomToastrService = inject(CustomToastrService)

debugger;
  authService.identityCheck();
  spinner.hide(spinnerType.BallFall)
  if(!authService.isAuthenticated){   
    toastr.message("Yetkisiz işlem talebi, login sayfasına yönlendiriliyorsunuz.","Dikkat",ToastrType.Warning,ToastrPosition.TopRight)
    router.navigate(["login"])
    return false; 
  }
  return true;
};
