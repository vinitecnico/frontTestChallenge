import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
import { HttpHeaders } from '@angular/common/http';

const headerOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BrewdogBeersService {
    domain = 'https://api.punkapi.com/v2/beers';

    constructor(private apiService: ApiService) { }

    getAll(name: string = null): Observable<any> {
        let url = `${this.domain}?page=1&per_page=10`;
        if (name && name !== '') {
            url += `&beer_name=${name}`;
        }

        return this.apiService.get(url, headerOptions);
    }

    getAllWithPagination(request): Observable<any> {
        return this.apiService.get(this.domain, headerOptions, request);
    }

    getById(id: number[]): Observable<any> {
        const url = `${this.domain}?ids=${id.join('|')}`;
        return this.apiService.get(url, headerOptions);
    }
}
