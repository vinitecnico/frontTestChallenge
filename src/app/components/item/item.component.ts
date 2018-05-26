import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as _ from 'lodash';

// component
import { ItemDetailsComponent } from '../item-details/item-details.component';

// service
import { CommonService } from '../../services/common.service';
import { LocalStorageService } from '../../services/local-storage.service';


@Component({
    selector: 'abe-item',
    templateUrl: './item.component.html'
})
export class ItemComponent {
    @Input() id: any;
    @Input() type: string;
    @Input() name: string;
    @Input() description: string;
    @Input() selected: boolean;
    @Input() imageUrl: string;
    @Input() isPageRecommended: boolean;

    constructor(private commonService: CommonService,
        private localStorageService: LocalStorageService,
        public dialog: MatDialog) { }

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

    openDialog(id: any, type: string, selected: boolean): void {
        const dialogRef = this.dialog.open(ItemDetailsComponent, {
            width: '50%',
            data: { id, type }
        });

        dialogRef.afterClosed()
            .subscribe(result => {
                console.log(result);
            });
    }
}
