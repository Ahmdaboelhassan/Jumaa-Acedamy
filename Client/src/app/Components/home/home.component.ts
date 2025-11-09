import { Component } from '@angular/core';
import { LandingSliderComponent } from './landing-slider/landing-slider.component';
import { MakeUsDifferentComponent } from './make-us-different/make-us-different.component';
import { OurProgramsComponent } from './our-programs/our-programs.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { VoicesFromEveryCornerComponent } from './voices-from-every-corner/voices-from-every-corner.component';

@Component({
  selector: 'app-home',
  imports: [
    LandingSliderComponent,
    MakeUsDifferentComponent,
    OurProgramsComponent,
    HowItWorkComponent,
    VoicesFromEveryCornerComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
