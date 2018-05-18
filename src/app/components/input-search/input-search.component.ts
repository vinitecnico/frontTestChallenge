import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'abe-input-search',
    templateUrl: './input-search.component.html'
})
export class InputSearchComponent implements OnInit {
    searchForm: FormGroup;
    @Input() searchItems: any;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.searchForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.formBuilder.group({
            name: null
        });
    }

    search() {
        const value = this.searchForm.value;
        return this.searchItems(value.name);
    }
}
