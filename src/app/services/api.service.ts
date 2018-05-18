import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ApiService {
    url = 'https://vrsantos-apitestchallenge.herokuapp.com/api/';

    constructor(private http: HttpClient) { }

    get(endpoint: string, params?: any) {
        return this.http.get(this.url + endpoint);
    }

    post(endpoint: string, body: any) {
        return this.http.post(this.url + endpoint, body);
    }

    put(endpoint: string, body: any) {
        return this.http.put(this.url + endpoint, body);
    }

    delete(endpoint: string) {
        return this.http.delete(this.url + endpoint);
    }

    patch(endpoint: string, body: any) {
        return this.http.put(this.url + endpoint, body);
    }
}
