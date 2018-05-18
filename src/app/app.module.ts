import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BlockUIModule } from 'ng-block-ui';
import { BlockUIHttpModule } from 'ng-block-ui/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

// Router
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrewdogBeersComponent } from './components/brewdog-beers/brewdog-beers.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { StarWarsComponent } from './components/star-wars/star-wars.component';
import { RecommendedComponent } from './components/recommended/recommended.component';

// Services
import { ApiService } from './services/api.service';
import { CommonService } from './services/common.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrewdogBeersComponent,
    InputSearchComponent,
    ListItemsComponent,
    StarWarsComponent,
    RecommendedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    BlockUIModule.forRoot(),
    BlockUIHttpModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    NgbCollapseModule
  ],
  providers: [
    ApiService,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
