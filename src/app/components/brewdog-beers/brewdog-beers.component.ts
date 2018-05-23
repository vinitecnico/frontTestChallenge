import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { takeUntil, finalize } from 'rxjs/operators';
import * as _ from 'lodash';

// services
import { BrewdogBeersService } from '../../services/brewdog-beers.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
    selector: 'abe-brewdog-beers',
    templateUrl: './brewdog-beers.component.html'
})
export class BrewdogBeersComponent implements OnInit {
    items: any[];
    endSearch: boolean;
    private ngUnsubscribe: Subject<any> = new Subject();
    constructor(private brewdogBeersService: BrewdogBeersService,
        private localStorageService: LocalStorageService) { }

    ngOnInit() {
        this.getBrewdogbeers();
    }

    getBrewdogbeers = (name?) => {
        this.endSearch = false;
        this.brewdogBeersService.getAll(name)
            .pipe(
                takeUntil(this.ngUnsubscribe),
                finalize(() => {
                    this.endSearch = true;
                })
            )
            .subscribe((response: any) => {
                this.items = response;
                const brewdogBeersStorage = JSON.parse(this.localStorageService.getItem('brewdogBeers')) || [];
                if (this.items.length > 0) {
                    _.each(this.items, (i: any) => {
                        const item = _.find(brewdogBeersStorage, (x) => {
                            return x === i.id;
                        });

                        i.selected = item ? true : false;
                    });
                }
            },
                error => {
                    console.log(error);
                });
    }

}
