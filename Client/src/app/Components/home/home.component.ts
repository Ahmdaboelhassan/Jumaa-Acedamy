import { Component } from '@angular/core';
import { LandingSliderComponent } from './landing-slider/landing-slider.component';
import { MakeUsDifferentComponent } from './make-us-different/make-us-different.component';
import { OurProgramsComponent } from './our-programs/our-programs.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';

@Component({
  selector: 'app-home',
  imports: [
    LandingSliderComponent,
    MakeUsDifferentComponent,
    OurProgramsComponent,
    HowItWorkComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
