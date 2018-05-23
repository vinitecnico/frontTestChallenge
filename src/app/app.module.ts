import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BlockUIModule } from 'ng-block-ui';
import { BlockUIHttpModule } from 'ng-block-ui/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { MatListModule, MatMenuModule, MatButtonModule } from '@angular/material';

// Router
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrewdogBeersComponent } from './components/brewdog-beers/brewdog-beers.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { ItemComponent } from './components/item/item.component';
import { StarWarsComponent } from './components/star-wars/star-wars.component';
import { RecommendedComponent } from './components/recommended/recommended.component';

// Services
import { ApiService } from './services/api.service';
import { CommonService } from './services/common.service';
import { LocalStorageService } from './services/local-storage.service';
import { StarWarsService } from './services/star-wars.service';


// translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function getLocalStorage() {
  return (typeof window !== 'undefined') ? window.localStorage : null;
}

export function ignorRequestFilters(req: any): boolean {
  return req.method === 'GET' && req.url.includes('i18n');
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrewdogBeersComponent,
    InputSearchComponent,
    ItemComponent,
    StarWarsComponent,
    RecommendedComponent
  ],
  imports: [
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    BlockUIModule.forRoot(),
    BlockUIHttpModule.forRoot({
      requestFilters: [ignorRequestFilters]
    }),
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    NgbCollapseModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [
    { provide: 'LocalStorage', useFactory: getLocalStorage },
    ApiService,
    CommonService,
    LocalStorageService,
    StarWarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
