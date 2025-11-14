import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { OurCoursesComponent } from './Components/our-courses/our-courses.component';
import { FooterComponent } from './Components/footer/footer.component';

export const routes: Routes = [
  { path: '', loadComponent: () => HomeComponent, pathMatch: 'full' },
  { path: 'Our-Courses', loadComponent: () => OurCoursesComponent },
  { path: 'Pricing-Plan', loadComponent: () => FooterComponent },
  { path: '**', redirectTo: '' },
];
