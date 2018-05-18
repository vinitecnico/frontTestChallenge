import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'abe-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private router: Router) {
  }
}
