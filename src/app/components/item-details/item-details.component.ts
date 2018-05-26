import { Component, Input, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import * as _ from 'lodash';

// Component
import { ItemComponent } from '../item/item.component';

// Service
import { StarWarsService } from '../../services/star-wars.service';
import { BrewdogBeersService } from '../../services/brewdog-beers.service';
import { LocalStorageService } from '../../services/local-storage.service';


@Component({
    selector: 'abe-item-details',
    templateUrl: './item-details.component.html'
})
export class ItemDetailsComponent implements OnInit {
    item: any;
    type: string;
    constructor(public dialogRef: MatDialogRef<ItemDetailsComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public starWarsService: StarWarsService,
        public brewdogBeersService: BrewdogBeersService,
        private localStorageService: LocalStorageService) { }

    ngOnInit() {
        if (this.data && this.data.id) {
            this.type = this.data.type;
            if (this.data.type === 'starWars') {
                this.starWarsService.getById(this.data.id)
                    .subscribe(result => {
                        this.item = result;
                    }, (error) => {
                        return error.of(null);
                    });
            } else {
                this.brewdogBeersService.getById([this.data.id])
                .subscribe(result => {
                    this.item = _.head(result);
                }, (error) => {
                    return error.of(null);
                });
            }
        } else {
            this.dialogRef.close();
        }
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    setItemSelectes(id, type) {
        const items = JSON.parse(this.localStorageService.getItem(type)) || [];
        if (this.data.selected) {
            _.remove(items, (x) => {
                return x === id;
            });
        } else {
            items.push(id);
        }
        this.data.selected = !this.data.selected;
        this.localStorageService.setItem(type, JSON.stringify(items));
    }
}
