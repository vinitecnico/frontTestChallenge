import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { takeUntil, finalize } from 'rxjs/operators';
import * as _ from 'lodash';

import { StarWarsService } from '../../services/star-wars.service';
import { LocalStorageService } from '../../services/local-storage.service';


@Component({
    selector: 'abe-star-wars',
    templateUrl: './star-wars.component.html'
})
export class StarWarsComponent implements OnInit, OnDestroy {
    items: any[];
    endSearch: boolean;
    private ngUnsubscribe: Subject<any> = new Subject();
    constructor(private starWarsService: StarWarsService,
        private localStorageService: LocalStorageService) { }

    ngOnInit() {
        this.getStarWars();
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    getStarWars = (name?) => {
        this.endSearch = false;
        this.starWarsService.getAll(name)
            .pipe(
                takeUntil(this.ngUnsubscribe),
                finalize(() => {
                    this.endSearch = true;
                })
            )
            .subscribe((response: any) => {
                this.items = response.results;

                const starWarsStorage = JSON.parse(this.localStorageService.getItem('starWars')) || [];
                if (this.items.length > 0) {
                    _.each(this.items, (i: any) => {
                        const item = _.find(starWarsStorage, (x) => {
                            return x === i.url;
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
