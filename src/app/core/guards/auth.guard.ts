import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';

import { APP_CONFIG } from '../../config/main.config';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    /**
     * @name canActivate
     * @description Deciding if a route can be activated.
     * 
     * @returns {boolean} 
     * @memberof AuthGuard
     */
    public canActivate(): boolean {
        if (tokenNotExpired()) {
            return true;
        }

        this.router.navigateByUrl(APP_CONFIG.loginUrl);
        return false;
    }
}