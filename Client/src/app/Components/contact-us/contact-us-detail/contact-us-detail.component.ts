import { Component } from '@angular/core';
import { FooterIconsComponent } from '../../footer/footer-icons/footer-icons.component';
import { SlideUpDirective } from '../../../directives/slide-up.directive';

@Component({
  selector: 'app-contact-us-detail',
  imports: [FooterIconsComponent, SlideUpDirective],
  templateUrl: './contact-us-detail.component.html',
  styleUrl: './contact-us-detail.component.css',
})
export class ContactUsDetailComponent {}
