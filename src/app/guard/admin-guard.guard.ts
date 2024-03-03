import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { IClaims } from '../interfaces/users/i-login-claims';
import { LoginService } from '../services/users/login.service';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
  constructor(private router: Router, private loginService: LoginService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.loginService.getMe(`${environment.baseUrl}/Auth/Me`).pipe(
      map((data: IClaims) => {
        //  Get the required roles/permissions for the route
        const requiredRoles: string[] = (
          route.data as { requiredRoles: string[] }
        ).requiredRoles;

        // Check if the user has the required roles/permissions
        const hasPermission: boolean = requiredRoles.some((role) =>
          data.roles.includes(role)
        );

        if (!hasPermission && state.url !== '/unauthorized') {
          console.log('unauthorized');
          this.router.navigateByUrl('/unauthorized');
        }

        return true;
      })
    );
  }
}
