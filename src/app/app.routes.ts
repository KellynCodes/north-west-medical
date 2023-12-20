import { Routes } from '@angular/router';
import { HomeComponent } from './page';
import { NotfoundComponent } from './components';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'not-found', component: NotfoundComponent, title: 'Page not found' },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];
