import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

@Injectable()
class PermissionsService {
  canActivate(hasPermission:boolean): boolean {
    if(!hasPermission) return false;
    return true;
  }
}
export const authGuard: CanActivateFn = (route, state) => {
  var currentRoles = ['EM'];
      
  console.log("MASUK")
  //  Get the required roles/permissions for the route
  const requiredRoles: string[] = (route.data as { requiredRoles: string[] })
  .requiredRoles;
  
  // Check if the user has the required roles/permissions
  const hasPermission: boolean = requiredRoles.some((role) =>
  currentRoles.includes(role)
  );
  console.log(hasPermission)
  if(!hasPermission) return false;
  else return true;
};
