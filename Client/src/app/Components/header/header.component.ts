import { CommonModule } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DarkModeService } from '../../Services/dark-mode.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  logoPath = computed(() =>
    this.darkModeService.isDarkMode()
      ? 'assets/logo-dark.png'
      : 'assets/logo-light.png'
  );

  isDarkMode = computed(() => this.darkModeService.isDarkMode());

  menuOpen = signal(false);

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit() {
    this.darkModeService.checkTheme();
  }

  toggleTheme() {
    this.darkModeService.toggleTheme();
  }

  toggleMenu() {
    this.menuOpen.update((open) => !open);
  }
}
