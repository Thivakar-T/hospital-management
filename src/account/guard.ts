import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class GuardGuard implements CanActivate {
  constructor(private service: AuthService, private router: Router) {}

  // canActivate() {
  //   if (this.service.IsLoggedIn()) {
  //     console.log(this.router)
  //     this.router.navigateByUrl('/');
  //     return false;
  //   } else {
  //     this.router.navigateByUrl('/login');
  //     return false;
  //   }
  // }

  canActivate( route: ActivatedRouteSnapshot ,state: RouterStateSnapshot):  Observable<boolean> | Promise<boolean> | boolean  {
    var currentUser:any = this.service.currentUser();
    console.log(currentUser)
    console.log(route)
    if(currentUser){
      console.log(currentUser)
      console.log(route.data)

      if (route.data['roles'] && route.data['roles'].indexOf(currentUser.data.loginObj.roleList[0].roleName) === -1) {
        this.router.navigateByUrl('/dummy', { skipLocationChange: true });
        setTimeout(() => this.router.navigate(['/']),10);
        return false;
      }
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
}
}
