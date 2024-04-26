import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
    constructor(private router: Router) {}
    isLoggedIn = false;
    login() {
        this.isLoggedIn = true;
    }
    logout() {
        this.isLoggedIn = false;
        this.router.navigate(['/']);
    }
    isAuthenticated() {
        return this.isLoggedIn;
    }
}