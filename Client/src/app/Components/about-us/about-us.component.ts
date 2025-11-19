import { Component } from '@angular/core';
import { MainLandingComponent } from '../main-landing/main-landing.component';
import { OurMissionComponent } from './our-mission/our-mission.component';
import { OurTecherComponent } from './our-techer/our-techer.component';
import { TrustUsComponent } from './trust-us/trust-us.component';

@Component({
  selector: 'app-about-us',
  imports: [
    MainLandingComponent,
    OurMissionComponent,
    OurTecherComponent,
    TrustUsComponent,
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {}
