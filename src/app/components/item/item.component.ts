import { Component, Input } from '@angular/core';
import * as _ from 'lodash';

// service
import { CommonService } from '../../services/common.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
    selector: 'abe-item',
    templateUrl: './item.component.html'
})
export class ItemComponent {
    @Input() id: number;
    @Input() type: string;
    @Input() name: string;
    @Input() description: string;
    @Input() selected: boolean;
    @Input() imageUrl: string;
    @Input() isPageRecommended: boolean;

    constructor(private commonService: CommonService,
        private localStorageService: LocalStorageService) { }

    limitText(text) {
        if (text && text.length > 350) {
            return `${text.substring(0, 350)}...`;
        } else {
            return text;
        }
    }

    setItemSelectes(id, type) {
        const items = JSON.parse(this.localStorageService.getItem(type)) || [];
        if (this.selected) {
            _.remove(items, (x) => {
                return x === id;
            });
        } else {
            items.push(id);
        }
        this.selected = !this.selected;
        this.localStorageService.setItem(type, JSON.stringify(items));
    }
}
