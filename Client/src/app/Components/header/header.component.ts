import { CommonModule, NgStyle } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DarkModeService } from '../../Services/dark-mode.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive, ButtonModule, NgStyle],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isFading = false;
  logoPath = computed(() =>
    this.darkModeService.isDarkMode()
      ? 'assets/logo-dark.png'
      : 'assets/logo-light.png'
  );

  whatsApptexts = [
    'Need Help!',
    'Chat with Us',
    'Message Us',
    'Get Help',
    'Ask a Question',
    "We're Here to Help",
    'Book an Appointment',
  ];

  currentWhatsAppText = 0;
  whatsAppText = signal(this.whatsApptexts[this.currentWhatsAppText]);

  isDarkMode = computed(() => this.darkModeService.isDarkMode());

  menuOpen = signal(false);

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit() {
    this.darkModeService.checkTheme();
    this.changeWhatsAppButtonText();
  }

  toggleTheme() {
    this.darkModeService.toggleTheme();
  }

  toggleMenu() {
    this.menuOpen.update((open) => !open);
  }

  changeWhatsAppButtonText() {
    setInterval(() => {
      // Start fade out
      this.isFading = true;

      setTimeout(() => {
        // Update text after fade-out completes
        this.currentWhatsAppText =
          (this.currentWhatsAppText + 1) % this.whatsApptexts.length;

        this.whatsAppText.set(this.whatsApptexts[this.currentWhatsAppText]);

        // Start fade-in
        this.isFading = false;
      }, 500); // Must match CSS transition time
    }, 5000);
  }
}
