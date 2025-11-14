import { Component, computed } from '@angular/core';
import { DarkModeService } from '../../Services/dark-mode.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  logoPath = computed(() =>
    this.darkModeService.isDarkMode()
      ? 'assets/logo-dark.png'
      : 'assets/logo-light.png'
  );

  primaryColor = computed(() =>
    this.darkModeService.isDarkMode() ? 'white' : '#001B30'
  );

  secoundColor = computed(() =>
    this.darkModeService.isDarkMode() ? '#001B30' : 'white'
  );

  isDarkMode = computed(() => this.darkModeService.isDarkMode());

  constructor(private darkModeService: DarkModeService) {}
}
