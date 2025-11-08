import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  logoPath = signal('assets/logo-light.png');
  isDarkMode = false;
  menuOpen = signal(false);

  ngOnInit() {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
      this.isDarkMode = storedTheme === 'dark';
    } else {
      this.isDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    }

    this.updateTheme();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.updateTheme();
  }

  private updateTheme() {
    const root = document.documentElement;
    if (this.isDarkMode) {
      root.classList.add('dark');
      this.logoPath.set('assets/logo-dark.png');
    } else {
      root.classList.remove('dark');
      this.logoPath.set('assets/logo-light.png');
    }
  }

  toggleMenu() {
    this.menuOpen.update((open) => !open);
  }
}
