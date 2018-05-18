import { Component, Input } from '@angular/core';

// service
import { CommonService } from '../../services/common.service';

@Component({
    selector: 'abe-list-items',
    templateUrl: './list-items.component.html'
})
export class ListItemsComponent {
    @Input() items: any[];
    @Input() isPageRecommended: any[];
    @Input() endSearch: false;

    constructor(private commonService: CommonService) { }

    setItemSelectes(item) {
        item.selected = !item.selected;
        return this.commonService.insertUpdateItemselected(item)
            .subscribe((response: any) => {
                if (!response.success) {
                    console.log('error');
                }
            },
                error => {
                    console.log(error);
                });
    }
}
