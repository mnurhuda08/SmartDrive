import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { IClaims } from '../interfaces/users/i-login-claims';
import { LoginService } from '../services/users/login.service';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';

export class PermissionGuard {
  constructor(
    private router: Router // , private loginService: LoginService
  ) {}

  // currentUser!: IClaims;

  // fetchMe() {
  //   this.loginService.getMe(`${environment.baseUrl}/Auth/Me`).subscribe({
  //     next: (data) => {
  //       this.currentUser = data;
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     },
  //   });
  // }

  currentRoles = ['PR'];

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // this.fetchMe();
    //  Get the required roles/permissions for the route
    const requiredRoles: string[] = (route.data as { requiredRoles: string[] })
      .requiredRoles;

    // Check if the user has the required roles/permissions
    const hasPermission: boolean = requiredRoles.some((role) =>
      this.currentRoles.includes(role)
    );
    if (!hasPermission) {
      // Redirect to unauthorized page or handle as needed
      return this.router.parseUrl('/unauthorized');
    }
    return true;
  }
}
