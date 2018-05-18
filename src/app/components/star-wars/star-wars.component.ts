import { Component, OnInit } from '@angular/core';

import { CommonService } from '../../services/common.service';

@Component({
    selector: 'abe-star-wars',
    templateUrl: './star-wars.component.html'
})
export class StarWarsComponent implements OnInit {
    name: string;
    items: any[];
    endSearch: boolean;
    constructor(private commonService: CommonService) { }

    ngOnInit() {
        this.getStarWars();
    }

    getStarWars() {
        this.endSearch = false;
        this.commonService.getStarwars(name)
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
