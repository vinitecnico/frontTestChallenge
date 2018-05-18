import { Component, OnInit } from '@angular/core';

import { CommonService } from '../../services/common.service';

@Component({
    selector: 'abe-recommended',
    templateUrl: './recommended.component.html'
})
export class RecommendedComponent implements OnInit {
    items: any[];
    endSearch: boolean;
    constructor(private commonService: CommonService) { }

    ngOnInit() {
        this.getItemselected();
    }

    getItemselected() {
        this.endSearch = false;
        this.commonService.getItemselected()
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
