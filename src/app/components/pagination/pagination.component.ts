import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, PageEvent } from '@angular/material';

import { BrewdogBeersService } from '../../services/brewdog-beers.service';

export interface PeriodicElement {
    id: number;
    name: string;
    first_brewed: string;
    image_url: string;
    description: string;
}

@Component({
    selector: 'abe-pagination',
    templateUrl: './pagination.component.html'
})

export class PaginationComponent implements OnInit {
    pageIndex = 0;
    length = 0;
    pageSize = 5;
    pageSizeOptions = [5, 10, 20];
    dataSource = new MatTableDataSource<PeriodicElement>();
    displayedColumns = ['id', 'name', 'first_brewed', 'image_url', 'description'];

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private brewdogBeersService: BrewdogBeersService) { }

    ngOnInit() {
        this.getAll(this.pageIndex, this.pageSize);
    }

    getAll(page, pageSize) {
        return this.brewdogBeersService.getAllWithPagination((page + 1), pageSize)
            .subscribe(response => {
                this.length = 150;
                this.dataSource.data = response;
            }, error => {
                console.log(error);
            });
    }

    getNext(event: PageEvent) {
        this.getAll(event.pageIndex, event.pageSize);
    }

    stringLimited(text) {
        if (text.length > 70) {
            return `${text.substring(0, 70)}...`;
        } else {
            return text;
        }
    }
}
