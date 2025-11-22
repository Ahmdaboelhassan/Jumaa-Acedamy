import { Component } from '@angular/core';
import { MainLandingComponent } from '../main-landing/main-landing.component';
import { ContactUsDetailComponent } from './contact-us-detail/contact-us-detail.component';

@Component({
  selector: 'app-contact-us',
  imports: [MainLandingComponent, ContactUsDetailComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {}
