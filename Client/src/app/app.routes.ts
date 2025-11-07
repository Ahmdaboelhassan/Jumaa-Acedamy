import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';

export const routes: Routes = [
  { path: '', loadComponent: () => HomeComponent, pathMatch: 'full' },
  { path: 'Home', loadComponent: () => HomeComponent },
  { path: '**', loadComponent: () => HomeComponent },
];
