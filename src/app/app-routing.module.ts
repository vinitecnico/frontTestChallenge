import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

// Components
import { HomeComponent } from './components/home/home.component';
import { BrewdogBeersComponent } from './components/brewdog-beers/brewdog-beers.component';
import { StarWarsComponent } from './components/star-wars/star-wars.component';
import { RecommendedComponent } from './components/recommended/recommended.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'brewdog-beers', component: BrewdogBeersComponent },
    { path: 'star-wars', component: StarWarsComponent },
    { path: 'recommended', component: RecommendedComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule { }
