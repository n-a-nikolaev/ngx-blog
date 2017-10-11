import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Headers, ResponseContentType } from '@angular/http';
import { RequestMethod } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {

    constructor(private http: Http) { }

    public post(url: string, body: any): Observable<any> {
        return this.request(RequestMethod.Post, url, body);
    }

    public get(url: string): Observable<any> {
        return this.request(RequestMethod.Get, url);
    }

    private request(method: RequestMethod, url: string, body?: any): Observable<any> {
        let options: RequestOptionsArgs = {};

        options.method = method;
        options.headers = new Headers();
        options.body = body;
        options.responseType = ResponseContentType.Json;

        return this.http.request(`/api/${url}`, options)
            .map(res => res.json())
            .catch(e => {
                // TODO
                console.error(e.json());
                return Observable.throw(e);
            });
    }

}