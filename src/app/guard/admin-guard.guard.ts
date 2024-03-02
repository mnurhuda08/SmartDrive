import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AuthGuard {
    constructor(private router:Router){}
    currentRoles = ['EM'];
    canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
        console.log("MASUK")
        //  Get the required roles/permissions for the route
        const requiredRoles: string[] = (route.data as { requiredRoles: string[] })
        .requiredRoles;
        
        // Check if the user has the required roles/permissions
        const hasPermission: boolean = requiredRoles.some((role) =>
        this.currentRoles.includes(role)
        );
        console.log(hasPermission)
        if(!hasPermission) {
            this.router.navigateByUrl('/login');
        };
        return true;
    }
}