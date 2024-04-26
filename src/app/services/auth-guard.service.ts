import {  ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild{

    constructor(private authService: AuthService, private router: Router) {}
    canActivate
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
     boolean | Promise<boolean> | Observable<boolean> {
       let isLoggedIn =  this.authService.isAuthenticated();
       if(isLoggedIn) {
           return true;
       } else {
       return this.router.navigate(['/']);
       }
    }
   canActivateChild(
    route:ActivatedRouteSnapshot, state: RouterStateSnapshot ):
    boolean | Promise<boolean> | Observable<boolean> {
        return this.canActivate(route, state);
    }
}