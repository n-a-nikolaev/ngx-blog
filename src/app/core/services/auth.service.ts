import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

import { LoginData } from '../../shared/interface/login-data.interface';
import { TokenService } from './token.service';
import { APP_CONFIG } from '../../config/main.config';

@Injectable()
export class AuthService {

    constructor(private tokenService: TokenService) { }

    public login(loginData: LoginData): void { }

    public logout(): void { }

    /**
     * @name isLoggedIn
     * @description Check if user is logged
     * 
     * @returns {boolean} 
     * @memberof AuthService
     */
    public isLoggedIn(): boolean {
        return this.tokenService.get() && tokenNotExpired(APP_CONFIG.tokenKey);
    }
}