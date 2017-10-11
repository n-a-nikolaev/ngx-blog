import { Injectable } from '@angular/core';

import { AppConfig } from '../../config/main.config';

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
        return localStorage.getItem(AppConfig.tokenKey);
    }

    /**
     * @name set
     * @description Save token to localStorage
     * 
     * @param {string} token - jwt token
     * @memberof TokenService
     */
    public set(token: string): void {
        localStorage.setItem(AppConfig.tokenKey, token);
    }

    /**
     * @name remove
     * @description Remove token from localStorage
     * 
     * @memberof TokenService
     */
    public remove(): void {
        localStorage.removeItem(AppConfig.tokenKey);
    }
}