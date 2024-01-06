import { Routes } from '@angular/router';
import {
  AppointmentComponent,
  ContactComponent,
  HomeComponent,
  AboutComponent,
  ServicesComponent,
} from './page';
import { NotfoundComponent } from './components';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  {
    path: 'appointment',
    component: AppointmentComponent,
    title: 'Appointment',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Us',
  },
  {
    path: 'services',
    component: ServicesComponent,
    title: 'Our Services',
  },
  { path: 'not-found', component: NotfoundComponent, title: 'Page not found' },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];
