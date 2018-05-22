import { Injectable, Inject } from '@angular/core';
import { window } from 'rxjs/operators/window';

@Injectable()
export class LocalStorageService {

    constructor(@Inject('LocalStorage') private localStorage) { }

    public removeItem(key: string): void {
        this.localStorage.removeItem(key);
    }

    public setItem(key: string, value: any): void {
        this.localStorage.setItem(key, value);
    }

    public getItem(key: string): any {
        return this.localStorage.getItem(key);
    }
}
