import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { OurCoursesComponent } from './Components/our-courses/our-courses.component';
import { PricingPlansComponent } from './Components/pricing-plans/pricing-plans.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { FreeTrailLessonComponent } from './Components/free-trail-lesson/free-trail-lesson.component';

export const routes: Routes = [
  { path: '', loadComponent: () => HomeComponent, pathMatch: 'full' },
  { path: 'Our-Courses', loadComponent: () => OurCoursesComponent },
  { path: 'Pricing-Plan', loadComponent: () => PricingPlansComponent },
  { path: 'About-Us', loadComponent: () => AboutUsComponent },
  { path: 'Contact-Us', loadComponent: () => ContactUsComponent },
  { path: 'Free-Trail-Lesson', loadComponent: () => FreeTrailLessonComponent },
  { path: '**', redirectTo: '' },
];
