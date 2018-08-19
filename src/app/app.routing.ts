import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CarsComponent } from './components/cars/cars.component';
import { AboutComponent } from './components/about/about.component';
import { TeamComponent } from './components/team/team.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { ContactComponent } from './components/contact/contact.component';

export const AppRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'cars', component: CarsComponent},
  { path: 'about', component: AboutComponent},
  { path: 'team', component: TeamComponent},
  { path: 'sponsors', component:  SponsorsComponent},
  { path: 'contact', component:  ContactComponent},
  { path: '**', redirectTo: '404' }
];
