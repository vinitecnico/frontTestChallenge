import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
import { HttpHeaders } from '@angular/common/http';

const headerOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StarWarsService {
    domain = 'https://swapi.co/api/films/';

    constructor(private apiService: ApiService) { }

    getAll(name: string = null): Observable<any> {
        let url = this.domain;
        if (name && name !== '') {
            url = `${this.domain}?search=${name}`;
        }

        return this.apiService.get(url, headerOptions);
    }

    getById(id: string): Observable<any> {
        return this.apiService.get(id, headerOptions);
    }
}
