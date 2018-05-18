import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// services
import { CommonService } from '../../services/common.service';

@Component({
    selector: 'abe-brewdog-beers',
    templateUrl: './brewdog-beers.component.html'
})
export class BrewdogBeersComponent implements OnInit {
    items: any[];
    endSearch: boolean;
    constructor(private commonService: CommonService) { }

    ngOnInit() {
        this.getBrewdogbeers();
    }

    getBrewdogbeers = (name?) => {
        this.endSearch = false;
        this.commonService.getBrewdogbeers(name)
            .subscribe((response: any) => {
                if (response.success) {
                    this.items = response.data;
                }
                this.endSearch = true;
            },
                error => {
                    console.log(error);
                });
    }

}
