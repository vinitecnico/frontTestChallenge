import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { finalize, takeUntil } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

import { LocalStorageService } from '../../services/local-storage.service';
import { BrewdogBeersService } from '../../services/brewdog-beers.service';
import { StarWarsService } from '../../services/star-wars.service';

declare var google: any;

@Component({
    selector: 'abe-recommended',
    templateUrl: './recommended.component.html'
})
export class RecommendedComponent implements OnInit, OnDestroy {
    private ngUnsubscribe: Subject<any> = new Subject();
    brewdogBeers: number[];
    starWars: any[];
    items: any[] = [];
    endSearch: boolean;

    constructor(private localStorageService: LocalStorageService,
        private brewdogBeersService: BrewdogBeersService,
        private starWarsService: StarWarsService) { }

    ngOnInit() {
        this.brewdogBeers = JSON.parse(this.localStorageService.getItem('brewdogBeers')) || [];
        this.starWars = JSON.parse(this.localStorageService.getItem('starWars')) || [];

        this.getItemselected();
    }

    googleCharts() {
        const drawChart = () => {
            const data = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['brewdog', this.brewdogBeers.length],
                ['starWars', this.starWars.length]
            ]);

            const options = {
                title: 'Frontend Challenge#'
            };

            const chart = new google.visualization.PieChart(document.getElementById('piechart'));

            chart.draw(data, options);
        };

        google.charts.setOnLoadCallback(drawChart);
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    getItemselected() {
        this.endSearch = false;
        const observables = [];

        if (this.starWars.length > 0) {
            _.each(this.starWars, (id) => {
                observables.push(this.starWarsService.getById(id));
            });
        }

        if (this.brewdogBeers.length > 0) {
            observables.push(this.brewdogBeersService.getById(this.brewdogBeers));
        }

        forkJoin(observables)
            .pipe(
                finalize(() => {
                    this.endSearch = true;
                    if (this.items.length > 0) {
                        this.googleCharts();
                    }
                })
            )
            .subscribe(results => {
                _.each(results, (result: any) => {
                    if (_.isArray(result)) {
                        _.each(result, (x: any) => {
                            x.type = 'brewdogBeers';
                            this.items.push(x);
                        });
                    } else {
                        result.type = 'starWars';
                        this.items.push(result);
                    }
                });
            }, (error) => {
                return error.of(null);
            });
    }

}
