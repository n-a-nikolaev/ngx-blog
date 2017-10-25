import { Injectable } from '@angular/core';

import { AppConfig } from '../../config/main.config';

@Injectable()
export class TokenService {
    /**
     * @name getToken
     * @description Get token from localStorage
     * 
     * @returns {string} 
     * @memberof TokenService
     */
    public getToken(): string {
        return localStorage.getItem(AppConfig.tokenKey);
    }

    /**
     * @name setToken
     * @description Save token to localStorage
     * 
     * @param {string} token - jwt token
     * @memberof TokenService
     */
    public setToken(token: string): void {
        localStorage.setItem(AppConfig.tokenKey, token);
    }

    /**
     * @name removeToken
     * @description Remove token from localStorage
     * 
     * @memberof TokenService
     */
    public removeToken(): void {
        localStorage.removeItem(AppConfig.tokenKey);
    }
}