import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class CommonService {
    constructor(public apiService: ApiService) {

    }

    getBrewdogbeers(name) {
        let query = '';
        if (name) {
            query = `?name=${name}`;
        }
        return this.apiService.get(`brewdogbeers${query}`);
    }

    getStarwars(name) {
        let query = '';
        if (name) {
            query = `?name=${name}`;
        }
        return this.apiService.get(`starwars${query}`);
    }

    getItemselected() {
        return this.apiService.get('itemselected');
    }

    insertUpdateItemselected(item) {
        return this.apiService.post('itemselected', item);
    }
}
