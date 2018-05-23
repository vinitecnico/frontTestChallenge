import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ApiService {
    constructor(private http: HttpClient) { }

    get(url: string, header?: any) {
        return this.http.get(url, header);
    }

    post(url: string, body: any) {
        return this.http.post(url, body);
    }

    put(url: string, body: any) {
        return this.http.put(url, body);
    }

    delete(url: string, body: any) {
        return this.http.delete(url, body);
    }

    patch(url: string, body: any) {
        return this.http.put(url, body);
    }
}
