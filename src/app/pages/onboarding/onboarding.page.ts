import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { notificationsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonIcon],
})
export class OnboardingPage {
  isNavigating = false;

  constructor(private readonly router: Router) {
    addIcons({ notificationsOutline });
  }

  /*
    En el MVP, ambos caminos completan el onboarding
    y llevan a la pantalla principal.
    Más adelante, aquí se persistirá el estado
    "onboarding completed".
  */
  async onStart(): Promise<void> {
    if (this.isNavigating) {
      return;
    }

    this.isNavigating = true;

    try {
      await this.router.navigateByUrl('/alarms', { replaceUrl: true });
    } finally {
      this.isNavigating = false;
    }
  }

  async onSkip(): Promise<void> {
    if (this.isNavigating) {
      return;
    }

    this.isNavigating = true;

    try {
      await this.router.navigateByUrl('/alarms', { replaceUrl: true });
    } finally {
      this.isNavigating = false;
    }
  }
}