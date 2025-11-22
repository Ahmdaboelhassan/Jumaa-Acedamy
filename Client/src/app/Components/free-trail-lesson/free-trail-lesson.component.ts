import { Component } from '@angular/core';
import { MainLandingComponent } from '../main-landing/main-landing.component';
import { FreeLessonRequestComponent } from './free-lesson-request/free-lesson-request.component';

@Component({
  selector: 'app-free-trail-lesson',
  imports: [MainLandingComponent, FreeLessonRequestComponent],
  templateUrl: './free-trail-lesson.component.html',
  styleUrl: './free-trail-lesson.component.css',
})
export class FreeTrailLessonComponent {}
