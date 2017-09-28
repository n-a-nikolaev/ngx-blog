import { Injectable } from '@angular/core';
import { APP_CONFIG } from '../config/main.config';

@Injectable()
export class TokenService {
    /**
     * @name get
     * @description Get token from localStorage
     * 
     * @returns {string} 
     * @memberof TokenService
     */
    public get(): string {
        return localStorage.getItem(APP_CONFIG.tokenKey);
    }

    /**
     * @name set
     * @description Save token to localStorage
     * 
     * @param {string} token - jwt token
     * @memberof TokenService
     */
    public set(token: string): void {
        localStorage.setItem(APP_CONFIG.tokenKey, token);
    }

    /**
     * @name remove
     * @description Remove token from localStorage
     * 
     * @memberof TokenService
     */
    public remove(): void {
        localStorage.removeItem(APP_CONFIG.tokenKey);
    }
}