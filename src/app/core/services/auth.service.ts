import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';

import { LoginData } from '../../shared/interface/login-data.interface';
import { TokenService } from './token.service';
import { AppConfig } from '../../config/main.config';
import { ApiService } from './api.service';

@Injectable()
export class AuthService {

    constructor(
        private tokenService: TokenService,
        private api: ApiService
    ) { }

    public login(loginData: LoginData): any {
        return this.api.post('auth', loginData);
    }

    public logout(): void { }

    /**
     * @name isLoggedIn
     * @description Check if user is logged
     * 
     * @returns {boolean} 
     * @memberof AuthService
     */
    public isLoggedIn(): boolean {
        return this.tokenService.getToken() && tokenNotExpired(AppConfig.tokenKey);
    }
}