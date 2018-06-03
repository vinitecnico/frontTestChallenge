import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';


@Injectable()
export class ApiService {
    constructor(private http: HttpClient) { }

    private setParameters(parameters: any): HttpParams {
        if (parameters) {
            let Params = new HttpParams();
            _.each(parameters, (value, key) => {
                Params = Params.append(key, value);
            });

            return Params;
        }

        return null;
    }

    get(url: string, header?: any, parameters?: any) {
        return this.http.get(url, { headers: header, params: this.setParameters(parameters) });
    }

    post(url: string, body: any, header?: any) {
        return this.http.post(url, body, header);
    }

    put(url: string, body: any, header?: any, parameters?: any) {
        return this.http.put(url, body, { headers: header, params: this.setParameters(parameters) });
    }

    delete(url: string, header?: any, parameters?: any) {
        return this.http.delete(url, { headers: header, params: this.setParameters(parameters) });
    }

    patch(url: string, body: any, header?: any, parameters?: any) {
        return this.http.put(url, body, { headers: header, params: this.setParameters(parameters) });
    }
}
