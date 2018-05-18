import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class CommonService {
    constructor(public apiService: ApiService) {

    }

    getBrewdogbeers(name) {
        return this.apiService.get('brewdogbeers');
    }

    getStarwars(name) {
        return this.apiService.get('starwars');
    }

    getItemselected(name) {
        return this.apiService.get('itemselected');
    }

    insertUpdateItemselected(item) {
        return this.apiService.post('itemselected', item);
    }
}
