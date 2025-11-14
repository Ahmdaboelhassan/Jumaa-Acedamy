import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  isDarkMode = signal(false);

  checkTheme() {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
      this.isDarkMode.set(storedTheme === 'dark');
    } else {
      const match = window.matchMedia('(prefers-color-scheme: dark)').matches;

      this.isDarkMode.set(match);
      localStorage.setItem('theme', this.isDarkMode() ? 'dark' : 'light');
    }

    this.updateTheme();
  }

  toggleTheme() {
    this.isDarkMode.set(!this.isDarkMode());
    localStorage.setItem('theme', this.isDarkMode() ? 'dark' : 'light');
    this.updateTheme();
  }

  private updateTheme() {
    const root = document.documentElement;
    if (this.isDarkMode()) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }
}
