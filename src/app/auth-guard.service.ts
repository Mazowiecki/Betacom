import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthenticationService} from "./auth.service";
import {Observable} from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private AuthenticationService: AuthenticationService,
    private router: Router,
  ) {

  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.AuthenticationService.loggedIn == false) {
      this.router.navigate(['/auth/login'])
    } else {
      return true;
    }
  }
}
