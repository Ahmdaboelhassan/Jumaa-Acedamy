import { Component } from '@angular/core';
import { MainLandingComponent } from '../main-landing/main-landing.component';
import { PillarsOfLearningComponent } from './pillars-of-learning/pillars-of-learning.component';
import { OurProgramsComponent } from '../home/our-programs/our-programs.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';

@Component({
  selector: 'app-our-courses',
  imports: [
    MainLandingComponent,
    PillarsOfLearningComponent,
    OurProgramsComponent,
    HowItWorksComponent,
  ],
  templateUrl: './our-courses.component.html',
  styleUrl: './our-courses.component.css',
})
export class OurCoursesComponent {}
