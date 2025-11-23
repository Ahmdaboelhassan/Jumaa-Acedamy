import { Component, computed } from '@angular/core';
import { DarkModeService } from '../../../Services/dark-mode.service';
import { SlideUpDirective } from '../../../directives/slide-up.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-join',
  imports: [SlideUpDirective, RouterLink],
  templateUrl: './join.component.html',
  styleUrl: './join.component.css',
})
export class JoinComponent {
  sectionBackground = computed(() =>
    this.darkModeService.isDarkMode()
      ? "url('assets/bg7.png')"
      : "url('assets/bg6.png')"
  );

  constructor(private darkModeService: DarkModeService) {}
}
